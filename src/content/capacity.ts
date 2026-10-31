/**
 * Verified project capacity by quarter.
 * Keep this empty until the owners confirm real availability. Keys use the
 * format "YYYY-QX" (e.g., "2026-Q4").
 */
export interface QuarterCapacity {
  totalSlots?: number;
  availableSlots: number;
}

export interface CapacitySchedule {
  [quarterKey: string]: number | QuarterCapacity | undefined;
}

export const capacitySchedule: CapacitySchedule = {};
