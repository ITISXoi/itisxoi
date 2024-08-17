import { useState } from "react";
import IconCart from "../../assets/icons/IconCart";
import Logo from "../../assets/icons/Logo";
import { Button } from "../../ui/button";
import ListTab from "./ListTab";
import ListTabMobile from "./ListTabMobile";

const Header = () => {
  const [selected, setSelected] = useState("PD Videos");

  return (
    <header className="flex w-full items-center justify-center px-0 md:px-4 shadow-2xl z-10 relative">
      <div className="flex justify-between items-center container">
        <Logo />
        <div className="flex flex-row gap-8 justify-between items-center">
          <div className="hidden lg:block">
            <ListTab selected={selected} setSelected={setSelected} />
          </div>
          <div className="block lg:hidden">
            <ListTabMobile selected={selected} setSelected={setSelected} />
          </div>
          <div className="hidden lg:block">
            <IconCart />
          </div>
          <div className="py-4">
            <Button>Sign In</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
