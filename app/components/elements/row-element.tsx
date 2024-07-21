import { BoxIcon } from "lucide-react";
import {
  Element,
  ElementOption,
  ElementOptionNumber,
  ElementOptionSelect,
} from "~/types";

interface JustifyOption
  extends ElementOption<
    "justify",
    ElementOptionSelect<"start" | "center" | "end">
  > {}

interface AlignOption
  extends ElementOption<
    "align",
    ElementOptionSelect<"start" | "center" | "end">
  > {}

interface GapOption extends ElementOption<"gap", ElementOptionNumber> {}

export type RowElementConfig = Element<
  "row",
  JustifyOption | AlignOption | GapOption
>;

export const rowElementConfig: RowElementConfig = {
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
