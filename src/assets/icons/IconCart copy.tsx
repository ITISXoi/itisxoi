import icon_list from "../svg/list.svg";
import { IconType } from "../type";

function IconList(props: IconType) {
  const { size = 16, color = "black" } = props;

  return (
    <img src={icon_list} color={color} width={size} height={size} alt={""} />
  );
}

export default IconList;
