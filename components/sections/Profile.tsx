interface ProfileProps {
  name: string;
  email: string;
  children: React.ReactNode;
}

export default function Profile({ name, email, children }: ProfileProps) {
  return (
    <div className="bg-white p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 uppercase tracking-wider border-b-4 border-brand inline-block">{name}</h3>
      <div className="text-gray-600 mb-6 leading-relaxed prose prose-slate">
        {children}
      </div>
      <a
        href={`mailto:${email}`}
        className="text-brand font-bold hover:underline"
      >
        {email}
      </a>
    </div>
  );
}
