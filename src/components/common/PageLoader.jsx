/**
 * Full-viewport loading state for React.Suspense fallback during
 * lazy-loaded route transitions. Intentionally minimal — avoids
 * layout shift once the real page mounts.
 */
export default function PageLoader() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-surface-base"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-primary-500" />
        <span className="text-sm text-ink-400">Loading…</span>
      </div>
    </div>
  );
}
