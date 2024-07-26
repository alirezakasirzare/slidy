import { useLocalStorage } from "usehooks-ts";

import { AppElementResult, Slide } from "~/types";

// hook for manage slide
export const useSlide = () => {
  const [activeElement, setActiveElement] = useLocalStorage<string[]>(
    "active-element",
    []
  );

  const [slide, setSlide] = useLocalStorage<Slide>("slide", {
    name: "test",
    childrens: [],
  });

  // add child
  const addChild = (newChild: AppElementResult) => {
    setSlide((prev) => ({ ...prev, childrens: [...prev.childrens, newChild] }));
  };

  return { slide, addChild, activeElement, setActiveElement };
};
