import { BoxIcon } from "lucide-react";
import { cn } from "~/lib/utils";
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

export type RowElementResult = {
  type: "row";
  options: {
    justify: "start" | "center" | "end";
    align: "start" | "center" | "end";
    gap: number;
  };
};

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

type Props = {
  result: RowElementResult;
};
export const RowElement = ({ result }: Props) => {
  return (
    <div
      className={cn(
        "border-2 border-blue-500 flex",
        // justify
        result.options.justify === "start" && "justify-start",
        result.options.justify === "center" && "justify-center",
        result.options.justify === "end" && "justify-end",

        // align
        result.options.align === "start" && "items-start",
        result.options.align === "center" && "items-center",
        result.options.align === "end" && "items-end"
      )}
      style={{ gap: result.options.gap }}
    >
      <div>row element</div>
      <div>row element</div>
    </div>
  );
};
