# Trendor – E-Commerce Website

A modern, responsive e-commerce platform built with **React**, **React Router**, and **Redux Toolkit**.  
Trendor lets you browse products, filter by category, manage your cart and wishlist, and place orders — everything you need for a smooth online shopping experience.

---

## ✨ Features

- 🏬 **Shop by Category** – Men’s, Women’s, Electronics, Home, Groceries, Beauty & more
- 🔎 **Search** – Instantly find products by name
- 📦 **Filter & Sort** – By price (ascending/descending) and category
- ❤️ **Wishlist** – Save items to view or buy later
- 🛒 **Cart Management** – Add, remove, and update quantities easily
- 📦 **Orders** – Place and view past orders
- ✅ **Thank-You Page** – Confirmation after checkout
- 👤 **Authentication** – Secure signup and login
- 🔐 **Protected Routes** – Cart, wishlist, and orders are only accessible to logged-in users
- 🌍 **API Integration** – Product data from DummyJSON
- 📱 **Responsive Design** – Optimized for desktop, tablet, and mobile

---

## 🚀 Live Preview

👉 **Deploy Link**: (https://trendor-react-ecommerce-website-34ygqd4en-bhranti0302s-projects.vercel.app/login)

---

## 🛠️ Tech Stack

- **React** (with Vite)
- **React Router v6**
- **Redux Toolkit**
- **Tailwind CSS**
- **React Hot Toast**
- **DummyJSON API**
- **Vercel / Netlify** (Deployment)

---

### ✅ Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### 🔧 Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YOUR_USERNAME/trendor.git
   cd trendor
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

---

## 🧠 Usage Tips

- **Login**: Access authentication via `/login` or `/register`.
- **Navigation**: Use the navbar to explore categories, cart, and wishlist.
- **Cart & Wishlist**: Only available after login (protected routes).
- **Orders**: View your past orders under **My Orders**.
- **Search**: Quickly find products by name using the search bar.

---

## 🔐 Authentication

All routes in the application, except for `/login` and `/register`, are protected using the **ProtectedRoute** wrapper component to ensure secure access.

---

## 🙏 Credits

Built as part of a professional React e-commerce learning project.  
Product data is powered by **DummyJSON API**, with a focus on responsive design and real-world user flows.

---

## 📄 License

This project is licensed under the **MIT License** – feel free to use, modify, and distribute.
