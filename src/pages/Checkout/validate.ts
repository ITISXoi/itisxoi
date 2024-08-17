import { REGEX_PHONE_NUMBER_CREATE_ACADEMY } from "../../utils/regex";
import {
  PHONE_INVALID_PHONE_NUMBER,
  REQUIRED,
} from "../../utils/error_message";
import * as yup from "yup";

export const CheckoutSchema = yup.object().shape({
  firstName: yup.string().required(REQUIRED),
  lastName: yup.string().required(REQUIRED),
  email: yup
    .string()
    .email("Invalid email format!")
    .nonNullable()
    .required(REQUIRED),
  phone: yup
    .string()
    .nonNullable()
    .matches(REGEX_PHONE_NUMBER_CREATE_ACADEMY, PHONE_INVALID_PHONE_NUMBER)
    .required(REQUIRED),
  address: yup.string().nullable(),
  cardNumber: yup.string().required(REQUIRED),
  nameOnCard: yup.string().required(REQUIRED),
  expireDate: yup.string().required(REQUIRED),
  secureCode: yup.string().required(REQUIRED),
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
