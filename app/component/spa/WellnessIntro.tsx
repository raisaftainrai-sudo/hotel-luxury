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

            <p className="
            uppercase
            tracking-[5px]
            text-orange-500
            font-semibold
            ">
              Welcome To Our Spa
            </p>


            <h2 className="
            mt-5
            text-4xl
            md:text-5xl
            font-serif
            font-bold
            text-gray-900
            leading-tight
            ">

              Reconnect Your Mind,

              <span className="text-orange-500">
                {" "}Body & Soul
              </span>

            </h2>



            <p className="
            mt-8
            text-gray-600
            leading-8
            ">

              Escape the stress of everyday life and enjoy a peaceful
              wellness journey. Our luxury spa combines modern therapies
              with traditional healing techniques to deliver a truly
              unforgettable experience.

            </p>



            <div className="mt-10 space-y-6">


              {features.map((item,index)=>{

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="
                    flex
                    gap-5
                    bg-[#faf7f2]
                    p-6
                    rounded-2xl
                    shadow-sm
                    hover:shadow-lg
                    transition
                    "
                  >

                    <div className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                    ">

                      <Icon
                        size={30}
                        className="text-orange-500"
                      />

                    </div>


                    <div>

                      <h3 className="
                      text-xl
                      font-bold
                      text-gray-900
                      ">
                        {item.title}
                      </h3>


                      <p className="
                      mt-2
                      text-gray-600
                      leading-7
                      ">
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
              hover:bg-orange-600
              text-white
              transition
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