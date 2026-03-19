"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";

interface Contributor {
  id: string;
  nom_prenom: string;
  poste_structure: string | null;
  groupes: string[];
}

const GT_CONFIG: Record<string, { dbValue: string; title: string; color: string }> = {
  territoire: { dbValue: "gt_territoire", title: "GT Territoire (Hauts-de-France)", color: "bg-jaune-400" },
  national: { dbValue: "gt_national", title: "GT National (France)", color: "bg-rose-600" },
  europe: { dbValue: "gt_europe", title: "GT Europe", color: "bg-blue-600" },
};

export default function ContributeursPubliesPage() {
  const params = useParams();
  const gtSlug = params.gt as string;
  const config = GT_CONFIG[gtSlug];

  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [allContacts, setAllContacts] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [addSearch, setAddSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [newStructure, setNewStructure] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editStructure, setEditStructure] = useState("");

  const fetchContributors = useCallback(async () => {
    if (!config) return;
    setLoading(true);
    const res = await fetch(`/api/admin/contributeurs?groupe=${config.dbValue}`);
    const data = await res.json();
    setContributors(Array.isArray(data) ? data : []);
    setLoading(false);
  }, [config]);

  useEffect(() => {
    fetchContributors();
  }, [fetchContributors]);

  if (!config) {
    return (
      <div className="text-center py-16">
        <p className="text-navy-600">Groupe introuvable.</p>
      </div>
    );
  }

  const filtered = contributors.filter((c) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      c.nom_prenom.toLowerCase().includes(q) ||
      (c.poste_structure || "").toLowerCase().includes(q)
    );
  });

  const handleRemove = async (contributor: Contributor) => {
    if (!confirm(`Retirer ${contributor.nom_prenom} de la liste publiée ?`)) return;
    const newGroupes = contributor.groupes.filter((g) => g !== config.dbValue);
    await fetch("/api/admin/contributeurs", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: contributor.id, groupes: newGroupes }),
    });
    fetchContributors();
  };

  const handleSearchExisting = async () => {
    if (!addSearch.trim()) return;
    const res = await fetch(
      `/api/admin/contributeurs?search=${encodeURIComponent(addSearch)}&exclude_groupe=${config.dbValue}`
    );
    const data = await res.json();
    setAllContacts(Array.isArray(data) ? data : []);
  };

  const handleAddExisting = async (contact: Contributor) => {
    const newGroupes = [...(contact.groupes || []), config.dbValue];
    await fetch("/api/admin/contributeurs", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: contact.id, groupes: newGroupes }),
    });
    setAllContacts((prev) => prev.filter((c) => c.id !== contact.id));
    fetchContributors();
  };

  const handleAddNew = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    await fetch("/api/admin/contributeurs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom_prenom: newName.trim(),
        poste_structure: newStructure.trim() || null,
        email: newEmail.trim() || null,
        groupes: [config.dbValue],
      }),
    });
    setNewName("");
    setNewStructure("");
    setNewEmail("");
    fetchContributors();
  };

  const startEdit = (c: Contributor) => {
    setEditingId(c.id);
    setEditName(c.nom_prenom);
    setEditStructure(c.poste_structure || "");
  };

  const handleSaveEdit = async () => {
    if (!editingId || !editName.trim()) return;
    await fetch("/api/admin/contributeurs", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: editingId,
        nom_prenom: editName.trim(),
        poste_structure: editStructure.trim() || null,
      }),
    });
    setEditingId(null);
    fetchContributors();
  };

  const exportCSV = () => {
    const header = "Nom,Structure\n";
    const rows = filtered
      .map((c) => `"${c.nom_prenom}","${c.poste_structure || ""}"`)
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `participants-${gtSlug}.csv`;
    a.click();
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className={`w-3 h-3 rounded-full ${config.color}`} />
            <h1 className="text-2xl font-bold text-navy-800">{config.title}</h1>
          </div>
          <p className="text-navy-600 text-sm">
            Noms publiés sur le site — <strong>{contributors.length}</strong> participant{contributors.length > 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex gap-2">
          <button onClick={exportCSV} className="px-4 py-2 bg-white border border-beige-200 rounded-lg text-sm font-medium text-navy-800 hover:bg-beige-50 transition-colors">
            Exporter CSV
          </button>
          <button
            onClick={() => setShowAdd(!showAdd)}
            className="px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-bold hover:bg-rose-700 transition-colors"
          >
            {showAdd ? "Fermer" : "+ Ajouter"}
          </button>
        </div>
      </div>

      {/* Add Panel */}
      {showAdd && (
        <div className="bg-white rounded-card border border-beige-200 shadow-sm p-6 mb-6 space-y-6">
          {/* Search existing */}
          <div>
            <h3 className="font-bold text-navy-800 text-sm mb-3">Ajouter un contact existant</h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={addSearch}
                onChange={(e) => setAddSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearchExisting()}
                placeholder="Rechercher par nom..."
                className="flex-1 px-3 py-2 border border-beige-200 rounded-lg text-sm focus:outline-none focus:border-rose-600"
              />
              <button
                onClick={handleSearchExisting}
                className="px-4 py-2 bg-navy-800 text-white rounded-lg text-sm font-medium hover:bg-navy-700 transition-colors"
              >
                Chercher
              </button>
            </div>
            {allContacts.length > 0 && (
              <ul className="mt-3 border border-beige-200 rounded-lg divide-y divide-beige-100 max-h-48 overflow-y-auto">
                {allContacts.map((c) => (
                  <li key={c.id} className="flex items-center justify-between px-4 py-2.5 hover:bg-beige-50">
                    <div>
                      <span className="text-sm font-medium text-navy-800">{c.nom_prenom}</span>
                      {c.poste_structure && (
                        <span className="text-xs text-navy-600 ml-2">— {c.poste_structure}</span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAddExisting(c)}
                      className="text-xs px-3 py-1 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
                    >
                      Ajouter
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Add new */}
          <div className="border-t border-beige-200 pt-6">
            <h3 className="font-bold text-navy-800 text-sm mb-3">Ou créer un nouveau participant</h3>
            <form onSubmit={handleAddNew} className="grid sm:grid-cols-3 gap-3">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Nom et prénom *"
                required
                className="px-3 py-2 border border-beige-200 rounded-lg text-sm focus:outline-none focus:border-rose-600"
              />
              <input
                type="text"
                value={newStructure}
                onChange={(e) => setNewStructure(e.target.value)}
                placeholder="Poste / Structure"
                className="px-3 py-2 border border-beige-200 rounded-lg text-sm focus:outline-none focus:border-rose-600"
              />
              <div className="flex gap-2">
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 px-3 py-2 border border-beige-200 rounded-lg text-sm focus:outline-none focus:border-rose-600"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-bold hover:bg-rose-700 transition-colors whitespace-nowrap"
                >
                  Créer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Search + List */}
      <div className="bg-white rounded-card border border-beige-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-beige-200 flex items-center gap-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher par nom, structure..."
            className="flex-1 px-3 py-2 border border-beige-200 rounded-lg text-sm focus:outline-none focus:border-rose-600"
          />
          <span className="text-sm text-navy-600">{filtered.length} résultat{filtered.length > 1 ? "s" : ""}</span>
        </div>

        {loading ? (
          <div className="p-8 text-center text-navy-600">Chargement...</div>
        ) : filtered.length === 0 ? (
          <div className="p-8 text-center text-navy-600">Aucun participant trouvé.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-beige-50 border-b border-beige-200">
                <th className="text-left px-4 py-3 font-semibold text-navy-800">Nom</th>
                <th className="text-left px-4 py-3 font-semibold text-navy-800">Structure</th>
                <th className="text-right px-4 py-3 font-semibold text-navy-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} className="border-b border-beige-100 hover:bg-beige-50">
                  {editingId === c.id ? (
                    <>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="w-full px-2 py-1.5 border border-beige-200 rounded text-sm focus:outline-none focus:border-rose-600"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={editStructure}
                          onChange={(e) => setEditStructure(e.target.value)}
                          className="w-full px-2 py-1.5 border border-beige-200 rounded text-sm focus:outline-none focus:border-rose-600"
                        />
                      </td>
                      <td className="px-4 py-2 text-right space-x-2">
                        <button
                          onClick={handleSaveEdit}
                          className="text-xs px-3 py-1 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
                        >
                          Sauver
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="text-xs px-3 py-1 bg-beige-100 text-navy-700 rounded-full font-medium hover:bg-beige-200 transition-colors"
                        >
                          Annuler
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-4 py-3 text-navy-800 font-medium">{c.nom_prenom}</td>
                      <td className="px-4 py-3 text-navy-600">{c.poste_structure || "—"}</td>
                      <td className="px-4 py-3 text-right space-x-2">
                        <button
                          onClick={() => startEdit(c)}
                          className="text-xs px-3 py-1 bg-beige-100 text-navy-700 rounded-full font-medium hover:bg-beige-200 transition-colors"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => handleRemove(c)}
                          className="text-xs px-3 py-1 bg-red-50 text-red-600 rounded-full font-medium hover:bg-red-100 transition-colors"
                        >
                          Retirer
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
