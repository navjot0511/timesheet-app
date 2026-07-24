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
  completed: 20,
  total: 40,
  days: [
    {
      date: "21 Jan",
      tasks: [
        {
          id: 1,
          task: "Homepage Development",
          hours: 4,
          projectName: "Project Name",
        },
      ],
    },
    {
      date: "22 Jan",
      tasks: [
        {
          id: 2,
          task: "Homepage Development",
          hours: 4,
          projectName: "Project Name",
        },
        {
          id: 3,
          task: "Homepage Development",
          hours: 4,
          projectName: "Project Name",
        },
      ],
    },
    {
      date: "23 Jan",
      tasks: [
        {
          id: 4,
          task: "Homepage Development",
          hours: 4,
          projectName: "Sample Project 1",
        },
      ],
    },
    {
      date: "24 Jan",
      tasks: [
        {
          id: 5,
          task: "Homepage Development",
          hours: 4,
          projectName: "Sample Project 2",
        },
      ],
    },
    {
      date: "25 Jan",
      tasks: [
        {
          id: 6,
          task: "Homepage Development",
          hours: 4,
          projectName: "Sample Project 3",
        },
      ],
    },
    {
      date: "26 Jan",
      tasks: [
        {
          id: 7,
          task: "Homepage Development",
          hours: 4,
          projectName: "Project Name",
        },
      ],
    },
  ],
};
