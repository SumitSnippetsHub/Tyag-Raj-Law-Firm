import { Link, type LinkComponentProps } from "@tanstack/react-router";

type AppLinkProps = Omit<LinkComponentProps<"a">, "to"> & { to: string };

/**
 * Thin wrapper around <Link> that accepts already-interpolated locale paths
 * (e.g. `/en/about`) instead of the generated route-id form.
 */
export function AppLink({ to, ...rest }: AppLinkProps) {
  return <Link to={to as never} {...(rest as LinkComponentProps<"a">)} />;
}
