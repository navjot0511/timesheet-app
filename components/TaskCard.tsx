interface TaskCardProps {
  task: string;
  hours: number;
  projectName: string;
}

export function TaskCard({ task, hours, projectName }: TaskCardProps) {
  return (
    <div className="flex justify-between items-center bg-white border rounded px-3 py-2 shadow-sm mt-2">
      <div>
        <p className="font-medium">{task}</p>
      </div>
      <div className="flex justify-between items-center gap-2">
        <p className="text-xs text-gray-500">{hours} hrs</p>

        <div
          className="px-3 py-1 rounded text-sm font-medium
                 text-[#1E429F] bg-[#E1EFFE] border border-transparent"
        >
          {projectName}
        </div>
      </div>
    </div>
  );
}
