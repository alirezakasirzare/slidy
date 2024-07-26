import { cloneElement } from "react";
import { useSlide } from "~/hooks/use-slide";
import { getElementConfigByName } from "~/lib/utils";
import { AppElementResult } from "~/types";

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
    <button
      className="flex items-center justify-between bg-white/5 py-2 px-3 rounded-lg mt-1 first-of-type:mt-0 w-full"
      onClick={onClick}
    >
      {element.text} {newIcon}
    </button>
  );
};
