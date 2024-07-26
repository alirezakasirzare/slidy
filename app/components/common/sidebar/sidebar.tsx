import { useState } from "react";
import { PlusIcon } from "lucide-react";

import { SidebarItem } from "./sidebar-item";
import { Tab, TabsList } from "./tabs-list";
import { SidebarPopoverAddItem } from "./sidebar-popover-add-item";
import { useSlide } from "~/hooks/use-slide";
import { SidebarDetail } from "./sidebar-detail";

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<Tab>("tree");
  const { slide, activeElement } = useSlide();
  const shouldSeeDetail = !!activeElement.length;

  return (
    <aside className="w-[300px] bg-[#2c2c2c] shrink-0 p-5 rounded-xl text-white/90">
      <TabsList activeTab={activeTab} onChangeTab={setActiveTab} />
      {activeTab === "tree" && (
        <>
          {shouldSeeDetail ? (
            <SidebarDetail />
          ) : (
            <>
              {slide.childrens.map((item, i) => (
                <SidebarItem key={i} {...item} />
              ))}

              <SidebarPopoverAddItem
                trigger={
                  <button className="flex items-center justify-center border border-dashed border-white/10 py-2 px-3 rounded-lg mt-2 gap-x-1 w-full">
                    <PlusIcon className="size-4" /> Add
                  </button>
                }
              />
            </>
          )}
        </>
      )}
    </aside>
  );
};
