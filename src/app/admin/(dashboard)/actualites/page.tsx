"use client";

import { useState } from "react";
import { newsItems, badgeConfig, type NewsType } from "@/data/news-items";

const typeLabels: Record<NewsType, string> = {
  presse: "Presse",
  podcast: "Podcast",
  linkedin: "LinkedIn",
  evenement: "Événement",
  publication: "Publication",
  newsletter: "Newsletter",
  video: "Vidéo",
};

function exportCSV() {
  const headers = ["Date", "Type", "Titre", "Résumé", "Lien"];
  const rows = newsItems.map((item) => [
    item.date,
    typeLabels[item.type],
    item.title,
    item.summary,
    item.url.startsWith("/") ? `https://societe-mission-europe-pi.vercel.app${item.url}` : item.url,
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(";"))
    .join("\n");
  const bom = "﻿";
  const blob = new Blob([bom + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "actualites-societe-mission-europe.csv";
  a.click();
  URL.revokeObjectURL(url);
}

function exportWord() {
  const rows = newsItems
    .map(
      (item) => `
    <tr>
      <td style="padding:8px;border:1px solid #ccc;">${item.date}</td>
      <td style="padding:8px;border:1px solid #ccc;">${typeLabels[item.type]}</td>
      <td style="padding:8px;border:1px solid #ccc;"><b>${item.title}</b></td>
      <td style="padding:8px;border:1px solid #ccc;">${item.summary}</td>
      <td style="padding:8px;border:1px solid #ccc;"><a href="${item.url.startsWith("/") ? `https://societe-mission-europe-pi.vercel.app${item.url}` : item.url}">${item.url.startsWith("/") ? `societe-mission-europe-pi.vercel.app${item.url}` : item.url}</a></td>
    </tr>`
    )
    .join("");

  const html = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
    <head><meta charset="utf-8"><title>Actualités - Société à Mission Europe</title></head>
    <body>
      <h1 style="color:#1e3a5f;font-family:Calibri,sans-serif;">Actualités du projet — Société à Mission Europe</h1>
      <p style="color:#666;font-family:Calibri,sans-serif;">Export du ${new Date().toLocaleDateString("fr-FR")} — ${newsItems.length} actualités</p>
      <table style="border-collapse:collapse;width:100%;font-family:Calibri,sans-serif;font-size:11pt;">
        <thead>
          <tr style="background:#1e3a5f;color:white;">
            <th style="padding:10px;border:1px solid #ccc;text-align:left;">Date</th>
            <th style="padding:10px;border:1px solid #ccc;text-align:left;">Type</th>
            <th style="padding:10px;border:1px solid #ccc;text-align:left;">Titre</th>
            <th style="padding:10px;border:1px solid #ccc;text-align:left;">Résumé</th>
            <th style="padding:10px;border:1px solid #ccc;text-align:left;">Lien</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </body></html>`;

  const blob = new Blob(["﻿" + html], { type: "application/msword" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "actualites-societe-mission-europe.doc";
  a.click();
  URL.revokeObjectURL(url);
}

export default function ActualitesAdmin() {
  const [filter, setFilter] = useState<NewsType | "all">("all");

  const filtered = filter === "all" ? newsItems : newsItems.filter((item) => item.type === filter);
  const types = Array.from(new Set(newsItems.map((item) => item.type)));

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-navy-800">Actualités du projet</h1>
          <p className="text-navy-500 text-sm mt-1">
            {newsItems.length} actualités publiées sur le site
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export Excel (CSV)
          </button>
          <button
            onClick={exportWord}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export Word
          </button>
        </div>
      </div>

      {/* Filtres par type */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
            filter === "all"
              ? "bg-navy-800 text-white"
              : "bg-white text-navy-600 border border-beige-200 hover:border-navy-300"
          }`}
        >
          Toutes ({newsItems.length})
        </button>
        {types.map((type) => {
          const badge = badgeConfig[type];
          const count = newsItems.filter((i) => i.type === type).length;
          return (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                filter === type
                  ? "bg-navy-800 text-white"
                  : `${badge.bg} ${badge.text} hover:opacity-80`
              }`}
            >
              {typeLabels[type]} ({count})
            </button>
          );
        })}
      </div>

      {/* Liste des actualités */}
      <div className="space-y-4">
        {filtered.map((item, i) => {
          const badge = badgeConfig[item.type];
          const fullUrl = item.url.startsWith("/")
            ? `https://societe-mission-europe-pi.vercel.app${item.url}`
            : item.url;
          return (
            <div
              key={i}
              className="bg-white rounded-xl border border-beige-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${badge.bg} ${badge.text}`}
                    >
                      {typeLabels[item.type]}
                    </span>
                    <span className="text-xs text-navy-500">{item.date}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-navy-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-navy-600 leading-relaxed mb-3">{item.summary}</p>
                  <a
                    href={fullUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-600 hover:text-rose-700 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                    {fullUrl.length > 60 ? fullUrl.substring(0, 60) + "..." : fullUrl}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
