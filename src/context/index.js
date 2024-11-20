import { configureStore } from "@reduxjs/toolkit";
import { modalTypeSlice } from "./modalType";
import languageReducer from "./languageSlice";

const store = configureStore({
  reducer: {
    modalType: modalTypeSlice.reducer,
    language: languageReducer
  },
});

export default store;
