import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { ContactMessage } from "@/lib/types/database";
import { MarkReadButton } from "./mark-read-button";

export const dynamic = "force-dynamic";

export default async function MessagesAdminPage() {
  const supabase = createServerSupabaseClient();

  const { data: messages } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  const list = (messages ?? []) as ContactMessage[];
  const unreadCount = list.filter((m) => !m.is_read).length;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy-800">Messages</h1>
        <p className="text-navy-700 mt-1">
          {list.length} message{list.length > 1 ? "s" : ""} · {unreadCount} non
          lu{unreadCount > 1 ? "s" : ""}
        </p>
      </div>

      <div className="space-y-4">
        {list.length === 0 ? (
          <div className="bg-white rounded-card p-10 border border-beige-200 text-center text-navy-700">
            Aucun message reçu pour le moment.
          </div>
        ) : (
          list.map((msg) => (
            <div
              key={msg.id}
              className={`bg-white rounded-card p-6 border shadow-sm ${
                msg.is_read
                  ? "border-beige-200"
                  : "border-rose-300 border-l-4"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-bold text-navy-800">
                    {msg.prenom} {msg.nom}
                    {!msg.is_read && (
                      <span className="ml-2 inline-block px-2 py-0.5 bg-rose-600 text-white text-xs rounded-full">
                        Nouveau
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-navy-700">
                    {msg.email}
                    {msg.telephone && ` · ${msg.telephone}`}
                  </p>
                  {msg.organisation && (
                    <p className="text-sm text-navy-700">{msg.organisation}</p>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-navy-700">
                    {new Date(msg.created_at).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 bg-beige-100 rounded-full text-navy-700">
                      {msg.sujet}
                    </span>
                    {msg.groupe && (
                      <span className="text-xs px-2 py-0.5 bg-beige-100 rounded-full text-navy-700">
                        {msg.groupe}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-sm text-navy-700 leading-relaxed whitespace-pre-wrap">
                {msg.message}
              </p>
              {!msg.is_read && (
                <div className="mt-3">
                  <MarkReadButton id={msg.id} />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
