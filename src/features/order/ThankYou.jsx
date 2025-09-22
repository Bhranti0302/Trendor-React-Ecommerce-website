import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../Cart/cartSlice";

function ThankYou() {
  const { orderId } = useParams();
  const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));
  const dispatch = useDispatch();

  useEffect(() => {
    // ✅ Clear cart once user lands on thank you page
    dispatch(clearCart());
  }, [dispatch]);

  if (!lastOrder || lastOrder.id.toString() !== orderId) {
    return <p className="text-center mt-10">Order not found.</p>;
  }

  return (
    <div className="px-6 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="mb-2">Order ID: {orderId}</p>
      <p className="mb-2">Total Paid: ${lastOrder.totalPrice.toFixed(2)}</p>
      <p className="mb-6">
        We have received your order and it is being processed.
      </p>

      <Link
        to="/"
        className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}

export default ThankYou;
