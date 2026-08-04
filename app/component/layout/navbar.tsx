"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-6
      left-0
      w-full
      z-50
      px-6
      "
    >

      <nav
        className="
        max-w-7xl
        mx-auto
        bg-black/90
        backdrop-blur-xl
        border border-orange-200
        rounded-full
        shadow-xl
        px-10
        py-3
        flex
        items-center
        justify-between
        "
      >

        {/* Logo */}

        <Link
          href="/"
          className="
          text-3xl
          font-serif
          tracking-[5px]
          font-bold
          text-orange-500
          "
        >
          LUXORA
        </Link>


        {/* Menu */}

        <div
          className="
          hidden
          lg:flex
          gap-8
          text-gray-200
          font-medium
          "
        >

          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>

          <Link href="/about" className="hover:text-orange-500">
            About
          </Link>

          <Link href="/rooms" className="hover:text-orange-500">
            Rooms
          </Link>

          <Link href="/dining" className="hover:text-orange-500">
            Dining
          </Link>

          <Link href="/spa" className="hover:text-orange-500">
            Spa
          </Link>

          <Link href="/gallery" className="hover:text-orange-500">
            Gallery
          </Link>

          <Link href="/contact" className="hover:text-orange-500">
            Contact
          </Link>

        </div>


        {/* Button */}

        <Link
          href="/booking"
          className="
          bg-orange-500
          text-white
          px-8
          py-2
          rounded-full
          font-semibold
          hover:bg-orange-600
          transition
          "
        >
          Book Now
        </Link>


      </nav>

    </header>
  );
}