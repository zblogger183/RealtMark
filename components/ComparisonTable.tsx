export function ComparisonTable({
  problem,
  whatsIncluded,
}: {
  problem: string;
  whatsIncluded: string[];
}) {
  return (
    <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-sm border border-black/10 md:grid-cols-2">
      <div className="border-b border-black/10 bg-white p-6 md:border-b-0 md:border-r md:border-black/10">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-mid">
          The generic approach
        </p>
        <p className="mt-3 text-sm leading-relaxed text-black">{problem}</p>
      </div>
      <div className="bg-primary p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
          The RealtMark approach
        </p>
        <ul className="mt-3 space-y-2.5">
          {whatsIncluded.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-white">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-secondary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
