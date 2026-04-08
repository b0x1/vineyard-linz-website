export default function ChurchSuite({ id }: { id: string }) {
  return (
    <div className="w-full my-8">
      <iframe
        src={`https://vl.churchsuite.co.uk/embed/${id}?preview=true`}
        width="100%"
        height="600"
        frameBorder="0"
        className="rounded-lg"
      ></iframe>
    </div>
  );
}
