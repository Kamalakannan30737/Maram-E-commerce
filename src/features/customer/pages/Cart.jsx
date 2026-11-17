
import { Link } from "react-router";
import { useSelector } from "react-redux";

import CartItem from "../../components/customer/CartItem";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Cart() {
    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const formatPrice = (price) =>
        `₹${price.toLocaleString("en-IN")}`;

    return (
        <section className="min-h-[75vh] bg-[#FAF7F2] px-4 py-10 sm:px-8 lg:px-12 lg:py-14">

            <div className="mx-auto max-w-[1350px]">

                {/* Heading */}
                <div className="mb-8">
                    <h1 className="font-serif text-3xl text-[#292725] sm:text-4xl">
                        Your Cart
                    </h1>

                    <p className="mt-2 text-sm text-[#77716A]">
                        {totalItems} {totalItems === 1 ? "item" : "items"}
                    </p>
                </div>

                {cartItems.length === 0 ? (

                    /* Empty Cart */
                    <div className="flex flex-col items-center justify-center rounded-xl border border-[#EAE4DC] bg-white px-5 py-16 text-center">

                        <ShoppingBagOutlinedIcon
                            sx={{ fontSize: 55, color: "#8B907E" }}
                        />

                        <h2 className="mt-5 font-serif text-2xl text-[#292725]">
                            Your cart is empty
                        </h2>

                        <p className="mt-2 text-sm text-[#77716A]">
                            Discover our handcrafted wooden cutting boards.
                        </p>

                        <Link
                            to="/products"
                            className="mt-6 rounded-full bg-[#263F24] px-8 py-3 text-sm font-medium text-white hover:bg-[#405D37]"
                        >
                            Explore Products
                        </Link>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px]">

                        {/* Cart Products */}
                        <div className="space-y-4">

                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                />
                            ))}

                            <Link
                                to="/products"
                                className="inline-flex items-center gap-2 pt-3 text-sm font-semibold text-[#405D37] hover:text-[#263F24]"
                            >
                                ← Continue Shopping
                            </Link>

                        </div>

                        {/* Order Summary */}
                        <aside className="rounded-xl border border-[#EAE4DC] bg-[#FBF3E7] p-5 sm:p-6 lg:sticky lg:top-28">

                            <h2 className="font-serif text-xl text-[#292725]">
                                Order Summary
                            </h2>

                            <div className="my-5 border-t border-[#E5DCCE]" />

                            <div className="space-y-4 text-sm">

                                <div className="flex justify-between gap-3 text-[#77716A]">
                                    <span>Subtotal ({totalItems} items)</span>
                                    <span className="font-medium text-[#292725]">
                                        {formatPrice(subtotal)}
                                    </span>
                                </div>

                                <div className="flex justify-between text-[#77716A]">
                                    <span>Shipping</span>
                                    <span className="font-medium text-[#292725]">
                                        Calculated at checkout
                                    </span>
                                </div>

                            </div>

                            <div className="my-5 border-t border-[#E5DCCE]" />

                            <div className="flex items-center justify-between gap-3">
                                <span className="font-serif text-lg">
                                    Subtotal
                                </span>

                                <span className="text-xl font-semibold text-[#292725]">
                                    {formatPrice(subtotal)}
                                </span>
                            </div>

                            <p className="mt-2 text-xs text-[#888078]">
                                Shipping and applicable taxes will be calculated at checkout.
                            </p>

                            <Link
                                to="/checkout"
                                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#263F24] px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#405D37]"
                            >
                                Proceed to Checkout
                                <ArrowForwardIcon sx={{ fontSize: 17 }} />
                            </Link>

                            <div className="mt-5 space-y-3 text-xs text-[#77716A]">
                                <p>✓ Secure checkout</p>
                                <p>✓ Handcrafted with care</p>
                            </div>

                        </aside>

                    </div>

                )}

            </div>
        </section>
    );
}
