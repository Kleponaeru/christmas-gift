"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
        >
          Merry Christmas MY CIA!
        </motion.h1>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-4xl mb-8"
        >
          ❤️
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-white leading-relaxed mb-4"
        >
          This Christmas, I wanted to create something special just for you. A
          digital gift filled with memories, love, and all the warmth of the
          season.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm md:text-base text-white/80 italic leading-relaxed mb-8"
        >
          (I wanted to give you a real gift at first, but seems like you're going on vacation, so I made this instead!)
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex items-center justify-center gap-2 text-white"
        >
          <Heart className="w-5 h-5" />
          <span>Scroll down to explore</span>
          <Heart className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}