"use client";

import React from "react";
import { Table as TanstackTable } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MaintenanceActivity } from "./maintenance-columns";

interface MaintenancePaginationProps {
  table: TanstackTable<MaintenanceActivity>;
}

export default function MaintenancePagination({
  table,
}: MaintenancePaginationProps) {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;
  const totalRows = table.getFilteredRowModel().rows.length;
  const pageCount = table.getPageCount();

  const startRow = totalRows === 0 ? 0 : pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, totalRows);

  // Generate page numbers
  const getPageNumbers = (): (number | "ellipsis")[] => {
    const pages: (number | "ellipsis")[] = [];
    const maxVisible = 5;

    if (pageCount <= maxVisible) {
      for (let i = 0; i < pageCount; i++) pages.push(i);
    } else {
      pages.push(0);
      if (pageIndex > 2) pages.push("ellipsis");

      const start = Math.max(1, pageIndex - 1);
      const end = Math.min(pageCount - 2, pageIndex + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      if (pageIndex < pageCount - 3) pages.push("ellipsis");
      pages.push(pageCount - 1);
    }
    return pages;
  };

  return (
    <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
      {/* Left: Info */}
      <p className="text-sm text-gray-500">
        Menampilkan{" "}
        <span className="font-semibold text-gray-700">
          {startRow}-{endRow}
        </span>{" "}
        dari{" "}
        <span className="font-semibold text-gray-700">{totalRows}</span> data
      </p>

      {/* Right: Pagination Controls */}
      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="gap-1 rounded-lg border-[#ECECEC]"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        {getPageNumbers().map((page, idx) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${idx}`}
              className="flex h-8 w-8 items-center justify-center text-sm text-gray-400"
            >
              …
            </span>
          ) : (
            <Button
              key={page}
              variant={page === pageIndex ? "default" : "outline"}
              size="sm"
              onClick={() => table.setPageIndex(page)}
              className={`h-8 w-8 rounded-lg p-0 text-sm ${
                page === pageIndex
                  ? "bg-[#269957] text-white hover:bg-[#1e7a45]"
                  : "border-[#ECECEC]"
              }`}
            >
              {page + 1}
            </Button>
          )
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="gap-1 rounded-lg border-[#ECECEC]"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
