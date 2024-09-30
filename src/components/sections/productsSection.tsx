import useStaggerAnimation from "@/hooks/useStaggerAnimation";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Tagline from "../utils/Tagline";
import Headline from "../utils/Headline";
import { services, products } from "@/data";
import CallToAction from "../CallToAction";
import LinkButton from "../LinkButton";
import ProductCard from "../ProductCard";

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
                tags={product.tags}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
