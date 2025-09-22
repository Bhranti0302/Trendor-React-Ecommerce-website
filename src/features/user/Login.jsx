import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Get saved user from localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      // Save logged-in user to localStorage
      localStorage.setItem("loggeduser", JSON.stringify(savedUser));

      alert(`Welcome back, ${savedUser.username || savedUser.name}! 🎉`);
      navigate("/"); // redirect to home/dashboard
    } else {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Login
        </h2>
        <p className="text-sm text-gray-500 text-center mt-2">
          Enter your credentials to access your account
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg text-sm border-gray-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg text-sm border-gray-300"
            />
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-5">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
