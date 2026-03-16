"use client";

import { useState } from "react";
import Image from "next/image";
import linkedinData from "@/data/linkedin-posts.json";

interface Post {
  id: string;
  date: string;
  content: string;
  url: string;
  reactions: number;
  comments: number;
}

export default function LinkedInFeed() {
  const [showAll, setShowAll] = useState(false);
  const posts: Post[] = linkedinData.posts;
  const displayedPosts = showAll ? posts : posts.slice(0, 3);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-beige-100 text-navy-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Actualités LinkedIn
          </div>
          <h2 className="section-title">
            Suivez notre actualité
          </h2>
          <div className="tricolor-separator w-24 mx-auto mb-4" />
          <p className="text-navy-700 max-w-2xl mx-auto">
            Retrouvez les dernières nouvelles du projet directement depuis notre page LinkedIn
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPosts.map((post) => (
            <article
              key={post.id}
              className="bg-beige-50 rounded-card shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col border border-beige-200"
            >
              {/* Post Header */}
              <div className="p-5 border-b border-beige-200">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.jpg"
                    alt="Société à Mission Europe"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-navy-800 text-sm">
                      Société à Mission Europe
                    </h3>
                    <p className="text-navy-700 text-xs">{formatDate(post.date)}</p>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-5 flex-1">
                <p className="text-navy-700 text-sm leading-relaxed line-clamp-4">
                  {post.content}
                </p>
              </div>

              {/* Post Footer */}
              <div className="px-5 pb-5">
                <div className="flex items-center justify-between pt-4 border-t border-beige-200">
                  <div className="flex items-center gap-4 text-sm text-navy-700">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      {post.reactions}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {post.comments}
                    </span>
                  </div>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-600 hover:text-rose-700 text-sm font-bold flex items-center gap-1"
                  >
                    Voir
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {posts.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? "Voir moins" : `Voir plus (${posts.length - 3} autres)`}
            </button>
          )}
          <a
            href="https://www.linkedin.com/company/soci%C3%A9t%C3%A9-%C3%A0-mission-europe/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Suivre sur LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
