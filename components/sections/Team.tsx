import { Eyebrow } from "../Eyebrow";
import { SHOW_SAMPLE_CONTENT } from "@/lib/sampleContent";

const TEAM = [
  {
    initials: "YK",
    name: "Yasmin Khoury",
    role: "Founder & Strategy Lead",
    bio: "Sets the strategy on every engagement and stays in the room from discovery through launch.",
  },
  {
    initials: "TA",
    name: "Tariq Al Zaabi",
    role: "Head of Paid Media",
    bio: "Runs every Google and Meta account personally — no account manager layer between you and spend decisions.",
  },
  {
    initials: "NP",
    name: "Nadia Petrova",
    role: "Head of SEO & Content",
    bio: "Builds the community-level content and technical SEO structure behind every ranking page.",
  },
  {
    initials: "HB",
    name: "Hassan Bakr",
    role: "Head of CRM & Automation",
    bio: "Builds the routing and follow-up systems that turn inquiries into a working pipeline.",
  },
];

export default function Team() {
  if (!SHOW_SAMPLE_CONTENT) return null;

  return (
    <section data-sample="true" className="bg-white">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-2xl">
          <Eyebrow>Sample placeholder team</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-black">Built by specialists, not account layers.</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {TEAM.map((person) => (
            <div key={person.name} className="flex gap-5 rounded-xl border border-black/10 p-6">
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
                {person.initials}
              </span>
              <div>
                <h3 className="text-base font-bold text-black">{person.name}</h3>
                <p className="text-sm text-primary-mid">{person.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-black/70">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
