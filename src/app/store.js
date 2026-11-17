import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../features/customer/products/productsSlice";
import cartReducer from "../features/customer/cart/cartSlice";
import reviewsReducer from "../features/customer/reviews/reviewsSlice"

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        reviews: reviewsReducer,
    },
});

// Temporary guest-cart persistence.
store.subscribe(() => {
    try {
        localStorage.setItem(
            "woodslice-cart",
            JSON.stringify(store.getState().cart.items)
        );
    } catch {
        // Storage may be unavailable.
    }
});
