import { Link } from "react-router-dom";

function Logo() {
  return (
    <h1>
      <Link to="/" className="text-xl sm:text-2xl md:text-3xl flex-none">
        Trendora
      </Link>
    </h1>
  );
}

export default Logo;
