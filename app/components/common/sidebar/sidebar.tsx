import { useState } from "react";
import { rowElementConfig } from "../../elements/row-element";
import { SidebarItem, SidebarItemType } from "./sidebar-item";
import { Tab, TabsList } from "./tabs-list";
import { SidebarAddItem } from "./sidebar-add-item";

const items: SidebarItemType[] = [
  {
    text: rowElementConfig.name,
    icon: rowElementConfig.icon,
  },
];
export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<Tab>("tree");
  return (
    <aside className="w-[300px] bg-[#2c2c2c] shrink-0 p-5 rounded-xl text-white/90">
      <TabsList activeTab={activeTab} onChangeTab={setActiveTab} />
      {activeTab === "tree" && (
        <>
          {items.map((item, i) => (
            <SidebarItem key={i} {...item} />
          ))}

          <SidebarAddItem />
        </>
      )}
    </aside>
  );
};
