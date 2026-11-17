import axiosInstance from "./axiosInstance";
import mockReviews from "../../data/mock/review";

const USE_MOCK_DATA = true;

const reviewApi = {
    getFeaturedReviews: async () => {
        if (USE_MOCK_DATA) {
            return mockReviews;
        }

        const response = await axiosInstance.get(
            "/reviews/featured"
        );

        return response.data.data;
    },

    getProductReviews: async (productId) => {
        if (USE_MOCK_DATA) {
            return mockReviews.filter(
                (review) => review.productId === productId
            );
        }

        const response = await axiosInstance.get(
            `/products/${productId}/reviews`
        );

        return response.data.data;
    },
};

export default reviewApi;
