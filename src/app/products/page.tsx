"use client";
import LinkButton from "@/components/LinkButton";
import ProductsPage from "@/components/pages/ProductsPage";
import Container from "@/components/utils/Container";
import Headline from "@/components/utils/Headline";
import Section from "@/components/utils/Section";
import Tagline from "@/components/utils/Tagline";
import { products } from "@/data";
import Image from "next/image";
import React from "react";

export default function Page() {
  return <ProductsPage />;
}
