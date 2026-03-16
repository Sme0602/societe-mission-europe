"use client";

import { useState } from "react";

export default function PdfViewer({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [showViewer, setShowViewer] = useState(false);

  if (!showViewer) {
    return (
      <div className="p-6 md:p-8 text-center bg-beige-50">
        <button
          onClick={() => setShowViewer(true)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-navy-800 text-white font-bold rounded-lg hover:bg-navy-700 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          Lire la newsletter
        </button>
        <p className="text-xs text-navy-700 mt-2">
          Cliquez pour afficher le PDF directement dans la page
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-navy-800 text-white">
        <span className="text-sm font-medium truncate">{title}</span>
        <div className="flex items-center gap-2">
          <a
            href={url}
            download
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded text-xs font-medium transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Télécharger
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded text-xs font-medium transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Plein écran
          </a>
          <button
            onClick={() => setShowViewer(false)}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded text-xs font-medium transition-colors"
          >
            ✕ Fermer
          </button>
        </div>
      </div>

      {/* PDF Embed */}
      <div className="bg-gray-200">
        <iframe
          src={`${url}#toolbar=0&navpanes=0`}
          title={title}
          className="w-full border-0"
          style={{ height: "80vh", minHeight: "600px" }}
        />
      </div>
    </div>
  );
}
