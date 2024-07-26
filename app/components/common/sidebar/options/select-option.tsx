import { ElementOptionSelect } from "~/types";
import { OptionContainer } from "./option-container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

type Props = {
  option: ElementOptionSelect<string, string>;
  value: string;
  onChange: (newValue: string) => void;
};

export const SelectOption = ({ option, value, onChange }: Props) => {
  return (
    <OptionContainer>
      <div className="flex items-center justify-between">
        <span>{option.text}</span>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="w-[90px] bg-white/10 border-none h-auto p-1 pl-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {option.items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.text}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </OptionContainer>
  );
};
