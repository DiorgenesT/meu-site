export function SplitChars({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((c, i) => (
        <span key={i} className="char-wrap">
          <span>{c === ' ' ? '\u00A0' : c}</span>
        </span>
      ))}
    </span>
  );
}
