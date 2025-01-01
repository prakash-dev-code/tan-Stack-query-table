"use client";

import { IProduct } from "@/type/table";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<IProduct>[] = [
  {
    accessorKey: "id",
    header: "Sr. no.",
  },
  {
    accessorKey: "thumbnail",
    cell: ({ row }) => (
      <img
        src={row?.original?.thumbnail}
        alt="Product Thumbnail"
        className="h-10 w-10 object-cover rounded-full"
      />
    ),
    header: "Product Image",
  },
  {
    accessorKey: "title",
    header: "Title",
    enableSorting: true,
  },

  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "availabilityStatus",
    header: "Availability Status",
  },

  {
    accessorKey: "price",
    header: "Price",
  },

  {
    accessorKey: "rating",
    header: "Rating",
  },
];
