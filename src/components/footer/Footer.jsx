import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ShieldCheck, Award, Lock } from 'lucide-react';

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Case Studies', path: '/case-studies' },
      { label: 'Testimonials', path: '/testimonials' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    heading: 'MLM Plans',
    links: [
      { label: 'Binary Plan', path: '/mlm-plans/binary' },
      { label: 'Matrix Plan', path: '/mlm-plans/matrix' },
      { label: 'Unilevel Plan', path: '/mlm-plans/unilevel' },
      { label: 'Hybrid Plan', path: '/mlm-plans/hybrid' },
      { label: 'View All Plans', path: '/mlm-plans' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Custom MLM Development', path: '/services/custom-development' },
      { label: 'Mobile App Development', path: '/services/mobile-development' },
      { label: 'Migration Services', path: '/services/migration' },
      { label: 'White Label Solutions', path: '/services/white-label' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', path: '/blog' },
      { label: 'Knowledge Base', path: '/resources/knowledge-base' },
      { label: 'MLM Calculator', path: '/Calculator' },
      { label: 'Documentation', path: '/resources/docs' },
       { label: 'Sitemap', path: '/sitemap' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', path: '/Privacy_policy' },
      { label: 'Terms & Conditions', path: '/Term' },
    ],
  },
];

const trustBadges = [
  { icon: ShieldCheck, label: 'ISO 27001 Certified' },
  { icon: Lock, label: 'SOC 2 Compliant' },
  { icon: Award, label: 'GDPR Ready' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-white">
      <div className="container-app section-pad">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-ink-100">
             <img src="/mlm_logo.png" className='w-20' alt="" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              Enterprise MLM software trusted by network marketing companies in 40+ countries.
            </p>
            <div className="mt-5 space-y-2 text-sm text-ink-400">
              <a href="mailto:hello@apexmlm.com" className="flex items-center gap-2 hover:text-primary-400">
                <Mail size={15} /> info@tecai.in
              </a>
              <a href="tel:+18005551234" className="flex items-center gap-2 hover:text-primary-400">
                <Phone size={15} /> +91 (702) 403-1779  
              </a>
              <p className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" /> Indore (M.P.) , India
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-sm font-semibold text-orange-500">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-ink-400 transition-colors hover:text-primary-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        

        <div className="mt-10 flex flex-col items-center  justify-between  border-t border-white/[0.06]  md:flex-row">
        
          <p className="text-xs text-ink-600">
            © {new Date().getFullYear()} India MLM Software. All rights reserved.
          </p>
         <div className='flex justify-between gap-1'>
            <a href="https://tecai.in" target="_blank" rel="noopener noreferrer" className="text-xs text-ink-600 flex items-center gap-2 hover:text-primary-400">
              Developed by Tecai <img src="/tecai.png" className='w-14' alt="Tecai logo" />
            </a>
         </div>
        </div>
      </div>
    </footer>
  );
}
