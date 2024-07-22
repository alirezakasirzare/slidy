import { PlusIcon } from "lucide-react";

export const SidebarAddItem = () => {
  return (
    <button className="flex items-center justify-center border border-black/10 py-2 px-3 rounded-lg mt-2 gap-x-1 w-full">
      <PlusIcon className="size-4" /> Add
    </button>
  );
};
