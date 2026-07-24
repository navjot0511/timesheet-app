import { TaskCard } from "./TaskCard";
import { useState } from "react";
import { Button } from "@/components/Button";

interface DayColumnProps {
  date: string;
  tasks: { id: number; task: string; hours: number, projectName: string; }[];
}

export function DayColumn({ date, tasks }: DayColumnProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="flex justify-between  gap-6 mt-2 mb-4">
      <h3 className="text-lg font-semibold text-sm mt-2">{date}</h3>
      <div className="flex-1 flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task.task} hours={task.hours} projectName={task.projectName} />
        ))}
        <Button
          variant={active ? "active" : "inactive"}
          onClick={() => setActive(!active)}
        >
          + Add new task
        </Button>
      </div>
    </div>
  );
}
