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
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "discountPercentage",
    header: "Discount Percentage",
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
  {
    accessorKey: "stock",
    header: "Stock",
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
  {
    accessorKey: "dimensions",
    cell: ({ row }) => (
      <div>
        {row?.original?.dimensions
          ? `W: ${row.original.dimensions.width} cm, H: ${row.original.dimensions.height} cm, D: ${row.original.dimensions.depth} cm`
          : "N/A"}
      </div>
    ),
    header: "Dimensions",
  },
  {
    accessorKey: "minimumOrderQuantity",
    header: "Minimum Order Quantity",
  },
  {
    accessorKey: "shippingInformation",
    header: "Shipping Information",
  },
  {
    accessorKey: "returnPolicy",
    header: "Return Policy",
  },
  {
    accessorKey: "warrantyInformation",
    header: "Warranty Information",
  },
  {
    accessorKey: "weight",
    header: "Weight (kg)",
  },
  {
    accessorKey: "sku",
    header: "SKU",
  },
  {
    accessorKey: "tags",
    cell: ({ row }) => <div>{row?.original?.tags.join(", ")}</div>,
    header: "Tags",
  },
  {
    accessorKey: "meta",
    cell: ({ row }) => (
      <div>
        Created: {row.original.meta?.createdAt}
        <br />
        Updated: {row.original.meta?.updatedAt}
      </div>
    ),
    header: "Meta Information",
  },
  {
    accessorKey: "reviews",
    cell: ({ row }) => (
      <div>
        {row?.original?.reviews.length} review
        {row.original.reviews.length !== 1 ? "s" : ""}
      </div>
    ),
    header: "Reviews",
  },
];
