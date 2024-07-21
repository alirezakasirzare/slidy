export type Element = {
  text: string;
  name: string;
  icon: React.ReactElement;
  options: ElementOption[];
};

export type ElementOption = {
  text: string;
  name: string;
  value: ElementOptionValue;
};

export type ElementOptionValue = "number" | { text: string; value: string }[];
