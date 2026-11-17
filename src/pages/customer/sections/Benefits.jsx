import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import GrainIcon from "@mui/icons-material/Grain";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

const benefits = [
    {
        title: "100% Natural Wood",
        description: "No chemicals, no stains",
        Icon: ForestOutlinedIcon,
    },
    {
        title: "Handcrafted",
        description: "By skilled artisans",
        Icon: HandymanOutlinedIcon,
    },
    {
        title: "Unique Grain",
        description: "Every board is one of a kind",
        Icon: GrainIcon,
    },
    {
        title: "Long Lasting",
        description: "Built for generations",
        Icon: TimerOutlinedIcon,
    },
];

export default function Benefits() {
    return (
        <section className="w-full bg-[#FAF7F2] px-5 py-8 sm:px-8 lg:py-10">

            <div className="mx-auto grid max-w-[1450px] grid-cols-2 lg:grid-cols-4">

                {benefits.map(({ title, description, Icon }, index) => (
                    <div
                        key={title}
                        className={`
                            flex flex-col items-center justify-center
                            gap-2 px-2 py-6 text-center
                            sm:px-5
                            ${index % 2 === 0 ? "border-r border-[#E7E0D7]" : ""}
                            ${index < 2 ? "border-b border-[#E7E0D7] lg:border-b-0" : ""}
                            ${index > 0 ? "lg:border-l lg:border-r-0" : ""}
                        `}
                    >
                        <Icon
                            sx={{
                                fontSize: { xs: 29, sm: 34 },
                                color: "#55554E",
                                strokeWidth: 1,
                            }}
                        />

                        <h3 className="mt-1 text-[12px] font-semibold text-[#292929] sm:text-2xl">
                            {title}
                        </h3>

                        <p className="text-[10px] leading-relaxed text-[#77716A] sm:text-xl">
                            {description}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}
