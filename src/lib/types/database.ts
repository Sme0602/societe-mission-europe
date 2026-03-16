export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
  is_active: boolean;
}

export interface Actualite {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string | null;
  category: string;
  date: string;
  source_url: string | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Newsletter {
  id: string;
  title: string;
  description: string | null;
  issue_number: number | null;
  pdf_path: string;
  pdf_url: string;
  published_date: string;
  is_published: boolean;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string | null;
  organisation: string | null;
  sujet: string;
  groupe: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}
