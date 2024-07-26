import { GoArrowLeft } from "react-icons/go";

import { useSlide } from "~/hooks/use-slide";
import {
  getElementConfigByName,
  getElementResultByIdFromChildrens,
} from "~/lib/utils";

export const SidebarDetail = () => {
  const { activeElement, slide, setActiveElement } = useSlide();

  const elementResult = getElementResultByIdFromChildrens(
    slide.childrens,
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
    </div>
  );
};
