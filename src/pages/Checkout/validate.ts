import {
  CARD_NUMBER,
  REGEX_PHONE_NUMBER_CREATE_ACADEMY,
  SECURE_CODE,
} from "../../utils/regex";
import {
  CARD_INVALID,
  PHONE_INVALID_PHONE_NUMBER,
  REQUIRED,
  SECURE_CODE_INVALID,
} from "../../utils/error_message";
import * as yup from "yup";
import moment from "moment";

export const CheckoutSchema = yup.object().shape({
  firstName: yup.string().required(REQUIRED),
  lastName: yup.string().required(REQUIRED),
  email: yup.string().email("Invalid email format!").required(REQUIRED),
  phone: yup
    .string()
    .nonNullable()
    .matches(REGEX_PHONE_NUMBER_CREATE_ACADEMY, PHONE_INVALID_PHONE_NUMBER)
    .required(REQUIRED),
  address: yup.string().nullable(),
  cardNumber: yup
    .string()
    .matches(CARD_NUMBER, CARD_INVALID)
    .required(REQUIRED),
  nameOnCard: yup.string().required(REQUIRED),
  expireDate: yup
    .string()
    .test(
      "not-in-future",
      "Expire Date can't before Today!",
      (value) => !value || !moment(value).isBefore(moment())
    )
    .required("This field is required.")
    .required(REQUIRED),
  secureCode: yup
    .string()
    .matches(SECURE_CODE, SECURE_CODE_INVALID)
    .required(REQUIRED),
});

export type CheckoutSchemaT = {
  address?: string | null | undefined;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cardNumber: string;
  nameOnCard: string;
  expireDate: string;
  secureCode: string;
};
