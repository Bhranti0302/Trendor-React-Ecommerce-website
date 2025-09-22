import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/apiShop";
import ProductItems from "./ProductItems";
import ProductFilters from "./ProductFilter";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";

function HomeProduct() {
  const products = useLoaderData();
  const [filters, setFilters] = useState({ category: "", price: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
    setCurrentPage(1);
  };

  // Apply filters and sorting
  const filteredProducts = products
    .filter((p) => (filters.category ? p.category === filters.category : true))
    .sort((a, b) => {
      if (filters.price === "asc") return a.price - b.price;
      if (filters.price === "desc") return b.price - a.price;
      return 0;
    });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Helper for responsive page numbers
  return (
    <>
      <Header />
      <main className="pt-[6rem] pb-[1rem]">
        <Banner
          title="Glow Up with Beauty Picks"
          subtitle="Top Picks to Elevate Your Routine"
          fromColor="#b587df"
          toColor="#566f89"
          image="./banner-image-2.png"
          imageClass="absolute right-0 top-[-60px] w-[620px]"
        />

        <div className="my-16">
          <div className="px-16">
            <ProductFilters onFilterChange={handleFilterChange} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-8 md:px-16">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <ProductItems product={product} key={product.id} />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No products found.
              </p>
            )}
          </div>
          {/* Pagination Controls */}

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>

        <div className="border footer-border"></div>
        <Footer />
      </main>
    </>
  );
}

// Loader function
export async function productLoader() {
  const products = await getProducts();
  return products;
}

export default HomeProduct;
