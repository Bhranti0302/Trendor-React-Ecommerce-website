import { useDispatch, useSelector } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  getCurrentQuantityById,
} from "../features/Cart/cartSlice";

function CartQuantityButton({ productId }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getCurrentQuantityById(productId));

  // If quantity is 0, do not show this component
  if (quantity === 0) return null;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => dispatch(decreaseItemQuantity(productId))}
        className="h-7 w-7 rounded-full bg-stone-300 text-lg font-bold hover:bg-stone-400"
      >
        -
      </button>

      <span className="text-sm font-medium">{quantity}</span>

      <button
        onClick={() => dispatch(increaseItemQuantity(productId))}
        className="h-7 w-7 rounded-full bg-stone-300 text-lg font-bold hover:bg-stone-400"
      >
        +
      </button>
    </div>
  );
}

export default CartQuantityButton;
