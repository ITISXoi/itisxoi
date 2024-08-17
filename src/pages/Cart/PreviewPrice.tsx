import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import Input from "../../ui/input/input";

interface Props {
  price: number;
  handleChangeCode: (code: string) => void;
  handleApplyCode: () => void;
  discount: string | number;
}

const PreviewPrice = (props: Props) => {
  const { price, handleChangeCode, handleApplyCode, discount } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/checkout");
  };
  return (
    <>
      <div className="flex flex-col gap-4 px-4 pb-10">
        <div className="bg-light flex justify-between lg:justify-end py-2 px-6 lg:px-28 gap-20">
          <div className="flex flex-row justify-between items-center w-[100%] lg:w-72">
            <p className="text-xl">Subtotal</p>
            <p className="font-bold text-2xl">${price}</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between py-2 px-6 lg:px-28 gap-4 lg:gap-20">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <p className="text-xl">Apply Promotion Code</p>
            <div className="flex flex-row gap-4 items-center">
              <Input
                placeholder="Promotion Code"
                className="w-[300px]"
                onChange={(e) => handleChangeCode(e.target.value)}
              />
              <Button variant={"blue"} onClick={handleApplyCode}>
                Apply Code
              </Button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-[100%] lg:w-72">
            <p className="text-xl">Discount</p>
            <p className="font-bold text-2xl">-${Number(discount)}</p>
          </div>
        </div>
        <div className="bg-light flex justify-between lg:justify-end py-2 px-6 lg:px-28 gap-20">
          <div className="flex flex-row justify-between items-center w-[100%] lg:w-72">
            <p className="text-xl">GRAND TOTAL</p>
            <p className="font-bold text-2xl">${price - Number(discount)}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center pb-10 px-4 md:pr-10">
        <Button
          className="w-[100%] md:w-[200px] text-lg"
          variant={"blue"}
          onClick={handleClick}
        >
          Check out
        </Button>
      </div>
    </>
  );
};

export default PreviewPrice;
