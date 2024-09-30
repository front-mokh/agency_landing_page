import Image from "next/image";

type ProductCardProps = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tags: string[];
};

export default function ProductCard({
  title,
  subtitle,
  tags,
}: ProductCardProps) {
  return (
    <article className="group flex flex-col gap-0 rounded-xl bg-white border border-dark/[0.0025] transition-all duration-300 cursor-pointer hover:scale-[1.025] hover:shadow-lg">
      <div className="p-3 rounded-xl transition-all duration-300 shadow-md group-hover:shadow-none">
        <div className="relative mx-auto w-full aspect-[15/9] rounded-md overflow-hidden bg-[#EEEFFA] transition-all duration-300 group-hover:bg-[#D6DDE3]">
          <Image
            src="/mockups/desktop-mobile.svg"
            alt="Product mockup"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="p-4">
        <p className="text-lg text-dark-secondary">
          <span className="font-semibold text-dark-primary">{title}</span> -{" "}
          {subtitle}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="text-dark-secondary inline px-3.5 py-1.5 bg-mid-tone rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
