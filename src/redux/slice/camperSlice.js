import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios.js";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (filters, thunkAPI) => {
    try {
      const response = await axios.get("/campers", {
        params: filters,
      });
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const camperSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    selectedCamper: null,
    status: "idle",
    camperStatus: "idle",
    error: null,
    favorites: savedFavorites,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      if (state.favorites.includes(camperId)) {
        state.favorites = state.favorites.filter((id) => id !== camperId);
      } else {
        state.favorites.push(camperId);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });

    builder
      .addCase(fetchCamperById.pending, (state) => {
        state.camperStatus = "loading";
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.camperStatus = "succeeded";
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.camperStatus = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { toggleFavorite } = camperSlice.actions;
export default camperSlice.reducer;
