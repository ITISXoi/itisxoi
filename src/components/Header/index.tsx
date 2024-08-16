import IconCart from "../../assets/icons/IconCart";
import Logo from "../../assets/icons/Logo";
import { Button } from "../../ui/button";
import ListTab from "./ListTab";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-center px-4 shadow-2xl z-10">
      <div className="flex justify-between container">
        <Logo />
        <div className="flex flex-row gap-8 justify-between">
          <ListTab />
          <IconCart />
          <div className="py-4">
            <Button>Sign In</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
