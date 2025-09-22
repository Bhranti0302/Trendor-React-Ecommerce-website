import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: JSON.parse(localStorage.getItem("orders")) || [],
  lastOrder: JSON.parse(localStorage.getItem("lastOrder")) || null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      state.lastOrder = action.payload;

      localStorage.setItem("orders", JSON.stringify(state.orders));
      localStorage.setItem("lastOrder", JSON.stringify(state.lastOrder));
    },
    clearOrders: (state) => {
      state.orders = [];
      state.lastOrder = null;
      localStorage.removeItem("orders");
      localStorage.removeItem("lastOrder");
    },
  },
});

export const { addOrder, clearOrders } = orderSlice.actions;

// Selector
export const getOrders = (state) => state.orders.orders;

export default orderSlice.reducer;
