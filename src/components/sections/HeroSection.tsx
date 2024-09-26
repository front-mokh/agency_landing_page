import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "../utils/Section";
import Container from "../utils/Container";
import CallToAction from "../CallToAction";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const highlightRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const secondaryCtaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current, secondaryCtaRef], {
        opacity: 0,
        y: 30,
      });
      gsap.set(highlightRef.current, { width: 0 });

      tl.to(titleRef.current, {
        duration: 1,
        ease: "power2.out",
        opacity: 1,
        y: 0,
      })
        .to(
          highlightRef.current,
          {
            duration: 1,
            ease: "power2.out",
            width: "100%",
          },
          "-=0.2"
        )
        .to(
          [subtitleRef.current, ctaRef.current, secondaryCtaRef.current],
          {
            duration: 1.1,
            ease: "power2.out",
            opacity: 1,
            y: 0,
            stagger: 0.5,
          },
          "-=0.5"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section background="dark">
      <SvgBackground />
      <Container size="large">
        <h1
          ref={titleRef}
          className="md:max-w-[22ch] font-heading uppercase text-center text-2xl md:text-5xl lg:text-6xl lg:leading-[130%] font-bold mb-8 tracking-wide"
        >
          solution logicielle
          <span className="relative inline-block px-1">
            <span>professionnelle</span>
            <span
              ref={highlightRef}
              className="absolute -z-10 w-full h-full left-0 top-0 bg-highlight"
            ></span>
          </span>{" "}
          pour tous vos besoins
        </h1>
        <p
          ref={subtitleRef}
          className="text-center md:text-xl md:leading-7 max-w-[65ch] text-light-secondary"
        >
          Que vous soyez une{" "}
          <span className="font-medium text-light-primary/95">agence</span>, une{" "}
          <span className="font-medium text-light-primary/95">entreprise</span>{" "}
          ou un{" "}
          <span className="font-medium text-light-primary/95">
            professionnel
          </span>
          , nos sites Web rendent votre activité{" "}
          <span className="font-medium text-light-primary/95">
            plus visible
          </span>{" "}
          et vous permettent d&apos;avoir{" "}
          <span className="font-medium text-light-primary/95">
            plus de clients
          </span>
          , n&apos;est-ce pas ce que vous voulez ?
        </p>
        <div
          
          className="w-full flex flex-col justify-center md:flex-row gap-4 mt-8"
        >
          <div ref={ctaRef} className="w-full md:w-60">
            <CallToAction
              size="medium"
              className="w-full "
              variant="primary"
              href="/contact"
            >
              Contactez-Nous
            </CallToAction>
          </div>
          <div ref={secondaryCtaRef} className="w-full md:w-60">
            <CallToAction
              className="w-full "
              size="medium"
              variant="secondary"
              href="/contact"
            >
              Explorer Nos Produits
            </CallToAction>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function SvgBackground() {
  return (
    <div className="absolute left-0 top-24 w-[90%] h-96">
      <svg
        width="1432"
        height="599"
        viewBox="0 0 1432 599"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1366.37 193.964L1418.98 169.271L1382.38 196.941L1366.37 193.964Z"
          fill="hsl(202, 74%, 48%)"
        />
        <path
          d="M1418.98 169.272L1382.33 196.953L1390.96 209.001L1418.98 169.272Z"
          fill="hsl(202, 74%, 61%)"
        />
        <path
          d="M1418.98 169.271L1391.01 198.372L1406.66 213.133L1418.98 169.271Z"
          fill="hsl(202, 74%, 48%)"
        />
        <path
          d="M1390.9 209.011L1390.87 198.226L1395.45 202.541L1390.9 209.011Z"
          fill="hsl(202, 74%, 18%)"
        />
        <path
          d="M1373.74 222.484C1344.52 246.272 1257.24 310.462 1167.65 310.395C1057.65 310.357 1066.56 232.689 1129.77 222.309C1192.98 211.929 1243.49 276.858 1217.29 329.648C1191.08 382.439 950 629 1 222.483"
          stroke="hsl(219, 36%, 75%, 0.6)"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          strokeDasharray="5 7"
        />
      </svg>
    </div>
  );
}

export default HeroSection;
