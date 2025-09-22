import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  getTotalCartQuantity,
  getTotalCartPrice,
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem,
} from "./cartSlice";
import EmptyCart from "./EmptyCart";

function CartItems() {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <a
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
        href="/shop"
      >
        &larr; Back to menu
      </a>

      <h2 className="mt-7 text-xl font-semibold">Your Cart</h2>

      <ul className="mt-3">
        {cart.map((item) => (
          <li
            key={item.productId}
            className="py-3 sm:flex sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3 sm:gap-5">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-12 w-12 rounded-md object-cover"
              />
              <p className="mb-1 sm:mb-0">
                {item.quantity} × {item.title}
              </p>
            </div>

            <div className="flex items-center justify-between sm:gap-6">
              <p className="text-sm font-bold">${item.totalPrice.toFixed(2)}</p>

              <div className="flex items-center gap-3 justify-center">
                <button
                  onClick={() => dispatch(decreaseItemQuantity(item.productId))}
                  className="h-7 w-7 rounded-full bg-stone-300 hover:bg-stone-400"
                >
                  -
                </button>
                <span className="text-sm font-medium">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseItemQuantity(item.productId))}
                  className="h-7 w-7 rounded-full bg-stone-300 hover:bg-stone-400"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch(deleteItem(item.productId))}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t pt-4 flex justify-between items-center">
        <span className="font-semibold text-lg">
          Total Items: {totalQuantity}
        </span>
        <span className="font-semibold text-lg">
          Total Price: ${totalPrice.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default CartItems;
