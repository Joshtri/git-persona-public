import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { DocMobileNav } from "@/components/docs/doc-mobile-nav";
import { DocNav } from "@/components/docs/doc-sidebar";
import { docNav } from "@/lib/docs/registry";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#doc-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-accent-deep focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main className="flex-1 pt-16">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
            <aside className="hidden lg:block">
              <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto py-10 pr-3">
                <DocNav nav={docNav} />
              </div>
            </aside>
            <div className="min-w-0 py-8 lg:py-10">
              <div className="mb-6 lg:hidden">
                <DocMobileNav nav={docNav} />
              </div>
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
