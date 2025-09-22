import { Link } from "react-router-dom";

function BackButton() {
  return (
    <button>
      <Link
        to="/shop"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        <i className="ri-arrow-left-fill"></i> Back to menu
      </Link>
    </button>
  );
}

export default BackButton;
