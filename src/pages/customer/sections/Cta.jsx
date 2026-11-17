import { Link } from "react-router";
import { Button } from "@mui/material";
import ctaBg from "../../../assets/Kitchen.png";

export default function QuizCta() {
  return (
    <section className="relative isolate  overflow-hidden text-center text-white">
      <img src={ctaBg} alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-20 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-black/60 lg:bg-black/50" />

      <div className="mx-auto max-w-[1500px] flex min-h-[22rem] flex-col items-center justify-center px-6 py-16 lg:min-h-[25rem]">
        <h2 className="font-serif text-3xl font-medium sm:text-4xl lg:text-[2.5rem]">Find Your Perfect Board</h2>

        <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base lg:text-lg">
          Answer a few quick questions and we’ll suggest<br className="hidden sm:block" /> the best board for your kitchen.
        </p>

        <Button
          component={Link}
          to="/products"
          variant="contained"
          sx={{
            mt: { xs: 3.5, lg: 4 },
            px: { xs: 4, lg: 5 },
            py: { xs: 1.25, lg: 1.5 },
            bgcolor: "common.white",
            color: "text.primary",
            "&:hover": { bgcolor: "grey.200" },
          }}
        >
          Shop Now
        </Button>
      </div>
    </section>
  );
}