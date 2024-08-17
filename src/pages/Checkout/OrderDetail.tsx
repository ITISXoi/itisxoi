/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../ui/button";
import Input from "../../ui/input/input";
import {
  getListProduct,
  getPromotionCode,
  setPromotionCode,
} from "../../store/ducks/product/slice";
import { useEffect, useState } from "react";

const OrderDetail = () => {
  const dispatch = useDispatch();
  const listProduct = useSelector(getListProduct);
  const code = useSelector(getPromotionCode);
  const [price, setPrice] = useState(0);
  const [promotionCode, setCode] = useState(code);
  const [discount, setDiscount] = useState<string | number>("0");

  const handleChangeCode = (code: string) => {
    setCode(code);
  };

  const handleApplyCode = () => {
    if (promotionCode === "EVO") {
      setDiscount((price * 0.06).toFixed(2));
      dispatch(setPromotionCode(promotionCode));
    }
  };

  useEffect(() => {
    const totalPrice = listProduct.reduce(
      (sum, product) => sum + product.price,
      0
    );
    setPrice(totalPrice);
  }, [listProduct]);

  useEffect(() => {
    if (code === "EVO") {
      setDiscount((price * 0.06).toFixed(2));
    }
  }, [code, price]);

  return (
    <div className="flex flex-col lg:pl-10 gap-4 w-[100%] lg:w-[35%] min-w-[400px]">
      <div className="flex flex-row items-center justify-between border-b pb-4">
        <p className="font-bold text-[30px]">Order Details</p>
        <p className="font-medium text-xl">{listProduct.length} items</p>
      </div>
      {listProduct.map((item) => (
        <div
          key={item.key}
          className="flex flex-row items-center justify-between pt-4"
        >
          <p className="font-medium text-xl">{item.name}</p>
          <p className="font-bold text-xl">${item.price}</p>
        </div>
      ))}
      <div className="border-t pt-4">
        <p className="font-medium text-xl">Add Promotion Code</p>
        <div className="flex flex-row pt-4 items-center">
          <Input
            placeholder="Promotion Code"
            value={promotionCode}
            className="w-[70%]"
            onChange={(e) => handleChangeCode(e.target.value)}
          />
          <Button
            variant={"blue"}
            className="w-[30%]"
            onClick={handleApplyCode}
          >
            Apply
          </Button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between pt-4">
        <p className="font-medium text-xl text-alpha-dark">Subtotal</p>
        <p className="font-bold text-xl">${price}</p>
      </div>
      <div className="flex flex-row items-center justify-between border-b pb-4">
        <p className="font-medium text-xl text-alpha-dark">Discount</p>
        <p className="font-bold text-xl">-${Number(discount)}</p>
      </div>
      <div className="flex flex-row items-center justify-between pt-4">
        <p className="font-bold text-xl">TOTAL</p>
        <p className="font-bold text-xl">${price - Number(discount)}</p>
      </div>
      <Button type="submit" variant={"blue"}>
        Place Order
      </Button>
      <p>
        I've read and accept the{" "}
        <span className="text-secondary-1000 underline cursor-pointer">
          Terms
        </span>
      </p>
    </div>
  );
};

export default OrderDetail;
