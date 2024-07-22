import { cn } from "~/lib/utils";

type Props = {
  onClick: () => void;
  text: string;
  isActive: boolean;
};
export const TabItem = ({ text, onClick, isActive }: Props) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={cn(
          "capitalize border-b-2 pb-2 px-2 border-transparent",
          isActive && "border-black/20"
        )}
      >
        {text}
      </button>
    </li>
  );
};
