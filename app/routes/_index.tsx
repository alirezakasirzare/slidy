import type { MetaFunction } from "@remix-run/node";
import { Sidebar } from "~/components/common/sidebar/sidebar";
import { RowElement } from "~/components/elements/row-element";
import { useSlide } from "~/hooks/use-slide";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { slide } = useSlide();
  return (
    <div className="flex min-h-screen p-4 gap-x-4 bg-[#1e1e1e]">
      <Sidebar />
      <main className="grow">
        <div className="border h-full rounded-xl p-4 border-[#2c2c2c]">
          {slide.children.map((item, i) => (
            <RowElement result={item} key={i} />
          ))}
        </div>
      </main>
    </div>
  );
}
