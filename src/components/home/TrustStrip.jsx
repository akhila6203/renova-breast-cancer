
const trustItems = [
  {
    title: "Expert",
    description: "Oncology Team",
    icon: (
      <>
        <circle cx="24" cy="12" r="6" />
        <circle cx="10" cy="18" r="4" />
        <circle cx="38" cy="18" r="4" />
        <path d="M12 39v-5c0-7 5-12 12-12s12 5 12 12v5H12z" />
        <path d="M3 35v-3c0-4 3-7 7-7" />
        <path d="M45 35v-3c0-4-3-7-7-7" />
      </>
    ),
  },
  {
    title: "Advanced",
    description: "Technology",
    icon: (
      <>
        <path d="M24 4 40 10v12c0 10-7 17-16 22C15 39 8 32 8 22V10L24 4z" />
        <path d="m16 24 6 6 11-12" />
      </>
    ),
  },
  {
    title: "Patient-Centric",
    description: "Care",
    icon: (
      <>
        <path d="M24 41S5 30 5 17C5 8 17 5 24 16 31 5 43 8 43 17 43 30 24 41 24 41z" />
        <path d="M24 33s-11-7-11-15c0-4 6-6 11 2 5-8 11-6 11-2 0 8-11 15-11 15z" />
      </>
    ),
  },
  {
    title: "State-of-the-Art",
    description: "Cancer Centre",
    icon: (
      <>
        <rect x="7" y="14" width="34" height="29" rx="2" />
        <path d="M17 14V7h14v7" />
        <path d="M21 23h6M24 20v6" />
        <path d="M13 23h2M33 23h2M13 30h2M33 30h2" />
        <path d="M20 43V34h8v9" />
      </>
    ),
  },
];

export default function TrustStrip() {
  return (
    <section
  className="relative z-10 -mt-1 w-full px-0 pb-0 pt-0"
  aria-label="Our commitments"
>
  {/* bg-[#c4f7d5] */}
     <div className="mx-auto grid w-full grid-cols-2 overflow-hidden rounded-none border-y border-[#D4E0D6] bg-[#b6c8bc] px-2 py-2 sm:px-4 lg:grid-cols-4 lg:px-3">
        {trustItems.map((item, index) => (
          <div
            key={item.title}
            className={`relative flex min-h-[76px] min-w-0 items-center justify-center gap-2 px-2 py-3 sm:gap-3 sm:px-4 lg:min-h-[82px] lg:px-5 ${
              index < 2 ? "border-b border-[#C5D9D0] lg:border-b-0" : ""
            } ${
              index % 2 === 0
                ? "border-r border-[#C5D9D0] lg:border-r-0"
                : ""
            } ${
              index !== 3
                ? "lg:after:absolute lg:after:right-0 lg:after:top-[10%] lg:after:h-[80%] lg:after:w-px lg:after:bg-[#778181]"
                : ""
            }`}
          >
            <svg
              viewBox="0 0 48 48"
              className="h-8 w-8 shrink-0 fill-none stroke-[#4F7359] stroke-[2.3] sm:h-10 sm:w-10"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {item.icon}
            </svg>

            <div className="flex min-w-0 flex-col gap-0.5">
              <strong className="text-xs font-extrabold leading-snug text-[#3a3d3b] sm:text-sm">
                {item.title}
              </strong>
              <span className="text-xs font-medium leading-snug text-[#3d3e3d] sm:text-sm">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
