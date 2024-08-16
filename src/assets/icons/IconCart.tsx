import icon_cart from "../svg/cart.svg";
import { IconType } from "../type";

function IconCart(props: IconType) {
  const { size = 25, color = "black" } = props;

  return (
    <img src={icon_cart} color={color} width={size} height={size} alt={""} />
  );
}

export default IconCart;
