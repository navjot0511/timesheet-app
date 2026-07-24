interface ProgressBarProps {
  completed: number;
  total: number;
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percent = Math.round((completed / total) * 100);
  return (
    <div className="w-48 flex-col gap-3">
      <div>
        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
          {completed}/{total} hrs
        </span>
      </div>

      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-3 bg-[#FF8A4C] rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
