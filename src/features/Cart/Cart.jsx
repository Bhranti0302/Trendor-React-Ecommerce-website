import Header from "../../components/Header";
import CartItems from "./CartItems";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector(getCart);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (!cart.length) return alert("Cart is empty!");
    // Save cart in localStorage temporarily for order page
    localStorage.setItem("currentOrder", JSON.stringify(cart));
    navigate("/order"); // go to order overview page
  };

  return (
    <div className="xl:mx-16 py-24">
      <Header />
      <CartItems />

      <div className="mt-10 flex justify-center mb-32">
        {cart.length > 0 && (
          <button
            onClick={handlePlaceOrder}
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            Place Order
          </button>
        )}
      </div>

      <div className="border-2 border-stone-100 my-6"></div>
      <Footer />
    </div>
  );
}

export default Cart;
