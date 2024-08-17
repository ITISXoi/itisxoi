import { Button } from "../../ui/button";
import Input from "../../ui/input/input";

const OrderDetail = () => {
  return (
    <div className="flex flex-col lg:pl-10 gap-4 w-[100%] lg:w-[35%] min-w-[400px]">
      <div className="flex flex-row items-center justify-between border-b pb-4">
        <p className="font-bold text-[30px]">Order Details</p>
        <p className="font-medium text-xl">3 items</p>
      </div>
      <div className="flex flex-row items-center justify-between pt-4">
        <p className="font-medium text-xl">PD Videos - Grade 1</p>
        <p className="font-bold text-xl">$100.00</p>
      </div>
      <div className="flex flex-row items-center justify-between pt-4">
        <p className="font-medium text-xl">Textbook 1</p>
        <p className="font-bold text-xl">$100.00</p>
      </div>
      <div className="flex flex-row items-center justify-between pt-4">
        <p className="font-medium text-xl">Textbook 2</p>
        <p className="font-bold text-xl">$100.00</p>
      </div>
      <div className="border-t pt-4">
        <p className="font-medium text-xl">Add Promotion Code</p>
        <div className="flex flex-row pt-4 items-center">
          <Input placeholder="Promotion Code" className="w-[70%]" />
          <Button variant={"blue"} className="w-[30%]">
            Apply
          </Button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between pt-4">
        <p className="font-medium text-xl text-alpha-dark">Subtotal</p>
        <p className="font-bold text-xl">$100.00</p>
      </div>
      <div className="flex flex-row items-center justify-between border-b pb-4">
        <p className="font-medium text-xl text-alpha-dark">Discount</p>
        <p className="font-bold text-xl">-$20.00</p>
      </div>
      <div className="flex flex-row items-center justify-between pt-4">
        <p className="font-bold text-xl">TOTAL</p>
        <p className="font-bold text-xl">$100.00</p>
      </div>
      <Button type="submit" variant={"blue"}>
        Place Order
      </Button>
      <p>
        I've read and accept the{" "}
        <span className="text-secondary-1000 underline cursor-pointer">Terms</span>
      </p>
    </div>
  );
};

export default OrderDetail;
