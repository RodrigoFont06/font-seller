import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    products: []
  },
});

export default store;