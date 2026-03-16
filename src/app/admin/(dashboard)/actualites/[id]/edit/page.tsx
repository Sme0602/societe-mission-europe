import { createServerSupabaseClient } from "@/lib/supabase/server";
import ArticleForm from "@/components/admin/ArticleForm";
import { updateArticle } from "../../actions";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Actualite } from "@/lib/types/database";

export const dynamic = "force-dynamic";

export default async function EditArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createServerSupabaseClient();

  const { data: article } = await supabase
    .from("actualites")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!article) {
    notFound();
  }

  const updateWithId = updateArticle.bind(null, params.id);

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
          Modifier l&apos;actualité
        </h1>
      </div>

      <div className="bg-white rounded-card p-6 md:p-8 border border-beige-200">
        <ArticleForm article={article as Actualite} action={updateWithId} />
      </div>
    </div>
  );
}
