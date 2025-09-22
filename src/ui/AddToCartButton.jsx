import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../features/Cart/cartSlice";
import CartQuantityButton from "./CartQuantityButton";

function AddToCartButton({ product }) {
  const dispatch = useDispatch();

  // Correctly get quantity using product.id
  const quantity = useSelector(getCurrentQuantityById(product.id));

  // If item is already in cart, show quantity controls
  if (quantity > 0) {
    return <CartQuantityButton productId={product.id} />;
  }

  // Otherwise, show "Add To Cart" button
  return (
    <button
      onClick={() =>
        dispatch(
          addItem({
            productId: product.id,
            title: product.title,
            unitPrice: product.price,
            thumbnail: product.thumbnail,
          })
        )
      }
      className="flex-1 bg-blue-600 text-white text-[0.8rem] font-medium px-1 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
    >
      Add To Cart
    </button>
  );
}

export default AddToCartButton;
