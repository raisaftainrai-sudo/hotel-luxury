
"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of rooms does LUXORA offer?",
    answer:
      "LUXORA offers luxury rooms, premium suites, executive rooms and presidential suites with modern facilities.",
  },
  {
    question: "Do you provide room service?",
    answer:
      "Yes, our 24/7 room service team is available to provide food, beverages and guest assistance.",
  },
  {
    question: "Is spa and wellness service available?",
    answer:
      "Yes, guests can enjoy premium spa treatments, relaxation therapies and wellness facilities.",
  },
  {
    question: "Do you offer airport pickup?",
    answer:
      "Yes, we provide comfortable airport transfer services for our guests.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, bookings can be cancelled according to our cancellation policy.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#080808] py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="
              text-4xl
              md:text-5xl
              text-white
              font-serif
              font-bold
              text-center
            "
          >
            Frequently Asked Questions
          </h2>

          <p
            className="
              text-gray-400
              text-center
              mt-5
              mb-12
            "
          >
            Find answers to common questions about
            our hotel services and facilities.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                }}
                className={`
                  group
                  bg-[#111]
                  rounded-2xl
                  border
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-orange-500/60 shadow-[0_0_25px_rgba(249,115,22,0.12)]"
                      : "border-orange-500/20 hover:border-orange-500/50"
                  }
                `}
              >
                {/* Question Button */}
                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="
                    w-full
                    flex
                    justify-between
                    items-center
                    gap-4
                    px-6
                    py-5
                    text-left
                  "
                >
                  <span
                    className={`
                      text-lg
                      font-medium
                      transition-colors
                      duration-300
                      ${
                        isOpen
                          ? "text-orange-500"
                          : "text-white group-hover:text-orange-400"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* Animated Icon */}
                  <motion.div
                    animate={{
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      flex
                      items-center
                      justify-center
                      min-w-9
                      h-9
                      rounded-full
                      border
                      border-orange-500/30
                      group-hover:border-orange-500
                      transition-colors
                      duration-300
                    "
                  >
                    <Plus
                      size={20}
                      className="
                        text-orange-500
                      "
                    />
                  </motion.div>
                </button>

                {/* Animated Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className="
                          px-6
                          pb-6
                          pt-0
                          text-gray-400
                          leading-relaxed
                          border-t
                          border-orange-500/10
                        "
                      >
                        <motion.p
                          initial={{
                            opacity: 0,
                            y: -8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: 0.1,
                          }}
                          className="pt-5"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
