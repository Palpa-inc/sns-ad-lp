import { readFile } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";

export type LegalDocumentId = "terms" | "privacyPolicy";

type LegalDocumentMeta = {
  title: string;
  description: string;
  updatedAt: string;
  fileName: string;
};

const legalDocumentMap: Record<LegalDocumentId, LegalDocumentMeta> = {
  terms: {
    title: "利用規約",
    description: "AdPilot AIの利用条件を定める規約です。",
    updatedAt: "2026年2月3日",
    fileName: "terms.md",
  },
  privacyPolicy: {
    title: "プライバシーポリシー",
    description: "AdPilot AIにおける個人情報の取扱方針です。",
    updatedAt: "2026年2月3日",
    fileName: "privacy-policy.md",
  },
};

const getLegalMarkdown = cache(async (fileName: string) => {
  const filePath = path.join(process.cwd(), "src", "content", "legal", fileName);
  return readFile(filePath, "utf-8");
});

export function getLegalDocumentMeta(documentId: LegalDocumentId) {
  return legalDocumentMap[documentId];
}

export async function getLegalDocument(documentId: LegalDocumentId) {
  const meta = legalDocumentMap[documentId];
  const markdown = await getLegalMarkdown(meta.fileName);

  return {
    ...meta,
    markdown,
  };
}
