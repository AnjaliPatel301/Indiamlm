import { useSeo } from '@hooks/useSeo';
import Hero from './sections/Hero';
import ClientLogos from './sections/ClientLogos';
import WhyChooseUs from './sections/WhyChooseUs';
import FeaturedPlans from './sections/FeaturedPlans';
import AIAutomation from './sections/AIAutomation';
import MobileAppShowcase from './sections/MobileAppShowcase';
import AnalyticsShowcase from './sections/AnalyticsShowcase';
import TestimonialsCarousel from './sections/TestimonialsCarousel';
import GlobalReach from './sections/GlobalReach';
import PricingPreview from './sections/PricingPreview';
import FaqSection from './sections/FaqSection';
import DemoCta from './sections/DemoCta';
import Cta from "./cta"

export default function Home() {
  useSeo({
    title: 'India MLM — Enterprise MLM Software & Custom Development',
    description:
      'India MLM builds enterprise-grade Binary, Matrix, Unilevel, Hybrid and custom MLM software for global network marketing companies. Trusted, scalable, secure.',
  });

  return (
    <>
      <Hero />
      <Cta/>
      <ClientLogos />
      <WhyChooseUs />
      <FeaturedPlans />
      <AIAutomation />
      <MobileAppShowcase />
      <AnalyticsShowcase />
      <TestimonialsCarousel />
      <GlobalReach />
      <PricingPreview />
      <FaqSection />
      <DemoCta />
    </>
  );
}
