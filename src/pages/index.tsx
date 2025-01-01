import { columns } from "@/components/ui/columns";
import { Roboto } from "next/font/google";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const DataTable = React.lazy(() => import("@/components/home-page/dataTable"));

const fetchProducts = async (query: string): Promise<any> => {
  const response = await fetch(
    query
      ? `https://dummyjson.com/products/search?q=${query}`
      : "https://dummyjson.com/products"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return data.products; // `products` is the key in the response
};

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["products", searchValue],
    queryFn: () => fetchProducts(searchValue),
    keepPreviousData: true, // Keep previous data during refetching
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

  const handleSearchClick = () => {
    refetch(); // Trigger refetch based on the updated searchValue
  };

  return (
    <div
      className={`w-full h-auto flex justify-center flex-col gap-8 items-center p-4 ${roboto.className}`}
    >
      <h1 className="text-2xl font-medium">Data Table Using TanStack Query</h1>
      <div className="flex w-full max-w-md gap-2">
        <input
          type="text"
          placeholder="Search products..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="flex-1 p-2 border rounded-md"
        />
        <button
          onClick={handleSearchClick}
          className="p-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </div>
      <React.Suspense fallback={<div>Loading Table...</div>}>
        <DataTable columns={columns} data={data} />
      </React.Suspense>
    </div>
  );
}
