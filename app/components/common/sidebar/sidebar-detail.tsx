import { GoArrowLeft } from "react-icons/go";
import { Fragment } from "react/jsx-runtime";

import { useSlide } from "~/hooks/use-slide";
import {
  getElementConfigByName,
  getElementResultByIdFromChildren,
} from "~/lib/utils";
import { SelectOption } from "./options/select-option";
import { NumberOption } from "./options/number-option";

export const SidebarDetail = () => {
  const { activeElement, slide, setActiveElement, changeOption } = useSlide();

  const elementResult = getElementResultByIdFromChildren(
    slide.children,
    activeElement[0]
  );

  if (!elementResult) {
    return null;
  }

  const elementConfig = getElementConfigByName(elementResult.type);

  if (!elementConfig) {
    return null;
  }

  const onBack = () => {
    setActiveElement([]);
  };

  return (
    <div>
      {/* head */}
      <div className="flex items-center gap-x-2">
        <button onClick={onBack}>
          <GoArrowLeft className="size-4 text-white/90" />
        </button>
        <div className="leading-[0] text-white/90">{elementConfig.text}</div>
      </div>

      {/* options */}
      <div className="mt-4">
        {elementConfig.options.map((option, i) => (
          <Fragment key={i}>
            {option.type === "number" && (
              <NumberOption
                option={option}
                value={elementResult.options[option.name]}
                onChange={(newValue: number) => {
                  changeOption(activeElement, option.name, newValue);
                }}
              />
            )}
            {option.type === "select" && (
              <SelectOption
                option={option}
                value={elementResult.options[option.name]}
                onChange={(newValue: string) => {
                  changeOption(activeElement, option.name, newValue);
                }}
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
