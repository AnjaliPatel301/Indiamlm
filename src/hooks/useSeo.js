import { useEffect } from 'react';

/**
 * Sets document title and meta description on mount.
 * Avoids pulling in react-helmet — this stack only needs basic per-page
 * title/description control, so a small effect-based hook covers it.
 */
export function useSeo({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}
