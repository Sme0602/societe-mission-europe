"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";

interface Contact {
  id: string;
  nom_prenom: string;
  poste_structure: string | null;
  groupes: string[];
  email: string;
  telephone: string | null;
  idees: string | null;
  created_at: string;
}

type ListType = "general" | "partenaires" | "gt" | "cs" | "comite_partenaire";

interface ListeConfig {
  dbValue: string;
  title: string;
  description: string;
  color: string;
  type: ListType;
}

const LISTES_CONFIG: Record<string, ListeConfig> = {
  generale: {
    dbValue: "newsletter",
    title: "Liste générale",
    description: "Newsletter & événements publics",
    color: "bg-orange-500",
    type: "general",
  },
  partenaires: {
    dbValue: "partenaires",
    title: "Liste partenaires",
    description: "Partenaires académiques et institutionnels",
    color: "bg-rose-600",
    type: "partenaires",
  },
  "gt-territoire": {
    dbValue: "gt_territoire",
    title: "GT Territoire (Hauts-de-France)",
    description: "Participants du groupe de travail territorial",
    color: "bg-jaune-400",
    type: "gt",
  },
  "gt-national": {
    dbValue: "gt_national",
    title: "GT National (France)",
    description: "Participants du groupe de travail national",
    color: "bg-rose-600",
    type: "gt",
  },
  "gt-europe": {
    dbValue: "gt_europe",
    title: "GT Europe",
    description: "Participants du groupe de travail européen",
    color: "bg-blue-600",
    type: "gt",
  },
  "cs-territoire": {
    dbValue: "cs_territoire",
    title: "Conseil Scientifique Territoire",
    description: "Membres du conseil scientifique territorial",
    color: "bg-emerald-600",
    type: "cs",
  },
  "cs-national": {
    dbValue: "cs_national",
    title: "Conseil Scientifique National",
    description: "Membres du conseil scientifique national",
    color: "bg-emerald-600",
    type: "cs",
  },
  "cs-europe": {
    dbValue: "cs_europe",
    title: "Conseil Scientifique Europe",
    description: "Membres du conseil scientifique européen",
    color: "bg-emerald-600",
    type: "cs",
  },
  "comite-partenaire": {
    dbValue: "comite_partenaire",
    title: "Comité Partenaire",
    description: "Membres du comité partenaire",
    color: "bg-purple-600",
    type: "comite_partenaire",
  },
};

const emptyForm = {
  nom_prenom: "",
  poste_structure: "",
  email: "",
  telephone: "",
  idees: "",
};

export default function MailingListPage() {
  const params = useParams();
  const listeSlug = params.liste as string;
  const config = LISTES_CONFIG[listeSlug];

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [search, setSearch] = useState("");
  const [sortCol, setSortCol] = useState<"nom_prenom" | "poste_structure">("nom_prenom");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const toggleSort = (col: "nom_prenom" | "poste_structure") => {
    if (sortCol === col) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortCol(col);
      setSortDir("asc");
    }
  };

  const fetchContacts = useCallback(async () => {
    if (!config) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/contributeurs?groupe=${config.dbValue}`);
      const data = await res.json();
      setContacts(data || []);
    } catch {
      setContacts([]);
    }
    setLoading(false);
  }, [config]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  if (!config) {
    return (
      <div className="text-center py-16">
        <p className="text-navy-600">Liste introuvable.</p>
      </div>
    );
  }

  const isGT = config.type === "gt";
  const isCS = config.type === "cs";
  const showIdees = isGT;
  const showPhone = isGT || isCS;

  const filtered = contacts
    .filter((c) => {
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        c.nom_prenom.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        (c.poste_structure || "").toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      const valA = (sortCol === "nom_prenom" ? a.nom_prenom : a.poste_structure || "").toLowerCase();
      const valB = (sortCol === "nom_prenom" ? b.nom_prenom : b.poste_structure || "").toLowerCase();
      const cmp = valA.localeCompare(valB, "fr");
      return sortDir === "asc" ? cmp : -cmp;
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      await fetch("/api/admin/contributeurs", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingId,
          nom_prenom: form.nom_prenom,
          poste_structure: form.poste_structure || null,
          email: form.email,
          telephone: form.telephone || null,
          idees: form.idees || null,
        }),
      });
    } else {
      await fetch("/api/admin/contributeurs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom_prenom: form.nom_prenom,
          poste_structure: form.poste_structure || null,
          email: form.email,
          telephone: form.telephone || null,
          idees: form.idees || null,
          groupe: config.dbValue,
        }),
      });
    }

    setForm(emptyForm);
    setShowForm(false);
    setEditingId(null);
    fetchContacts();
  };

  const handleEdit = (c: Contact) => {
    setForm({
      nom_prenom: c.nom_prenom,
      poste_structure: c.poste_structure || "",
      email: c.email,
      telephone: c.telephone || "",
      idees: c.idees || "",
    });
    setEditingId(c.id);
    setShowForm(true);
  };

  const handleRemoveFromList = async (contact: Contact) => {
    if (
      !confirm(
        `Retirer ${contact.nom_prenom} de la liste "${config.title}" ?`
      )
    )
      return;

    const newGroupes = (contact.groupes || []).filter(
      (g) => g !== config.dbValue
    );

    await fetch("/api/admin/contributeurs", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: contact.id,
        groupes: newGroupes,
      }),
    });

    fetchContacts();
  };

  const exportCSV = () => {
    const headers = ["Nom et Prénom", "Poste & Structure", "Email"];
    if (showPhone) headers.push("Téléphone");
    if (showIdees) headers.push("Idées / Notes");
    headers.push("Groupes");

    const rows = filtered.map((c) => {
      const row = [
        c.nom_prenom,
        c.poste_structure || "",
        c.email,
      ];
      if (showPhone) row.push(c.telephone || "");
      if (showIdees) row.push(c.idees || "");
      row.push((c.groupes || []).join(", "));
      return row;
    });

    const csv = [headers, ...rows]
      .map((r) => r.map((v) => `"${v.replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${listeSlug}_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const colSpan = 3 + (showPhone ? 1 : 0) + (showIdees ? 1 : 0) + 1 + 1;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className={`w-3 h-3 rounded-full ${config.color}`} />
            <h1 className="text-3xl font-bold text-navy-800">
              {config.title}
            </h1>
          </div>
          <p className="text-navy-700 text-sm">
            {config.description} — {contacts.length} contact
            {contacts.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex gap-3">
          <button onClick={exportCSV} className="btn-outline text-sm">
            Exporter CSV
          </button>
          <button
            onClick={() => {
              setForm(emptyForm);
              setEditingId(null);
              setShowForm(true);
            }}
            className="btn-primary text-sm"
          >
            + Ajouter
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Rechercher par nom, email, poste..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border border-beige-200 rounded-lg text-sm bg-white flex-1"
        />
        <span className="px-3 py-2 text-sm text-navy-600">
          {filtered.length} résultat{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="bg-white rounded-card p-6 border border-beige-200 shadow-sm mb-6">
          <h2 className="text-lg font-bold text-navy-800 mb-4">
            {editingId ? "Modifier" : "Ajouter"} un contact
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy-800 mb-1">
                  Nom et Prénom *
                </label>
                <input
                  required
                  value={form.nom_prenom}
                  onChange={(e) =>
                    setForm({ ...form, nom_prenom: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-beige-200 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-800 mb-1">
                  Email *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-beige-200 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-800 mb-1">
                  Intitulé de poste & Structure
                </label>
                <input
                  value={form.poste_structure}
                  onChange={(e) =>
                    setForm({ ...form, poste_structure: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-beige-200 rounded-lg text-sm"
                />
              </div>
              {showPhone && (
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-1">
                    Téléphone
                  </label>
                  <input
                    value={form.telephone}
                    onChange={(e) =>
                      setForm({ ...form, telephone: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-beige-200 rounded-lg text-sm"
                  />
                </div>
              )}
            </div>

            {showIdees && (
              <div>
                <label className="block text-sm font-medium text-navy-800 mb-1">
                  Idées pour le groupe de recherche
                </label>
                <textarea
                  value={form.idees}
                  onChange={(e) =>
                    setForm({ ...form, idees: e.target.value })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-beige-200 rounded-lg text-sm"
                />
              </div>
            )}

            <div className="flex gap-3">
              <button type="submit" className="btn-primary text-sm">
                {editingId ? "Enregistrer" : "Ajouter"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
                className="btn-outline text-sm"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-card border border-beige-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-beige-50 border-b border-beige-200">
                <th
                  className="text-left px-4 py-3 font-semibold text-navy-800 cursor-pointer hover:bg-beige-100 select-none transition-colors"
                  onClick={() => toggleSort("nom_prenom")}
                >
                  <span className="inline-flex items-center gap-1">
                    Nom et Prénom
                    {sortCol === "nom_prenom" ? (
                      <span className="text-rose-600">{sortDir === "asc" ? "↑" : "↓"}</span>
                    ) : (
                      <span className="text-beige-300">↕</span>
                    )}
                  </span>
                </th>
                <th
                  className="text-left px-4 py-3 font-semibold text-navy-800 cursor-pointer hover:bg-beige-100 select-none transition-colors"
                  onClick={() => toggleSort("poste_structure")}
                >
                  <span className="inline-flex items-center gap-1">
                    Poste & Structure
                    {sortCol === "poste_structure" ? (
                      <span className="text-rose-600">{sortDir === "asc" ? "↑" : "↓"}</span>
                    ) : (
                      <span className="text-beige-300">↕</span>
                    )}
                  </span>
                </th>
                <th className="text-left px-4 py-3 font-semibold text-navy-800">
                  Email
                </th>
                {showPhone && (
                  <th className="text-left px-4 py-3 font-semibold text-navy-800">
                    Téléphone
                  </th>
                )}
                {showIdees && (
                  <th className="text-left px-4 py-3 font-semibold text-navy-800">
                    Idées
                  </th>
                )}
                <th className="text-left px-4 py-3 font-semibold text-navy-800">
                  Groupes
                </th>
                <th className="text-right px-4 py-3 font-semibold text-navy-800">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={colSpan}
                    className="px-4 py-8 text-center text-navy-600"
                  >
                    Chargement...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={colSpan}
                    className="px-4 py-8 text-center text-navy-600"
                  >
                    Aucun contact dans cette liste.
                  </td>
                </tr>
              ) : (
                filtered.map((c) => (
                  <tr
                    key={c.id}
                    className="border-b border-beige-100 hover:bg-beige-50/50"
                  >
                    <td className="px-4 py-3 font-medium text-navy-800">
                      {c.nom_prenom}
                    </td>
                    <td className="px-4 py-3 text-navy-600 max-w-[200px] truncate">
                      {c.poste_structure || "—"}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={`mailto:${c.email}`}
                        className="text-rose-600 hover:underline"
                      >
                        {c.email}
                      </a>
                    </td>
                    {showPhone && (
                      <td className="px-4 py-3 text-navy-600">
                        {c.telephone || "—"}
                      </td>
                    )}
                    {showIdees && (
                      <td className="px-4 py-3 text-navy-600 max-w-[250px]">
                        {c.idees ? (
                          <span
                            className="block truncate cursor-help"
                            title={c.idees}
                          >
                            {c.idees}
                          </span>
                        ) : (
                          "—"
                        )}
                      </td>
                    )}
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {(c.groupes || [])
                          .filter((g) => g !== "newsletter")
                          .map((g) => (
                            <span
                              key={g}
                              className="inline-block px-2 py-0.5 bg-beige-100 text-navy-700 text-xs rounded-full"
                            >
                              {g.replace("gt_", "GT ").replace("cs_", "CS ")}
                            </span>
                          ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleEdit(c)}
                          className="text-navy-600 hover:text-navy-800 text-xs font-medium"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => handleRemoveFromList(c)}
                          className="text-red-500 hover:text-red-700 text-xs font-medium"
                        >
                          Retirer
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mailing list quick copy */}
      {filtered.length > 0 && (
        <div className="mt-6 bg-white rounded-card p-6 border border-beige-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-navy-800 text-sm">
              Mailing list ({filtered.length} emails)
            </h3>
            <button
              onClick={() => {
                const emails = filtered.map((c) => c.email).join("; ");
                navigator.clipboard.writeText(emails);
                alert("Emails copiés !");
              }}
              className="btn-outline text-xs"
            >
              Copier tous les emails
            </button>
          </div>
          <p className="text-xs text-navy-600 break-all leading-relaxed">
            {filtered.map((c) => c.email).join("; ")}
          </p>
        </div>
      )}
    </div>
  );
}
