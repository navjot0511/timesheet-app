"use client";

import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/DataTable";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
interface Timesheet {
  week: number;
  date: string;
  status: "COMPLETED" | "INCOMPLETE" | "MISSING";
}
export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [data, setData] = useState<Timesheet[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/timesheets`);
      const json = await res.json();
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, []);
  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) {
    router.push("/");
    return null;
  }

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
    <>
      <Header />

      <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
        <main className="flex-1 pt-8 mx-auto min-w-[80%]">
          <div className="bg-white rounded shadow p-4">
            <h1 className="text-xl font-semibold mb-4">Your Timesheets</h1>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <DataTable data={data} columns={columns} />
            )}
          </div>
        </main>

        <div className="flex-1 pt-8 pb-8 mx-auto min-w-[80%]">
          <footer className="bg-white rounded shadow text-center text-sm px-2  py-8">
            © 2024 tentwenty. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}
