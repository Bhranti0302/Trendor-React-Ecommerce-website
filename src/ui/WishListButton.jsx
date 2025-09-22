import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  getWishList,
} from "../features/Wishlist/wishlistSlice";

function WishListButton({ product }) {
  const dispatch = useDispatch();
  const wishlist = useSelector(getWishList);

  // Check if the product is already in the wishlist
  const isInWishlist = wishlist.some((item) => item.productId === product.id);

  const handleClick = () => {
    if (isInWishlist) {
      dispatch(deleteItem(product.id));
    } else {
      dispatch(
        addItem({
          productId: product.id,
          title: product.title,
          unitPrice: product.price,
          thumbnail: product.thumbnail,
        })
      );
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex-1 text-[0.8rem] font-medium py-3 rounded-lg transition-colors duration-200 ${
        isInWishlist
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
    >
      Wishlist
    </button>
  );
}

export default WishListButton;
