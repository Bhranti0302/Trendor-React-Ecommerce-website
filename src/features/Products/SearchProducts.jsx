import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header";
import ProductItems from "./ProductItems";
import { searchProducts } from "../../services/apiShop";
import { useState } from "react";
import ProductFilters from "./ProductFilter";
import Footer from "../../components/Footer";

function SearchResultsPage() {
  const products = useLoaderData();
  const [filters, setFilters] = useState({ price: "" });

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  // Apply filters and sorting
  const filteredProducts = products.sort((a, b) => {
    if (filters.price === "asc") return a.price - b.price;
    if (filters.price === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="xl:mx-16">
      <Header />
      <main className="pt-[3rem] pb-[1rem]">
        <div className=" px-4 sm:px-8 md:px-16 py-16 ">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Search Results
          </h2>

          <ProductFilters onFilterChange={handleFilterChange} />

          {products.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductItems product={product} key={product.id} />
                ))
              ) : (
                <p className="text-center col-span-full text-gray-500">
                  No products found.
                </p>
              )}
            </div>
          )}
        </div>
        <div className="border footer-border"></div>
        <Footer />
      </main>
    </div>
  );
}

// Loader for the search page
export async function searchLoader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";
  if (!query) return [];
  const products = await searchProducts(query);
  return products;
}

export default SearchResultsPage;

//  1️⃣ Header input → navigate(`/search?q=${query}`)
// 2️⃣ Loader function → async ({ request }) => {
//        url = new URL(request.url)
//        query = url.searchParams.get("q") || ""
//        if (!query) return []
//        data = await fetchData(query)
//        return data
//    }
// 3️⃣ Component → const data = useLoaderData()
// 4️⃣ Render data
