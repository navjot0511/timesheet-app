"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) {
    router.push("/"); 
    return null;
  }

  // Dummy timesheet data
  const timesheets = [
    { week: 29, date: "2026-07-20", status: "Submitted" },
    { week: 28, date: "2026-07-13", status: "Approved" },
    { week: 27, date: "2026-07-06", status: "Pending" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Timesheet Dashboard</h1>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Week #</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {timesheets.map((entry, idx) => (
            <tr key={idx}>
              <td className="border border-gray-300 px-4 py-2">{entry.week}</td>
              <td className="border border-gray-300 px-4 py-2">{entry.date}</td>
              <td className="border border-gray-300 px-4 py-2">
                {entry.status}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
