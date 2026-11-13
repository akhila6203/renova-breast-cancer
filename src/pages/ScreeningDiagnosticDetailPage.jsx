import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, CheckCircle2, ChevronDown, ChevronRight, ClipboardCheck } from "lucide-react";
import { screeningDiagnosticServices } from "../data/screeningDiagnosticsData";

import appointmentsWave from "../assets/appointments-wave.jpg";


function Breadcrumb({ title }) {
  return (
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

          <li>
            <Link
              to="/services"
              className="font-semibold text-white drop-shadow-md transition-colors hover:text-[#E87744]"
            >
              Services
            </Link>
          </li>

          <li aria-hidden="true" className="text-white/90 drop-shadow-md">
            /
          </li>

          <li>
            <Link
              to="/services/screening-diagnostics"
              className="font-semibold text-white drop-shadow-md transition-colors hover:text-[#E87744]"
            >
              Screening &amp; Diagnostics
            </Link>
          </li>

          <li aria-hidden="true" className="text-white/90 drop-shadow-md">
            /
          </li>

          <li
            aria-current="page"
            className="font-bold text-white drop-shadow-md"
          >
            {title}
          </li>
        </ol>
      </div>
    </nav>
  );
}
// function Breadcrumb({ title }) {
//   return (
//     <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[15px] sm:text-[16px]">
//       <Link to="/" className="font-semibold text-[#476B55] hover:text-[#E87744]">Home</Link><ChevronRight size={15} className="text-[#9AA89C]" />
//       <Link to="/services" className="font-semibold text-[#476B55] hover:text-[#E87744]">Services</Link><ChevronRight size={15} className="text-[#9AA89C]" />
//       <Link to="/services/screening-diagnostics" className="font-semibold text-[#476B55] hover:text-[#E87744]">Screening & Diagnostics</Link><ChevronRight size={15} className="text-[#9AA89C]" />
//       <span aria-current="page" className="font-bold text-[#E87744]">{title}</span>
//     </nav>
//   );
// }

export default function ScreeningDiagnosticDetailPage() {
  const { slug } = useParams();
  const service = screeningDiagnosticServices.find((item) => item.slug === slug);
  const [activeSection, setActiveSection] = useState("overview");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (!service) return undefined;
    const ids = ["overview", ...service.sections.map((_, index) => `section-${index}`), "faqs"];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-18% 0px -65% 0px", threshold: [0, 0.15, 0.35, 0.6] });
    ids.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, [service]);

  if (!service) return <Navigate to="/services/screening-diagnostics" replace />;

  const navItems = [
    { id: "overview", label: "Overview" },
    ...service.sections.map((section, index) => ({ id: `section-${index}`, label: section.title })),
    { id: "faqs", label: "FAQs" },
  ];

  return (
<main className="min-h-screen bg-[#FFFDFA] text-[#304B3C]">

      {/* BREADCRUMB */}
      <Breadcrumb title={service.title} />
     
      <section className="bg-[#F1F6F0]">
        <div className="page-container grid items-center gap-9 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-8 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-[12px] font-extrabold tracking-[.16em] text-[#476B55] shadow-sm">{service.eyebrow}</span>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-[#263C30] sm:text-5xl lg:text-[54px]">{service.title}</h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#536357] sm:text-[19px]">{service.cardDescription}</p>
            <p className="mt-4 max-w-2xl text-[17px] leading-8 text-[#536357] sm:text-[18px]">{service.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#overview" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#304B3C] px-6 py-3 text-[15px] font-bold text-white transition hover:bg-[#263C30]">Read details <ArrowRight size={18} /></a><Link to="/appointments" className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-[#476B55] px-6 py-3 text-[15px] font-bold text-[#304B3C] transition hover:bg-[#304B3C] hover:text-white"><CalendarDays size={18} /> Book appointment</Link></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65 }}><img src={service.image} alt={service.imageAlt} className="h-[280px] w-full rounded-[26px] object-cover shadow-xl sm:h-[380px] lg:h-[430px]" /></motion.div>
        </div>
      </section>

      <div className="page-container grid gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-14 lg:px-8 lg:py-20">
        {/* <aside className="hidden lg:block"><div className="sticky top-28 rounded-2xl border border-[#E1E9DF] bg-white p-5 shadow-sm"><p className="mb-4 text-[13px] font-extrabold uppercase tracking-[.15em] text-[#E87744]">ON THIS PAGE</p><nav className="space-y-1" aria-label="On this page">{navItems.map((item) => <a key={item.id} href={`#${item.id}`} className={`block rounded-xl border-l-[3px] px-3 py-3 text-[14px] font-semibold leading-5 transition ${activeSection === item.id ? "border-[#E87744] bg-[#304B3C] text-white" : "border-transparent text-[#536357] hover:bg-[#F1F6F0] hover:text-[#304B3C]"}`}>{item.label}</a>)}</nav></div></aside> */}
        
<aside className="hidden lg:block">
  <div className="sticky top-28 max-h-[calc(100vh-130px)] overflow-y-auto rounded-2xl border border-[#E1E9DF] bg-white p-5 shadow-sm">
    <p className="mb-4 text-[13px] font-extrabold uppercase tracking-[.15em] text-[#E87744]">
      ON THIS PAGE
    </p>

    <nav className="space-y-2" aria-label="On this page">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => setActiveSection(item.id)}
          className={`block rounded-xl border-l-4 px-3 py-3 text-[14px] font-bold leading-5 transition-all duration-200 ${
            activeSection === item.id
              ? " bg-[#304B3C] text-white shadow-sm"
              : "border-transparent text-[#536357] hover:border-[#E87744] hover:bg-[#F1F6F0] hover:text-[#304B3C]"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  </div>
</aside>

        <div className="min-w-0">
          <section id="overview" className="scroll-mt-28">
            <p className="text-[13px] font-extrabold uppercase tracking-[.17em] text-[#E87744]">OVERVIEW</p><h2 className="mt-2 text-3xl font-bold text-[#263C30] sm:text-4xl">Understanding {service.shortTitle}</h2><p className="mt-5 text-[17px] leading-8 text-[#536357]">{service.overview}</p></section>

          <div className="my-10 h-px bg-[#E4EBE2]" />
          {service.sections.map((section, index) => (
            <section id={`section-${index}`} key={section.title} className="scroll-mt-28 border-b border-[#E4EBE2] py-9 first:pt-0 last:border-0">
              <div className="flex items-start gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#EAF1E8] text-[15px] font-extrabold text-[#476B55]">{String(index + 1).padStart(2, "0")}</span><div className="min-w-0"><h2 className="text-2xl font-bold leading-tight text-[#263C30] sm:text-[28px]">{section.title}</h2>
                {section.paragraphs?.map((paragraph, pIndex) => <p key={pIndex} className="mt-4 text-[17px] leading-8 text-[#536357]">{paragraph}</p>)}
                {section.points?.length > 0 && <ul className="mt-5 grid gap-3 sm:grid-cols-2">{section.points.map((point) => <li key={point} className="flex items-start gap-3 rounded-xl bg-[#F4F7F2] p-4 text-[16px] leading-7 text-[#46584A]"><CheckCircle2 size={19} className="mt-1 shrink-0 text-[#E87744]" />{point}</li>)}</ul>}
              </div></div>
            </section>
          ))}

          <section id="faqs" className="scroll-mt-28 pt-8"><p className="text-[13px] font-extrabold uppercase tracking-[.17em] text-[#E87744]">COMMON QUESTIONS</p><h2 className="mt-2 text-3xl font-bold text-[#263C30] sm:text-4xl">Frequently asked questions</h2><div className="mt-7 space-y-3">{service.faqs.map((faq, index) => <div key={faq.question} className="overflow-hidden rounded-2xl border border-[#E1E9DF] bg-white"><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"><span className="text-[16px] font-bold leading-6 text-[#263C30] sm:text-[17px]">{faq.question}</span><ChevronDown size={20} className={`shrink-0 text-[#E87744] transition ${openFaq === index ? "rotate-180" : ""}`} /></button>{openFaq === index && <p className="border-t border-[#E8EEE6] px-5 py-4 text-[16px] leading-7 text-[#536357]">{faq.answer}</p>}</div>)}</div></section>

          <div className="mt-12 rounded-2xl border border-[#E4EAE0] bg-[#F4F7F2] p-6 sm:p-8"><div className="flex items-start gap-3"><ClipboardCheck className="mt-1 shrink-0 text-[#E87744]" size={25} /><div><h2 className="text-xl font-bold text-[#263C30]">A note about your care</h2><p className="mt-3 text-[16px] leading-7 text-[#536357]">{service.closing}</p></div></div></div>
        </div>
      </div>

      <section className="bg-[#304B3C] px-4 py-14 sm:px-6 sm:py-16 lg:px-8"><div className="page-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="text-[13px] font-extrabold uppercase tracking-[.17em] text-[#FFB38D]">YOUR NEXT STEP</p><h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">Have questions about your screening or diagnostic options?</h2><p className="mt-4 max-w-2xl text-[16px] leading-7 text-white/85">Talk with our team about your symptoms, reports and the next appropriate step.</p></div><Link to="/appointments" className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-[#E87744] px-7 py-3 text-[16px] font-bold text-white transition hover:bg-[#d76535]">Book an appointment <ArrowRight size={18} /></Link></div></section>
      {/* <div className="page-container flex flex-wrap items-center justify-between gap-4 px-4 py-7 sm:px-6 lg:px-8"><Link to="/services/screening-diagnostics" className="inline-flex items-center gap-2 font-bold text-[#476B55] hover:text-[#E87744]">← Back to Screening & Diagnostics</Link><p className="max-w-2xl text-[13px] leading-6 text-[#68766B]">This information is educational and does not replace medical advice. Tests and screening intervals are selected according to individual circumstances and current clinical guidance.</p></div> */}
    </main>
  );
}
