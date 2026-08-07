import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { isLocale } from "@/lib/site";

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) throw notFound();
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Required: nested locale routes render here. */}
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}