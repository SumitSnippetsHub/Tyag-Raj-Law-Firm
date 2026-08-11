import type { ReactNode } from "react";

const NAMES = [
  "Sumit Tyagi",
  "सुमित त्यागी",
  "Vishaw Pratap",
  "विशव प्रताप",
];

/**
 * Wraps every occurrence of the advocate's name in a highlighted span so the
 * brand name always stands out, in both languages.
 */
export function highlightName(
  text: string,
  tone: "light" | "dark" = "light",
): ReactNode {
  const pattern = new RegExp(`(${NAMES.join("|")})`, "g");
  const parts = text.split(pattern);
  if (parts.length === 1) return text;

  return parts.map((part, i) =>
    NAMES.includes(part) ? (
      <span
        key={`${part}-${i}`}
        className={`name-mark${tone === "dark" ? " name-mark--on-dark" : ""}`}
      >
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function NameMark({
  children,
  tone = "light",
}: {
  children: string;
  tone?: "light" | "dark";
}) {
  return <>{highlightName(children, tone)}</>;
}
