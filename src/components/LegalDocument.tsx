import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getLegalDocument, type LegalDocumentId } from "@/lib/legal-documents";

const legalNavigation: Array<{
  id: LegalDocumentId;
  label: string;
  href: string;
}> = [
  { id: "terms", label: "利用規約", href: "/terms" },
  {
    id: "privacyPolicy",
    label: "プライバシーポリシー",
    href: "/privacy-policy",
  },
];

type LegalDocumentProps = {
  documentId: LegalDocumentId;
};

export default async function LegalDocument({ documentId }: LegalDocumentProps) {
  const legalDocument = await getLegalDocument(documentId);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:py-16">
      <div className="mx-auto w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <header className="mb-8 border-b border-slate-200 pb-6">
          <p className="text-sm font-medium text-sky-700">Legal</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            {legalDocument.title}
          </h1>
          <p className="mt-3 text-sm text-slate-600">{legalDocument.description}</p>
          <p className="mt-2 text-sm text-slate-500">
            最終更新日: {legalDocument.updatedAt}
          </p>
          <nav className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            {legalNavigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                aria-current={documentId === item.id ? "page" : undefined}
                className={`rounded-full border px-4 py-2 transition-colors ${
                  documentId === item.id
                    ? "border-sky-600 bg-sky-600 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900"
            >
              トップへ戻る
            </Link>
          </nav>
        </header>

        <article className="legal-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {legalDocument.markdown}
          </ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
