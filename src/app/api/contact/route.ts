import { NextResponse } from "next/server";
import { Resend } from "resend";

const INTEREST_LABELS: Record<string, string> = {
  partenaire: "Devenir partenaire du projet",
  "groupe-travail": "Rejoindre un groupe de travail",
  informe: "Rester informé des actualités",
};

const GT_LABELS: Record<string, string> = {
  europe: "Europe",
  national: "National",
  territorial: "Territorial",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, prenom, email, organisation, interests, groupeTravail, expertise, message } = body;

    // Validation
    if (!nom || !prenom || !email || !interests?.length) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    // Build email content
    const interestsList = (interests as string[])
      .map((i) => INTEREST_LABELS[i] || i)
      .join(", ");

    const gtLine = groupeTravail ? `Groupe de travail : ${GT_LABELS[groupeTravail] || groupeTravail}` : "";

    const emailBody = `
Nouvelle demande de contribution — Société à Mission Europe

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Prénom : ${prenom}
Nom : ${nom}
Email : ${email}
Organisation : ${organisation || "Non renseigné"}
Domaine d'expertise : ${expertise || "Non renseigné"}

Intérêts : ${interestsList}
${gtLine}

Message :
${message || "(Aucun message)"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ce message a été envoyé via le formulaire de contact du site societe-mission-europe.
`.trim();

    // Send email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Société à Mission Europe <onboarding@resend.dev>",
      to: ["sarah.vandenbroucke@uphf.fr"],
      replyTo: email,
      subject: `[SME] Nouvelle demande : ${prenom} ${nom} — ${interestsList}`,
      text: emailBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message envoyé avec succès." },
      { status: 201 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Erreur serveur." },
      { status: 500 }
    );
  }
}
