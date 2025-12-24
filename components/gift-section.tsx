"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import SnowGlobe from "./snow-globe";

interface Gift {
  id: number;
  emoji: string;
  title: string;
  message: string;
  image?: string;
  images?: string[];
  showSnowGlobe?: boolean;
}

const gifts: Gift[] = [
  {
    id: 1,
    emoji: "🎁",
    title: "Santa's Gift",
    message:
      "This gift is a symbol of my love and appreciation for you. May it bring you joy and warmth this Christmas.",
    showSnowGlobe: true,
  },
  {
    id: 2,
    emoji: "🌹",
    title: "Your Smile",
    message:
      "You have the most beautiful smile that lights up my entire world. Thank you for sharing it with me.",
    images: [
      "/gift-picture/smile-1.jpg",
      "/gift-picture/smile-2.jpg",
      "/gift-picture/smile-3.png",
      "/gift-picture/smile-4.jpg",
      "/gift-picture/smile-5.jpg",
    ],
  },
  {
    id: 3,
    emoji: "💝",
    title: "Adventures",
    message:
      "Every adventure with you is an unforgettable memory. I can't wait for all the places we'll explore together.",
    images: [
      "/gift-picture/pict-tgt-1.jpg",
      "/gift-picture/pict-tgt-2.jpg",
      "/gift-picture/pict-tgt-3.jpg",
    ],
  },
];

export default function GiftSection() {
  const [openedGift, setOpenedGift] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLoveBombs, setShowLoveBombs] = useState(false);
  const [hoveredGift, setHoveredGift] = useState<number | null>(null);

  useEffect(() => {
    const currentGift = gifts.find((g) => g.id === openedGift);
    if (currentGift?.images && currentGift.images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % currentGift.images!.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [openedGift]);

  const handleGiftClick = (giftId: number) => {
    if (openedGift === giftId) {
      setOpenedGift(null);
      setCurrentImageIndex(0);
      setShowLoveBombs(false);
    } else {
      setOpenedGift(giftId);
      setCurrentImageIndex(0);

      const currentGift = gifts.find((g) => g.id === giftId);
      if (currentGift?.images) {
        setShowLoveBombs(true);

        setTimeout(() => {
          setShowLoveBombs(false);
        }, 4000);
      }
    }
  };

  const generateLoveBombs = () => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      emoji: ["❤️", "💕", "💖", "💗", "💓", "💝", "💘"][
        Math.floor(Math.random() * 7)
      ],
      x: Math.random() * 100,
      delay: Math.random() * 0.8,
      duration: 2.5 + Math.random() * 1.5,
      startY: 100 + Math.random() * 10,
    }));
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative">
      <AnimatePresence>
        {showLoveBombs && (
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {generateLoveBombs().map((bomb) => (
              <motion.div
                key={bomb.id}
                initial={{ y: bomb.startY + "%", opacity: 0, scale: 0 }}
                animate={{
                  y: "-120%",
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1.5, 1, 0.5],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: bomb.duration,
                  delay: bomb.delay,
                  ease: "easeOut",
                }}
                style={{
                  position: "absolute",
                  left: `${bomb.x}%`,
                  fontSize: "2.5rem",
                }}
              >
                {bomb.emoji}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
      >
        Gift 🎁
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gifts.map((gift, index) => (
          <motion.div
            key={gift.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            onClick={() => handleGiftClick(gift.id)}
            onMouseEnter={() => setHoveredGift(gift.id)}
            onMouseLeave={() => setHoveredGift(null)}
            className="cursor-pointer relative"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: index * 0.3,
              }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all hover:bg-white/15 cursor-pointer min-h-48 flex flex-col items-center justify-center relative"
            >
              {/* Click hint that appears on hover */}
              {!openedGift && hoveredGift === gift.id && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-red-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap"
                >
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    👆 Click me!
                  </motion.span>
                </motion.div>
              )}

              {openedGift === gift.id ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  {gift.showSnowGlobe ? (
                    <div className="flex flex-col items-center text-white">
                      <div className="scale-[0.35] md:scale-50 -my-32 md:-my-24">
                        <SnowGlobe />
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-4">
                        {gift.title}
                      </h3>
                      <p className="text-sm leading-relaxed">{gift.message}</p>
                    </div>
                  ) : gift.images && gift.images.length > 0 ? (
                    <div className="flex flex-col items-center text-white">
                      <div className="relative w-full max-w-sm h-64 mb-4 rounded-lg overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentImageIndex}
                            src={gift.images[currentImageIndex]}
                            alt={`${gift.title} ${currentImageIndex + 1}`}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(
                                (prev) => (prev + 1) % gift.images!.length
                              );
                            }}
                          />
                        </AnimatePresence>

                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {gift.images.map((_, idx) => (
                            <div
                              key={idx}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentImageIndex
                                  ? "bg-white w-6"
                                  : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <h3 className="text-2xl font-serif font-bold mb-4">
                        {gift.title}
                      </h3>
                      <p className="text-sm leading-relaxed">{gift.message}</p>
                    </div>
                  ) : gift.image ? (
                    <div className="flex flex-col items-center text-white">
                      <img
                        src={gift.image}
                        alt={gift.title}
                        className="w-full max-w-sm rounded-lg mb-4 shadow-lg"
                      />
                      <h3 className="text-2xl font-serif font-bold mb-4">
                        {gift.title}
                      </h3>
                      <p className="text-sm leading-relaxed">{gift.message}</p>
                    </div>
                  ) : (
                    <div className="text-white">
                      <div className="text-6xl mb-4">✨</div>
                      <h3 className="text-2xl font-serif font-bold mb-4">
                        {gift.title}
                      </h3>
                      <p className="text-sm leading-relaxed">{gift.message}</p>
                    </div>
                  )}
                </motion.div>
              ) : (
                <>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      delay: index * 0.3,
                    }}
                    className="text-6xl mb-4"
                  >
                    {gift.emoji}
                  </motion.div>
                  <p className="text-white font-serif text-xl">{gift.title}</p>

                  {/* Always visible subtle hint */}
                  <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-white/70 text-xs mt-2"
                  >
                    tap to open
                  </motion.p>
                </>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
