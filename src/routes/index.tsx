import { createFileRoute, redirect } from "@tanstack/react-router";

// The site is locale-prefixed (/en, /hi). "/" always resolves to English.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/$locale", params: { locale: "en" } });
  },
});
