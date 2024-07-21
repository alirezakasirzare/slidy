import { BoxIcon } from "lucide-react";
import { Element, ElementOption } from "~/types";

const justifyOption: ElementOption<"justify"> = {
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

const alignOption: ElementOption<"align"> = {
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

const gapOption: ElementOption<"gap"> = {
  text: "Gap",
  name: "gap",
  value: "number",
};

export const rowElementConfig: Element<"row", "justify" | "align" | "gap"> = {
  text: "Row",
  name: "row",
  icon: <BoxIcon />,
  options: [justifyOption, alignOption, gapOption],
};

export const RowElement = () => {
  return <div>row element</div>;
};
