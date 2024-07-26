import { BoxIcon } from "lucide-react";
import { v4 as uuid } from "uuid";
import { useSlide } from "~/hooks/use-slide";

import { cn } from "~/lib/utils";
import { Element, ElementOptionNumber, ElementOptionSelect } from "~/types";

interface JustifyOption
  extends ElementOptionSelect<
    "justify",
    "start" | "center" | "end" | "between"
  > {}

interface AlignOption
  extends ElementOptionSelect<"align", "start" | "center" | "end"> {}

interface GapOption extends ElementOptionNumber<"gap"> {}

export type RowElementConfig = Element<
  "row",
  JustifyOption | AlignOption | GapOption
>;

export type RowElementResult = {
  id: string;
  type: "row";
  options: {
    justify: "start" | "center" | "end" | "between";
    align: "start" | "center" | "end";
    gap: number;
  };
};

export const getDefaultRowElementResult = (): RowElementResult => {
  const id = uuid();
  return {
    id,
    type: "row",
    options: {
      justify: "center",
      align: "start",
      gap: 4,
    },
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
      type: "select",
      items: [
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
        {
          text: "Between",
          value: "between",
        },
      ],
    },
    {
      text: "Align",
      name: "align",
      type: "select",
      items: [
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
      type: "number",
      min: 0,
    },
  ],
};

type Props = {
  result: RowElementResult;
};
export const RowElement = ({ result }: Props) => {
  const { activeElement } = useSlide();
  const isActive = activeElement.includes(result.id);
  return (
    <div
      className={cn(
        "flex text-white/90",
        // active element style
        isActive && "[box-shadow:0px_0px_0px_2px_rgba(59,130,246,1)]",

        // justify
        result.options.justify === "start" && "justify-start",
        result.options.justify === "center" && "justify-center",
        result.options.justify === "end" && "justify-end",
        result.options.justify === "between" && "justify-between",

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
