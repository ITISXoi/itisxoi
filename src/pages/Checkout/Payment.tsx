import { Control, UseFormRegister } from "react-hook-form";
import FormWithTitle from "../../ui/input/FormWithLabel";
import { CheckoutSchemaT } from "./validate";
import moment from "moment";

interface Props {
  control: Control<CheckoutSchemaT, any>;
  register: UseFormRegister<CheckoutSchemaT>;
}

const Payment = (props: Props) => {
  const { control, register } = props;
  return (
    <div className="pt-4">
      <p className="font-bold text-[30px]">Payment</p>
      <div className="flex flex-row w-full gap-4">
        <div className="w-[50%]">
          <FormWithTitle
            control={control}
            {...register("cardNumber")}
            title="Card Number"
            placeholder="XXXX XXXX XXXX XXXX"
            className="w-full"
          />
        </div>
        <div className="w-[50%]">
          <FormWithTitle
            control={control}
            {...register("nameOnCard")}
            title="Name on Card"
            placeholder="e.g DAVID NGUYEN"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-row w-full gap-4">
        <div className="w-[50%]">
          <FormWithTitle
            type="date"
            min={moment(new Date(Date.now() + 86400000)).format("YYYY-MM-DD")}
            {...register("expireDate")}
            control={control}
            title="Expire Date"
            placeholder="Input your email..."
            className="w-full"
          />
        </div>
        <div className="w-[50%]">
          <FormWithTitle
            {...register("secureCode")}
            control={control}
            title="Secure code"
            placeholder="CCV"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
