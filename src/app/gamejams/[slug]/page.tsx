import { gameJamEntries } from "@/lib/constants";
import { GameJamDetail } from "@/components/GameJamDetail";

export function generateStaticParams() {
  return gameJamEntries.map((e) => ({ slug: e.slug }));
}

export default async function GameJamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = gameJamEntries.find((e) => e.slug === slug);

  if (!entry) {
    return (
      <div className="min-h-screen flex items-center justify-center text-text-secondary">
        Game jam entry not found.
      </div>
    );
  }

  return <GameJamDetail entry={entry} />;
}
