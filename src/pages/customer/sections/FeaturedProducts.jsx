import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { fetchProducts } from "../../../features/customer/products/productsSlice";
import ProductCard from "../../../components/customer/ProductCard";

export default function FeaturedProducts() {
    const dispatch = useDispatch();

    const { items, loading, error } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        if (items.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, items.length]);

    return (
        <section className="bg-[#FAF7F2] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

            <div className="mx-auto max-w-[1500px]">

                {/* Section Heading */}
                <div className="mb-8 flex items-end justify-between sm:mb-10">

                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#526747]">
                            Made with care
                        </p>

                        <h2 className="font-serif text-3xl text-[#292725] sm:text-4xl lg:text-5xl">
                            Our Bestsellers
                        </h2>

                        <p className="mt-3 text-sm text-[#77716A] sm:text-base">
                            Discover our handcrafted wooden cutting boards.
                        </p>
                    </div>

                    <Link
                        to="/products"
                        className="hidden text-sm font-semibold text-[#405D37] transition-colors hover:text-[#263F24] sm:block"
                    >
                        View All →
                    </Link>

                </div>

                {/* Loading */}
                {loading && (
                    <div className="py-16 text-center text-sm text-[#77716A]">
                        Loading products...
                    </div>
                )}

                {/* Error */}
                {error && (
                    <div className="py-12 text-center text-sm text-red-600">
                        {error}
                    </div>
                )}

                {/* Products Grid */}
                {!loading && !error && (
                    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">

                        {items.slice(0, 4).map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}

                    </div>
                )}

                {/* Mobile View All */}
                <div className="mt-8 text-center sm:hidden">
                    <Link
                        to="/products"
                        className="inline-block rounded-full border border-[#405D37] px-7 py-3 text-sm font-medium text-[#405D37]"
                    >
                        View All Products
                    </Link>
                </div>

            </div>
        </section>
    );
}
