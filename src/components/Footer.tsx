import React from "react";
import BackToTop from "./BackToTop";
import { footerLinks, footerServices } from "@/data/index";
import Link from "next/link";
import Container from "./utils/Container";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative  bg-inverted border-t-[1.5px] border-mid-tone pt-8 pb-16">
      <BackToTop />
      <Container className="items-center md:items-start">
        <Image
          src={"/icons/logo.svg"}
          alt="Web Plus Logo"
          width={98}
          height={98}
        />
      </Container>
      <Container className="relative flex flex-col lg:grid lg:grid-cols-5 lg:gap-16 items-center  md:items-start">
        <div className="col-span-2 flex flex-col">
          <h2 className="text-center md:text-left text-2xl md:text-3xl  text-light-primary">
            Code Crafters
          </h2>
          <p className="text-center md:text-left  mt-2 mb-12 text-xl text-light-secondary">
            Des solution logicielle professionnelle pour tous vos besoins
          </p>
          {/* <CallToAction size="medium" href="/contact">
            Contactez-nous
          </CallToAction> */}
        </div>
        <div className="md:hidden w-full flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center mt-4 space-y-2 text-light-secondary text-center">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-center text-lg relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-highlight after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="w-full border-t-[1.5px] mt-6 pt-6 border-mid-tone flex justify-center gap-8">
            <button className="flex items-center justify-center w-12 h-12 rounded-md bg-mid-tone">
              <Image src={"/icons/instagram.svg"} alt={""} width={32} height={32}/>
            </button>
            <button className="flex items-center justify-center w-12 h-12 rounded-md bg-mid-tone">
            <Image src={"/icons/email.svg"} alt={""} width={32} height={32}/>
            </button>
          </div>
        </div>
        <div className="hidden col-span-3 md:grid grid-cols-2">
          <div>
            <h2 className="text-2xl text-light-primary uppercase">Services</h2>
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
            <h2 className="text-2xl text-light-primary uppercase">
              Liens Utiles
            </h2>
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
        </div>
      </Container>
    </footer>
  );
}
