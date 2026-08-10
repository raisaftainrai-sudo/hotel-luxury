"use client";

import Image from "next/image";
import {
  CheckCircle,
  CalendarDays,
  BedDouble,
  Users,
  Mail,
} from "lucide-react";

export default function Confirmation() {
  return (
    <section className="py-20 bg-[#faf7f2]">

      <div className="
        max-w-5xl
        mx-auto
        px-6
      ">

        {/* MAIN CARD */}
        <div className="
          bg-white
          rounded-3xl
          shadow-xl
          overflow-hidden
          border
          border-gray-100
        ">

          {/* IMAGE */}
          <div className="relative h-[280px] w-full overflow-hidden">

            <Image
              src="/img45.png"
              alt="Luxury Hotel"
              fill
              className="
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            <div className="
              absolute
              inset-0
              bg-black/40
            " />

            <div className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
              text-white
              text-center
            ">

              <CheckCircle
                size={60}
                className="
                  text-orange-400
                  mb-4
                  animate-pulse
                "
              />

              <h1 className="
                text-3xl
                md:text-4xl
                font-bold
              ">
                Booking Confirmed
              </h1>

              <p className="
                mt-2
                text-white/90
              ">
                Your luxury stay has been successfully reserved.
              </p>

            </div>

          </div>


          {/* CONTENT */}
          <div className="p-6 md:p-10">

            <h2 className="
              text-2xl
              md:text-3xl
              font-bold
              text-gray-900
            ">
              Thank You For Choosing Luxora
            </h2>

            <p className="
              text-gray-500
              mt-2
            ">
              Here are your booking details.
            </p>


            {/* DETAILS */}

            <div className="
              grid
              md:grid-cols-2
              gap-6
              mt-8
            ">


              {/* ROOM CARD */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-4
                  bg-[#faf7f2]
                  p-5
                  rounded-2xl
                  shadow-sm
                  border
                  border-transparent
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:border-orange-400
                  hover:bg-white
                  cursor-pointer
                "
              >

                <BedDouble
                  size={28}
                  className="
                    text-orange-500
                    transition-all
                    duration-500
                    group-hover:scale-125
                    group-hover:rotate-6
                  "
                />

                <div>

                  <p className="
                    text-gray-500
                    text-sm
                  ">
                    Room
                  </p>

                  <h3 className="
                    font-semibold
                    transition-all
                    duration-500
                    group-hover:text-orange-500
                  ">
                    Presidential Suite
                  </h3>

                </div>

              </div>


              {/* GUESTS CARD */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-4
                  bg-[#faf7f2]
                  p-5
                  rounded-2xl
                  shadow-sm
                  border
                  border-transparent
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:border-orange-400
                  hover:bg-white
                  cursor-pointer
                "
              >

                <Users
                  size={28}
                  className="
                    text-orange-500
                    transition-all
                    duration-500
                    group-hover:scale-125
                    group-hover:rotate-6
                  "
                />

                <div>

                  <p className="
                    text-gray-500
                    text-sm
                  ">
                    Guests
                  </p>

                  <h3 className="
                    font-semibold
                    transition-all
                    duration-500
                    group-hover:text-orange-500
                  ">
                    2 Guests
                  </h3>

                </div>

              </div>


              {/* STAY DATES CARD */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-4
                  bg-[#faf7f2]
                  p-5
                  rounded-2xl
                  shadow-sm
                  border
                  border-transparent
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:border-orange-400
                  hover:bg-white
                  cursor-pointer
                "
              >

                <CalendarDays
                  size={28}
                  className="
                    text-orange-500
                    transition-all
                    duration-500
                    group-hover:scale-125
                    group-hover:rotate-6
                  "
                />

                <div>

                  <p className="
                    text-gray-500
                    text-sm
                  ">
                    Stay Dates
                  </p>

                  <h3 className="
                    font-semibold
                    transition-all
                    duration-500
                    group-hover:text-orange-500
                  ">
                    Aug 15 - Aug 18
                  </h3>

                </div>

              </div>


              {/* EMAIL CARD */}

              <div
                className="
                  group
                  flex
                  items-center
                  gap-4
                  bg-[#faf7f2]
                  p-5
                  rounded-2xl
                  shadow-sm
                  border
                  border-transparent
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:border-orange-400
                  hover:bg-white
                  cursor-pointer
                "
              >

                <Mail
                  size={28}
                  className="
                    text-orange-500
                    transition-all
                    duration-500
                    group-hover:scale-125
                    group-hover:rotate-6
                  "
                />

                <div>

                  <p className="
                    text-gray-500
                    text-sm
                  ">
                    Confirmation Email
                  </p>

                  <h3 className="
                    font-semibold
                    transition-all
                    duration-500
                    group-hover:text-orange-500
                    break-all
                  ">
                    guest@example.com
                  </h3>

                </div>

              </div>

            </div>


            {/* BUTTON */}

            <button
              className="
                mt-10
                w-full
                py-4
                rounded-full
                bg-black
                text-white
                font-semibold
                text-lg
                transition-all
                duration-500
                hover:bg-orange-500
                hover:shadow-2xl
                hover:scale-105
                active:scale-95
              "
            >
              Back To Home
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}