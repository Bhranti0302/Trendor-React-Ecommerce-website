import BackButton from "../../ui/BackButton";

function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
      <BackButton />

      <p className="text-lg font-medium text-stone-700">
        Your WishList is still empty.{" "}
        <span className="text-stone-500">Start adding some products 🙂</span>
      </p>
    </div>
  );
}

export default EmptyWishlist;
