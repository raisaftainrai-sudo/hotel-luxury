"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Rooms",
    path: "/rooms",
  },
  {
    name: "Restaurant",
    path: "/restaurant",
  },
  {
    name: "Spa",
    path: "/spa",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6">
      <nav className="max-w-7xl mx-auto bg-black/90 backdrop-blur-xl border border-orange-200 rounded-full shadow-xl px-5 sm:px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-white">
            LUX<span className="text-orange-500">ORA</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-gray-200 font-medium">
          {menu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`
                relative transition duration-300 hover:text-orange-500
                after:absolute after:left-0 after:-bottom-2 after:h-[2px]
                after:bg-orange-500 after:transition-all after:duration-300
                ${
                  pathname === item.path
                    ? "text-orange-500 after:w-full"
                    : "after:w-0 hover:after:w-full"
                }
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Desktop Book Button */}
          <Link
            href="/booking"
            className="hidden lg:block bg-orange-500 text-white px-8 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Book Now
          </Link>

          {/* Mobile Book Button */}
          <Link
            href="/booking"
            className="lg:hidden bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Book
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mt-3 max-w-7xl mx-auto bg-black/95 border border-orange-200 rounded-3xl p-6"
        >
          <div className="flex flex-col gap-5">

            {menu.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`text-lg transition ${
                  pathname === item.path
                    ? "text-orange-500"
                    : "text-white hover:text-orange-400"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="bg-orange-500 text-center text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Book Now
            </Link>

          </div>
        </motion.div>
      )}
    </header>
  );
}