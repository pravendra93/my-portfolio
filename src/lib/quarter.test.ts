import { getQuarterInfo } from "./quarter.ts";
import { capacitySchedule } from "../content/capacity.ts";

console.log("🧪 [QUARTER TEST SUITE] Starting boundary & rollover tests...\n");

let passed = 0;
let failed = 0;

function assert(condition: boolean, testName: string, details?: any) {
  if (condition) {
    passed++;
    console.log(`  ✅ PASS: ${testName}`);
  } else {
    failed++;
    console.error(`  ❌ FAIL: ${testName}`);
    if (details) console.error("     Details:", details);
  }
}

// Custom mock capacity map for testing
const mockCapacity = {
  "2026-Q4": 2,
  "2027-Q1": 3,
};

// Test 1: Standard mid-quarter date (27 Oct 2026)
{
  const date = new Date("2026-10-27T10:00:00+05:30");
  const info = getQuarterInfo(date, 14, mockCapacity);
  assert(info.quarter === 4 && info.year === 2026, "Oct 27, 2026 is in Q4 2026", info);
  assert(info.isRollover === false, "Oct 27, 2026 is not in rollover window", { daysLeft: info.daysLeft });
  assert(info.bookingLabel === "Q4 2026", "Booking label is Q4 2026 on Oct 27, 2026", info);
  assert(info.availableSlots === 2, "Available slots is 2 for 2026-Q4", info);
  assert(info.displayText === "2 slots remaining for Q4 2026 delivery", "Display text mentions 2 slots remaining for Q4 2026", info);
}

// Test 2: Rollover boundary within 14 days of quarter end (20 Dec 2026)
{
  const date = new Date("2026-12-20T10:00:00+05:30");
  const info = getQuarterInfo(date, 14, mockCapacity);
  assert(info.quarter === 4, "Current quarter is Q4 on Dec 20, 2026", info);
  assert(info.isRollover === true, "Dec 20, 2026 triggers rollover (< 14 days left)", { daysLeft: info.daysLeft });
  assert(info.bookingQuarter === 1 && info.bookingYear === 2027, "Booking rolls over to Q1 2027 on Dec 20, 2026", info);
  assert(info.bookingLabel === "Q1 2027", "Booking label shows Q1 2027 on Dec 20, 2026", info);
  assert(info.availableSlots === 3, "Available slots is 3 for 2027-Q1", info);
  assert(info.displayText === "3 slots remaining for Q1 2027 delivery", "Display text shows 3 slots for Q1 2027 delivery", info);
}

// Test 3: Quarter boundary Mar 31 vs Apr 1
{
  const mar31 = new Date("2026-03-31T12:00:00+05:30");
  const infoMar31 = getQuarterInfo(mar31, 14, mockCapacity);
  assert(infoMar31.quarter === 1, "Mar 31, 2026 is in Q1", infoMar31);
  assert(infoMar31.isRollover === true, "Mar 31 is in rollover window", infoMar31);
  assert(infoMar31.bookingQuarter === 2 && infoMar31.bookingYear === 2026, "Mar 31 rolls over to Q2 2026", infoMar31);

  const apr1 = new Date("2026-04-01T08:00:00+05:30");
  const infoApr1 = getQuarterInfo(apr1, 14, mockCapacity);
  assert(infoApr1.quarter === 2 && infoApr1.year === 2026, "Apr 1, 2026 is in Q2 2026", infoApr1);
  assert(infoApr1.isRollover === false, "Apr 1 is start of quarter (no rollover)", infoApr1);
  assert(infoApr1.bookingLabel === "Q2 2026", "Booking label on Apr 1 is Q2 2026", infoApr1);
}

// Test 4: Quarter boundary Jun 30 vs Jul 1
{
  const jun30 = new Date("2026-06-30T23:00:00+05:30");
  const infoJun30 = getQuarterInfo(jun30, 14, mockCapacity);
  assert(infoJun30.quarter === 2, "Jun 30, 2026 is Q2", infoJun30);
  assert(infoJun30.isRollover === true && infoJun30.bookingLabel === "Q3 2026", "Jun 30 rolls over to Q3 2026", infoJun30);

  const jul1 = new Date("2026-07-01T01:00:00+05:30");
  const infoJul1 = getQuarterInfo(jul1, 14, mockCapacity);
  assert(infoJul1.quarter === 3 && infoJul1.bookingLabel === "Q3 2026", "Jul 1 is Q3 2026", infoJul1);
}

// Test 5: Quarter boundary Sep 30 vs Oct 1
{
  const sep30 = new Date("2026-09-30T15:00:00+05:30");
  const infoSep30 = getQuarterInfo(sep30, 14, mockCapacity);
  assert(infoSep30.quarter === 3 && infoSep30.bookingLabel === "Q4 2026", "Sep 30 rolls over to Q4 2026", infoSep30);

  const oct1 = new Date("2026-10-01T06:00:00+05:30");
  const infoOct1 = getQuarterInfo(oct1, 14, mockCapacity);
  assert(infoOct1.quarter === 4 && infoOct1.bookingLabel === "Q4 2026", "Oct 1 is Q4 2026 without rollover", infoOct1);
}

// Test 6: Quarter & Year Rollover Dec 31 vs Jan 1
{
  const dec31 = new Date("2026-12-31T20:00:00+05:30");
  const infoDec31 = getQuarterInfo(dec31, 14, mockCapacity);
  assert(infoDec31.quarter === 4 && infoDec31.year === 2026, "Dec 31 is Q4 2026", infoDec31);
  assert(infoDec31.bookingQuarter === 1 && infoDec31.bookingYear === 2027, "Dec 31 rolls over to Q1 2027", infoDec31);
  assert(infoDec31.bookingLabel === "Q1 2027", "Dec 31 booking label is Q1 2027", infoDec31);

  const jan1 = new Date("2027-01-01T09:00:00+05:30");
  const infoJan1 = getQuarterInfo(jan1, 14, mockCapacity);
  assert(infoJan1.quarter === 1 && infoJan1.year === 2027, "Jan 1 is Q1 2027", infoJan1);
  assert(infoJan1.isRollover === false && infoJan1.bookingLabel === "Q1 2027", "Jan 1 booking label is Q1 2027 without rollover", infoJan1);
}

// Test 7: Leap Day (Feb 29, 2028)
{
  const leapDay = new Date("2028-02-29T12:00:00+05:30");
  const infoLeap = getQuarterInfo(leapDay, 14, mockCapacity);
  assert(infoLeap.quarter === 1 && infoLeap.year === 2028, "Feb 29, 2028 is Q1 2028", infoLeap);
  assert(infoLeap.daysLeft === 31, "Days left on Feb 29 until Mar 31 is 31 days", infoLeap);
  assert(infoLeap.isRollover === false, "Feb 29 is not in rollover (> 14 days)", infoLeap);
  assert(infoLeap.bookingLabel === "Q1 2028", "Booking label is Q1 2028 on Feb 29, 2028", infoLeap);
}

// Test 8: Missing slot capacity behavior (honest display)
{
  // Date in Q2 2026 where mockCapacity has no entry for "2026-Q2"
  const date = new Date("2026-05-15T12:00:00+05:30");
  const info = getQuarterInfo(date, 14, mockCapacity);
  assert(info.availableSlots === undefined, "Missing quarter key yields undefined slots", info);
  assert(info.displayText === "Now booking Q2 2026 projects", "When slots are undefined, shows 'Now booking Q2 2026 projects' without fake slot count", info);
}

// Test 9: Object capacity with totalSlots and availableSlots (e.g. 3 booking slots, 2 slots remaining)
{
  const objectCapacity = {
    "2026-Q4": { totalSlots: 3, availableSlots: 2 },
  };
  const date = new Date("2026-10-27T10:00:00+05:30");
  const info = getQuarterInfo(date, 14, objectCapacity);
  assert(info.totalSlots === 3, "totalSlots is correctly parsed as 3", info);
  assert(info.availableSlots === 2, "availableSlots is correctly parsed as 2", info);
  assert(info.displayText === "2 of 3 slots remaining for Q4 2026 delivery", "Display text shows '2 of 3 slots remaining for Q4 2026 delivery'", info);
}

assert(Object.keys(capacitySchedule).length === 0, "Production capacity stays unlisted until availability is confirmed", capacitySchedule);

console.log("\n=================================");
console.log(`Quarter Test Results: ${passed} passed, ${failed} failed.`);
console.log("=================================\n");

if (failed > 0) {
  process.exit(1);
}
