import { useLoaderData } from "react-router-dom";
import BackButton from "../../ui/BackButton";
import ProductItems from "../Products/ProductItems";
import Header from "../../components/Header";
import { useState } from "react";
import ProductFilters from "../Products/ProductFilter";
import Pagination from "../../components/Pagination";

function CategoryPage({ title }) {
  const products = useLoaderData();
  const [filters, setFilters] = useState({ price: "" });
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  // Apply price sorting
  const filteredProducts = products.sort((a, b) => {
    if (filters.price === "asc") return a.price - b.price;
    if (filters.price === "desc") return b.price - a.price;
    return 0;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  function handleFilterChange(type, value) {
    setFilters((prev) => ({ ...prev, [type]: value }));
    setCurrentPage(1); // reset page on filter change
  }

  return (
    <>
      <Header />
      <div className="my-16 px-4 sm:px-8 md:px-16 py-16">
        <BackButton />

        {/* Heading */}
        <div className="flex items-center justify-between my-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {title}
          </h2>
        </div>

        <ProductFilters onFilterChange={handleFilterChange} />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <ProductItems product={product} key={product.id} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </>
  );
}

export default CategoryPage;
