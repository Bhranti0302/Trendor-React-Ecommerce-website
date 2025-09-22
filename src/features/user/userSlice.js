import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

// Get Browser Position
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// Local Storage Helpers
function loadUserFromStorage() {
  const savedUser = localStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser) : null;
}

function saveUserToStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

// Async Thunk: Fetch Address
export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    const addressObj = await getAddress(position); // fetch from API
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    return { position, address };
  }
);

// Initial State
const initialState = loadUserFromStorage() || {
  username: "",
  email: "",
  password: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

// Redux Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
      saveUserToStorage(state);
    },
    updateEmail(state, action) {
      state.email = action.payload;
      saveUserToStorage(state);
    },
    updatePassword(state, action) {
      state.password = action.payload;
      saveUserToStorage(state);
    },

    // ✅ Delete Account (clears Redux state + removes localStorage)
    deleteAccount(state) {
      state.username = "";
      state.email = "";
      state.password = "";
      state.position = {};
      state.address = "";
      localStorage.removeItem("user");
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
        saveUserToStorage(state);
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = "error";
        state.error =
          "There was a problem getting your address. Make sure to fill this field.";
      }),
});

// Export Actions + Reducer
export const { updateName, updateEmail, updatePassword, deleteAccount } =
  userSlice.actions;

export default userSlice.reducer;
