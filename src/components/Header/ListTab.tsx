import { useState } from "react";
import { listTab } from "../../utils/contants";
import Tab from "./Tab";

const ListTab = () => {
  const [selected, setSelected] = useState("PD Videos");
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
