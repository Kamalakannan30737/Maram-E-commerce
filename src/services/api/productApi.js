import axiosInstance from "./axiosInstance";
import mockProducts from "../../data/mock/products";

const USE_MOCK_DATA = true;

const productApi = {
    getProducts: async () => {
        if (USE_MOCK_DATA) {
            return mockProducts;
        }

        const response = await axiosInstance.get("/products");

        // Adjust according to the actual backend response.
        return response.data.data;
    },

    getProductById: async (id) => {
        if (USE_MOCK_DATA) {
            return mockProducts.find(
                (product) => product.id === id
            );
        }

        const response = await axiosInstance.get(`/products/${id}`);

        return response.data.data;
    },
};

export default productApi;