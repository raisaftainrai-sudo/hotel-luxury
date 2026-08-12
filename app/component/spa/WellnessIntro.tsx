"use client";

import Image from "next/image";
import { Leaf, HeartHandshake, Sparkles } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Natural Therapy",
    desc: "Relax with organic essential oils and premium herbal treatments.",
  },
  {
    icon: HeartHandshake,
    title: "Professional Experts",
    desc: "Certified therapists providing personalized wellness experiences.",
  },
  {
    icon: Sparkles,
    title: "Luxury Environment",
    desc: "Elegant interiors designed for complete peace and relaxation.",
  },
];

export default function WellnessIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="relative">
            <div
              className="
              group
              relative
              h-[600px]
              lg:h-[720px]
              rounded-[30px]
              overflow-hidden
              shadow-2xl
              "
            >
              <Image
                src="/imgspa.png"
                alt="Luxury Spa"
                fill
                priority
                sizes="(max-width:768px) 100vw, 50vw"
                className="
                object-cover
                object-center
                transition-transform
                duration-700
                group-hover:scale-110
                "
              />
            </div>

            {/* Experience Card */}
            <div
              className="
              absolute
              bottom-8
              right-8
              bg-white
              rounded-3xl
              shadow-xl
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
              "
            >
              <h3 className="text-4xl font-bold text-orange-500">
                15+
              </h3>

              <p className="text-gray-600 mt-2">
                Years Of Wellness Experience
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p
              className="
              uppercase
              tracking-[5px]
              text-orange-500
              font-semibold
              "
            >
              Welcome To Our Spa
            </p>

            <h2
              className="
              mt-5
              text-4xl
              md:text-5xl
              font-serif
              font-bold
              text-gray-900
              leading-tight
              "
            >
              Reconnect Your Mind,
              <span className="text-orange-500">
                {" "}Body & Soul
              </span>
            </h2>

            <p
              className="
              mt-8
              text-gray-600
              leading-8
              "
            >
              Escape the stress of everyday life and enjoy a peaceful
              wellness journey. Our luxury spa combines modern therapies
              with traditional healing techniques to deliver a truly
              unforgettable experience.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                    group
                    flex
                    gap-5
                    bg-[#faf7f2]
                    p-6
                    rounded-2xl
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                    hover:bg-orange-50
                    cursor-pointer
                    "
                  >
                    <div
                      className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-orange-100
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:rotate-12
                      "
                    >
                      <Icon
                        size={30}
                        className="text-orange-500 transition-all duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div>
                      <h3
                        className="
                        text-xl
                        font-bold
                        text-gray-900
                        transition-colors
                        duration-300
                        group-hover:text-orange-500
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                        mt-2
                        text-gray-600
                        leading-7
                        "
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              className="
              mt-10
              px-8
              py-4
              rounded-full
              bg-orange-500
              text-white
              transition-all
              duration-300
              hover:bg-orange-600
              hover:scale-105
              hover:shadow-xl
              active:scale-95
              "
            >
              Explore Treatments
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}