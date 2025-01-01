import { Roboto } from "next/font/google";
import React from "react";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const DataTable = React.lazy(() => import("@/components/home-page/dataTable"));

export default function Home() {
  return (
    <div
      className={`w-full h-auto flex justify-center flex-col gap-8 items-center p-4 ${roboto.className}`}
    >
      <h1 className="text-2xl font-medium ">Data Table Using TanStack query</h1>
      <DataTable />
    </div>
  );
}
