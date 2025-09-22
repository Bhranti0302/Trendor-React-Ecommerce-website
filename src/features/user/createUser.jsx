import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateName,
  updateEmail,
  updatePassword,
  fetchAddress,
} from "./userSlice";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, address: storedAddress } = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});

  const regex = {
    name: /^[a-zA-Z ]{2,30}$/, // only letters & spaces
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
  };

  const validate = () => {
    let newErrors = {};

    if (!regex.name.test(name)) {
      newErrors.name =
        "Name should be 2-30 characters and only letters & spaces";
    }
    if (!regex.email.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!regex.password.test(password)) {
      newErrors.password =
        "Password must be at least 6 characters, include 1 letter & 1 number";
    }
    if (!address) {
      newErrors.address = "Please enter your address or get your location";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Save user info in Redux + localStorage
      dispatch(updateName(name));
      dispatch(updateEmail(email));
      dispatch(updatePassword(password));

      alert("Account created successfully ✅");
      navigate("/login"); // redirect to login page
    }
  };

  // Handle autofill from geolocation thunk
  const handleGetAddress = async () => {
    try {
      await dispatch(fetchAddress()).unwrap();
      setAddress(storedAddress); // update local state when redux updates
    } catch (err) {
      console.error("Address fetch failed:", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Sign Up
        </h2>
        <p className="text-sm text-gray-500 text-center mt-2">
          Welcome! Please enter your details.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className={`mt-1 w-full px-4 py-2 border rounded-lg text-sm ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

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
              className={`mt-1 w-full px-4 py-2 border rounded-lg text-sm ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
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
              className={`mt-1 w-full px-4 py-2 border rounded-lg text-sm ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Address / Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address or click button"
                required
                className={`mt-1 flex-1 px-4 py-2 border rounded-lg text-sm ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={handleGetAddress}
                disabled={status === "loading"}
                className="px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
              >
                {status === "loading" ? "Fetching..." : "Get My Address"}
              </button>
            </div>
            {errors.address && (
              <p className="text-red-500 text-xs mt-1">{errors.address}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
