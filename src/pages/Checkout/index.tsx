import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import BillingDetail from "./BillingDetail";
import OrderDetail from "./OrderDetail";
import Payment from "./Payment";
import { Heading } from "./styled";
import { CheckoutSchema, CheckoutSchemaT } from "./validate";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, register } = useForm<CheckoutSchemaT>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      cardNumber: "",
      nameOnCard: "",
      expireDate: "",
      secureCode: "",
    },
    resolver: yupResolver(CheckoutSchema),
    mode: "onChange",
  });

  const onSubmit = (data: CheckoutSchemaT) => {
    console.log("data:", data);
    navigate("/complete");
  };

  return (
    <div className="bg-cart bg-auto w-full min-h-80 px-4 md:px-10 pt-32 pb-[400px]">
      <div className="bg-white w-full rounded-sm shadow-xl container relative">
        <Heading className="bg-secondary-1000 px-12 sm:px-20 w-fit rounded-3xl text-white font-bold text-[30px] md:text-[40px] outline-none absolute -top-6 left-[20%] sm:left-[25%] lg:left-[38%]">
          Check out
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pt-20 px-2 md:px-6 pb-10 w-full">
            <div className="flex flex-col w-full lg:flex-row">
              <div className="flex flex-col lg:pr-10 lg:border-r w-[100%] lg:w-[65%]">
                <BillingDetail control={control} register={register} />
                <Payment control={control} register={register} />
              </div>
              <OrderDetail />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
