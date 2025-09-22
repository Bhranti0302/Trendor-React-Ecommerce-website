import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { addOrder } from "./orderSlice";
import { clearCart } from "../Cart/cartSlice";

function Order() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const DELIVERY_CHARGE = 5;

  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  const handleConfirmOrder = () => {
    if (cart.length === 0) return;

    const orderId = Date.now();
    const newOrder = {
      id: orderId,
      items: cart,
      user: {
        name: user.username,
        email: user.email,
        address: user.address,
      },
      totalPrice: totalPrice + DELIVERY_CHARGE,
    };

    // 1️⃣ Save order to Redux & localStorage
    dispatch(addOrder(newOrder));

    // 2️⃣ Redirect first
    navigate(`/thank-you/${orderId}`);
  };

  return (
    <div className="xl:mx-16 py-12 px-12 space-y-6">
      <h1 className="text-2xl font-bold">Order Overview</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <OrderItem item={item} key={item.productId} />
        ))}
      </div>

      <div className="mt-6 p-4 border rounded-lg shadow-sm bg-white text-right space-y-1">
        <p>Subtotal: ${totalPrice.toFixed(2)}</p>
        <p>Delivery: ${DELIVERY_CHARGE.toFixed(2)}</p>
        <p className="font-bold">
          Total: ${(totalPrice + DELIVERY_CHARGE).toFixed(2)}
        </p>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleConfirmOrder}
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Order;
