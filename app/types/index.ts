export type Element<T, J> = {
  text: string;
  name: T;
  icon: React.ReactElement;
  options: ElementOption<J>[];
};

export type ElementOption<T> = {
  text: string;
  name: T;
  value: ElementOptionValue;
};

export type ElementOptionValue = "number" | { text: string; value: string }[];
