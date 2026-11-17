import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import {
    ArrowBackRounded,
    ArrowForwardRounded,
} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../../features/customer/reviews/reviewsSlice";

const clip = {
    clipPath:
        "polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)",
};

let uid = 0;

function Carousel({ reviews }) {
    const [list, setList] = useState([]);

    // Update carousel whenever reviews are loaded
    useEffect(() => {
        setList(
            reviews.map((review) => ({
                ...review,
                key: review.id,
            }))
        );
    }, [reviews]);

    const mid = Math.floor(list.length / 2);

    const move = (steps) => {
        if (!steps || !list.length) return;

        setList((currentList) => {
            const n = Math.min(
                Math.abs(steps),
                currentList.length
            );

            const rotated =
                steps > 0
                    ? [
                          ...currentList.slice(n),
                          ...currentList.slice(0, n),
                      ]
                    : [
                          ...currentList.slice(-n),
                          ...currentList.slice(0, -n),
                      ];

            const moved =
                steps > 0
                    ? rotated.slice(-n)
                    : rotated.slice(0, n);

            return rotated.map((item) =>
                moved.includes(item)
                    ? {
                          ...item,
                          key: `${item.id}-${++uid}`,
                      }
                    : item
            );
        });
    };

    if (!list.length) return null;

    return (
        <>
            {list.map((review, i) => {
                const pos = i - mid;
                const center = pos === 0;
                const odd = pos % 2;

                return (
                    <figure
                        key={review.key}
                        onClick={() => move(pos)}
                        className={`absolute left-1/2 top-1/2 size-72 border-2 border-ink p-6 mt-10 transition-all duration-500 ease-in-out sm:size-[365px] sm:p-10 ${
                            center
                                ? "z-10 bg-brand text-white"
                                : "cursor-pointer bg-white hover:bg-cream"
                        }`}
                        style={{
                            ...clip,
                            transform: `translate(-50%, -50%) translateX(${pos * 66.67}%) translateY(${center ? -65 : odd ? 15 : -15}px) rotate(${center ? 0 : odd ? 2.5 : -2.5}deg)`,
                        }}
                    >
                        <span className="absolute -right-0.5 top-12 h-0.5 w-[70.7px] origin-top-right rotate-45 bg-ink" />

                        {/* Customer avatar */}
                        <div className="mb-4 flex h-14 w-12 items-center justify-center bg-stone-200 text-lg font-semibold text-stone-700 shadow-[3px_3px_0_#fff]">
                            {review.customerName?.charAt(0)?.toUpperCase()}
                        </div>

                        {/* Rating */}
                        <div className="mb-3 text-amber-400">
                            {"★".repeat(review.rating || 0)}
                            {"☆".repeat(5 - (review.rating || 0))}
                        </div>

                        {/* Review content */}
                        <blockquote className="text-base font-medium sm:text-xl">
                            “{review.comment}”
                        </blockquote>

                        <figcaption
                            className={`absolute inset-x-6 bottom-6 text-sm italic sm:inset-x-8 sm:bottom-8 ${
                                center
                                    ? "text-white/70"
                                    : "text-ink/60"
                            }`}
                        >
                            – {review.customerName}
                        </figcaption>
                    </figure>
                );
            })}

            {/* Carousel navigation */}
            <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 gap-8">
                <IconButton
                    aria-label="Previous review"
                    color="inherit"
                    onClick={() => move(-1)}
                >
                    <ArrowBackRounded />
                </IconButton>

                <IconButton
                    aria-label="Next review"
                    color="inherit"
                    onClick={() => move(1)}
                >
                    <ArrowForwardRounded />
                </IconButton>
            </div>
        </>
    );
}

export default function Reviews() {
    const dispatch = useDispatch();

    const {
        items,
        loading,
        error,
    } = useSelector((state) => state.reviews);

    useEffect(() => {
        if (items.length === 0 && !loading && !error) {
            dispatch(fetchReviews());
        }
    }, [dispatch, items.length, loading, error]);

    return (
        <section
            id="reviews"
            className="relative h-[800px] scroll-mt-20 overflow-hidden bg-stone-200/70"
        >
            <h2 className="m-20 text-center font-serif text-3xl text-[#292725] sm:text-4xl lg:text-5xl">
                What our customers say
            </h2>

            {loading && (
                <p className="absolute inset-0 flex items-center justify-center">
                    Loading reviews...
                </p>
            )}

            {error && (
                <p className="absolute inset-0 flex items-center justify-center text-red-600">
                    {error}
                </p>
            )}

            {!loading && !error && items.length === 0 && (
                <p className="absolute inset-0 flex items-center justify-center">
                    No reviews available yet.
                </p>
            )}

            {!loading && items.length > 0 && (
                <Carousel reviews={items} />
            )}
        </section>
    );
}
