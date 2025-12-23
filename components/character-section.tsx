"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Character {
  id: number
  emoji: string
  name: string
  message: string
}

const characters: Character[] = [
  {
    id: 1,
    emoji: "🎅",
    name: "Santa",
    message: "Ho ho ho! Love is the greatest gift of all! 🎁",
  },
  {
    id: 2,
    emoji: "🦌",
    name: "Reindeer",
    message: "Flying through the sky with love so high! 🌟",
  },
  {
    id: 3,
    emoji: "⛄",
    name: "Snowman",
    message: "Even cold hearts melt when there's love around! ❤️",
  },
]

export default function CharacterSection() {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-green-600 dark:text-green-400"
      >
        Christmas Characters 🎄
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {characters.map((character, index) => (
          <motion.button
            key={character.id}
            onClick={() => setSelectedCharacter(selectedCharacter === character.id ? null : character.id)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="focus:outline-none"
          >
            <motion.div
              animate={selectedCharacter === character.id ? { y: -10 } : { y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-b from-green-400 to-green-600 dark:from-green-600 dark:to-green-800 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer min-h-48 flex flex-col items-center justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, delay: index * 0.3 }}
                className="text-6xl mb-4"
              >
                {character.emoji}
              </motion.div>
              <p className="text-white font-serif text-xl font-bold">{character.name}</p>

              {selectedCharacter === character.id && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-white text-sm mt-4 leading-relaxed"
                >
                  {character.message}
                </motion.p>
              )}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </section>
  )
}
