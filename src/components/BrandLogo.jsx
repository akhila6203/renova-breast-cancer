import { Link } from "react-router-dom";
import { hospital } from "../data/siteData";

export default function BrandLogo({ onClick, compact = false }) {
  return (
    <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2.5" onClick={onClick}>
      <img
        src="/renova-logo.png"
        alt={`${hospital.name} ${hospital.nameLine2}`}
        // className={`w-auto object-contain ${compact ? "h-10" : "h-12 sm:h-[3.25rem]"}`}
        className={`w-auto object-contain ${compact ? "h-14" : "h-14 sm:h-16"}`}
      />
      <span className="min-w-0 sr-only">
        <span>{hospital.name}</span>
        <span>{hospital.nameLine2}</span>
        <span>{hospital.tagline}</span>
      </span>
    </Link>
  );
}
