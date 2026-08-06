type FieldProps = {
  className?: string;
  id?: string;
  scale?: number;
};

/**
 * Full-field low-opacity texture. The tile is the same diamond-and-square
 * construction used across mashrabiya and jali screens on Gulf facades —
 * used here as a background texture, not an illustration. Tiles at 48
 * units natively; scale widens the repeat so the pattern reads as quiet
 * texture rather than a dense printed grid.
 */
export function LatticeField({ className = "", id = "lattice-field", scale = 1 }: FieldProps) {
  return (
    <svg
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <pattern
          id={id}
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
          patternTransform={scale !== 1 ? `scale(${scale})` : undefined}
        >
          <path d="M24 0 L48 24 L24 48 L0 24 Z" fill="none" stroke="currentColor" strokeWidth={1} />
          <rect x="19" y="19" width="10" height="10" fill="none" stroke="currentColor" strokeWidth={1} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

type MarkProps = {
  className?: string;
};

/** Single unit of the same lattice, used as the logomark and as a divider glyph. */
export function LatticeMark({ className = "h-7 w-7" }: MarkProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" aria-hidden="true" className={className}>
      <path d="M16 2 L30 16 L16 30 L2 16 Z" strokeWidth={1.5} />
      <rect x="11" y="11" width="10" height="10" strokeWidth={1.5} />
    </svg>
  );
}
