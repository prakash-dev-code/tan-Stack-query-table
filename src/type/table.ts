import { ColumnDef } from "@tanstack/react-table";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  availabilityStatus: string;
}

export interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
}
