import { cn } from "../../utils/helper";

interface Props {
  title: string;
  choosing: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const TabMobile = (props: Props) => {
  const { title, choosing, setSelected } = props;
  const handleClick = () => {
    setSelected(title);
  };
  return (
    <div
      className={cn(
        "text-secondary-900 text-lg font-base cursor-pointer py-2 hover:font-bold",
        choosing
          ? "font-bold border-r-4 border-secondary-900 mt-1"
          : "hover:text-secondary-1000"
      )}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default TabMobile;
