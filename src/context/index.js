import { configureStore } from "@reduxjs/toolkit";
import { modalTypeSlice } from "./modalType";

const store = configureStore({
  reducer: {
    modalType: modalTypeSlice.reducer,
  },
});

export default store;
