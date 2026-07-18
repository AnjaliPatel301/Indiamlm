import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout"
import PageLoader from './components/common/PageLoader';
import ErrorBoundary from './components/common/ErrorBoundary';
import Demo from "./components/Demo/page"
import LiveDemo from "./pages/live_demo/page.jsx"
import createPlaceholderPage from './utils/createPlaceholderPage'
import BinaryCalculator from './BinaryCalculator.jsx'
import Calculator from "./Calculator/page.jsx"
import Contact from "./pages/Contact/page.jsx"
import Features from "./pages/Features/page.jsx"
import About from './pages/About/page.jsx';
import Plans from "./pages/MLMPlans/page.jsx"
import Blog from "./pages/Blog/page.jsx"
import MLMPlans from "./pages/MLMPlans/page.jsx"
import Services from "./pages/Services/page.jsx"
import Sitemap from "./pages/sitemap.jsx"
import Term from "./pages/Terms/page.jsx"
import Privacy_policy from "./pages/Privacy-policy/page.jsx"
import Stair_step_Breakaway_Plan from "./pages/Matrix-Plans-mlm/page.jsx"
import monoline_plan from  "./pages/monoline-plan/page.jsx"
import Donation_Plan from "./pages/Donation-Plan/page.jsx"
import Crowdfunding_Plan from "./pages/Crowdfunding-Plan/page.jsx"
import Investment_plan from "./pages/Investment-plan/page.jsx"
import Board_plan from "./pages/Board-plan/page.jsx"
import Hybrid_plan from "./pages/Hybrid-plan/page.jsx"
import Generation_plan from "./pages/Generation-plan/page.jsx"
import Forex_plan from "./pages/Forex-plan/page.jsx" 
import Unilevel_Plans_mlm from "./pages/Unilevel-Plans-mlm/page.jsx"
import Repurchase from "./pages/Repurchase/page.jsx"
import Trustedby from "./pages/Home/sections/Trastedby.jsx"
import AboutForm from "./pages/Home/sections/Aboutform.jsx"
import Matrix_Plans_mlm from './pages/Matrix-Plans-mlm/page.jsx'
import DecentralizedPlanPage from './pages/Decentralized-plan/page.jsx';
//import Investment_plan from "./pages/Investment-plan/page.jsx"
import Main from "./pages/About/main.jsx"

// Fully built pages are imported eagerly-lazy (still code-split, just already real).
const Home = lazy(() => import('@pages/Home'));

// Pages queued for the next build passes — kept as lightweight placeholders
// so every route in the sitemap resolves to something real today.
//const About = lazy(() => Promise.resolve({ default: createPlaceholderPage('About Us') }));
//const Features = lazy(() => Promise.resolve({ default: createPlaceholderPage('Features') }));
const Login = lazy(() => import("@pages/Login"));
const isLoggedIn = localStorage.getItem("token");
//const MLMPlans = lazy(() => Promise.resolve({ default: createPlaceholderPage('MLM Plans') }));
const PlanDetail = lazy(() =>
  Promise.resolve({ default: createPlaceholderPage('Plan Detail') })
);
//const Services = lazy(() => Promise.resolve({ default: createPlaceholderPage('Services') }));
const Pricing = lazy(() => Promise.resolve({ default: createPlaceholderPage('Pricing') }));
const Resources = lazy(() => Promise.resolve({ default: createPlaceholderPage('Resources') }));
//const Blog = lazy(() => Promise.resolve({ default: createPlaceholderPage('Blog') }));
const FAQ = lazy(() => Promise.resolve({ default: createPlaceholderPage('FAQ') }));
//const Contact = lazy(() => Promise.resolve({ default: createPlaceholderPage('Contact Us') }));
//const Demo = lazy(() => Promise.resolve({ default: createPlaceholderPage('Book Free Demo') }));
const Testimonials = lazy(() =>
  Promise.resolve({ default: createPlaceholderPage('Client Testimonials') })
);
const CaseStudies = lazy(() =>
  Promise.resolve({ default: createPlaceholderPage('Case Studies') })
);
const Careers = lazy(() => Promise.resolve({ default: createPlaceholderPage('Careers') }));
//const Privacy = lazy(() => Promise.resolve({ default: createPlaceholderPage('Privacy Policy') }));
const Terms = lazy(() =>
  Promise.resolve({ default: createPlaceholderPage('Terms & Conditions') })
);
const NotFound = lazy(() => Promise.resolve({ default: createPlaceholderPage('404 — Page Not Found') }));

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/about/:section" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/features/:section" element={<Features />} />
            <Route path="/Plans" element={<Plans />} />
             <Route path="/MLMPlans" element={<MLMPlans />} />
            <Route path="/MLMPlans/:planSlug" element={<PlanDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:section" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/live_demo" element={<LiveDemo />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:section" element={<Resources />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="Stair-step-Breakaway-Plan" element={<Stair_step_Breakaway_Plan />} />
            <Route path="Board-plan" element={<Board_plan />} />
            <Route path="Crowdfunding-Plan" element={<Crowdfunding_Plan />} />
            <Route path="Donation-Plan" element={<Donation_Plan />} />
            <Route path="DecentralizedPlanPage" element={<DecentralizedPlanPage />} />
 <Route path="trastedby" element={< Trustedby/>} />
            <Route path="aboutform" element={<AboutForm />} />

            <Route path="/Forex-plan" element={<Forex_plan/>} />
            <Route path="/Generation-plan" element={<Generation_plan />} />
            <Route path="/Hybrid-plan" element={<Hybrid_plan />} />
            <Route path="/Repurchase" element={<Repurchase />} />
            <Route path="/Investment-plan" element={<Investment_plan />} />

            <Route path="/Matrix-Plans-mlm " element={<Matrix_Plans_mlm />} />
            <Route path="/monoline-plan" element={<monoline_plan/>} />
            <Route path="/Stair-step-Breakaway-Plan" element={<Stair_step_Breakaway_Plan />} />
            <Route path="/Unilevel-Plans-mlm" element={<Unilevel_Plans_mlm />} />

        <Route path="main" element={<Main/>}/>
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="/Sitemap" element={<Sitemap />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/Demo" element={<Demo />} />
         <Route path="/BinaryCalculator" element={<BinaryCalculator />}/>
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/Privacy_policy" element={<Privacy_policy  />} />
            <Route path="/Term" element={<Term />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/Calculator' element={<Calculator/>}/>
          </Route>  
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
