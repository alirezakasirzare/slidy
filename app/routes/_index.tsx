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
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="grow px-10 py-6">
        <div className="border h-full rounded-xl p-4">
          <RowElement result={result} />
        </div>
      </main>
    </div>
  );
}
