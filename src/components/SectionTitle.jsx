import { motion, useReducedMotion } from "framer-motion";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = true,
  light = false,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reduceMotion ? 0 : 0.55 }}
      className={`mb-10 max-w-3xl ${center ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p
          className={`mb-2 text-[15px] font-bold uppercase tracking-[0.18em] ${
            light ? "text-sky" : "text-royal"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`display-font text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-heading"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[17px] leading-8 ${light ? "text-white/90" : "text-ink"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
