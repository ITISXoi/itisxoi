import { useState } from "react";
import IconList from "../../assets/icons/IconCart copy";
import { listTab } from "../../utils/contants";
import TabMobile from "./TabMobile";
import IconClear from "../../assets/icons/IconClear";
import { Show } from "../../ui/show";
import IconCart from "../../assets/icons/IconCart";

interface Props {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const ListTabMobile = (props: Props) => {
  const { selected, setSelected } = props;
  const [show, setShow] = useState(false);
  return (
    <>
      <Show when={!show}>
        <div className="cursor-pointer" onClick={() => setShow(true)}>
          <IconList size={20} />
        </div>
      </Show>
      <Show when={show}>
        <div className="cursor-pointer" onClick={() => setShow(false)}>
          <IconClear size={25} />
        </div>
      </Show>
      <Show when={show}>
        <div className="absolute right-40 z-100 mt-2 w-56 p-4 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {listTab.map((item: { title: string; link: string }) => (
            <TabMobile
              key={item.title}
              title={item.title}
              choosing={selected === item.title}
              setSelected={setSelected}
            />
          ))}
          <IconCart />
        </div>
      </Show>
    </>
  );
};

export default ListTabMobile;
