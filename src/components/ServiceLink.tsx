import Link from "next/link";
import React from "react";

export default function ServiceLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="font-heading mt-2 inline-block font-semibold underline text-sm uppercase "
    >
      Découvrez nos options et tarifs ici.
    </Link>
  );
}
