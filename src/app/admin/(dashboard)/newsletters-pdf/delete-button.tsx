"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function DeleteNewsletterButton({
  id,
  title,
  pdfPath,
}: {
  id: string;
  title: string;
  pdfPath: string;
}) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm(`Supprimer "${title}" et son PDF ?`)) return;

    const supabase = createClient();

    // Delete PDF from storage
    await supabase.storage.from("newsletters").remove([pdfPath]);

    // Delete record from database
    await supabase.from("newsletters").delete().eq("id", id);

    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="text-sm text-red-600 hover:underline font-medium"
    >
      Supprimer
    </button>
  );
}
