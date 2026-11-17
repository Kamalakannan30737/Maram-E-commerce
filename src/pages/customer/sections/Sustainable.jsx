import { EnergySavingsLeafOutlined, RecyclingOutlined, ScienceOutlined } from "@mui/icons-material";
import forestBg from "../../../assets/board.webp";

const features = [
  { Icon: RecyclingOutlined, label: "Renewable Resource" },
  { Icon: ScienceOutlined, label: "No Harmful Chemicals" },
  { Icon: EnergySavingsLeafOutlined, label: "Low Carbon Footprint" },
];

export default function Sustainability() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <img src={forestBg} alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-20 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-black/55 lg:bg-linear-to-r lg:from-black/60 lg:via-black/35 lg:via-45% lg:to-black/5" />

      <div className=" flex min-h-[26rem]  mx-auto max-w-[1500px]  flex-col justify-center px-6 py-14 md:px-12 lg:min-h-[28rem] lg:px-20">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gold sm:text-xs">Sustainable Living</p>

        <h2 className="mt-4 font-serif text-[2rem] font-normal leading-[1.15] sm:text-5xl lg:text-[3.25rem]">
          Better for Your Kitchen.<br />Kinder to the Planet.
        </h2>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg">
          We use responsibly sourced hardwood and<br className="hidden sm:block" /> natural finishes, so you can cook with peace of mind.
        </p>

        <span className="mt-7 h-px w-14 bg-gold/70" />

        <ul className="mt-7 grid max-w-5xl grid-cols-3 divide-x divide-white/20">
          {features.map(({ Icon, label }) => (
            <li key={label} className="flex flex-col items-center gap-2.5 px-2 text-center lg:flex-row lg:gap-3 lg:px-8 lg:text-left lg:first:pl-0">
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/40 lg:size-11">
                <Icon fontSize="small" />
              </span>
              <span className="text-[11px] leading-tight text-white/85 sm:text-sm">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}