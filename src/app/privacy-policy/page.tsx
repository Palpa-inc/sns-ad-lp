import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { getLegalDocumentMeta } from "@/lib/legal-documents";

const privacyMeta = getLegalDocumentMeta("privacyPolicy");

export const metadata: Metadata = {
  title: `${privacyMeta.title} | ラクアド`,
  description: privacyMeta.description,
};

export default function PrivacyPolicyPage() {
  return <LegalDocument documentId="privacyPolicy" />;
}
