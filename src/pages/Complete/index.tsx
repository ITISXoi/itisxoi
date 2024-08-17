import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { IMAGES } from "../../utils/image";

const Complete = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center pt-40 pb-[500px]">
      <img src={IMAGES.frame.frame} alt="frame" />
      <p className="font-bold text-[40px]">Thank you for your purchase!</p>
      <p className="font-normal text-[25px]">
        Your order number is #STE1587975295
      </p>
      <p className="ont-normal text-[25px]">
        We will email you an order confirmation with details
      </p>
      <Button variant={"blue"} size={"xl"} onClick={handleClick}>
        <p className="font-bold text-3xl px-10">Back to Homepage</p>
      </Button>
    </div>
  );
};

export default Complete;
