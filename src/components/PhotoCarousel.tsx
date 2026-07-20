"use client";

import { useState, useCallback, useEffect, useRef } from "react";

const photos = [
  "ss-2", "ss-3", "ss-7", "ss-8", "ss-11", "ss-13", "ss-14", "ss-19",
  "ss-22", "ss-24", "ss-25", "ss-26", "ss-27", "ss-28", "ss-29", "ss-30",
  "ss-31", "ss-32", "ss-33", "ss-34", "ss-36", "ss-37", "ss-40", "ss-41",
  "ss-42", "ss-45", "ss-47", "ss-49", "ss-50", "ss-51", "ss-53", "ss-54",
  "ss-55", "ss-56", "ss-57", "ss-58", "ss-59", "ss-60", "ss-62", "ss-64",
];

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = (current - 1 + photos.length) % photos.length;
  const next = (current + 1) % photos.length;

  const goNext = useCallback(() => {
    setCurrent((c) => (c + 1) % photos.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((c) => (c - 1 + photos.length) % photos.length);
  }, []);

  useEffect(() => {
    if (paused || isFullscreen) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(goNext, 2500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, isFullscreen, goNext]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const src = (id: string) => `/images/summer-school/carousel/${id}.jpg`;

  return (
    <>
      <div
        className="relative group"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Three photos layout */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Left (previous) */}
          <div
            className="hidden md:block w-1/4 aspect-[4/3] rounded-card overflow-hidden cursor-pointer opacity-60 hover:opacity-80 transition-opacity flex-shrink-0"
            onClick={goPrev}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src(photos[prev])}
              alt={`Photo ${prev + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Center (current) - larger */}
          <div
            className="flex-1 aspect-[16/10] rounded-card overflow-hidden cursor-pointer shadow-lg"
            onClick={() => setIsFullscreen(true)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src(photos[current])}
              alt={`Summer School — Photo ${current + 1} sur ${photos.length}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>

          {/* Right (next) */}
          <div
            className="hidden md:block w-1/4 aspect-[4/3] rounded-card overflow-hidden cursor-pointer opacity-60 hover:opacity-80 transition-opacity flex-shrink-0"
            onClick={goNext}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src(photos[next])}
              alt={`Photo ${next + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goPrev}
          className="absolute left-2 md:left-[calc(25%+0.5rem)] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Photo précédente"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goNext}
          className="absolute right-2 md:right-[calc(25%+0.5rem)] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Photo suivante"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Counter + dots */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <span className="text-sm text-navy-500">{current + 1} / {photos.length}</span>
          <div className="flex gap-1">
            {photos.filter((_, i) => i % 5 === 0).map((_, dotIndex) => {
              const photoIndex = dotIndex * 5;
              const isActive = current >= photoIndex && current < photoIndex + 5;
              return (
                <button
                  key={dotIndex}
                  onClick={() => setCurrent(photoIndex)}
                  className={`w-2 h-2 rounded-full transition-all ${isActive ? "bg-rose-500 w-5" : "bg-navy-300 hover:bg-navy-400"}`}
                  aria-label={`Aller à la photo ${photoIndex + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Fermer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Photo précédente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src(photos[current])}
            alt={`Summer School — Photo ${current + 1} sur ${photos.length}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Photo suivante"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm">
            {current + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
