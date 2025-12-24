"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Hero from "@/components/hero";
import GiftSection from "@/components/gift-section";
import MemorySection from "@/components/memory-section";
import CharacterSection from "@/components/character-section";
import FinalMessage from "@/components/final-message";
import SnowEffect from "@/components/snow-effect";
import SnowGlobe from "@/components/snow-globe";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    setIsLoading(false);

    // Function to start audio on first user interaction
    const startAudio = () => {
      if (!hasInteracted && audioRef.current && !isMuted) {
        setHasInteracted(true);
        const audio = audioRef.current;
        audio.volume = 0;
        audio
          .play()
          .then(() => {
            // Fade in effect
            let volume = 0;
            const fadeInInterval = setInterval(() => {
              volume += 0.02;
              if (volume >= 0.3) {
                volume = 0.3;
                clearInterval(fadeInInterval);
              }
              audio.volume = volume;
            }, 100);
          })
          .catch(() => {
            console.log("Audio play failed");
          });
      }
    };

    // Listen for any user interaction
    document.addEventListener("click", startAudio, { once: true });
    document.addEventListener("touchstart", startAudio, { once: true });
    document.addEventListener("keydown", startAudio, { once: true });

    return () => {
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
      document.removeEventListener("keydown", startAudio);
    };
  }, [hasInteracted, isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isMuted && hasInteracted) {
      // Fade in effect
      audio.volume = 0;
      audio.play().catch(() => {
        console.log("Audio autoplay prevented");
      });

      let volume = 0;
      const fadeInInterval = setInterval(() => {
        volume += 0.02;
        if (volume >= 0.3) {
          volume = 0.3;
          clearInterval(fadeInInterval);
        }
        audio.volume = volume;
      }, 100);
    } else if (isMuted) {
      audio.pause();
    }
  }, [isMuted, hasInteracted]);

  if (isLoading) return null;

  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-b from-red-700 via-red-600 to-red-800
        dark:from-red-700 dark:via-red-600 dark:to-red-800
        overflow-hidden
      "
    >
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
      <audio ref={audioRef} src="music/Jingle Bell Rock.mp3" loop playsInline />

      {/* Content Sections */}
      <Hero />
      <GiftSection />
      <MemorySection />
      <CharacterSection />
      <FinalMessage />
    </main>
  );
}
