import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAccount } from "../features/user/userSlice";
import { clearOrders } from "../features/order/orderSlice";
import { clearCart } from "../features/Cart/cartSlice";
import { clearWishlist } from "../features/Wishlist/wishlistSlice";

function Account() {
  const [isOpen, setIsOpen] = useState(false); // main dropdown
  const [accountOpen, setAccountOpen] = useState(false); // nested account dropdown

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggeduser");
    navigate("/login");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      dispatch(deleteAccount());
      dispatch(clearOrders());
      dispatch(clearCart());
      dispatch(clearWishlist());

      localStorage.removeItem("user");
      navigate("/register");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-xl"
      >
        <i className="ri-user-line"></i>
        <i className="ri-arrow-drop-down-line"></i>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border text-black rounded-lg shadow-lg z-40">
          <ul className="flex flex-col text-sm">
            <li>
              <Link
                to="/cart"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <i className="ri-shopping-cart-2-line"></i> Cart
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <i className="ri-heart-line"></i> Wishlist
              </Link>
            </li>
            <li>
              {/* Nested Account Dropdown */}
              <button
                onClick={() => setAccountOpen(!accountOpen)}
                className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 text-[0.937rem]"
              >
                <div className="flex items-center gap-2">
                  <i className="ri-user-line"></i> Account
                </div>
                <i className="ri-arrow-drop-down-line"></i>
              </button>

              {accountOpen && (
                <ul className="flex flex-col ml-4 mt-1 border-l border-gray-200">
                  <li>
                    <Link
                      to="/login"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    >
                      <i className="ri-login-box-line"></i> Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    >
                      <i className="ri-registered-line"></i> Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/my-orders"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    >
                      <i className="ri-file-list-line"></i> My Orders
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      <i className="ri-logout-box-line"></i> Logout
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleDelete}
                      className="flex w-full items-center gap-2 px-4 py-2 hover:bg-gray-100 text-left text-red-600"
                    >
                      <i className="ri-delete-bin-line"></i> Delete Account
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Account;
