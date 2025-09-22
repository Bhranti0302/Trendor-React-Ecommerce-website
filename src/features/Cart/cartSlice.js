import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  userId: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
    addItem(state, action) {
      const item = state.cart.find(
        (i) => i.productId === action.payload.productId
      );
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.unitPrice,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((i) => i.productId !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((i) => i.productId === action.payload);
      if (!item) return;
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((i) => i.productId === action.payload);
      if (!item) return;
      item.quantity--;
      if (item.quantity <= 0) {
        state.cart = state.cart.filter((i) => i.productId !== action.payload);
      } else {
        item.totalPrice = item.quantity * item.unitPrice;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart(state) {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  setUserId,
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// Selectors
export const getCart = (state) => state.cart.cart;
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.productId === id)?.quantity ?? 0;
