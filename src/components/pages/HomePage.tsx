import React from "react";
import FAQSection from "../sections/FAQSection";
import ContactBanner from "../sections/ContactBanner";
import ServicesSection from "../sections/ServicesSection";
import AboutSection from "../sections/AboutSection";
import BenefitsSection from "../sections/BenefitsSection";
import HeroSection from "../sections/HeroSection";
import ContactSection from "../sections/ContactSection";
import FeaturesSection from "../sections/FeaturesSection";
import ProductsSection from "../sections/productsSection";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <ProductsSection />
      <ContactBanner />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
