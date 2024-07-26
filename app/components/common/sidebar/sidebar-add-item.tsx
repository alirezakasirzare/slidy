import { PlusIcon } from "lucide-react";
import { cloneElement } from "react";
import { useBoolean } from "usehooks-ts";

import {
  getDefaultRowElementResult,
  rowElementConfig,
} from "~/components/elements/row-element";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { useSlide } from "~/hooks/use-slide";

export type Item = {
  icon: React.ReactElement;
  text: string;
  name: string;
};

const items: Item[] = [
  {
    name: rowElementConfig.name,
    text: rowElementConfig.text,
    icon: rowElementConfig.icon,
  },
];

export const SidebarAddItem = () => {
  const { addChild } = useSlide();
  const { value, setValue, setFalse } = useBoolean(false);

  const onAddChild = (name: string) => {
    if (name === "row") {
      addChild(getDefaultRowElementResult());
    }
    setFalse();
  };
  return (
    <Popover open={value} onOpenChange={setValue}>
      <PopoverTrigger asChild>
        <button className="flex items-center justify-center border border-dashed border-white/10 py-2 px-3 rounded-lg mt-2 gap-x-1 w-full">
          <PlusIcon className="size-4" /> Add
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <ul className="grid grid-cols-2 gap-2">
          {items.map((item) => (
            <li key={item.text}>
              <button
                className="border p-2 rounded-lg w-full flex flex-col items-center font-medium text-lg text-black/90 hover:bg-black/5 transition-colors"
                onClick={() => onAddChild(item.name)}
              >
                {cloneElement(item.icon, { className: "size-4" })}
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};
