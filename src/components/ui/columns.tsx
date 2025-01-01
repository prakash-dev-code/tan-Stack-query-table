"use client";

import { TData } from "@/type/table";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TData>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
