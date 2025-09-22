const API_URL = "https://dummyjson.com";

export async function searchProducts(query) {
  if (!query) return [];

  const res = await fetch(
    `${API_URL}/products/search?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error("Failed to search products");

  const { products } = await res.json();
  return products;
}

export async function getProducts() {
  const categories = [
    "mens-shirts",
    "mens-shoes",
    "womens-dresses",
    "womens-bags",
    "womens-jewellery",
    "smartphones",
    "laptops",
    "home-decoration",
    "groceries",
    "fragrances",
    "beauty",
    "furniture",
  ];

  // Fetch all categories
  const requests = categories.map(async (cat) => {
    const res = await fetch(`${API_URL}/products/category/${cat}`);
    if (!res.ok) throw new Error(`Failed to fetch ${cat}`);
    return res.json();
  });

  const results = await Promise.all(requests);
  const products = results.flatMap((result) => result.products);

  // Shuffle products using Fisher-Yates algorithm
  for (let i = products.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [products[i], products[j]] = [products[j], products[i]];
  }

  return products;
}

export async function getLimitedProduct(limit = 9, skip = 0) {
  const res = await fetch(`${API_URL}/products?limit=${limit}&skip=${skip}`);
  if (!res.ok) throw new Error("Failed to fetch limited products");
  const { products } = await res.json();
  return products;
}

export async function getMenCollections() {
  const res = await fetch(`${API_URL}/products/category/mens-shirts`);
  if (!res.ok) throw new Error("Failed to fetch products");
  const { products } = await res.json();
  return products;
}

export async function getWomenCollections() {
  const categories = ["womens-dresses", "womens-bags", "womens-jewellery"];

  // map categories to fetch requests
  const requests = categories.map(async (cat) => {
    const res = await fetch(`${API_URL}/products/category/${cat}`);
    if (!res.ok) throw new Error(`Failed to fetch ${cat}`);
    return res.json();
  });

  // wait for all responses
  const results = await Promise.all(requests);

  // merge all category products into one array
  const products = results.flatMap((result) => result.products);

  return products;
}

export async function getElectronics() {
  const categories = ["smartphones", "laptops"];

  // map categories to fetch requests
  const requests = categories.map(async (cat) => {
    const res = await fetch(`${API_URL}/products/category/${cat}`);
    if (!res.ok) throw new Error(`Failed to fetch ${cat}`);
    return res.json();
  });

  // wait for all responses
  const results = await Promise.all(requests);

  // merge all category products into one array
  const products = results.flatMap((result) => result.products);

  return products;
}

export async function getHomeDecor() {
  const res = await fetch(`${API_URL}/products/category/home-decoration`);
  if (!res.ok) throw new Error("Failed to fetch products");
  const { products } = await res.json();
  return products;
}

export async function getGroceries() {
  const res = await fetch(`${API_URL}/products/category/groceries`);
  if (!res.ok) throw new Error("Failed to fetch products");
  const { products } = await res.json();
  return products;
}

export async function getShoes() {
  const res = await fetch(`${API_URL}/products/category/mens-shoes`);
  if (!res.ok) throw new Error("Failed to fetch products");
  const { products } = await res.json();
  return products;
}

export async function getProductById(id) {
  if (!id) throw new Error("Product ID is required");

  const res = await fetch(`${API_URL}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");

  const product = await res.json();
  return product;
}
