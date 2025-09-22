import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 px-6 sm:px-12 md:px-20 lg:px-32 mt-[6rem] md:my-24 gap-10 text-center md:text-left">
      {/* Brand */}
      <div className="flex flex-col items-center md:items-start gap-2">
        <h1 className="text-2xl md:text-3xl font-bold">Trendora</h1>
        <p className="text-sm text-stone-600 max-w-xs">
          Connecting you with the latest in gadgets, fashion, and more
        </p>
      </div>

      {/* Navigation */}
      <ul className="flex flex-col items-center gap-3 text-sm md:text-base">
        <li>
          <Link to="/" className="hover:text-blue-700 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className="hover:text-blue-700 transition">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-700 transition">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-700 transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Socials */}
      <div className="flex flex-col items-center gap-4">
        <h5 className="text-md font-medium">Contact Us</h5>
        <ul className="flex gap-6 text-2xl">
          <li>
            <a href="#" className="hover:text-blue-700 transition">
              <i className="ri-instagram-line"></i>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-700 transition">
              <i className="ri-facebook-circle-line"></i>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-700 transition">
              <i className="ri-tiktok-fill"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
