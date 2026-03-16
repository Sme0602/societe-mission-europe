"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function DeleteButton({ id, title }: { id: string; title: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm(`Supprimer "${title}" ?`)) return;

    const supabase = createClient();
    await supabase.from("actualites").delete().eq("id", id);
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
