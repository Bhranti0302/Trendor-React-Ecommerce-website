import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "../../features/Cart/cartSlice";
import { getWishList } from "../../features/Wishlist/wishlistSlice";
import AddToCartButton from "../../ui/AddToCartButton";
import CartQuantityButton from "../../ui/CartQuantityButton";
import WishListButton from "../../ui/WishListButton";
import { Link } from "react-router-dom";
import gsap from "gsap";

function ProductItems({ product, index }) {
  const cardRef = useRef(null);
  const quantity = useSelector(getCurrentQuantityById(product.id));
  const wishlist = useSelector(getWishList);

  const isInWishlist = wishlist.some((item) => item.productId === product.id);

  return (
    <div
      ref={cardRef}
      className="bg-white text-black rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="bg-gray-100 flex justify-center p-8 rounded-t-xl">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-contain h-48 w-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h5 className="text-xl font-semibold truncate">{product.title}</h5>
          <span className="text-lg font-bold text-gray-800">
            ${product.price}
          </span>
        </div>
        <div className="flex gap-3 mt-4">
          {quantity > 0 ? (
            <CartQuantityButton productId={product.id} />
          ) : (
            <AddToCartButton product={product} />
          )}
          <WishListButton product={product} isActive={isInWishlist} />
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
