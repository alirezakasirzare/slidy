export type Element<T, J, V> = {
  text: string;
  name: T;
  icon: React.ReactElement;
  options: ElementOption<J, V>[];
};

export type ElementOption<T, J> = {
  text: string;
  name: T;
  value: ElementOptionValue<J>;
};

export type ElementOptionValue<T> = "number" | { text: string; value: T }[];
