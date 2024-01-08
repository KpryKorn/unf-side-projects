export default function Chip({ text }: { text?: string | number | null }) {
  return (
    <div className="rounded-full px-2 border-2 border-black text-sm font-medium">
      {text}
    </div>
  );
}
