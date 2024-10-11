import { configureStore } from "@reduxjs/toolkit";
import camperReducer from "./slice/camperSlice";

export const store = configureStore({
  reducer: {
    campers: camperReducer,
  },
});
