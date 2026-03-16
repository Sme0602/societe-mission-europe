"use client";

import type { Actualite } from "@/lib/types/database";

const categories = [
  "Événement",
  "Publication",
  "Partenariat",
  "Territoire",
];

export default function ArticleForm({
  article,
  action,
}: {
  article?: Actualite;
  action: (formData: FormData) => Promise<void>;
}) {
  return (
    <form action={action} className="space-y-6 max-w-2xl">
      <div>
        <label className="block text-sm font-bold text-navy-800 mb-1">
          Titre *
        </label>
        <input
          name="title"
          type="text"
          required
          defaultValue={article?.title}
          className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none text-navy-800"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-navy-800 mb-1">
          Résumé / Extrait *
        </label>
        <textarea
          name="excerpt"
          required
          rows={3}
          defaultValue={article?.excerpt}
          className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none text-navy-800"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-navy-800 mb-1">
          Contenu complet (optionnel)
        </label>
        <textarea
          name="content"
          rows={6}
          defaultValue={article?.content ?? ""}
          className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none text-navy-800"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-navy-800 mb-1">
            Catégorie *
          </label>
          <select
            name="category"
            required
            defaultValue={article?.category ?? "Publication"}
            className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none text-navy-800"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-navy-800 mb-1">
            Date *
          </label>
          <input
            name="date"
            type="date"
            required
            defaultValue={article?.date ?? new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none text-navy-800"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-navy-800 mb-1">
          URL source (optionnel)
        </label>
        <input
          name="source_url"
          type="url"
          defaultValue={article?.source_url ?? ""}
          className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none text-navy-800"
          placeholder="https://..."
        />
      </div>

      <div className="flex gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="hidden"
            name="is_featured"
            value="false"
          />
          <input
            type="checkbox"
            name="is_featured"
            value="true"
            defaultChecked={article?.is_featured ?? false}
            className="w-4 h-4 text-rose-600 border-beige-200 rounded focus:ring-rose-600"
          />
          <span className="text-sm font-medium text-navy-800">À la une</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="hidden"
            name="is_published"
            value="false"
          />
          <input
            type="checkbox"
            name="is_published"
            value="true"
            defaultChecked={article?.is_published ?? true}
            className="w-4 h-4 text-rose-600 border-beige-200 rounded focus:ring-rose-600"
          />
          <span className="text-sm font-medium text-navy-800">Publié</span>
        </label>
      </div>

      <button type="submit" className="btn-primary">
        {article ? "Mettre à jour" : "Publier"}
      </button>
    </form>
  );
}
