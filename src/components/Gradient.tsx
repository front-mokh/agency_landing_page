import Image from "next/image";

export default function Gradient() {
  return (
    <div className="absolute top-0  left-0 w-full h-full opacity-20 mix-blend-lighten pointer-events-none">
      <Image
        className="absolute"
        src={"/gradient_overlay.svg"}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
}
