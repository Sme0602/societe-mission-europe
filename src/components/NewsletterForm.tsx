"use client";

import { useState, type FormEvent } from "react";

export function NewsletterFormInline() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Erreur lors de l'inscription.");
      }
    } catch {
      setStatus("error");
      setMessage("Erreur de connexion.");
    }
  };

  if (status === "success") {
    return (
      <p className="text-sm text-green-400">✓ {message}</p>
    );
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 px-3 py-2 bg-navy-900 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-rose-600"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-bold hover:bg-rose-700 transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "..." : "OK"}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400 mt-1">{message}</p>
      )}
    </form>
  );
}

export function NewsletterFormFull() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Erreur lors de l'inscription.");
      }
    } catch {
      setStatus("error");
      setMessage("Erreur de connexion.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg max-w-md mx-auto">
        <p className="text-green-700 font-medium">✓ {message}</p>
      </div>
    );
  }

  return (
    <div>
      <form
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary whitespace-nowrap disabled:opacity-50"
        >
          {status === "loading" ? "Inscription..." : "S'inscrire"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-center text-sm text-red-600 mt-2">{message}</p>
      )}
    </div>
  );
}
