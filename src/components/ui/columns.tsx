"use client";

import { IProduct } from "@/type/table";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<IProduct>[] = [
  {
    accessorKey: "id",
    header: "Product ID",
  },
  {
    accessorKey: "thumbnail",
    cell: ({ row }) => (
      <img
        src={row?.original?.thumbnail}
        alt="Product Thumbnail"
        className="h-12 w-12 object-cover rounded-md"
      />
    ),
    header: "Product Image",
  },
  {
    accessorKey: "title",
    header: "Title",
  },

  {
    accessorKey: "price",
    header: "Price",
  },

  {
    accessorKey: "rating",
    header: "Rating",
  },
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "availabilityStatus",
    header: "Availability Status",
  },
];
