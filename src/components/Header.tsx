"use client";

import { navLinks } from "@/data/index";
import clsx from "clsx";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";
import { gsap } from "gsap";
import CallToAction from "./CallToAction";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { logoFont } from "@/lib/fonts";
import Container from "./utils/Container";

// Custom hook for scroll behavior
export const useScrollBehavior = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY < 50);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return { isAtTop, isVisible };
};

// Custom hook for GSAP animations
export const useHeaderAnimation = (isOpen:boolean, isAtTop: boolean, isVisible: boolean) => {
  const headerRef = useRef(null);

  const pathname = usePathname();
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    gsap.to(header, {
      duration: 0.3,
      backgroundColor:
        isAtTop &&  isOpen && pathname === "/"
          ? "rgba(0, 0, 0, 0)"
          : "#25344F",
      backdropFilter: isAtTop ? "blur(0px)" : "blur(4px)",
      ease: "power2.out",
    });

    gsap.to(header, {
      duration: 0.5,
      yPercent: isVisible ? 0 : -100,
      ease: "power2.out",
    });
  }, [isAtTop, isVisible]);

  return headerRef;
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAtTop, isVisible } = useScrollBehavior();
  const headerRef = useHeaderAnimation(isOpen,isAtTop, isVisible);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 350);
  };

  return (
    <header
      ref={headerRef}
      className={clsx(
        "fixed top-0 left-0 w-full z-50 py-2 transition-all duration-200",
        isOpen && "h-screen bg-dark"
      )}
    >
      <Container className="flex flex-row justify-between items-start">
        <Link
          href="/"
          onClick={closeMenu}
          className={`text-xl font-medium inline-flex  font-heading tracking-wide items-center ${logoFont.className}`}
          aria-label="Home"
        >
          <Image
            src={"/icons/logo.svg"}
            alt="Web Plus Logo"
            width={48}
            height={48}
          />

          <span className="mt-[10px] block">WebPlus</span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="hidden md:flex items-center gap-10 uppercase font-heading">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink {...link} onClick={closeMenu} />
              </li>
            ))}
            {/* <li>
              <CallToAction size="small" href="/contact">
                devis gratuit
              </CallToAction>
            </li> */}
          </ul>
        </nav>

        <MobileMenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && <MobileMenu closeMenu={closeMenu} />}
      </Container>
    </header>
  );
}

function MobileMenuToggle({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className={clsx("block md:hidden  relative w-8 h-6 focus:outline-none",{"my-auto":!isOpen},{"mt-3":isOpen})}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label="Toggle mobile menu"
    >
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      <div className="relative w-8 h-6">
        <span
          className={`absolute left-0 h-0.5 w-full bg-highlight transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-3" : "translate-y-0"
          }`}
        />
        <span
          className={`absolute left-0 w-full origin-center h-0.5 bg-highlight transition-all duration-200 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          } translate-y-3`}
        />
        <span
          className={`absolute left-0 h-0.5 w-full bg-highlight transition-all duration-300 ease-in-out ${
            isOpen ? "-rotate-45 translate-y-3" : "translate-y-6"
          }`}
        />
      </div>
    </button>
  );
}
