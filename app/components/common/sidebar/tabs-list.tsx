import { TabItem } from "./tab-item";

export type Tab = "tree" | "setting";

type Props = {
  activeTab: Tab;
  onChangeTab: (newTab: Tab) => void;
};

export const TabsList = ({ activeTab, onChangeTab }: Props) => {
  const tabs: Tab[] = ["tree", "setting"];

  return (
    <ul className="flex gap-x-2 mb-3 border-b border-white/5">
      {tabs.map((tab) => (
        <TabItem
          key={tab}
          text={tab}
          isActive={activeTab === tab}
          onClick={() => onChangeTab(tab)}
        />
      ))}
    </ul>
  );
};
