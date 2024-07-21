import { BoxIcon } from "lucide-react";
import { Element, ElementOption } from "~/types";

const justifyOption: ElementOption = {
  text: "Justify",
  name: "justify",
  value: [
    {
      text: "Start",
      value: "start",
    },
    {
      text: "Center",
      value: "center",
    },
    {
      text: "End",
      value: "end",
    },
  ],
};

const alignOption: ElementOption = {
  text: "Align",
  name: "align",
  value: [
    {
      text: "Start",
      value: "start",
    },
    {
      text: "Center",
      value: "center",
    },
    {
      text: "End",
      value: "end",
    },
  ],
};

const gapOption: ElementOption = {
  text: "Gap",
  name: "gap",
  value: "number",
};

const rowElementOptions: ElementOption[] = [
  justifyOption,
  alignOption,
  gapOption,
];

export const rowElementConfig: Element = {
  text: "Row",
  name: "row",
  icon: <BoxIcon />,
  options: rowElementOptions,
};

export const RowElement = () => {
  return <div>row element</div>;
};
