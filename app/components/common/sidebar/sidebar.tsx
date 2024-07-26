import { useState } from "react";
import { SidebarItem } from "./sidebar-item";
import { Tab, TabsList } from "./tabs-list";
import { SidebarAddItem } from "./sidebar-add-item";
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
            </>
          )}

          <SidebarAddItem />
        </>
      )}
    </aside>
  );
};
