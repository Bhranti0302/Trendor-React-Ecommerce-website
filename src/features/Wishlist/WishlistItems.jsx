import { useDispatch, useSelector } from "react-redux";
import { getWishList, deleteItem, moveToCart } from "./wishlistSlice";
import { addItem as addToCart } from "../Cart/cartSlice";
import EmptyWishlist from "./EmptyWishlist";

function WishlistItems() {
  const dispatch = useDispatch();
  const wishlist = useSelector(getWishList);

  if (wishlist.length === 0) return <EmptyWishlist />;

  return (
    <div className="px-4 py-3">
      <a
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
        href="/shop"
      >
        <i className="ri-arrow-left-fill"></i> Back to Shop
      </a>

      <h2 className="mt-7 text-xl font-semibold">Your Wishlist</h2>

      <ul className="mt-3">
        {wishlist.map((item) => (
          <li
            key={item.productId}
            className="py-3 sm:flex sm:items-center sm:justify-between"
          >
            {/* Image + Product info */}
            <div className="flex items-center gap-3 sm:gap-5">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-12 w-12 rounded-md object-cover"
              />
              <p className="mb-1 sm:mb-0">{item.title}</p>
            </div>

            {/* Price + Actions */}
            <div className="flex items-center justify-between sm:gap-6">
              <p className="text-sm font-bold">${item.unitPrice.toFixed(2)}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    // Add to cart
                    dispatch(
                      addToCart({
                        productId: item.productId,
                        title: item.title,
                        unitPrice: item.unitPrice,
                        thumbnail: item.thumbnail,
                      })
                    );
                    // Remove from wishlist
                    dispatch(moveToCart({ productId: item.productId }));
                  }}
                  className="inline-block text-sm rounded-full bg-green-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-green-300 focus:bg-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-offset-2 px-3 py-2 md:px-4 md:py-2.5 text-xs"
                >
                  Move to Cart
                </button>

                <button
                  onClick={() => dispatch(deleteItem(item.productId))}
                  className="inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-3 py-2 md:px-4 md:py-2.5 text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WishlistItems;
