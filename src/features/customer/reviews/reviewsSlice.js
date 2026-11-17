import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reviewApi from "../../../services/api/reviewApi";

export const fetchReviews = createAsyncThunk(
    "reviews/fetchReviews",
    async (_, { rejectWithValue }) => {
        try {
            return await reviewApi.getFeaturedReviews();
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message ||
                error.message ||
                "Failed to fetch reviews"
            );
        }
    }
);

const reviewsSlice = createSlice({
    name: "reviews",

    initialState: {
        items: [],
        loading: false,
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default reviewsSlice.reducer;
