"use client";

import { DayColumn } from "@/components/DayColumn";
import { ProgressBar } from "@/components/progressBar";
import { useEffect, useState } from "react";

interface TimesheetDay {
  date: string;
  tasks: { id: number; task: string; hours: number, projectName: string; }[];
}

export default function TimesheetPage() {
  const [data, setData] = useState<TimesheetDay[]>([]);
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(40);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/timesheet");
      const json = await res.json();
      setData(json.days);
      setCompleted(json.completed);
      setTotal(json.total);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div className="bg-white rounded shadow p-4 mb-4">
      <div className="flex justify-between items-center ">
        <h1 className="text-xl font-semibold">This week’s timesheet</h1>
        <ProgressBar completed={completed} total={total} />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-6">
          {data.map((day, i) => (
            <DayColumn key={i} date={day.date} tasks={day.tasks} />
          ))}
        </div>
      )}
    </div>
  );
}
