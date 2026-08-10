
"use client";

import {
  CalendarDays,
  Users,
  BedDouble,
  Sparkles,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

interface BookingSummaryProps {
  roomName?: string;
  roomDescription?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;

  services?: {
    name: string;
    price: number;
  }[];

  roomPrice?: number;

  onProceed?: () => void;
}

export default function BookingSummary({
  roomName = "Presidential Suite",
  roomDescription = "Luxury Room Selection",
  checkIn = "25 Aug 2026",
  checkOut = "30 Aug 2026",
  guests = "2 Adults",

  services = [
    {
      name: "Luxury Spa Treatment",
      price: 120,
    },
    {
      name: "Fine Dining Experience",
      price: 80,
    },
    {
      name: "Airport Pickup",
      price: 50,
    },
  ],

  roomPrice = 800,
  onProceed,
}: BookingSummaryProps) {
  const servicesTotal = services.reduce(
    (total, service) => total + service.price,
    0
  );

  const totalAmount = roomPrice + servicesTotal;

  return (
    <section className="min-h-screen bg-white py-16 md:py-24">

      <div className="max-w-5xl mx-auto px-5 sm:px-6">

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <div className="text-center mb-12">

          <p
            className="
              text-orange-500
              uppercase
              tracking-[4px]
              text-sm
              font-semibold
              mb-3
            "
          >
            Booking Summary
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              font-serif
              font-bold
              text-gray-900
              transition-all
              duration-300
              hover:text-orange-500
            "
          >
            Review Your Stay
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-4
              text-gray-500
              leading-7
            "
          >
            Review your room, booking dates, guests and additional
            services before completing your reservation.
          </p>

        </div>


        {/* ================================================= */}
        {/* MAIN CARD */}
        {/* ================================================= */}

        <div
          className="
            bg-[#faf7f2]
            rounded-[28px]
            overflow-hidden
            shadow-xl
            border
            border-gray-100
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-2xl
          "
        >

          {/* ================================================= */}
          {/* ROOM SECTION */}
          {/* ================================================= */}

          <div className="p-6 sm:p-8">

            <div
              className="
                group
                flex
                flex-col
                sm:flex-row
                sm:items-center
                gap-5
                border-b
                border-gray-200
                pb-7
                rounded-2xl
                transition-all
                duration-300
                hover:bg-white
                hover:shadow-md
                hover:px-5
                hover:py-5
              "
            >

              {/* Room Icon */}

              <div
                className="
                  w-16
                  h-16
                  shrink-0
                  rounded-full
                  bg-orange-500
                  flex
                  items-center
                  justify-center
                  text-white
                  shadow-lg
                  shadow-orange-500/20
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                  group-hover:bg-orange-600
                  group-hover:shadow-orange-500/40
                "
              >
                <BedDouble size={30} />
              </div>


              {/* Room Information */}

              <div className="flex-1">

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[3px]
                    text-orange-500
                    font-semibold
                    mb-1
                  "
                >
                  Selected Room
                </p>

                <h3
                  className="
                    text-2xl
                    font-serif
                    font-bold
                    text-gray-900
                    transition-colors
                    duration-300
                    group-hover:text-orange-500
                  "
                >
                  {roomName}
                </h3>

                <p className="text-gray-500 mt-1">
                  {roomDescription}
                </p>

              </div>


              {/* Room Price */}

              <div
                className="
                  sm:text-right
                  transition-all
                  duration-300
                  group-hover:scale-105
                "
              >

                <p className="text-sm text-gray-500">
                  Room Price
                </p>

                <p
                  className="
                    text-2xl
                    font-bold
                    text-gray-900
                    transition-colors
                    duration-300
                    group-hover:text-orange-500
                  "
                >
                  ${roomPrice}
                </p>

              </div>

            </div>


            {/* ================================================= */}
            {/* BOOKING DETAILS */}
            {/* ================================================= */}

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 py-8">


              {/* CHECK IN */}

              <div
                className="
                  group
                  bg-white
                  rounded-2xl
                  p-5
                  border
                  border-transparent
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:border-orange-300
                  hover:bg-orange-50
                  hover:shadow-xl
                  cursor-pointer
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-orange-100
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      group-hover:bg-orange-500
                      group-hover:scale-110
                    "
                  >

                    <CalendarDays
                      size={22}
                      className="
                        text-orange-500
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />

                  </div>


                  <div>

                    <p className="text-sm text-gray-500">
                      Check In
                    </p>

                    <p
                      className="
                        font-semibold
                        text-gray-900
                        transition-colors
                        duration-300
                        group-hover:text-orange-600
                      "
                    >
                      {checkIn}
                    </p>

                  </div>

                </div>

              </div>


              {/* CHECK OUT */}

              <div
                className="
                  group
                  bg-white
                  rounded-2xl
                  p-5
                  border
                  border-transparent
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:border-orange-300
                  hover:bg-orange-50
                  hover:shadow-xl
                  cursor-pointer
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-orange-100
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      group-hover:bg-orange-500
                      group-hover:scale-110
                    "
                  >

                    <CalendarDays
                      size={22}
                      className="
                        text-orange-500
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />

                  </div>


                  <div>

                    <p className="text-sm text-gray-500">
                      Check Out
                    </p>

                    <p
                      className="
                        font-semibold
                        text-gray-900
                        transition-colors
                        duration-300
                        group-hover:text-orange-600
                      "
                    >
                      {checkOut}
                    </p>

                  </div>

                </div>

              </div>


              {/* GUESTS */}

              <div
                className="
                  group
                  bg-white
                  rounded-2xl
                  p-5
                  border
                  border-transparent
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:border-orange-300
                  hover:bg-orange-50
                  hover:shadow-xl
                  cursor-pointer
                "
              >

                <div className="flex items-center gap-4">

                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-orange-100
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      group-hover:bg-orange-500
                      group-hover:scale-110
                    "
                  >

                    <Users
                      size={22}
                      className="
                        text-orange-500
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />

                  </div>


                  <div>

                    <p className="text-sm text-gray-500">
                      Guests
                    </p>

                    <p
                      className="
                        font-semibold
                        text-gray-900
                        transition-colors
                        duration-300
                        group-hover:text-orange-600
                      "
                    >
                      {guests}
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* ================================================= */}
            {/* EXTRA SERVICES */}
            {/* ================================================= */}

            <div className="border-t border-gray-200 pt-7">

              <h3
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-2xl
                  font-serif
                  font-bold
                  text-gray-900
                  mb-6
                  transition-colors
                  duration-300
                  hover:text-orange-500
                "
              >

                <span
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-500
                    hover:bg-orange-500
                  "
                >

                  <Sparkles
                    size={20}
                    className="
                      text-orange-500
                      transition-all
                      duration-500
                      hover:text-white
                      hover:rotate-180
                    "
                  />

                </span>

                Extra Services

              </h3>


              <div className="space-y-3">

                {services.map((service, index) => (

                  <div
                    key={index}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-4
                      p-4
                      rounded-xl
                      bg-transparent
                      border
                      border-transparent
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:border-orange-200
                      hover:shadow-lg
                      hover:-translate-y-1
                      hover:px-5
                      cursor-pointer
                    "
                  >

                    <div className="flex items-center gap-3">

                      <CheckCircle2
                        size={19}
                        className="
                          text-orange-500
                          transition-all
                          duration-300
                          group-hover:scale-125
                          group-hover:rotate-6
                        "
                      />

                      <span
                        className="
                          text-gray-700
                          transition-colors
                          duration-300
                          group-hover:text-gray-900
                        "
                      >
                        {service.name}
                      </span>

                    </div>


                    <span
                      className="
                        font-bold
                        text-gray-900
                        transition-all
                        duration-300
                        group-hover:text-orange-500
                        group-hover:scale-110
                      "
                    >
                      ${service.price}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* ================================================= */}
            {/* PRICE BREAKDOWN */}
            {/* ================================================= */}

            <div className="border-t border-gray-200 mt-7 pt-7 space-y-4">

              <div
                className="
                  flex
                  justify-between
                  text-gray-600
                  transition-colors
                  duration-300
                  hover:text-gray-900
                "
              >
                <span>Room</span>

                <span className="font-medium">
                  ${roomPrice}
                </span>
              </div>


              <div
                className="
                  flex
                  justify-between
                  text-gray-600
                  transition-colors
                  duration-300
                  hover:text-gray-900
                "
              >
                <span>Extra Services</span>

                <span className="font-medium">
                  ${servicesTotal}
                </span>
              </div>


              <div
                className="
                  border-t
                  border-gray-200
                  pt-5
                  flex
                  justify-between
                  items-center
                "
              >

                <span className="font-bold text-gray-900">
                  Subtotal
                </span>

                <span
                  className="
                    text-xl
                    font-bold
                    text-gray-900
                    transition-colors
                    duration-300
                    hover:text-orange-500
                  "
                >
                  ${totalAmount}
                </span>

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* TOTAL / PAYMENT */}
          {/* ================================================= */}

          <div className="bg-black text-white p-6 sm:p-8">

            <div
              className="
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-7
              "
            >

              {/* Total */}

              <div>

                <p className="text-gray-400 text-sm">
                  Total Amount
                </p>

                <h3
                  className="
                    text-4xl
                    sm:text-5xl
                    font-bold
                    mt-1
                    transition-all
                    duration-300
                    hover:text-orange-400
                    hover:scale-105
                    origin-left
                  "
                >
                  ${totalAmount}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Taxes and fees included
                </p>

              </div>


              {/* PAYMENT BUTTON */}

              <button
                type="button"
                onClick={onProceed}
                className="
                  group
                  w-full
                  md:w-auto
                  flex
                  items-center
                  justify-center
                  gap-3
                  px-8
                  py-4
                  rounded-full
                  bg-orange-500
                  text-white
                  font-semibold
                  shadow-lg
                  shadow-orange-500/20
                  transition-all
                  duration-300
                  hover:bg-orange-600
                  hover:-translate-y-2
                  hover:scale-105
                  hover:shadow-2xl
                  hover:shadow-orange-500/40
                  active:scale-95
                  cursor-pointer
                "
              >

                <CreditCard
                  size={21}
                  className="
                    transition-all
                    duration-300
                    group-hover:rotate-12
                    group-hover:scale-110
                  "
                />

                <span>
                  Proceed Payment
                </span>

              </button>

            </div>

          </div>

        </div>


        {/* ================================================= */}
        {/* SECURE PAYMENT */}
        {/* ================================================= */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-2
            mt-7
            text-sm
            text-gray-500
            transition-colors
            duration-300
            hover:text-gray-900
          "
        >

          <CheckCircle2
            size={18}
            className="
              text-green-500
              transition-all
              duration-300
              hover:scale-125
            "
          />

          <span>
            Secure booking & payment
          </span>

        </div>

      </div>

    </section>
  );
}

