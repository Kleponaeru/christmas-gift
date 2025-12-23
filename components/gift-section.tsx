"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Gift {
  id: number;
  emoji: string;
  title: string;
  message: string;
}

const gifts: Gift[] = [
  {
    id: 1,
    emoji: "🎁",
    title: "First Date",
    message:
      "I still remember the butterflies I felt when we first met. Every moment with you since has been a gift.",
  },
  {
    id: 2,
    emoji: "🌹",
    title: "Your Smile",
    message:
      "You have the most beautiful smile that lights up my entire world. Thank you for sharing it with me.",
  },
  {
    id: 3,
    emoji: "💝",
    title: "Adventures",
    message:
      "Every adventure with you is an unforgettable memory. I can't wait for all the places we'll explore together.",
  },
];

export default function GiftSection() {
  const [openedGift, setOpenedGift] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
      >
        Open Your Gifts 🎁
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gifts.map((gift, index) => (
          <motion.div
            key={gift.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            onClick={() =>
              setOpenedGift(openedGift === gift.id ? null : gift.id)
            }
            className="cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                delay: index * 0.3,
              }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all hover:bg-white/15 cursor-pointer min-h-48 flex flex-col items-center justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  delay: index * 0.3,
                }}
                className="text-6xl mb-4"
              >
                {openedGift === gift.id ? "✨" : gift.emoji}
              </motion.div>

              {openedGift === gift.id ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-white"
                >
                  <h3 className="text-2xl font-serif font-bold mb-4">
                    {gift.title}
                  </h3>
                  <p className="text-sm leading-relaxed">{gift.message}</p>
                </motion.div>
              ) : (
                <p className="text-white font-serif text-xl">{gift.title}</p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
