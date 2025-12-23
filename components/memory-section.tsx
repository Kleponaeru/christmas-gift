"use client"

import { motion } from "framer-motion"

interface Memory {
  id: number
  title: string
  description: string
  icon: string
}

const memories: Memory[] = [
  {
    id: 1,
    title: "Cozy Nights",
    description: "Wrapped in blankets, watching the snow fall outside. Just us, our love, and hot chocolate.",
    icon: "☕",
  },
  {
    id: 2,
    title: "Laughter & Joy",
    description: "Your laugh is my favorite sound. Every moment with you is filled with genuine happiness.",
    icon: "😄",
  },
  {
    id: 3,
    title: "Quiet Moments",
    description: "Sometimes the best moments are the quiet ones where we just hold each other close.",
    icon: "🤫",
  },
  {
    id: 4,
    title: "Forever Plans",
    description: "Dreaming about our future together and all the beautiful memories we'll create.",
    icon: "✨",
  },
]

export default function MemorySection() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-red-600 dark:text-red-400"
      >
        Our Memories ❤️
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border border-red-100 dark:border-red-900"
          >
            <div className="text-5xl mb-4">{memory.icon}</div>
            <h3 className="text-2xl font-serif font-bold mb-3 text-green-600 dark:text-green-400">{memory.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{memory.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
