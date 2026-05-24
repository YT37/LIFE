type Variant = "color" | "white" | "purple";

export function LifeLogo({
  className,
  variant = "color",
}: {
  className?: string;
  variant?: Variant;
}) {
  const red = variant === "color" ? "#E03326" : "currentColor";
  const purple = variant === "color" ? "#4D43B5" : "currentColor";
  const yellow = variant === "color" ? "#FFC629" : "currentColor";

  return (
    <svg
      viewBox="0 0 188 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="LIFE"
    >
      {/* L */}
      <g>
        <rect x="0" y="0" width="14" height="14" fill={yellow} />
        <rect x="0" y="14" width="14" height="32" fill={red} />
        <rect x="0" y="46" width="42" height="14" fill={yellow} />
        <rect x="14" y="46" width="14" height="14" fill={red} />
      </g>

      {/* I */}
      <g transform="translate(50 0)">
        <rect x="0" y="0" width="14" height="14" fill={yellow} />
        <rect x="0" y="14" width="14" height="32" fill={purple} />
        <rect x="0" y="46" width="14" height="14" fill={yellow} />
      </g>

      {/* F */}
      <g transform="translate(74 0)">
        <rect x="0" y="0" width="38" height="14" fill={yellow} />
        <rect x="0" y="14" width="14" height="46" fill={red} />
        <rect x="14" y="22" width="22" height="14" fill={red} />
        <rect x="0" y="14" width="14" height="12" fill={purple} />
      </g>

      {/* E - vertical stem with three arms (rounded right ends) */}
      <g transform="translate(124 0)">
        <rect x="0" y="14" width="14" height="32" fill={red} />
        <rect x="0" y="0" width="14" height="14" fill={yellow} />
        <rect x="0" y="46" width="14" height="14" fill={yellow} />
        <path d="M 14 0 H 30 A 7 7 0 0 1 30 14 H 14 Z" fill={yellow} />
        <path d="M 0 23 H 26 A 7 7 0 0 1 26 37 H 0 Z" fill={purple} />
        <path d="M 14 46 H 30 A 7 7 0 0 1 30 60 H 14 Z" fill={yellow} />
        <rect x="14" y="0" width="14" height="14" fill={red} />
      </g>
    </svg>
  );
}
