"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import Hero from "@/components/hero"
import GiftSection from "@/components/gift-section"
import MemorySection from "@/components/memory-section"
import CharacterSection from "@/components/character-section"
import FinalMessage from "@/components/final-message"
import SnowEffect from "@/components/snow-effect"

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set loading to false after component mounts
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (!isMuted) {
      // Fade in effect
      audio.volume = 0
      audio.play().catch(() => {
        console.log("Audio autoplay prevented")
      })

      let volume = 0
      const fadeInInterval = setInterval(() => {
        volume += 0.02
        if (volume >= 0.3) {
          volume = 0.3
          clearInterval(fadeInInterval)
        }
        audio.volume = volume
      }, 100)
    } else {
      audio.pause()
    }
  }, [isMuted])

  if (isLoading) return null

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      <SnowEffect />

      {/* Music Control Button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed top-6 right-6 z-50 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-red-200 dark:border-red-900"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-red-600" />
        ) : (
          <Volume2 className="w-6 h-6 text-red-600 animate-pulse" />
        )}
      </button>

      {/* Audio Element */}
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop playsInline />

      {/* Content Sections */}
      <Hero />
      <GiftSection />
      <MemorySection />
      <CharacterSection />
      <FinalMessage />
    </main>
  )
}
