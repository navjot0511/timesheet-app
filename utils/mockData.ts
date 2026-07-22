// utils/mockData.ts
export const users = [
  {
    id: 1,
    email: "test@example.com",
    password: "password123",
    name: "Test User",
  },
];

export const weeklyTimesheets = [
  { week: 1, date: "1–5 January, 2024", status: "COMPLETED" },
  { week: 2, date: "8–12 January, 2024", status: "COMPLETED" },
  { week: 3, date: "15–19 January, 2024", status: "INCOMPLETE" },
  { week: 4, date: "22–26 January, 2024", status: "COMPLETED" },
  { week: 5, date: "28 Jan–1 Feb, 2024", status: "MISSING" },
  { week: 6, date: "1–5 January, 2024", status: "MISSING" },
  { week: 7, date: "8–12 January, 2024", status: "INCOMPLETE" },
  { week: 8, date: "15–19 January, 2024", status: "INCOMPLETE" },
  { week: 9, date: "22–26 January, 2024", status: "COMPLETED" },
  { week: 10, date: "28 Jan–1 Feb, 2024", status: "COMPLETED" },
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
