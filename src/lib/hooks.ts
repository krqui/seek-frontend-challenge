import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "./store";
import type {
  UserDispatch,
  UserStore,
  RootUserState,
} from "./features/user/userStore";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export const useUserDispatch = useDispatch.withTypes<UserDispatch>();
export const useUserSelector = useSelector.withTypes<RootUserState>();
export const useUserStore = useStore.withTypes<UserStore>();
