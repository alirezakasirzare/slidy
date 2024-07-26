import { RowElementResult } from "~/components/elements/row-element";

// slide
export type AppElementResult = RowElementResult;

export type SlideName = "row";

export type Slide = {
  name: string;
  childrens: AppElementResult[];
};

// elements
export type Element<TName extends SlideName, TOption> = {
  text: string;
  name: TName;
  icon: React.ReactElement;
  options: TOption[];
};

export type ElementOptionNumber<TName> = {
  text: string;
  name: TName;
  type: "number";
  min?: number;
  max?: number;
};

export type ElementOptionText<TName> = {
  text: string;
  name: TName;
  type: "text";
};

export type ElementOptionSelect<TName, TValue> = {
  text: string;
  name: TName;
  type: "select";
  items: { text: string; value: TValue }[];
};

export type ElementOption<TName, TValue> =
  | ElementOptionNumber<TName>
  | ElementOptionText<TName>
  | ElementOptionSelect<TName, TValue>;
