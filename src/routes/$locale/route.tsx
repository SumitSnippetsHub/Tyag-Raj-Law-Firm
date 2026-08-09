import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuickActions } from "@/components/QuickActions";
import { Watermark } from "@/components/Watermark";
import { isLocale } from "@/lib/site";

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) throw notFound();
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background pb-16 sm:pb-0">
      {/* Logo watermark behind every page. */}
      <Watermark />
      <Navbar />
      <main className="relative z-10 flex-1">
        {/* Required: nested locale routes render here. */}
        <Outlet />
      </main>
      <Footer />
      <QuickActions />
    </div>
  );
}
