"use client";

import { motion } from "framer-motion";

export default function FinalMessage() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            One Last Thing ❤️
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-white dark:text-white leading-relaxed mb-8"
          >
            This Christmas, I want you to know that you are my greatest gift.
            Every day with you is a blessing, and every moment we share becomes
            a cherished memory. Thank you for filling my life with love,
            laughter, and endless joy.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white dark:text-white leading-relaxed mb-8"
          >
            I love you more than words could ever express. Here's to many more
            Christmases together, filled with love, laughter, and unforgettable
            moments.
          </motion.p>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex justify-center items-center"
          >
            <img
              src="https://i.gifer.com/y2.gif"
              alt="Exciting GIF"
              draggable={false}
              className="w-38 h-auto scale-x-[-1]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 pt-8 border-t border-red-200 dark:border-red-900"
        >
          <p className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            All my love,
            <br />
            <span className="text-2xl font-bold">Your Forever Person ❤️</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
