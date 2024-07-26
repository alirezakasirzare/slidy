type Props = {
  children: React.ReactNode;
};

export const OptionContainer = ({ children }: Props) => {
  return (
    <div className="py-2 px-3 bg-white/5 rounded-md mt-2 first-of-type:mt-0">
      {children}
    </div>
  );
};
