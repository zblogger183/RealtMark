import { Eyebrow } from "../Eyebrow";
import { SHOW_SAMPLE_CONTENT } from "@/lib/sampleContent";

const TESTIMONIALS = [
  {
    initials: "RS",
    name: "Rania Al Suwaidi",
    role: "Marketing Director, Meridian Properties",
    quote:
      "The community-level SEO structure was the difference between our JVC launch competing on price and it actually ranking. Six months in, organic is now our second-largest lead source.",
  },
  {
    initials: "OH",
    name: "Omar Haddad",
    role: "Founder, Haddad & Co. Realty",
    quote:
      "We went from every agent running their own WhatsApp habit to an actual pipeline we can see across the whole team. Follow-up stopped depending on who remembered to check their phone.",
  },
  {
    initials: "SM",
    name: "Sofia Marchetti",
    role: "Head of Growth, Skyline Developments",
    quote:
      "Our Downtown launch and our JVC launch got genuinely different campaigns, not the same template with the address swapped. That distinction alone justified the engagement.",
  },
  {
    initials: "FM",
    name: "Faisal Al Marri",
    role: "Sales Director, Palm Vista Realty",
    quote:
      "Reporting finally ties back to qualified pipeline instead of impressions. It's the first time a marketing partner's numbers matched what our sales team was actually seeing.",
  },
];

export default function Testimonials() {
  if (!SHOW_SAMPLE_CONTENT) return null;

  return (
    <section data-sample="true" className="bg-black/[0.02]">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Sample placeholder testimonials</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-black">What clients say, once we have clients on record.</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`rounded-xl p-7 ${
                i % 2 === 0 ? "bg-primary text-white" : "border border-black/10 bg-white text-black"
              }`}
            >
              <p className={`text-base leading-relaxed ${i % 2 === 0 ? "text-white/90" : "text-black"}`}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <span
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    i % 2 === 0 ? "bg-secondary text-black" : "bg-primary text-white"
                  }`}
                >
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-bold">{testimonial.name}</p>
                  <p className={`text-xs ${i % 2 === 0 ? "text-white/60" : "text-primary-mid"}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
