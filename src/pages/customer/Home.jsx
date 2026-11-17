import Benefits from "./sections/Benefits";
import FeaturedProducts from "./sections/FeaturedProducts";
import Hero from "./sections/Hero";
import Sustainability from "./sections/Sustainable";
import Testimonial from "./sections/Testimonial"
import CTA from "./sections/Cta"

export default function Home() {
    return (
        <>
            <Hero />
            <Benefits />
            <FeaturedProducts />
            <Sustainability />
            <Testimonial />
            <CTA />
        </>
    );
}
