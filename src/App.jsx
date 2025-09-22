import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

// Pages & Components
import Home from "./pages/Home";
import Shop from "./features/Products/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./features/Cart/Cart";
import Wishlist from "./features/Wishlist/WishList";
import Login from "./features/user/Login";
import SignUp from "./features/user/createUser";
import PageNotFound from "./pages/PageNotFound";
import Order from "./features/order/Order";
import ThankYou from "./features/order/ThankYou";
import MyOrders from "./features/order/MyOrder";

// Protected Route Wrapper
import ProtectedRoute from "./ProtectedWeb";

// Redux actions & selectors
import { setUserId, getCart } from "./features/Cart/cartSlice";
import { getWishList } from "./features/Wishlist/wishlistSlice";
import { getOrders } from "./features/order/orderSlice";

// Loaders
import { productLoader } from "./features/Products/Products";
import { homeProductLoader } from "./features/Products/HomeProduct";
import MenCollectionsCategory, {
  menCollectionLoader,
} from "./features/collections/MenCollectionsCategory";
import WomenCollectionsCategory, {
  womenCollectionLoader,
} from "./features/collections/WomenCollectionCategory";
import ElectronicsCategory, {
  electronicsCollectionLoader,
} from "./features/collections/ElectronicsCategory";
import HomeDecorCategory, {
  homeDecorLoader,
} from "./features/collections/HomeDecorCategory";
import GroceriesCategory, {
  groceriesLoader,
} from "./features/collections/groceriesCategory";
import ShoesCategory, {
  shoesLoader,
} from "./features/collections/ShoesCategory";
import ProductDetail, {
  productDetailLoader,
} from "./features/Products/ProductDetail";
import SearchProducts, {
  searchLoader,
} from "./features/Products/SearchProducts";

export default function App() {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const wishlist = useSelector(getWishList);
  const orders = useSelector(getOrders); // ✅ get orders state

  // Load user on app start
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.id) dispatch(setUserId(user.id));
  }, [dispatch]);

  // Save cart/wishlist/orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Define router **once** (outside re-renders)
  const router = createBrowserRouter([
    { path: "/", element: <Home />, loader: homeProductLoader },
    {
      path: "/shop",
      element: (
        <ProtectedRoute>
          <Shop />
        </ProtectedRoute>
      ),
      loader: productLoader,
    },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/order", element: <Order /> },
    { path: "/thank-you/:orderId", element: <ThankYou /> },
    {
      path: "/my-orders", // ✅ new route
      element: (
        <ProtectedRoute>
          <MyOrders />
        </ProtectedRoute>
      ),
    },
    {
      path: "/cart",
      element: (
        <ProtectedRoute>
          <Cart />
        </ProtectedRoute>
      ),
    },
    {
      path: "/wishlist",
      element: (
        <ProtectedRoute>
          <Wishlist />
        </ProtectedRoute>
      ),
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <SignUp /> },
    {
      path: "/men-collection",
      element: (
        <ProtectedRoute>
          <MenCollectionsCategory />
        </ProtectedRoute>
      ),
      loader: menCollectionLoader,
    },
    {
      path: "/women-collections",
      element: (
        <ProtectedRoute>
          <WomenCollectionsCategory />
        </ProtectedRoute>
      ),
      loader: womenCollectionLoader,
    },
    {
      path: "/electronics",
      element: (
        <ProtectedRoute>
          <ElectronicsCategory />
        </ProtectedRoute>
      ),
      loader: electronicsCollectionLoader,
    },
    {
      path: "/home-decor",
      element: (
        <ProtectedRoute>
          <HomeDecorCategory />
        </ProtectedRoute>
      ),
      loader: homeDecorLoader,
    },
    {
      path: "/groceries",
      element: (
        <ProtectedRoute>
          <GroceriesCategory />
        </ProtectedRoute>
      ),
      loader: groceriesLoader,
    },
    {
      path: "/shoes",
      element: (
        <ProtectedRoute>
          <ShoesCategory />
        </ProtectedRoute>
      ),
      loader: shoesLoader,
    },
    {
      path: "/product/:productId",
      element: (
        <ProtectedRoute>
          <ProductDetail />
        </ProtectedRoute>
      ),
      loader: productDetailLoader,
    },
    { path: "/search", element: <SearchProducts />, loader: searchLoader },
    { path: "*", element: <PageNotFound /> },
  ]);

  return <RouterProvider router={router} />;
}
