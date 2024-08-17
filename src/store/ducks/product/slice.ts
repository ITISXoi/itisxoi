import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

interface ProductT {
  key: number;
  name: string;
  price: number;
}

export interface IProductStore {
  listProduct: ProductT[];
  promotionCode: string;
}

const initialState: IProductStore = {
  listProduct: [],
  promotionCode: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setListProduct: (state, action: PayloadAction<ProductT[]>) => {
      state.listProduct = action.payload;
    },
    setPromotionCode: (state, action: PayloadAction<string>) => {
      state.promotionCode = action.payload;
    },
  },
});

export const getListProduct = (state: RootState) => state.product.listProduct;
export const getPromotionCode = (state: RootState) =>
  state.product.promotionCode;

export const { setListProduct, setPromotionCode } = productSlice.actions;

export default productSlice.reducer;
