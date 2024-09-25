"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavLink({
  href,
  label,
  onClick,
  mobile = false,
}: {
  href: string;
  label: string;
  onClick: () => void;
  mobile?: boolean;
}) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-highlight after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left",
        mobile ? "text-center text-3xl" : "text-",
        isActive && "after:scale-x-100"
      )}
    >
      {label}
    </Link>
  );
}
