// app/components/CaseStudyCard.tsx
export default function CaseStudyCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="p-8 border border-gray-200 rounded-md bg-white">
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-gh-600 mt-3 text-sm">{body}</p>
    </article>
  );
}
