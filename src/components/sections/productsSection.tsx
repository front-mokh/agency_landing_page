import useStaggerAnimation from "@/hooks/useStaggerAnimation";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Tagline from "../utils/Tagline";
import Headline from "../utils/Headline";
import { features, products } from "@/data";
import Image from "next/image";
import CallToAction from "../CallToAction";

export default function ProductsSection() {
  const containerRef = useStaggerAnimation();
  return (
    <Section padding={"small"}>
      <Container>
        <Tagline animated>La Qualité, Notre Priorité</Tagline>
        <Headline animated className="max-w-[35ch]">
          Découvrez NOS SOLUTIONS LOGICIELLES
        </Headline>
        <div
          ref={containerRef as React.Ref<HTMLDivElement>}
          className="mt-24 w-full grid grid-cols-1 md:grid-cols-2 gap-24"
        >
          {products.map((product, index) => (
            <div key={index}>
              <ProductCard
                title={product.title}
                subtitle={product.subtitle}
                description={product.description}
                features={product.features}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ProductCard({
  title,
  subtitle,
  description,
  features,
}: {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-lg bg-mid-tone shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <h3 className="text-2xl font-medium text-center">{title}</h3>
      <div className="relative mx-auto w-full aspect-video border-2 rounded-md overflow-hidden">
        <Image
          src={"/images/placeholder.jpg"}
          alt={""}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <p className="text-lg font-medium">{subtitle}</p>
        {/* <p className="pt-1 text-dark-secondary">{description}</p> */}
        <ul className="mt-4 space-y-2">
          {features.map((feature) => (
            <li className="text-dark-secondary flex gap-2">
              <Image src={"/icons/check.svg"} alt={""} width={24} height={24} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col  md:flex-row gap-2">
        <CallToAction className="w-full text-center" href="/">
        voir les détails
        </CallToAction>
        <CallToAction
          variant={"secondary"}
          className="border-[#25344f] text-dark-primary w-full text-center"
          href={"/"}
          
        >
         démo en direct
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </CallToAction>
      </div>
    </div>
  );
}
