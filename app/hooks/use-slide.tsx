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
    children: [],
  });

  // add child
  const addChild = (newChild: AppElementResult) => {
    setSlide((prev) => ({ ...prev, children: [...prev.children, newChild] }));
  };

  // change option
  const changeOption = (
    path: string[],
    name: string,
    value: string | number
  ) => {
    setSlide((prev) => {
      const newSlide = { ...prev };
      newSlide.children = prev.children.map((child) => {
        const newChild = { ...child };

        if (newChild.id === path[0]) {
          // @ts-ignore
          newChild.options[name] = value;
        }

        return newChild;
      });

      return newSlide;
    });
  };

  return { slide, addChild, activeElement, setActiveElement, changeOption };
};
