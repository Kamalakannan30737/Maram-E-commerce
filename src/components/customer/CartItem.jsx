
import { useDispatch } from "react-redux";

import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} from "../../features/customer/cart/cartSlice";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'; 

export default function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <article className="flex gap-3 rounded-xl border border-[#EAE4DC] bg-white p-3 sm:gap-5 sm:p-4">

            {/* Product Image */}
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-[#EEE9E1] sm:h-32 sm:w-32">
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Product Details */}
            <div className="flex min-w-0 flex-1 flex-col justify-between">

                <div className="flex items-start justify-between gap-2">

                    <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-[#292725] sm:text-base">
                            {item.name}
                        </h3>

                        <p className="mt-1 text-xs text-[#888078]">
                            Handcrafted Wooden Cutting Board
                        </p>

                        <p className="mt-2 text-sm font-medium text-[#405D37]">
                            In Stock
                        </p>
                    </div>

                    <p className="shrink-0 text-sm font-semibold text-[#292725] sm:text-base">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>

                </div>

                {/* Quantity Controls */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">

                    <div className="flex items-center rounded-full border border-[#E4DED5]">

                        <button
                            type="button"
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                            aria-label="Decrease quantity"
                            className="p-2 text-[#555] cursor-pointer"
                        >
                            <RemoveIcon sx={{ fontSize: 20 }} />
                        </button>

                        <span className="min-w-7 text-center text-xl">
                            {item.quantity}
                        </span>

                        <button
                            type="button"
                            onClick={() => dispatch(increaseQuantity(item.id))}
                            disabled={item.quantity >= item.stock}
                            aria-label="Increase quantity"
                            className="p-2 text-[#555] disabled:opacity-30 cursor-pointer"
                        >
                            <AddIcon sx={{ fontSize: 20 }} />
                        </button>

                    </div>

                    <button
                        type="button"
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="flex items-center gap-1 text-xs text-[#8A6257] hover:text-red-600"
                    >
                        <DeleteSweepIcon sx={{ fontSize: 16 }} />
                        Remove
                    </button>

                </div>

            </div>

        </article>
    );
}
