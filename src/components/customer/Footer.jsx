
import { Link } from "react-router";
import { ArrowOutwardRounded } from "@mui/icons-material";

const columns = [
  {
    title: "Order & Support",
    links: [
      ["Track My Order", "/track-order"],
    ],
  },
  {
    title: "Information",
    links: [
      ["Shipping & Returns", "/shipping-returns"],
      ["Wood Care Guide", "/care-guide"],
      ["Privacy Policy", "/privacy"],
      ["Terms of Service", "/terms"],
      ["FAQs", "/faqs"],
    ],
  },
  {
    title: "Contact Us",
    links: [
      //["Creator Collaborations", "/collaborations"],
    //  ["Affiliate Program", "/affiliates"],
      ["Get in touch", "/contact"],
      ["Store Locator", "/contact#store"],
      ["Careers", "/careers"],
    ],
  },
];

const store = {
  name: "MARAM Workshop & Store",
  address: ["No. 114, Nehru Nagar, Main Road, Cross Kottivakkam, Off OMR, Chennai – 600 041."],
  hours: "Mon – Sat, 10 AM – 7 PM",
};

const mapUrl = `https://www.google.com/maps?cid=3999103318591846659&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF`;

export default function Footer() {
  return (
    <footer className="border-t border-ink/80 max-w-[1500px] mx-auto bg-cream px-6 pb-6 pt-14 md:px-12 mt-10">

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-[repeat(3,1fr)_1fr]">

        {/* Footer Links */}
        {columns.map(({ title, links }, i) => (
          <nav
            key={title}
            aria-label={title}
            className={i === 2 ? "col-span-2 sm:col-span-1" : ""}
          >
            <h3 className="text-sm font-semibold tracking-[0.15em]">
              {title}
            </h3>

            <ul className="mt-5 space-y-3">
              {links.map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[15px] text-ink/70 transition-colors hover:text-ink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Store Information */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-1">

          <h3 className="text-xl font-semibold">
            Visit Our Store
          </h3>

          <address className="mt-3 text-[15px] not-italic leading-7 text-ink/75">

            <strong className="font-semibold text-ink">
              {store.name}
            </strong>

            {store.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}

            <span className="block">
              {store.hours}
            </span>

          </address>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-[15px] font-medium text-brand underline-offset-4 hover:underline"
          >
            Get directions
            <ArrowOutwardRounded fontSize="inherit" />
          </a>

        </div>
      </div>

      {/* Copyright */}
      <p className="mx-auto mt-10 max-w-[1500px] border-t border-ink/80 pt-5 text-center text-sm text-ink/70">
        © {new Date().getFullYear()} MARAM. All rights reserved.
      </p>

    </footer>
  );
}
