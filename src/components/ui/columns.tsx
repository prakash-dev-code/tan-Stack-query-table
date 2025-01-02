"use client";

import { IProduct } from "@/type/table";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "./badge";

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
        className="h-[35px] w-[35px] object-cover rounded-full"
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
    enableSorting: true,
  },
  {
    accessorKey: "availabilityStatus",
    header: "Availability Status",
    enableSorting: true,
    cell: ({ row }) => {
      const status = row.original.availabilityStatus;

      return (
        <Badge
          variant="destructive"
          className={`${
            status === "In Stock"
              ? "bg-green-600 hover:bg-green-600 !important"
              : "bg-red-500 hover:bg-red-500 !important"
          } rounded-md text-xs text-white font-medium`}
        >
          {status === "In Stock" ? "Available" : "Not Available"}
        </Badge>
      );
    },
  },

  {
    accessorKey: "price",
    header: "Price",
    enableSorting: true,
  },

  {
    accessorKey: "rating",
    header: "Rating",
    enableSorting: true,
  },
];
