import { Outlet } from 'react-router-dom';
import Navbar from '@components/navbar/Navbar';
import Footer from '@components/footer/Footer';

/**
 * Shared shell for all marketing pages: sticky navbar + page content + footer.
 * <Outlet /> renders whichever route matched in App.jsx.
 */
export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-base">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
