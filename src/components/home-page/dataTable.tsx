"use client";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTableProps, IProduct } from "@/type/table";
import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const DataTable = ({ columns, data }: DataTableProps<IProduct>) => {
  const [sorting, setSorting] = useState<SortingState>([]); // Sorting state
  const [globalFilter, setGlobalFilter] = useState<string>(""); // Global filter state

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter, sorting },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter, // Update the global filter state
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(), // Apply filtering
    getSortedRowModel: getSortedRowModel(), // Enable sorting
  });

  return (
    <div className="w-[95%] flex flex-col gap-6 ">
      {/* Global Search Input */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className=" flex justify-start w-full">
          <Input
            placeholder="Search here..."
            value={globalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)} // Update filter
            className="max-w-sm shadow-sm"
          />
        </div>
        <div className="flex justify-end  mt-4 sm:mt-0 shadow-sm">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto hover:bg-white">
                Filter Column <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.columnDef.header as string}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="rounded-md border bg-white shadow-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        className="cursor-pointer select-none"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: (
                            <ArrowUpNarrowWide className=" ml-1   inline w-[16px] h-[16px]" />
                          ),
                          desc: (
                            <ArrowDownNarrowWide className=" ml-1 inline w-[16px] h-[16px]" />
                          ),
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
