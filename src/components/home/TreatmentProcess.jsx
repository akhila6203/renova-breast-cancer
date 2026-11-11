
const treatmentSteps = [
  {
    title: "Consultation & Evaluation",
    icon: (
      <>
        <rect x="11" y="9" width="26" height="33" rx="3" />
        <path d="M18 9V6H30V9" />
        <path d="M17 18H31" />
        <path d="M17 25H31" />
        <path d="M17 32H27" />
        <path d="M15 17L16.5 18.5L19 15.5" />
      </>
    ),
  },
  {
    title: "Treatment Planning",
    icon: (
      <>
        <rect x="7" y="11" width="34" height="30" rx="4" />
        <path d="M15 6V16" />
        <path d="M33 6V16" />
        <path d="M7 20H41" />
        <path d="M17 29L21 33L30 24" />
      </>
    ),
  },
  {
    title: "Treatment & Care",
    icon: (
      <>
        <rect x="15" y="5" width="18" height="31" rx="4" />
        <path d="M20 10H28" />
        <path d="M19 16H29" />
        <path d="M20 22H28" />
        <path d="M21 36V41H27V36" />
        <path d="M19 27H29" />
      </>
    ),
  },
  {
    title: "Recovery & Follow-up",
    icon: (
      <>
        <circle cx="24" cy="12" r="6" />
        <circle cx="10" cy="19" r="4" />
        <circle cx="38" cy="19" r="4" />
        <path d="M12 39V35C12 28 17 23 24 23C31 23 36 28 36 35V39H12Z" />
        <path d="M3 35V32C3 28 6 25 10 25" />
        <path d="M45 35V32C45 28 42 25 38 25" />
      </>
    ),
  },
];

export default function TreatmentProcess() {
  return (
    <section
      id="treatment-process"
      className="w-full overflow-hidden bg-[#E8F0EA] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1450px] px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-[850px] text-center sm:mb-14">
          <p className="mb-3 flex items-center justify-center gap-3 text-xs font-extrabold tracking-[1.8px] text-[#E87744] sm:text-sm">
            <span className="h-[2px] w-8 bg-[#E87744]" />
            TREATMENT PROCESS
            <span className="h-[2px] w-8 bg-[#E87744]" />
          </p>

          <h2 className="text-2xl font-extrabold leading-tight text-[#4F7359] sm:text-3xl lg:text-[37px]">
            A Structured &amp; Personalized Care Journey
          </h2>

          <p className="mx-auto mt-3 max-w-[650px] text-sm leading-7 text-[#3D4A40] sm:text-base">
            From diagnosis to recovery, we guide you at every step with
            clarity and support.
          </p>
        </div>

        {/* Circular Treatment Steps */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-7 md:gap-x-7 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-0">

          {treatmentSteps.map((step, index) => (
            <div
              key={step.title}
              className="group relative flex min-w-0 justify-center"
            >

              {/* Complete Circle */}
              <div className="flex h-[175px] w-[175px] flex-col items-center justify-center rounded-full border-2 border-[#C9D9CE] bg-[#F6F9F6] px-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#4F7359] group-hover:shadow-lg sm:h-[195px] sm:w-[195px] lg:h-[205px] lg:w-[205px]">

                {/* Icon */}
                <div className="mb-3 flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-full bg-[#E8F0EA] sm:h-[75px] sm:w-[75px]">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 stroke-[#4F7359] stroke-[2.2] sm:h-11 sm:w-11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {step.icon}
                  </svg>
                </div>

                {/* Name inside Circle */}
                <h3 className="max-w-[145px] text-center text-sm font-extrabold leading-5 text-[#4F7359] sm:max-w-[165px] sm:text-base sm:leading-6">
                  {step.title}
                </h3>

              </div>

              {/* Desktop Arrow */}
              {index !== treatmentSteps.length - 1 && (
                <span
                  className="absolute -right-[22px] top-1/2 hidden -translate-y-1/2 text-3xl font-normal text-[#E87744] lg:block"
                  aria-hidden="true"
                >
                  ➜
                </span>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
