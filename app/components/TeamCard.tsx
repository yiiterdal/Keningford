// app/components/TeamCard.tsx
export default function TeamCard({ name, title, bio }: { name: string; title: string; bio: string }) {
  return (
    <div className="p-8 border border-gray-200 rounded-md bg-white">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-gh-800 text-sm">{title}</div>
      <p className="text-gh-600 mt-3 text-sm">{bio}</p>
    </div>
  );
}
