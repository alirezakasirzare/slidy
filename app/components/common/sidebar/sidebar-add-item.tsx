import { PlusIcon } from "lucide-react";
import { cloneElement } from "react";
import { rowElementConfig } from "~/components/elements/row-element";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

export type Item = {
  icon: React.ReactElement;
  text: string;
};

const items: Item[] = [
  {
    text: rowElementConfig.name,
    icon: rowElementConfig.icon,
  },
];

export const SidebarAddItem = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center justify-center border border-dashed border-white/10 py-2 px-3 rounded-lg mt-2 gap-x-1 w-full">
          <PlusIcon className="size-4" /> Add
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <ul className="grid grid-cols-2 gap-2">
          {items.map((item) => (
            <li key={item.text}>
              <button className="border p-2 rounded-lg w-full flex flex-col items-center font-medium text-lg text-black/90">
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
