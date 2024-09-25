import Image from "next/image";

export default function TopDots() {
  return (
    <div className="absolute mx-auto top-0 w-[80%] h-36">
      <Image src={"/patterns/dots.svg"} alt={""} layout="fill" objectFit="cover" />
    </div>
);
}
