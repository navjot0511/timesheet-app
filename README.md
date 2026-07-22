# ⏱️ Timesheet Management App

A simplified **Timesheet Management Application** built with Next.js, TailwindCSS, and supporting libraries.  
This project demonstrates a login flow, dashboard with reusable table component, and mock API integration.

---

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd timesheet-app
   ```
2. **Install dependencies**
   npm install
3. **Run the development server**
   npm run dev
4. **Open in browser**
   Navigate to http://localhost:3000

**Frameworks & Libraries Used**

Next.js – React framework for routing and SSR

TypeScript – Type safety and maintainability

TailwindCSS – Utility-first styling framework

Formik + Yup – Form handling and validation (login page)

next-auth – Authentication (credentials provider, mocked for demo)

TanStack Table – Reusable table component with pagination (dashboard)

**Assumptions & Notes**
Authentication is dummy (no real backend). next-auth is configured for credentials provider but mocked for demo.

Timesheet data is served via a mock API route (/api/timesheets) returning JSON.

Table pagination is client-side using TanStack Table. For production, server-side pagination would be implemented.

Styling follows Tailwind utility classes.

**Time Spent**
Project setup & configuration: ~2 hour

Login page (Formik + Yup + Tailwind): ~3 hours

Dashboard layout & table component: ~4 hours

Mock API route & integration: ~2 hours

Testing & README documentation: ~1 hour

Total: ~12 hours
