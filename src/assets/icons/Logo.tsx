import { IMAGES } from "../../utils/image";
import { IconType } from "../type";

function Logo(props: IconType) {
  const { size = 10 } = props;

  return (
    <img
      className="py-4 w-[150px] h-[60px] md:w-[245px]"
      alt="logo"
      height={size}
      src={IMAGES.logo.logo_starplus}
    />
  );
}

export default Logo;
