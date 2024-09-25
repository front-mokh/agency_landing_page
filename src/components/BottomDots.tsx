import Image from "next/image";

export default function BottomDots() {
  return (
    <div className="absolute bottom-0 w-full h-36">
      <Image src={"/dots.webp"} alt={""} layout="fill" objectFit="cover" />
    </div>
  );
}
