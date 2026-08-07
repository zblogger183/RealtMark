export function ToolsStack({ tools }: { tools: string[] }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {tools.map((tool) => (
        <span
          key={tool}
          className="rounded-sm border border-black/15 px-4 py-2 text-sm font-medium text-black"
        >
          {tool}
        </span>
      ))}
    </div>
  );
}
