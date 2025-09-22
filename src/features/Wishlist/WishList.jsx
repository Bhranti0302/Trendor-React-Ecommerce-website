import Header from "../../components/Header";
import WishlistItems from "./WishlistItems";
import Footer from "../../components/Footer";

function Wishlist() {
  return (
    <div className="xl:mx-16 py-24">
      <Header />
      <WishlistItems />
      <div className="border-2 border-stone-100"></div>
      <Footer />
    </div>
  );
}

export default Wishlist;
