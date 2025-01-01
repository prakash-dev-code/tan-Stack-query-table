import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IProduct } from "@/type/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { columns } from "@/components/ui/columns";
const DataTable = React.lazy(() => import("@/components/home-page/dataTable"));

const fetchProducts = async (
  page: number,
  limit: number
): Promise<{ products: IProduct[]; total: number }> => {
  const skip = (page - 1) * limit;
  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  return { products: data.products, total: data.total };
};

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const limit: number = 10;

  const { data, isLoading, isError, error } = useQuery<{
    products: IProduct[];
    total: number;
  }>({
    queryKey: ["products", currentPage],
    queryFn: async () => {
      const result = await fetchProducts(currentPage, limit);
      setTotalItems(result.total);
      return result;
    },
    staleTime: 10000,
  });

  const totalPages = Math.ceil(totalItems / limit);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

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
    <div className="w-full h-auto flex justify-center flex-col gap-8 items-center p-4">
      <h1 className="text-2xl font-medium">Data Table Using TanStack Query</h1>

      <React.Suspense fallback={null}>
        <DataTable columns={columns} data={data?.products || []} />
        <div className="w-[94%] flex justify-end items-center">
          <div className="ml-auto">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) handlePageChange(currentPage - 1);
                    }}
                    className={`${
                      currentPage === 1
                        ? "cursor-not-allowed text-gray-400"
                        : ""
                    }`}
                  />
                </PaginationItem>

                {/* Page Numbers */}
                {(() => {
                  const pages: React.ReactNode[] = [];
                  const range = 2;

                  // Always show the first page
                  if (currentPage > range + 1) {
                    pages.push(
                      <PaginationItem key={1}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(1);
                          }}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                    );
                    pages.push(<PaginationEllipsis key="start-ellipsis" />);
                  }

                  // Show pages around the current page
                  for (
                    let page = Math.max(1, currentPage - range);
                    page <= Math.min(totalPages, currentPage + range);
                    page++
                  ) {
                    pages.push(
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          className={`${
                            currentPage === page ? "font-bold bg-gray-200" : ""
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page);
                          }}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }

                  if (currentPage < totalPages - range) {
                    pages.push(<PaginationEllipsis key="end-ellipsis" />);
                    pages.push(
                      <PaginationItem key={totalPages}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(totalPages);
                          }}
                        >
                          {totalPages}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }

                  return pages;
                })()}

                {/* Next Button */}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages)
                        handlePageChange(currentPage + 1);
                    }}
                    className={`${
                      currentPage === totalPages
                        ? "cursor-not-allowed text-gray-400"
                        : ""
                    }`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </React.Suspense>
    </div>
  );
}
