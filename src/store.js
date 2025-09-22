// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/Cart/cartSlice";
import wishlistReducer from "./features/Wishlist/wishlistSlice";
import userReducer from "./features/user/userSlice";
import orderReducer from "./features/order/orderSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    user: userReducer,
    orders: orderReducer,
  },
});

export default store;
