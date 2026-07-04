import { useEffect } from 'react';

/**
 * Locks document scroll while `isLocked` is true.
 * Used by MobileMenu drawer and modals to prevent background scroll.
 */
export function useLockBodyScroll(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]);
}
