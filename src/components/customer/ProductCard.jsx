
import { useDispatch, useSelector } from "react-redux";

import {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} from "../../features/customer/cart/cartSlice";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductCard({ product }) {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);

    // Check whether this product is already in the cart
    const cartItem = cartItems.find(
        (item) => item.id === product.id
    );

    const quantity = cartItem?.quantity || 0;

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleIncrease = () => {
        if (quantity < product.stock) {
            dispatch(increaseQuantity(product.id));
        }
    };

    const handleDecrease = () => {
        dispatch(decreaseQuantity(product.id));
    };

    const handleRemove = () => {
        dispatch(removeFromCart(product.id));
    };

    return (
        <article className="group min-w-0 overflow-hidden rounded-xl border border-[#EAE4DC] bg-[#FBF8F2] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="relative aspect-[1.08/1] overflow-hidden bg-[#EEE9E1]">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="p-3 sm:p-4 lg:p-5">

                <h3 className="truncate text-sm font-semibold text-[#292725] sm:text-base">
                    {product.name}
                </h3>

                <p className="mt-2 text-base font-semibold text-[#292725] sm:text-lg">
                    ₹{product.price.toLocaleString("en-IN")}
                </p>

                {/* Add to Cart / Quantity Controls */}
                {quantity === 0 ? (

                    <button
                        type="button"
                        onClick={handleAddToCart}
                        disabled={product.stock <= 0}
                        className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#263F24] px-3 py-3 text-xs font-medium text-white transition-colors duration-300 hover:bg-[#405D37] disabled:cursor-not-allowed disabled:bg-gray-400 sm:text-sm"
                    >
                        <ShoppingCartOutlinedIcon sx={{ fontSize: 17 }} />
                        {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                    </button>

                ) : (

                    <div className="mt-4 flex w-full items-center justify-between rounded-full border border-[#263F24] bg-[#263F24] px-2 py-1">

                        {/* Remove or Decrease */}
                        <button
                            type="button"
                            onClick={quantity === 1 ? handleRemove : handleDecrease}
                            aria-label={quantity === 1 ? "Remove product" : "Decrease quantity"}
                            className="flex h-8 w-9 items-center justify-center rounded-full text-white transition-colors cursor-pointer hover:bg-[#405D37]"
                        >
                            {quantity === 1 ? (
                                <DeleteIcon sx={{ fontSize: 19 }} />
                            ) : (
                                <RemoveIcon sx={{ fontSize: 19 }} />
                            )}
                        </button>

                        {/* Quantity */}
                        <span className="text-sm font-semibold text-white">
                            {quantity}
                        </span>

                        {/* Increase */}
                        <button
                            type="button"
                            onClick={handleIncrease}
                            disabled={quantity >= product.stock}
                            aria-label="Increase quantity"
                            className="flex h-8 w-9 items-center justify-center rounded-full text-white transition-colors cursor-pointer hover:bg-[#405D37] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <AddIcon sx={{ fontSize: 19 }} />
                        </button>

                    </div>
                )}

            </div>
        </article>
    );
}
