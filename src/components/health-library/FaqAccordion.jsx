
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mx-auto max-w-4xl divide-y divide-slate-200 border-y border-slate-200">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={faq.id || faq.question || index} className="bg-white">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-5 px-4 py-5 text-left sm:px-6"
            >
              <span className="flex items-center gap-4">
                <span className="text-sm font-bold text-teal-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={`text-sm font-semibold leading-6 sm:text-base ${
                    isOpen ? "text-teal-700" : "text-[#173b56]"
                  }`}
                >
                  {faq.question}
                </span>
              </span>

              <ChevronDown
                size={20}
                className={`shrink-0 text-teal-700 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 pb-6 pl-12 sm:px-6 sm:pl-16">
                <p className="text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
