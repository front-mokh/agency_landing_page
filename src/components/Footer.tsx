import React from "react";
import CallToAction from "./CallToAction";
import { footerLinks, footerServices } from "@/data/index";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative grid lg:grid-cols-4 lg:gap-6 py-16 px-16 bg-inverted">
      <div className="col-span-2">
        <h1 className="text-3xl md:text-4xl  text-light-primary">
          Lancez votre site web
        </h1>
        <p className="mt-2 mb-12 text-xl text-light-secondary">
          Prenez l&apos;avantage sur vos concurrents
        </p>
        <CallToAction size="small" href="/contact">Obtenez un devis gratuit</CallToAction>
      </div>
      <div>
        <h2 className="text-2xl text-light-primary">Services</h2>
        <ul className="mt-4 space-y-2 text-light-secondary">
          {footerServices.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-highlight after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl text-light-primary">Liens</h2>
        <ul className="mt-4 space-y-2 text-light-secondary">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-lg relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-highlight after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
