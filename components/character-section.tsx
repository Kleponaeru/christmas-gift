"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useState } from "react";

interface Character {
  id: number;
  emoji: ReactNode;
  name: string;
  message: string;
}

const characters: Character[] = [
  {
    id: 1,
    emoji: (
      <Image
        src="https://img.icons8.com/fluency/48/santa.png"
        alt="Santa"
        width={48}
        height={48}
      />
    ),
    name: "Santa",
    message: "Ho ho ho! Love is the greatest gift of all! 🎁",
  },
  {
    id: 2,
    emoji: (
      <Image
        src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/external-reindeer-christmas-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
        alt="Reindeer"
        width={48}
        height={48}
      />
    ),
    name: "Reindeer",
    message: "Flying through the sky with love so high! 🌟",
  },
  {
    id: 3,
    emoji: (
      <Image
        src="https://img.icons8.com/cotton/64/snowman--v2.png"
        alt="Snowman"
        width={48}
        height={48}
      />
    ),
    name: "Snowman",
    message: "Even cold hearts melt when there's love around! ❤️",
  },
];

export default function CharacterSection() {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(
    null
  );

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
      >
        Christmas Characters 🎄
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {characters.map((character, index) => (
          <motion.button
            key={character.id}
            onClick={() =>
              setSelectedCharacter(
                selectedCharacter === character.id ? null : character.id
              )
            }
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="focus:outline-none"
          >
            <motion.div
              animate={
                selectedCharacter === character.id ? { y: -10 } : { y: 0 }
              }
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all hover:bg-white/15 cursor-pointer min-h-48 flex flex-col items-center justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  delay: index * 0.3,
                }}
                className="text-6xl mb-4"
              >
                {character.emoji}
              </motion.div>
              <p className="text-white font-serif text-xl font-bold">
                {character.name}
              </p>

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
  );
}
