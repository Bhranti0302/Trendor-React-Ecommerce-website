function ProductFilters({ onFilterChange }) {
  return (
    <div className="flex gap-4 mb-6">
      {/* Category Filter */}
      <select
        onChange={(e) => onFilterChange("category", e.target.value)} // ✅ FIXED
        className="border rounded px-3 py-2"
      >
        <option value="">All Categories</option>
        <option value="mens-shirts">Men's collection</option>
        <option value="womens-dresses">Women's collection</option>
        <option value="womens-bags">Bags</option>
        <option value="womens-jewellery">Jewellery</option>
        <option value="smartphones">Electronics</option>
        <option value="home-decoration">Home Decor</option>
        <option value="mens-shoes">Shoes</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="furniture">Furniture</option>
        <option value="groceries">Groceries</option>
      </select>

      {/* Price Sort */}
      <select
        onChange={(e) => onFilterChange("price", e.target.value)} // ✅ FIXED
        className="border rounded px-3 py-2"
      >
        <option value="">Default</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
}

export default ProductFilters;
