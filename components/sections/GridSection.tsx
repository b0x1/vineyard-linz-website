export default function GridSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {children}
      </div>
    </section>
  );
}
