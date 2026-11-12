// import { MapPin, CalendarDays, Stethoscope } from "lucide-react";
import { MapPin, CalendarDays, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { hospital } from "../data/siteData";

const actions = [
  {
    label: "Call Now",
    path: hospital.phoneHref,
    Icon: Phone,
    isCall: true,
  },
  { label: "Appointment", path: "/appointments", Icon: CalendarDays },
  { label: "Location", path: "/contact#locations", Icon: MapPin },
  // { label: "Appointment", path: "/appointments", Icon: CalendarDays },
  // { label: "Find a Doctor", path: "/our-team", Icon: Stethoscope },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.4-1.41a10.1 10.1 0 0 0 4.64 1.12h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 14.13c-.24.68-1.4 1.3-1.94 1.34-.5.04-1.12.06-1.81-.11-.42-.11-.95-.3-1.64-.59-2.89-1.25-4.77-4.16-4.92-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.26-.29.58-.36.77-.36h.56c.18 0 .42-.07.66.5.24.59.82 2.04.89 2.19.07.15.12.32.02.52-.1.19-.14.32-.28.49-.14.17-.3.38-.42.51-.14.15-.29.31-.12.6.16.3.73 1.2 1.56 1.95 1.08.96 1.98 1.26 2.28 1.4.3.15.47.12.65-.07.17-.19.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.49.22.56.34.08.12.08.7-.16 1.38Z"
      />
    </svg>
  );
}

export default function FloatingActions() {
  const whatsappHref = `https://wa.me/${hospital.whatsappNumber}?text=${encodeURIComponent(
    "Hello, I would like information about appointments."
  )}`;

 return (
  <>
    {/* MOBILE AND TABLET: Keep the original bottom navigation */}
    <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_25px_rgba(20,38,74,0.08)] backdrop-blur lg:hidden">
      {/* {actions.map(({ label, path, Icon }) => (
        <Link
          key={label}
          to={path}
          className="flex min-h-[64px] flex-col items-center justify-center gap-1 text-navy hover:bg-ice"
        >
          <Icon size={22} />
          <span className="text-[15px] font-semibold">{label}</span>
        </Link>
      ))} */}
      {actions.map(({ label, path, Icon, isCall }) => (
  <Link
    key={label}
    to={path}
    className="flex min-h-[64px] flex-col items-center justify-center gap-1 text-navy transition hover:bg-ice"
  >
    <Icon size={22} />
    <span className="text-[15px] font-semibold">{label}</span>
  </Link>
))}
    </div>

    {/* WINDOWS / DESKTOP: Three icons vertically above WhatsApp */}
    <div className="fixed bottom-[88px] right-6 z-40 hidden flex-col gap-3 lg:flex">
      {/* {actions.map(({ label, path, Icon }) => (
        <Link
          key={label}
          to={path}
          title={label}
          aria-label={label}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-royal text-white shadow-premium transition hover:bg-royaldeep"
        >
          <Icon size={20} />
        </Link>
      ))} */}
      {actions.map(({ label, path, Icon, isCall }) => (
  <Link
    key={label}
    to={path}
    title={label}
    aria-label={label}
    className="flex h-12 w-12 items-center justify-center rounded-full bg-royal text-white shadow-premium transition hover:bg-royaldeep"
  >
    <Icon size={20} />
  </Link>
))}
    </div>

    {/* WHATSAPP: Original position on desktop and above mobile navigation */}
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="WhatsApp"
      className="fixed bottom-[calc(82px+env(safe-area-inset-bottom))] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 lg:bottom-6 lg:right-6"
    >
      <WhatsAppIcon />
    </a>
  </>
);
}






// import { MapPin, CalendarDays, Stethoscope } from "lucide-react";
// import { Link } from "react-router-dom";
// import { hospital } from "../data/siteData";

// const actions = [
//   { label: "Location", path: "/contact#locations", Icon: MapPin },
//   { label: "Appointment", path: "/appointments", Icon: CalendarDays },
//   { label: "Find a Doctor", path: "/our-team", Icon: Stethoscope },
// ];

// function WhatsAppIcon() {
//   return (
//     <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
//       <path
//         fill="currentColor"
//         d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.4-1.41a10.1 10.1 0 0 0 4.64 1.12h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 14.13c-.24.68-1.4 1.3-1.94 1.34-.5.04-1.12.06-1.81-.11-.42-.11-.95-.3-1.64-.59-2.89-1.25-4.77-4.16-4.92-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.26-.29.58-.36.77-.36h.56c.18 0 .42-.07.66.5.24.59.82 2.04.89 2.19.07.15.12.32.02.52-.1.19-.14.32-.28.49-.14.17-.3.38-.42.51-.14.15-.29.31-.12.6.16.3.73 1.2 1.56 1.95 1.08.96 1.98 1.26 2.28 1.4.3.15.47.12.65-.07.17-.19.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.49.22.56.34.08.12.08.7-.16 1.38Z"
//       />
//     </svg>
//   );
// }

// export default function FloatingActions() {
//   const whatsappHref = `https://wa.me/${hospital.whatsappNumber}?text=${encodeURIComponent(
//     "Hello, I would like information about appointments.",
//   )}`;

//   return (
//     <>
//       <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_25px_rgba(20,38,74,0.08)] backdrop-blur lg:hidden">
//         {actions.map(({ label, path, Icon }) => (
//           <Link
//             key={label}
//             to={path}
//             className="flex min-h-[64px] flex-col items-center justify-center gap-1 text-navy hover:bg-ice"
//           >
//             <Icon size={22} />
//             <span className="text-[15px] font-semibold">{label}</span>
//           </Link>
//         ))}
//       </div>

//       <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
//         {actions.map(({ label, path, Icon }) => (
//           <Link
//             key={label}
//             to={path}
//             title={label}
//             aria-label={label}
//             className="flex h-12 w-12 items-center justify-center rounded-full bg-royal text-white shadow-premium transition hover:bg-royaldeep"
//           >
//             <Icon size={20} />
//           </Link>
//         ))}
//       </div>

//       <a
//         href={whatsappHref}
//         target="_blank"
//         rel="noreferrer"
//         aria-label="Chat with us on WhatsApp"
//         title="WhatsApp"
//         className="fixed bottom-[calc(82px+env(safe-area-inset-bottom))] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 lg:bottom-6 lg:right-6"
//       >
//         <WhatsAppIcon />
//       </a>
//     </>
//   );
// }
