import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { rowElementConfig } from "~/components/elements/row-element";
import { AppElementResult, SlideName } from "~/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// get element config with name
export const getElementConfigByName = (name: SlideName) => {
  if (name === "row") {
    return rowElementConfig;
  }
};

// get element result by id from childrens
export const getElementResultByIdFromChildrens = (
  childrens: AppElementResult[],
  id: string
) => {
  return childrens.find((children) => children.id === id);
};
