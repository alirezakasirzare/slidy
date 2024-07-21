export type Element<TName, TOption> = {
  text: string;
  name: TName;
  icon: React.ReactElement;
  options: TOption[];
};

export type ElementOption<TName, TValue> = {
  text: string;
  name: TName;
  value: TValue;
};

export type ElementOptionSelect<TValue> = { text: string; value: TValue }[];
export type ElementOptionNumber = "number";
