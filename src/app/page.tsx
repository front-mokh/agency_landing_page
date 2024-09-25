"use client";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ContactBanner from "@/components/sections/ContactBanner";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import Process from "@/components/sections/Process";
import ServicesSection from "@/components/sections/ServicesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import HomePage from "@/components/pages/HomePage";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis/types";

export default function Home() {
  useSmoothScroll();
  return <HomePage />;
}
