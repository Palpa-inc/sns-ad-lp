import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { getLegalDocumentMeta } from "@/lib/legal-documents";

const termsMeta = getLegalDocumentMeta("terms");

export const metadata: Metadata = {
  title: `${termsMeta.title} | ラクアド`,
  description: termsMeta.description,
};

export default function TermsPage() {
  return <LegalDocument documentId="terms" />;
}
