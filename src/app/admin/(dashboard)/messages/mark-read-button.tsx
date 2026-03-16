"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function MarkReadButton({ id }: { id: string }) {
  const router = useRouter();

  const handleMarkRead = async () => {
    const supabase = createClient();
    await supabase
      .from("contact_messages")
      .update({ is_read: true })
      .eq("id", id);
    router.refresh();
  };

  return (
    <button
      onClick={handleMarkRead}
      className="text-xs text-rose-600 hover:underline font-medium"
    >
      Marquer comme lu
    </button>
  );
}
