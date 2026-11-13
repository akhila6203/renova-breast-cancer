
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartPulse,
  ScanLine,
  Stethoscope,
  Cpu,
  MessageCircleHeart,
  ShieldCheck,
  ChevronRight,
  Home,
} from "lucide-react";

import { cancerTypes } from "../data/cancerTypeContent";
import { screeningDiagnosticServices } from "../data/screeningDiagnosticsData";
import { treatmentServices } from "../data/treatmentServicesData";
import { technologyItems } from "../data/technologyData";

import appointmentsWave from "../assets/appointments-wave.jpg";
/* --------------------------------------------------
   SERVICE CARD
-------------------------------------------------- */

function ServiceCard({
  item,
  link,
  index = 0,
  fallbackIcon: Icon = HeartPulse,
}) {
  const description =
    item.cardDescription ||
    item.description ||
    item.intro ||
    "Explore our specialised cancer care services and treatment options.";

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.45,
        delay: (index % 3) * 0.06,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5ebe5] bg-white shadow-[0_4px_18px_rgba(38,60,48,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(38,60,48,0.12)]"
    >
      {/* IMAGE */}
      <Link
        to={link}
        className="relative block h-[205px] overflow-hidden bg-[#edf3ed]"
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.imageAlt || item.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#e8f0e8] to-[#dce9df]">
            <Icon
              size={58}
              strokeWidth={1.35}
              className="text-[#476b55]"
            />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#1e382c]/20 to-transparent" />

        {item.category && (
          <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#476b55]">
            {item.category}
          </span>
        )}
      </Link>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-[19px] font-bold leading-snug text-[#263c30] transition-colors group-hover:text-[#e87744] sm:text-xl">
          {item.title}
        </h3>

        <p className="mt-3 flex-1 text-[15px] leading-7 text-[#526257]">
          {description}
        </p>

        {/* GREEN KNOW MORE BUTTON */}
        <Link
          to={link}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#304b3c] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e87744]"
        >
          Know More
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}

/* --------------------------------------------------
   SECTION HEADING
-------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#476b55]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#476b55]">
        {Icon && <Icon size={15} />}
        {eyebrow}
      </div>

      <h2 className="text-2xl font-bold leading-tight text-[#263c30] sm:text-3xl lg:text-[36px]">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#526257] sm:text-base">
          {description}
        </p>
      )}

      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#e87744]" />
    </div>
  );
}

/* --------------------------------------------------
   SECTION VIEW ALL BUTTON
-------------------------------------------------- */

function SectionKnowMore({ to, label = "Know More" }) {
  return (
    <div className="mt-9 flex justify-center">
      <Link
        to={to}
        className="inline-flex items-center gap-2 rounded-full bg-[#304b3c] px-7 py-3 text-sm font-bold text-white shadow-sm transition duration-300 hover:bg-[#e87744] hover:shadow-md"
      >
        {label}
        <ArrowRight size={17} />
      </Link>
    </div>
  );
}

/* --------------------------------------------------
   SERVICE SECTION
-------------------------------------------------- */

function ServiceSection({
  id,
  eyebrow,
  title,
  description,
  items,
  icon: Icon,
  renderLink,
  fallbackIcon,
  background = "white",
  columns = "lg:grid-cols-3",
  limit,
  sectionLink,
  sectionButtonLabel = "Know More",
}) {
  const visibleItems = limit ? items.slice(0, limit) : items;

  return (
    <section
      id={id}
      className={`scroll-mt-28 py-14 sm:py-16 lg:py-[76px] ${
        background === "mist" ? "bg-[#f4f7f2]" : "bg-white"
      }`}
    >
      <div className="page-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          icon={Icon}
        />

        <div
          className={`grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 ${columns}`}
        >
          {visibleItems.map((item, index) => (
            <ServiceCard
              key={item.slug || item.title}
              item={item}
              index={index}
              link={renderLink(item)}
              fallbackIcon={fallbackIcon}
            />
          ))}
        </div>

        {sectionLink && (
          <SectionKnowMore
            to={sectionLink}
            label={sectionButtonLabel}
          />
        )}
      </div>
    </section>
  );
}

/* --------------------------------------------------
   MAIN SERVICES PAGE
-------------------------------------------------- */

export default function ServicesHubPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* BREADCRUMB */}
<nav
  aria-label="Breadcrumb"
  className="relative w-full overflow-hidden border-b border-[#dce5da] bg-cover bg-center"
  style={{
    backgroundImage: `url(${appointmentsWave})`,
  }}
>
  <div className="page-container relative z-10 mx-auto px-5 py-3 sm:px-8 lg:px-12">
    <ol className="flex flex-wrap items-center gap-2 text-[15px] sm:text-[16px]">
      <li>
        <Link
          to="/"
          className="font-semibold text-white drop-shadow-md transition-colors hover:text-[#E87744]"
        >
          Home
        </Link>
      </li>

      <li aria-hidden="true" className="text-white/90 drop-shadow-md">
        /
      </li>

      <li
        aria-current="page"
        className="font-bold text-white drop-shadow-md"
      >
        Services
      </li>
    </ol>
  </div>
</nav>
      {/* HERO */}
    

      {/* 1. CANCER TYPES - ONLY 3 CARDS */}
      <ServiceSection
        id="cancer-types"
        eyebrow="Understand Your Diagnosis"
        title="Cancer Types"
        description="Explore different types of cancer, their symptoms, diagnosis and available treatment approaches."
        items={cancerTypes}
        icon={HeartPulse}
        fallbackIcon={HeartPulse}
        renderLink={(item) => `/services/cancer/${item.slug}`}
        background="mist"
        columns="lg:grid-cols-3"
        limit={3}
      />

      {/* 2. SCREENING & DIAGNOSTICS */}
      <ServiceSection
        id="screening-diagnostics"
        eyebrow="Early Detection & Accurate Diagnosis"
        title="Screening & Diagnostics"
        description="Advanced screening and diagnostic services to support early detection, accurate diagnosis and informed treatment planning."
        items={screeningDiagnosticServices}
        icon={ScanLine}
        fallbackIcon={ScanLine}
        renderLink={(item) =>
          `/services/screening-diagnostics/${item.slug}`
        }
        background="white"
        columns="lg:grid-cols-4"
      />

      {/* 3. CANCER TREATMENTS - ONLY 4 CARDS + SECTION BUTTON */}
      <ServiceSection
        id="cancer-treatments"
        eyebrow="Personalised Treatment Options"
        title="Cancer Treatments"
        description="Discover specialised cancer treatments planned around each patient's diagnosis, clinical needs and individual care goals."
        items={treatmentServices}
        icon={Stethoscope}
        fallbackIcon={Stethoscope}
        renderLink={(item) => `/services/treatments/${item.slug}`}
        background="mist"
        columns="lg:grid-cols-4"
        limit={4}
        sectionLink="/services/treatments"
        sectionButtonLabel="Know More"
      />

{/* 4. TECHNOLOGY & EQUIPMENT */}
<ServiceSection
  id="technology"
  eyebrow="Advanced Medical Innovation"
  title="Technology & Equipment"
  description="Explore the advanced technologies and equipment supporting precision, personalisation and quality in cancer care."
  items={technologyItems}
  icon={Cpu}
  fallbackIcon={Cpu}
  renderLink={(item) => item.path || `/technology/${item.slug}`}
  background="white"
  columns="lg:grid-cols-4"
  limit={4}
  sectionLink="/technology"
  sectionButtonLabel="Know More"
/>

      {/* 5. SECOND OPINION */}
      <section
        id="second-opinion"
        className="scroll-mt-28 bg-[#f4f7f2] py-14 sm:py-16 lg:py-20"
      >
        <div className="page-container px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Expert Guidance"
            title="Second Opinion"
            description="Get an additional expert perspective on your diagnosis and treatment plan to help you make informed decisions about your cancer care."
            icon={ShieldCheck}
          />

          <div className="mx-auto max-w-4xl">
            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group grid overflow-hidden rounded-2xl border border-[#e1e9df] bg-white shadow-[0_6px_25px_rgba(38,60,48,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[0.8fr_1.2fr]"
            >
              <div className="flex min-h-[230px] items-center justify-center bg-gradient-to-br from-[#304b3c] to-[#52745b] p-8">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white">
                  <MessageCircleHeart
                    size={48}
                    strokeWidth={1.4}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-9">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#e87744]">
                  Expert Medical Guidance
                </span>

                <h3 className="mt-3 text-xl font-bold text-[#263c30] sm:text-2xl">
                  Get a Second Opinion
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-[#526257]">
                  Discuss your diagnosis, medical reports and proposed
                  treatment plan with our cancer care specialists.
                  Get further clarity and guidance for your next steps.
                </p>

                <Link
                  to="/services/second-opinion"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#304b3c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e87744]"
                >
                  Know More
                  <ArrowRight size={17} />
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* FINAL APPOINTMENT CTA */}
      <section className="bg-[#263c30] py-12 sm:py-14">
        <div className="page-container flex flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Need Help Choosing the Right Care?
            </h2>

            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/80">
              Connect with our team to learn more about our services
              and find the right next step for your care.
            </p>
          </div>

          <Link
            to="/appointments"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#e87744] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#d96836]"
          >
            Book an Appointment
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
