"use client";

import { navLinks } from "@/data/index";
import React, { useRef, useEffect } from "react";
import NavLink from "./NavLink";
import { gsap } from "gsap";

interface MobileMenuProps {
  closeMenu: () => void;
}

export default function MobileMenu({ closeMenu }: MobileMenuProps) {
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const navItems = navRef.current?.querySelectorAll("li");
    if (navItems) {
      gsap.fromTo(
        navItems,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.3,
          ease: "power2.out",
          delay: 0.3, // for the header to expand
          overwrite: true,
        }
      );
    }

    return () => {
      navItems && gsap.killTweensOf(navItems);
    };
  }, []);

  return (
    <nav
      id="mobile-menu"
      className="absolute left-0 top-36 w-full"
      aria-label="Mobile navigation"
    >
      <ul ref={navRef} className="flex flex-col items-center gap-20">
        {navLinks.map((link) => (
          <li key={link.href}>
            <NavLink {...link} onClick={closeMenu} mobile />
          </li>
        ))}
      </ul>
    </nav>
  );
}
