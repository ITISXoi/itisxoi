import { listTab } from "../../utils/contants";
import Tab from "./Tab";

interface Props {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const ListTab = (props: Props) => {
  const { selected, setSelected } = props;
  return (
    <div className="flex items-center justify-between gap-8">
      {listTab.map((item: { title: string; link: string }) => (
        <Tab
          key={item.title}
          title={item.title}
          choosing={selected === item.title}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default ListTab;
