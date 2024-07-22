import type { MetaFunction } from "@remix-run/node";
import { Sidebar } from "~/components/common/sidebar/sidebar";
import {
  RowElement,
  RowElementResult,
} from "~/components/elements/row-element";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const result: RowElementResult = {
    type: "row",
    options: {
      justify: "center",
      align: "center",
      gap: 10,
    },
  };
  return (
    <div className="flex min-h-screen p-4 gap-x-4 bg-[#1e1e1e]">
      <Sidebar />
      <main className="grow">
        <div className="border h-full rounded-xl p-4 border-[#2c2c2c]">
          <RowElement result={result} />
        </div>
      </main>
    </div>
  );
}
