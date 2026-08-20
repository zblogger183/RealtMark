import { SERVICES } from "@/lib/services";

// Real tools/platforms named in each service's own copy — not a separate claim.
const TOOLS = Array.from(new Set(SERVICES.flatMap((s) => s.tools ?? [])));

export default function ToolsStrip() {
  return (
    <section className="border-b border-black/10 bg-black/[0.02] py-8">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary-mid">
          Tools &amp; platforms we work in
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {TOOLS.map((tool) => (
            <span key={tool} className="text-sm font-semibold uppercase tracking-wide text-black/50">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
