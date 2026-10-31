import { capacitySchedule } from "../content/capacity.ts";

export interface QuarterInfo {
  quarter: 1 | 2 | 3 | 4;
  year: number;
  label: string; // e.g. "Q4 2026"
  startsOn: Date;
  endsOn: Date;
  daysLeft: number;
  nextQuarter: 1 | 2 | 3 | 4;
  nextYear: number;
  nextLabel: string; // e.g. "Q1 2027"
  isRollover: boolean;
  bookingQuarter: 1 | 2 | 3 | 4;
  bookingYear: number;
  bookingLabel: string;
  bookingKey: string;
  totalSlots?: number;
  availableSlots?: number;
  displayText: string;
}

export const ROLLOVER_DAYS = 14;
export const TIMEZONE = "Asia/Kolkata";

/**
 * Extracts year, month (1-12), and day (1-31) in Asia/Kolkata timezone.
 */
export function getKolkataDateParts(date: Date = new Date()): { year: number; month: number; day: number } {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const parts = formatter.formatToParts(date);
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();

  for (const part of parts) {
    if (part.type === "year") year = parseInt(part.value, 10);
    if (part.type === "month") month = parseInt(part.value, 10);
    if (part.type === "day") day = parseInt(part.value, 10);
  }

  return { year, month, day };
}

/**
 * Computes quarter information with 14-day rollover rule and honest capacity slots.
 */
export function getQuarterInfo(
  date: Date = new Date(),
  rolloverDays: number = ROLLOVER_DAYS,
  capacityMap = capacitySchedule
): QuarterInfo {
  const { year, month, day } = getKolkataDateParts(date);

  let quarter: 1 | 2 | 3 | 4;
  let startMonth: number;
  let endMonth: number;
  let endDay: number;

  if (month >= 1 && month <= 3) {
    quarter = 1;
    startMonth = 1;
    endMonth = 3;
    endDay = 31;
  } else if (month >= 4 && month <= 6) {
    quarter = 2;
    startMonth = 4;
    endMonth = 6;
    endDay = 30;
  } else if (month >= 7 && month <= 9) {
    quarter = 3;
    startMonth = 7;
    endMonth = 9;
    endDay = 30;
  } else {
    quarter = 4;
    startMonth = 10;
    endMonth = 12;
    endDay = 31;
  }

  // Exact startsOn and endsOn in UTC for consistency
  const startsOn = new Date(Date.UTC(year, startMonth - 1, 1, 0, 0, 0));
  const endsOn = new Date(Date.UTC(year, endMonth - 1, endDay, 23, 59, 59));

  // Current day representation at 00:00:00 UTC
  const currentMidnight = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));
  const endsMidnight = new Date(Date.UTC(year, endMonth - 1, endDay, 0, 0, 0));

  const msPerDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.max(0, Math.round((endsMidnight.getTime() - currentMidnight.getTime()) / msPerDay));

  // Next quarter calculation (handling Q4 -> Q1 year rollover)
  const nextQuarter: 1 | 2 | 3 | 4 = quarter === 4 ? 1 : ((quarter + 1) as 1 | 2 | 3 | 4);
  const nextYear = quarter === 4 ? year + 1 : year;
  const label = `Q${quarter} ${year}`;
  const nextLabel = `Q${nextQuarter} ${nextYear}`;

  // Booking rule: if fewer than rolloverDays remain, rollover to next quarter
  const isRollover = daysLeft < rolloverDays;
  const bookingQuarter = isRollover ? nextQuarter : quarter;
  const bookingYear = isRollover ? nextYear : year;
  const bookingLabel = isRollover ? nextLabel : label;
  const bookingKey = `${bookingYear}-Q${bookingQuarter}`;

  const rawCapacity = capacityMap[bookingKey];
  let availableSlots: number | undefined;
  let totalSlots: number | undefined;

  if (typeof rawCapacity === "number") {
    availableSlots = rawCapacity;
  } else if (rawCapacity && typeof rawCapacity === "object") {
    availableSlots = rawCapacity.availableSlots;
    totalSlots = rawCapacity.totalSlots;
  }

  let displayText: string;
  if (typeof availableSlots === "number" && availableSlots > 0) {
    if (typeof totalSlots === "number" && totalSlots > 0) {
      displayText = `${availableSlots} of ${totalSlots} slots remaining for ${bookingLabel} delivery`;
    } else {
      displayText = `${availableSlots} ${availableSlots === 1 ? "slot" : "slots"} remaining for ${bookingLabel} delivery`;
    }
  } else {
    displayText = `Now booking ${bookingLabel} projects`;
  }

  return {
    quarter,
    year,
    label,
    startsOn,
    endsOn,
    daysLeft,
    nextQuarter,
    nextYear,
    nextLabel,
    isRollover,
    bookingQuarter,
    bookingYear,
    bookingLabel,
    bookingKey,
    totalSlots,
    availableSlots,
    displayText,
  };
}
