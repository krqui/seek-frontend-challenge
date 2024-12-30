import { useDispatch, useSelector, useStore } from "react-redux";
import type {
  UserDispatch,
  UserStore,
  RootUserState,
} from "./features/user/userStore";

export const useUserDispatch = useDispatch.withTypes<UserDispatch>();
export const useUserSelector = useSelector.withTypes<RootUserState>();
export const useUserStore = useStore.withTypes<UserStore>();
