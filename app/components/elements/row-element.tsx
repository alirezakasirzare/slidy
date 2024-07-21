import { BoxIcon } from "lucide-react";
import { Element } from "~/types";

export const rowElementConfig: Element<
  "row",
  "justify" | "align" | "gap",
  "start" | "center" | "end"
> = {
  text: "Row",
  name: "row",
  icon: <BoxIcon />,
  options: [
    {
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
    },
    {
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
    },
    {
      text: "Gap",
      name: "gap",
      value: "number",
    },
  ],
};

export const RowElement = () => {
  return <div>row element</div>;
};
