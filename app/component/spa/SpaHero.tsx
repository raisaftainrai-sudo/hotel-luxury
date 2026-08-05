"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SpaHero() {
  return (
    <section className="relative h-[85vh] overflow-hidden flex items-center justify-center">

      {/* Background */}

      <Image
        src="/imgspa.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Glow */}

      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-500/30 blur-[130px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-amber-400/20 blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-orange-300">

          <Sparkles size={18} />

          Luxury Wellness

        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-serif font-bold text-white leading-tight">

          Relax Your Body

          <span className="text-orange-400">

            {" "}Refresh Your Soul

          </span>

        </h1>

        <p className="mt-8 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">

          Discover premium spa therapies,
          relaxing massages and holistic wellness
          experiences designed to restore your body,
          mind and spirit.

        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <Link
            href="/booking"
            className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition flex items-center gap-3"
          >
            Book Spa

            <ArrowRight size={18} />

          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition"
          >
            Learn More
          </Link>

        </div>

      </motion.div>

    </section>
  );
}