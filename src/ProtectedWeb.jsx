import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Check if a user is logged in
  const loggedUser = JSON.parse(localStorage.getItem("loggeduser"));

  // If no logged user → redirect to login
  if (!loggedUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
