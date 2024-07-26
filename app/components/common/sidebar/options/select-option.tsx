import { ElementOptionSelect } from "~/types";
import { OptionContainer } from "./option-container";

type Props = {
  option: ElementOptionSelect<unknown, unknown>;
};

export const SelectOption = ({ option }: Props) => {
  return (
    <OptionContainer>
      <div className="flex items-center justify-between">
        <span>{option.text}</span>
        {/* <Input /> */}
      </div>
    </OptionContainer>
  );
};
