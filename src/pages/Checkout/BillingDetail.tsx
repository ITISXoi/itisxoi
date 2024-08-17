import { Control, UseFormRegister } from "react-hook-form";
import FormWithTitle from "../../ui/input/FormWithLabel";
import { CheckoutSchemaT } from "./validate";

interface Props {
  control: Control<CheckoutSchemaT, any>;
  register: UseFormRegister<CheckoutSchemaT>;
}

const BillingDetail = (props: Props) => {
  const { control, register } = props;

  return (
    <div className="border-b pb-4 w-full">
      <p className="font-bold text-[30px]">Billing Detail</p>
      <div className="flex flex-row w-[100%] gap-4">
        <div className="w-[50%]">
          <FormWithTitle
            control={control}
            {...register("firstName")}
            title="First Name"
            placeholder="Input your first name..."
            className="w-full"
          />
        </div>
        <div className="w-[50%]">
          <FormWithTitle
            control={control}
            {...register("lastName")}
            title="Last Name"
            placeholder="Input your last name..."
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-row w-full gap-4">
        <div className="w-[50%]">
          <FormWithTitle
            {...register("email")}
            control={control}
            title="Email"
            placeholder="Input your email..."
            className="w-full"
          />
        </div>
        <div className="w-[50%]">
          <FormWithTitle
            {...register("phone")}
            control={control}
            title="Phone"
            placeholder="Input your phone..."
            className="w-full"
          />
        </div>
      </div>
      <FormWithTitle
        {...register("address")}
        control={control}
        title="Address (Optional)"
        placeholder="Input your address..."
        className="w-full"
      />
    </div>
  );
};

export default BillingDetail;
