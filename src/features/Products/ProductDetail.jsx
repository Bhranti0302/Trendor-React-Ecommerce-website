// ProductDetail.jsx
import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header";
import { getProductById } from "../../services/apiShop";
import AddToCartButton from "../../ui/AddToCartButton";
import WishListButton from "../../ui/WishListButton";
import Footer from "../../components/Footer";
import BackButton from "../../ui/BackButton";

function ProductDetail() {
  return (
    <>
      <Header />
      <main className="pt-[6rem] pb-[1rem]">
        <ProductDetailContent />
        <div className="border footer-border"></div>
        <Footer />
      </main>
    </>
  );
}

function ProductDetailContent() {
  const product = useLoaderData();

  if (!product) {
    return (
      <div className=" px-4 sm:px-8 md:px-16 py-16 text-center py-16">
        <BackButton />
        <p className="text-gray-500 text-lg mt-8">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 md:px-16 py-6">
      <BackButton />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  py-24">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-xl shadow-lg max-h-[400px] object-contain"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold  mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-semibold text-green-600 mb-4">
            ${product.price}
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Category: {product.category}
          </p>
          <div className="flex gap-5">
            <AddToCartButton product={product} />
            <WishListButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Loader function
export async function productDetailLoader({ params }) {
  try {
    const product = await getProductById(params.productId);
    return product;
  } catch (error) {
    console.error(error);
    return null; // fallback if API fails
  }
}

export default ProductDetail;
