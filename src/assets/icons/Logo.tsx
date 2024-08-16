import { IMAGES } from "../../utils/image";
import { IconType } from "../type";

function Logo(props: IconType) {
  const { size = 16 } = props;

  return <img className="py-4" alt="logo" height={size} src={IMAGES.logo.logo_starplus} />;
}

export default Logo;
