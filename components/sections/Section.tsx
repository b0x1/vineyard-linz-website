export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-12 px-4 md:px-0">
      <div className="max-w-4xl mx-auto prose prose-slate lg:prose-xl prose-headings:text-brand prose-a:text-brand">
        {children}
      </div>
    </section>
  );
}
