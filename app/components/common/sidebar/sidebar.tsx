import { rowElementConfig } from "../../elements/row-element";
import { SidebarItem, SidebarItemType } from "./sidebar-item";

const items: SidebarItemType[] = [
  {
    text: rowElementConfig.name,
    icon: rowElementConfig.icon,
  },
];
export const Sidebar = () => {
  return (
    <aside className="w-[300px] bg-accent shrink-0 p-5">
      {items.map((item, i) => (
        <SidebarItem key={i} {...item} />
      ))}
    </aside>
  );
};
