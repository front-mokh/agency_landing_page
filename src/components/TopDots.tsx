import Image from "next/image";

export default function TopDots() {
  return (
    <div className="absolute top-0 w-full h-24 pointer-events-none select-none">
      <Image src={"/dots.webp"} alt={""} layout="fill" objectFit="cover" className="rotate-180" />
    </div>
  );
}
