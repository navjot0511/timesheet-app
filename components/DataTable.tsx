"use client";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { useState } from "react";
import { Pagination } from "./Pagination";

interface DataTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T, any>[];
}

export function DataTable<T extends object>({
  data,
  columns,
}: DataTableProps<T>) {
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-[#F9FAFB] text-body">
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-4 cursor-pointer select-none bg-[#F9FAFB]"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                    {/* Sorting indicator */}
                    {header.column.getIsSorted() === "asc" && (
                      <svg
                        className="inline-block w-3 h-3 ml-1 text-brandButton"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 5l-5 5h10l-5-5z" />
                      </svg>
                    )}
                    {header.column.getIsSorted() === "desc" && (
                      <svg
                        className="inline-block w-3 h-3 ml-1 text-brandButton"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 15l5-5H5l5 5z" />
                      </svg>
                    )}
                    {header.column.getIsSorted() === false && (
                      <svg
                        className="inline-block w-3 h-3 ml-1 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 5l-5 5h10l-5-5z" />
                      </svg>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t px-4 py-4">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination table={table} />
    </div>
  );
}
