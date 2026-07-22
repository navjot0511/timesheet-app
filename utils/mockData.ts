// utils/mockData.ts
export const users = [
  { id: 1, email: "test@example.com", password: "password123", name: "Test User" }
];

export const weeklyTimesheets = [
  { week: 29, date: "2026-07-20", status: "Submitted" },
  { week: 28, date: "2026-07-13", status: "Approved" },
  { week: 27, date: "2026-07-06", status: "Pending" },
];

export const timesheetEntries = {
  29: [
    { id: 1, day: "Monday", hours: 8 },
    { id: 2, day: "Tuesday", hours: 7 },
  ],
  28: [
    { id: 3, day: "Monday", hours: 6 },
    { id: 4, day: "Tuesday", hours: 8 },
  ],
};
