/**
 * Generates a minimal placeholder page component for routes not yet
 * built out in full. Replace each of these with a real page file as
 * we work through the page list — the route in App.jsx stays the same.
 */
export default function createPlaceholderPage(title, eyebrow = 'India MLM') {
  return function PlaceholderPage() {
    return (
      <div className="container-app flex min-h-[60vh] flex-col items-center justify-center py-32 text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 text-3xl font-semibold text-ink-100 md:text-4xl">{title}</h1>
        <p className="mt-3 max-w-md text-sm text-ink-400">
          This page is queued to be built in full next, following the same design system as
          the Home page.
        </p>
      </div>
    );
  };
}
