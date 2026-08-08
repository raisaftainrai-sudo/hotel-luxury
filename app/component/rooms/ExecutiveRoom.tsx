import Image from "next/image";
import Link from "next/link";

export default function ExecutiveRoom() {
  return (
    <section className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
          Executive Suite
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/images/executive-room.jpg"
              alt="Executive Suite"
              width={700}
              height={500}
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Luxury & Comfort
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Enjoy a premium stay in our Executive Suite with elegant
              interiors, king-size bed, private balcony, smart TV, free Wi-Fi,
              mini bar, luxury bathroom, and 24/7 room service.
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>✔ King Size Bed</li>
              <li>✔ Free High-Speed Wi-Fi</li>
              <li>✔ Smart TV</li>
              <li>✔ Mini Bar</li>
              <li>✔ Luxury Bathroom</li>
              <li>✔ 24/7 Room Service</li>
            </ul>

            <Link
              href="/booking"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}