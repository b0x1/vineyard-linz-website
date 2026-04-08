export default function GoogleForm({ id }: { id: string }) {
  return (
    <div className="w-full my-12 border border-gray-100 rounded-lg overflow-hidden shadow-sm">
      <iframe
        src={`https://docs.google.com/forms/d/${id}/viewform?embedded=true`}
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Wird geladen…
      </iframe>
    </div>
  );
}
