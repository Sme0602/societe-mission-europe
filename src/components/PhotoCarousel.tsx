"use client";

import { useState, useCallback, useEffect, useRef } from "react";

const photos = [
  "ss-1", "ss-2", "ss-3", "ss-4", "ss-5", "ss-6", "ss-7", "ss-8",
  "ss-10", "ss-11", "ss-12", "ss-13", "ss-14", "ss-15", "ss-16", "ss-17",
  "ss-18", "ss-19", "ss-20", "ss-21", "ss-22", "ss-23", "ss-24", "ss-25",
  "ss-26", "ss-27", "ss-28", "ss-29", "ss-30", "ss-31", "ss-32", "ss-33",
  "ss-34", "ss-35", "ss-36", "ss-37", "ss-38", "ss-39", "ss-40", "ss-41",
  "ss-42", "ss-43", "ss-44", "ss-45", "ss-46", "ss-47", "ss-48", "ss-49",
  "ss-50", "ss-51", "ss-52", "ss-53", "ss-54", "ss-55", "ss-56", "ss-57",
  "ss-58", "ss-59", "ss-60", "ss-61", "ss-62", "ss-63", "ss-64",
  "ss-99", "ss-991", "ss-992", "ss-993", "ss-994", "ss-995",
];

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + photos.length) % photos.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (paused || isFullscreen) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, isFullscreen, next]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isFullscreen) return;
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Escape") setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isFullscreen, next, prev]);

  return (
    <>
      <div
        className="relative group"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Main image */}
        <div
          className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-card overflow-hidden bg-navy-100 cursor-pointer"
          onClick={() => setIsFullscreen(true)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/summer-school/carousel/${photos[current]}.jpg`}
            alt={`Summer School — Photo ${current + 1} sur ${photos.length}`}
            className="w-full h-full object-cover transition-opacity duration-500"
            loading="lazy"
          />
          <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
            {current + 1} / {photos.length}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Photo précédente"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Photo suivante"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-navy-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot indicators - show every 5th photo */}
        <div className="flex justify-center gap-1.5 mt-4">
          {photos.filter((_, i) => i % 5 === 0).map((_, dotIndex) => {
            const photoIndex = dotIndex * 5;
            const isActive = current >= photoIndex && current < photoIndex + 5;
            return (
              <button
                key={dotIndex}
                onClick={() => goTo(photoIndex)}
                className={`w-2 h-2 rounded-full transition-all ${isActive ? "bg-rose-500 w-6" : "bg-navy-300 hover:bg-navy-400"}`}
                aria-label={`Aller à la photo ${photoIndex + 1}`}
              />
            );
          })}
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
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Photo précédente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/summer-school/carousel/${photos[current]}.jpg`}
            alt={`Summer School — Photo ${current + 1} sur ${photos.length}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
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
