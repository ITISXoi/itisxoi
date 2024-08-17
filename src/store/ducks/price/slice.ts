import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../..';

interface User {
  id: string;
}

export interface IAboutStore {
  dataSignUp: any;
  verifyToken: string;
  // userData: User;
}

const initialState: IAboutStore = {
  dataSignUp: null,
  // userData: JSON.parse(user),
  verifyToken: '',
};

export const investorSlice = createSlice({
  name: 'investor',
  initialState,
  reducers: {
    setDataSignUp: (state, action: PayloadAction<any | null>) => {
      return {
        ...state,
        dataSignUp: action.payload,
      };
    },
    setVerifyToken: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        verifyToken: action.payload,
      };
    },
    setUser: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        userData: action.payload,
      };
    },
  },
});

export const getDataSignUp = (state: RootState) => state.investor.dataSignUp;
// export const getUser = (state: RootState) => state.investor.userData;

export const getVerifyToken = (state: RootState) => state.investor.verifyToken;

export const { setDataSignUp, setVerifyToken, setUser } = investorSlice.actions;

export default investorSlice.reducer;
