import { Link } from "react-router";
import { Button } from "@mui/material";
import { ArrowForwardRounded } from "@mui/icons-material";
import heroBg from "../../../assets/Warm Kitchen Countertop Still Life.png";

const slide = "animate-slide-right motion-reduce:animate-none";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroBg}
        alt="Checkerboard hand-crafted wooden cutting board on a kitchen counter"
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full origin-[75%_60%] animate-zoom object-cover object-[75%_85%] will-change-transform motion-reduce:animate-none lg:object-[75%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-cream/80 via-cream/0 via-45% to-transparent to-60% lg:bg-linear-to-r lg:from-cream lg:from-30% lg:via-cream/50 lg:via-45% lg:to-transparent lg:to-65%" />

      <div className="mx-auto flex min-h-[40rem] max-w-[1500px] items-start justify-center px-6 pb-16 pt-10 text-center md:px-12 lg:min-h-[32rem] lg:items-center lg:justify-start lg:px-1 lg:py-16 lg:text-left">
        <div className="max-w-xl">
          <p className={`${slide} text-xs font-semibold uppercase tracking-[0.18em] text-brand [word-spacing:0.4em] sm:text-sm sm:tracking-[0.22em]`}>
            Handcrafted • Natural • Lasting
          </p>
          <h1 className={`${slide}  font-sans mt-[30px] text-[2.5rem] font-semibold leading-[1.08] [animation-delay:150ms] sm:text-6xl  lg:text-7xl`}>
            More Than a<br />Cutting Board
          </h1>
          <p className={`${slide} mt-4 text-base leading-relaxed text-ink/85 [animation-delay:300ms] sm:text-lg lg:mt-6`}>
            A masterpiece of nature, crafted by hand.<br />
            Bring warmth, style and functionality to your kitchen.
          </p>
          <div className={`${slide} mt-6 [animation-delay:450ms] lg:mt-8`}>
            <Button
              component={Link}
              to="/products"
              variant="contained"
              endIcon={<ArrowForwardRounded />}
              sx={{ px: { xs: 3.5, lg: 4.5 }, py: { xs: 1.25, lg: 1.5 }, fontSize: "1rem" }}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}