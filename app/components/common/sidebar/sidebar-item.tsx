import { cloneElement } from "react";

export type SidebarItemType = {
  icon: React.ReactElement;
  text: string;
};

export const SidebarItem = ({ icon, text }: SidebarItemType) => {
  const newIcon = cloneElement(icon, { className: "size-4" });
  return (
    <div className="flex items-center justify-between bg-black/10 py-2 px-3 rounded-lg">
      {text} {newIcon}
    </div>
  );
};
