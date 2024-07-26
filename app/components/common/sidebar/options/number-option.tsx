import { ElementOptionNumber } from "~/types";
import { OptionContainer } from "./option-container";
import { Input } from "~/components/ui/input";
import { GoDash, GoPlus } from "react-icons/go";

type Props = {
  option: ElementOptionNumber<unknown>;
  value: number;
  onChange: (newValue: number) => void;
};

export const NumberOption = ({ option, value, onChange }: Props) => {
  const onIncrement = () => {
    const newValue = value + 1;
    if (option.max !== undefined && newValue > option.max) {
      return;
    }

    onChange(newValue);
  };

  const onDescrement = () => {
    const newValue = value - 1;
    if (option.min !== undefined && newValue < option.min) {
      return;
    }

    onChange(newValue);
  };
  return (
    <OptionContainer>
      <div className="flex items-center justify-between">
        <span>{option.text}</span>
        <div className="flex items-center w-[90px] gap-2">
          <button className="text-white/90" onClick={onDescrement}>
            <GoDash className="size-4" />
          </button>
          <Input
            className="grow bg-white/10 border-none pointer-events-none text-center h-auto p-1"
            value={value}
          />
          <button className="text-white/90" onClick={onIncrement}>
            <GoPlus className="size-4" />
          </button>
        </div>
      </div>
    </OptionContainer>
  );
};
