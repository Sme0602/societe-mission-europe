import ArticleForm from "@/components/admin/ArticleForm";
import { createArticle } from "../actions";
import Link from "next/link";

export default function NewArticlePage() {
  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/actualites"
          className="text-sm text-rose-600 hover:underline"
        >
          ← Retour aux actualités
        </Link>
        <h1 className="text-3xl font-bold text-navy-800 mt-2">
          Nouvelle actualité
        </h1>
      </div>

      <div className="bg-white rounded-card p-6 md:p-8 border border-beige-200">
        <ArticleForm action={createArticle} />
      </div>
    </div>
  );
}
