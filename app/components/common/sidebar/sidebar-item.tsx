import { ChevronRight, PlusIcon } from "lucide-react";
import { cloneElement } from "react";

import { useSlide } from "~/hooks/use-slide";
import { getElementConfigByName } from "~/lib/utils";
import { AppElementResult } from "~/types";
import { SidebarPopoverAddItem } from "./sidebar-popover-add-item";

interface SidebarItemType extends AppElementResult {}

export const SidebarItem = ({ type, id }: SidebarItemType) => {
  const { setActiveElement } = useSlide();
  const element = getElementConfigByName(type);

  if (!element) {
    return null;
  }

  const onClick = () => {
    setActiveElement([id]);
  };

  const newIcon = cloneElement(element.icon, { className: "size-4" });

  return (
    <div className="flex items-center bg-white/5 text-white/90 py-2 px-3 rounded-lg mt-1 first-of-type:mt-0 w-full">
      {newIcon} <div className="leading-[0] ml-1">{element.text}</div>
      <SidebarPopoverAddItem
        trigger={
          <button className="ml-auto p-1 hover:bg-white/10 rounded-md">
            <PlusIcon className="size-3" />
          </button>
        }
      />
      <button onClick={onClick} className="p-1 hover:bg-white/10 rounded-md">
        <ChevronRight className="size-3" />
      </button>
    </div>
  );
};
