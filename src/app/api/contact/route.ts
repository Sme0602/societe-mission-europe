import { NextResponse } from "next/server";
import Mailjet from "node-mailjet";

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

    const gtLine = groupeTravail ? `\nGroupe de travail : ${GT_LABELS[groupeTravail] || groupeTravail}` : "";

    const emailBody = `Nouvelle demande de contribution — Société à Mission Europe

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Prénom : ${prenom}
Nom : ${nom}
Email : ${email}
Organisation : ${organisation || "Non renseigné"}
Domaine d'expertise : ${expertise || "Non renseigné"}

Intérêts : ${interestsList}${gtLine}

Message :
${message || "(Aucun message)"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ce message a été envoyé via le formulaire de contact du site societe-mission-europe.`;

    // Send email via Mailjet
    const mailjet = Mailjet.apiConnect(
      process.env.MAILJET_API_KEY!,
      process.env.MAILJET_SECRET_KEY!
    );

    const result = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "sarah.vandenbroucke@uphf.fr",
            Name: "Société à Mission Europe",
          },
          To: [
            {
              Email: "sarah.vandenbroucke@uphf.fr",
              Name: "Sarah Vandenbroucke",
            },
          ],
          ReplyTo: {
            Email: email,
            Name: `${prenom} ${nom}`,
          },
          Subject: `[SME] Nouvelle demande : ${prenom} ${nom} — ${interestsList}`,
          TextPart: emailBody,
        },
      ],
    });

    const response = result.body as { Messages: Array<{ Status: string }> };
    if (response.Messages[0].Status !== "success") {
      console.error("Mailjet error:", JSON.stringify(response));
      return NextResponse.json(
        { error: "Erreur lors de l'envoi." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message envoyé avec succès." },
      { status: 201 }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("Contact API error:", errorMessage, err);
    return NextResponse.json(
      { error: `Erreur serveur: ${errorMessage}` },
      { status: 500 }
    );
  }
}
