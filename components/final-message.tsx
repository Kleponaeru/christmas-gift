"use client"

import { motion } from "framer-motion"

export default function FinalMessage() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-red-600 dark:text-red-400 mb-8">
            One Last Thing ❤️
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
          >
            This Christmas, I want you to know that you are my greatest gift. Every day with you is a blessing, and
            every moment we share becomes a cherished memory. Thank you for filling my life with love, laughter, and
            endless joy.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
          >
            I love you more than words could ever express. Here's to many more Christmases together, filled with love,
            laughter, and unforgettable moments.
          </motion.p>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="text-5xl"
          >
            💕
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 pt-8 border-t border-red-200 dark:border-red-900"
        >
          <p className="text-green-600 dark:text-green-400 font-serif text-lg">
            All my love,
            <br />
            <span className="text-2xl font-bold">Your Forever Person 💚</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
