import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const userStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
    },
  });
};

export type UserStore = ReturnType<typeof userStore>;
export type RootUserState = ReturnType<UserStore["getState"]>;
export type UserDispatch = UserStore["dispatch"];
