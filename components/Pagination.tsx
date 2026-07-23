interface PaginationProps {
  table: any; // TanStack table instance
}
function getPageNumbers(current: number, total: number, delta = 2) {
  const range: (number | string)[] = [];

  if (total <= 5) {
    // If total pages are small, show all
    for (let i = 1; i <= total; i++) {
      range.push(i);
    }
    return range;
  }

  // Always show first page
  range.push(1);

  let start = Math.max(2, current - delta);
  let end = Math.min(total - 1, current + delta);

  // Ellipsis after first page
  if (start > 2) {
    range.push("...");
  }

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  // Ellipsis before last page
  if (end < total - 1) {
    range.push("...");
  }

  // Always show last page
  range.push(total);

  return range;
}
export function Pagination({ table }: PaginationProps) {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  const pages = getPageNumbers(pageIndex + 1, pageCount);

  return (
    <div className="flex items-center justify-between mt-4 text-sm text-body">
      <select
        value={table.getState().pagination.pageSize}
        onChange={(e) => table.setPageSize(Number(e.target.value))}
        className="ml-4 border rounded px-2 py-1"
      >
        {[5, 10, 20].map((size) => (
          <option key={size} value={size}>
            {size} per page
          </option>
        ))}
      </select>

      <div className="flex items-center justify-between text-sm text-body">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>

        <div className="flex space-x-2">
          {pages.map((p, i) =>
            p === "..." ? (
              <span key={i}>…</span>
            ) : (
              <button
                key={p}
                //   onClick={() => table.setPageIndex(p)}
                className={`px-3 py-1 border rounded ${
                  pageIndex === p ? "bg-brandButton text-white" : ""
                }`}
              >
                {p}
              </button>
            ),
          )}
        </div>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
