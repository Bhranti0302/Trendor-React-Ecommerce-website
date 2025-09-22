import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = state.wishlist.find(
        (i) => i.productId === action.payload.productId
      );
      if (!item) state.wishlist.push(action.payload);
    },
    deleteItem(state, action) {
      state.wishlist = state.wishlist.filter(
        (i) => i.productId !== action.payload
      );
    },
    clearWishlist(state) {
      state.wishlist = [];
    },
    moveToCart(state, action) {
      state.wishlist = state.wishlist.filter(
        (i) => i.productId !== action.payload.productId
      );
    },
  },
});

export const { addItem, deleteItem, clearWishlist, moveToCart } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;

export const getWishList = (state) => state.wishlist.wishlist;
