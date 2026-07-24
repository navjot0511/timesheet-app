"use client";

import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/DataTable";

interface Timesheet {
  week: number;
  date: string;
  status: "COMPLETED" | "INCOMPLETE" | "MISSING";
}
export default function DashboardPage() {
  const [data, setData] = useState<Timesheet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/timesheets`);
      const json = await res.json();
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, []);

  const columns: ColumnDef<Timesheet>[] = [
    { header: "WEEK #", accessorKey: "week" },
    { header: "DATE", accessorKey: "date" },
    {
      header: "STATUS",
      accessorKey: "status",
      cell: ({ getValue }) => {
        const status = getValue() as string;
        return (
          <div
            className={
              status === "COMPLETED"
                ? "text-[#03543F] font-semibold bg-[#DEF7EC] px-1 py-1 max-w-fit"
                : status === "INCOMPLETE"
                  ? "text-[#723B13]font-semibold bg-[#FDF6B2] px-1 py-1 max-w-fit"
                  : "text-[#99154B] font-semibold bg-[#FCE8F3] px-1 py-1 max-w-fit"
            }
          >
            {status}
          </div>
        );
      },
    },
    {
      header: "ACTIONS",
      cell: ({ row }) => {
        const status = row.original.status;

        if (status === "COMPLETED") {
          return (
            // <button
            //   className="px-2 py-1 text-xs border rounded "
            //   onClick={() => alert(`Viewing week ${row.original.week}`)}
            // >
            //   View
            // </button>
            <span className="text-[#1C64F2]">View</span>
          );
        }

        if (status === "INCOMPLETE") {
          return <span className="text-[#1C64F2]">Update</span>;
        }

        if (status === "MISSING") {
          return <span className="text-[#1C64F2]">Create</span>;
        }

        return null;
      },
    },
  ];
  return (
    <div className="bg-white rounded shadow p-4">
      <h1 className="text-xl font-semibold mb-4">Your Timesheets</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataTable data={data} columns={columns} />
      )}
    </div>
  );
}
