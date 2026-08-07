import { Eyebrow } from "../Eyebrow";
import { SHOW_SAMPLE_CONTENT } from "@/lib/sampleContent";

const TEAM = [
  { initials: "YK", name: "Yasmin Khoury", role: "Founder & Strategy Lead" },
  { initials: "TA", name: "Tariq Al Zaabi", role: "Head of Paid Media" },
  { initials: "NP", name: "Nadia Petrova", role: "Head of SEO & Content" },
  { initials: "HB", name: "Hassan Bakr", role: "Head of CRM & Automation" },
];

export default function Team() {
  if (!SHOW_SAMPLE_CONTENT) return null;

  return (
    <section data-sample="true" className="bg-white">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-2xl">
          <Eyebrow>Team</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-black">Sample placeholder team</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
          {TEAM.map((person) => (
            <div key={person.name} className="border-t-2 border-black/10 pt-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
                {person.initials}
              </span>
              <h3 className="mt-5 text-base font-bold text-black">{person.name}</h3>
              <p className="mt-1 text-sm text-primary-mid">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
