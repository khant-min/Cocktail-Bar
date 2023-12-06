import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative z-100 h-screen">
      <Image
        src="/images/share-cocktail.png"
        alt="Cocktail"
        layout="fill"
        className="z-0"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 p-4 rounded-lg">
          <Link href="/home" className="text-2xl font-bold">
            Explore our cocktails
          </Link>
        </div>
      </div>
    </div>
  );
}
