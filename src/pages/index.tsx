import { columns } from "@/components/ui/columns";
import { TData } from "@/type/table";
import { Roboto } from "next/font/google";
import React from "react";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const DataTable = React.lazy(() => import("@/components/home-page/dataTable"));
const data: TData[] = [
  { id: "1", amount: 100, status: "pending", email: "user1@example.com" },
  { id: "2", amount: 200, status: "success", email: "user2@example.com" },
  { id: "3", amount: 300, status: "failed", email: "user3@example.com" },
];

export default function Home() {
  return (
    <div
      className={`w-full h-auto flex justify-center flex-col gap-8 items-center p-4 ${roboto.className}`}
    >
      <h1 className="text-2xl font-medium ">Data Table Using TanStack query</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
