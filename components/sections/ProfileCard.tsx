import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  image: string;
}

export default function ProfileCard({ name, image }: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full aspect-[4/3] max-w-2xl overflow-hidden rounded-lg shadow-lg mb-4 pointer-events-none">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-xl font-bold text-gray-900">{name}</p>
    </div>
  );
}
