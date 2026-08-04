"use client";

import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";


const quickLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Rooms",
    href: "/rooms",
  },
  {
    name: "Dining",
    href: "/dining",
  },
  {
    name: "Spa",
    href: "/spa",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Booking",
    href: "/booking",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];



export default function Footer() {

  return (

    <footer className="
    bg-black
    border-t
    border-orange-500/20
    ">


      {/* Main Footer */}

      <div className="
      max-w-7xl
      mx-auto
      px-6
      py-20
      grid
      lg:grid-cols-4
      md:grid-cols-2
      gap-12
      ">



        {/* Logo Section */}

        <div>


          <h2 className="
          text-4xl
          font-serif
          font-bold
          text-white
          tracking-widest
          ">
            LUXORA
          </h2>



          <p className="
          text-gray-400
          mt-6
          leading-relaxed
          ">
            Experience luxury hospitality with elegant
            rooms, fine dining, relaxing spa and
            unforgettable moments.
          </p>




          {/* Social Icons */}

          <div className="
          flex
          gap-4
          mt-8
          ">


            <a
              href="#"
              className="
              w-11
              h-11
              rounded-full
              bg-[#151515]
              flex
              items-center
              justify-center
              text-orange-500
              hover:bg-orange-500
              hover:text-black
              transition
              "
            >
              <FaFacebookF size={20}/>
            </a>




            <a
              href="#"
              className="
              w-11
              h-11
              rounded-full
              bg-[#151515]
              flex
              items-center
              justify-center
              text-orange-500
              hover:bg-orange-500
              hover:text-black
              transition
              "
            >
              <FaInstagram size={20}/>
            </a>




            <a
              href="#"
              className="
              w-11
              h-11
              rounded-full
              bg-[#151515]
              flex
              items-center
              justify-center
              text-orange-500
              hover:bg-orange-500
              hover:text-black
              transition
              "
            >
              <FaTwitter size={20}/>
            </a>


          </div>


        </div>







        {/* Quick Links */}


        <div>


          <h3 className="
          text-2xl
          font-semibold
          text-white
          mb-6
          ">
            Quick Links
          </h3>



          <ul className="
          space-y-4
          ">


            {
              quickLinks.map((item,index)=>(

                <li key={index}>


                  <Link
                    href={item.href}
                    className="
                    flex
                    items-center
                    gap-2
                    text-gray-400
                    hover:text-orange-500
                    transition
                    "
                  >

                    <ChevronRight size={17}/>

                    {item.name}

                  </Link>


                </li>

              ))
            }


          </ul>


        </div>








        {/* Contact Section */}


        <div>


          <h3 className="
          text-2xl
          font-semibold
          text-white
          mb-6
          ">
            Contact
          </h3>



          <div className="
          space-y-6
          ">



            <div className="
            flex
            gap-4
            ">

              <MapPin
              className="text-orange-500"
              />


              <p className="
              text-gray-400
              ">
                123 Luxury Street
                <br/>
                New York, USA
              </p>


            </div>






            <div className="
            flex
            gap-4
            ">

              <Phone
              className="text-orange-500"
              />


              <p className="
              text-gray-400
              ">
                +1 234 567 890
              </p>


            </div>






            <div className="
            flex
            gap-4
            ">

              <Mail
              className="text-orange-500"
              />


              <p className="
              text-gray-400
              ">
                info@luxora.com
              </p>


            </div>



          </div>



        </div>









        {/* Newsletter */}


        <div>


          <h3 className="
          text-2xl
          font-semibold
          text-white
          mb-6
          ">
            Newsletter
          </h3>




          <p className="
          text-gray-400
          mb-6
          ">
            Subscribe for exclusive offers and
            luxury hotel updates.
          </p>





          <input

            type="email"

            placeholder="Your Email"

            className="
            w-full
            bg-[#151515]
            border
            border-orange-500/20
            rounded-full
            px-5
            py-4
            text-white
            outline-none
            focus:border-orange-500
            "

          />





          <button

          className="
          w-full
          mt-4
          bg-orange-500
          text-black
          py-4
          rounded-full
          font-semibold
          hover:bg-orange-400
          transition
          "

          >

            Subscribe

          </button>



        </div>



      </div>







      {/* Bottom Footer */}


      <div className="
      border-t
      border-orange-500/20
      ">


        <div className="
        max-w-7xl
        mx-auto
        px-6
        py-6
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-4
        ">


          <p className="
          text-gray-500
          ">
            © 2026 LUXORA Hotel. All Rights Reserved.
          </p>



          <div className="
          flex
          gap-6
          ">


            <Link
            href="/privacy"
            className="
            text-gray-500
            hover:text-orange-500
            transition
            "
            >
              Privacy
            </Link>



            <Link
            href="/terms"
            className="
            text-gray-500
            hover:text-orange-500
            transition
            "
            >
              Terms
            </Link>



          </div>



        </div>


      </div>



    </footer>

  );
}