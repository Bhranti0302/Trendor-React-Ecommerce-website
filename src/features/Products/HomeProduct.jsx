import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getLimitedProduct } from "../../services/apiShop";
import ProductItems from "./ProductItems";
import gsap from "gsap";

function HomeProduct() {
  const products = useLoaderData();
  return (
    <div className="my-24">
      <h3 className="text-4xl font-medium text-center mb-16">Our Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-8 md:px-16">
        {products.map((product) => (
          <ProductItems product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export function homeProductLoader() {
  const products = getLimitedProduct();
  return products;
}

export default HomeProduct;
