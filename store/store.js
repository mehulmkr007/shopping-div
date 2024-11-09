import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import wishListSlice from "./slices/wishListSlice";
import { configureStore } from "@reduxjs/toolkit"; 
import { apiMiddleware } from "./Middleware/api";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cartItems: cartSlice,
    wishList: wishListSlice,
  },
  middleware:(defaultMiddleware)=> defaultMiddleware().concat(apiMiddleware)
});
