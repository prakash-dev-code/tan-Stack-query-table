import { columns } from "@/components/ui/columns";
import { Roboto } from "next/font/google";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { IProduct } from "@/type/table";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const DataTable = React.lazy(() => import("@/components/home-page/dataTable"));

const fetchProducts = async (): Promise<IProduct[]> => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data.products; // `products` is the key in the response
};

export default function Home() {
  const { data, isLoading, isError, error } = useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Error: {(error as Error).message}
      </div>
    );
  }

  return (
    <div
      className={`w-full h-auto flex justify-center flex-col gap-8 items-center p-4 ${roboto.className}`}
    >
      <h1 className="text-2xl font-medium">Data Table Using TanStack Query</h1>

      <React.Suspense fallback={<div>Loading Table...</div>}>
        <DataTable columns={columns} data={data || []} />
      </React.Suspense>
    </div>
  );
}
