import ic_clear from "../svg/ic_clear.svg";
import { IconType } from "../type";

function IconClear(props: IconType) {
  const { size = 16, color = "black" } = props;

  return (
    <img src={ic_clear} color={color} width={size} height={size} alt={""} />
  );
}

export default IconClear;
