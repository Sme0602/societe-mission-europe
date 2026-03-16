"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewNewsletterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get("title") as string;
    const description = (formData.get("description") as string) || null;
    const issueNumber = formData.get("issue_number") as string;
    const publishedDate = formData.get("published_date") as string;
    const isPublished = formData.get("is_published") === "true";
    const file = formData.get("pdf") as File;

    if (!file || file.size === 0) {
      setError("Veuillez sélectionner un fichier PDF.");
      setLoading(false);
      return;
    }

    if (file.type !== "application/pdf") {
      setError("Seuls les fichiers PDF sont acceptés.");
      setLoading(false);
      return;
    }

    const supabase = createClient();

    // Generate unique filename
    const timestamp = Date.now();
    const safeName = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    const pdfPath = `${safeName}-${timestamp}.pdf`;

    // Upload PDF to storage
    const { error: uploadError } = await supabase.storage
      .from("newsletters")
      .upload(pdfPath, file, {
        contentType: "application/pdf",
        cacheControl: "3600",
      });

    if (uploadError) {
      setError(`Erreur upload : ${uploadError.message}`);
      setLoading(false);
      return;
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from("newsletters")
      .getPublicUrl(pdfPath);

    // Insert record
    const { error: dbError } = await supabase.from("newsletters").insert({
      title,
      description,
      issue_number: issueNumber ? parseInt(issueNumber) : null,
      pdf_path: pdfPath,
      pdf_url: urlData.publicUrl,
      published_date: publishedDate,
      is_published: isPublished,
    });

    if (dbError) {
      setError(`Erreur base de données : ${dbError.message}`);
      setLoading(false);
      return;
    }

    router.push("/admin/newsletters-pdf");
    router.refresh();
  };

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/newsletters-pdf"
          className="text-sm text-rose-600 hover:underline"
        >
          ← Retour aux newsletters
        </Link>
        <h1 className="text-3xl font-bold text-navy-800 mt-2">
          Nouvelle newsletter PDF
        </h1>
      </div>

      <div className="bg-white rounded-card p-6 md:p-8 border border-beige-200">
        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
          <div>
            <label className="block text-sm font-bold text-navy-800 mb-1">
              Titre *
            </label>
            <input
              name="title"
              type="text"
              required
              className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none text-navy-800"
              placeholder="Newsletter #1 — Mars 2026"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-navy-800 mb-1">
              Description (optionnel)
            </label>
            <textarea
              name="description"
              rows={2}
              className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none text-navy-800"
              placeholder="Résumé du contenu de cette newsletter..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-navy-800 mb-1">
                Numéro
              </label>
              <input
                name="issue_number"
                type="number"
                min="1"
                className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none text-navy-800"
                placeholder="1"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-navy-800 mb-1">
                Date de publication *
              </label>
              <input
                name="published_date"
                type="date"
                required
                defaultValue={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none text-navy-800"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-navy-800 mb-1">
              Fichier PDF *
            </label>
            <input
              name="pdf"
              type="file"
              accept=".pdf,application/pdf"
              required
              className="w-full px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none text-navy-800 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-rose-50 file:text-rose-600 hover:file:bg-rose-100"
            />
            <p className="text-xs text-navy-700 mt-1">
              Taille maximale : 10 Mo
            </p>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="hidden" name="is_published" value="false" />
            <input
              type="checkbox"
              name="is_published"
              value="true"
              defaultChecked={true}
              className="w-4 h-4 text-rose-600 border-beige-200 rounded focus:ring-rose-600"
            />
            <span className="text-sm font-medium text-navy-800">Publiée</span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary disabled:opacity-50"
          >
            {loading ? "Upload en cours..." : "Publier la newsletter"}
          </button>
        </form>
      </div>
    </div>
  );
}
