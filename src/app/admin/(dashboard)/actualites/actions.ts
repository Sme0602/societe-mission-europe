"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function createArticle(formData: FormData) {
  const supabase = createServerSupabaseClient();

  const title = formData.get("title") as string;
  const slug = slugify(title);

  const { error } = await supabase.from("actualites").insert({
    title,
    slug,
    excerpt: formData.get("excerpt") as string,
    content: (formData.get("content") as string) || null,
    category: formData.get("category") as string,
    date: formData.get("date") as string,
    source_url: (formData.get("source_url") as string) || null,
    is_featured: formData.get("is_featured") === "true",
    is_published: formData.get("is_published") === "true",
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/actualites");
  revalidatePath("/admin/actualites");
  redirect("/admin/actualites");
}

export async function updateArticle(id: string, formData: FormData) {
  const supabase = createServerSupabaseClient();

  const title = formData.get("title") as string;
  const slug = slugify(title);

  const { error } = await supabase
    .from("actualites")
    .update({
      title,
      slug,
      excerpt: formData.get("excerpt") as string,
      content: (formData.get("content") as string) || null,
      category: formData.get("category") as string,
      date: formData.get("date") as string,
      source_url: (formData.get("source_url") as string) || null,
      is_featured: formData.get("is_featured") === "true",
      is_published: formData.get("is_published") === "true",
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/actualites");
  revalidatePath("/admin/actualites");
  redirect("/admin/actualites");
}
