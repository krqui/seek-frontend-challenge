import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface IUser {
  userName: string;
  email: string;
  token: string | null;
}

const initialState: IUser = {
  userName: "",
  email: "",
  token: null,
};

export const login = createAsyncThunk(
  "user/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.post("/api/login", { email, password });
      const { userName, token } = response.data;

      thunkAPI.dispatch(setData({ userName, email }));
      thunkAPI.dispatch(setToken(token));

      return token;
    } catch {
      return thunkAPI.rejectWithValue("Login failed");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (
      state,
      action: PayloadAction<Pick<IUser, "userName" | "email">>
    ) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.token = null;
    });
  },
});

export const { setToken, clearToken, setData } = userSlice.actions;

export default userSlice.reducer;
