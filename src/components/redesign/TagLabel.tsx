// Chip text uses tight negative tracking, which crushes the "→" in labels like
// "0→1 product" against the characters on either side. Give the arrow room.
export default function TagLabel({ children }: { children: string }) {
  const parts = children.split("→");
  if (parts.length === 1) return <>{children}</>;
  return (
    <span className="[word-spacing:0.14em]">
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && (
            <span aria-hidden className="inline-block mx-[0.18em] tracking-normal">
              →
            </span>
          )}
          {part}
        </span>
      ))}
    </span>
  );
}
