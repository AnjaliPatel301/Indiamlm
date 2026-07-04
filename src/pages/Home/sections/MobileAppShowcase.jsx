import { Smartphone, Bell, Wallet, Users } from 'lucide-react';
import Reveal from '@components/common/Reveal';

export default function MobileAppShowcase() {
  return (
    <section className="section-pad overflow-hidden bg-white ">
      <div className="container-app">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 flex justify-center lg:order-1">
            {/* CSS-built phone mockup — no image asset pipeline available here */}
            <div className="relative h-[480px] w-[240px] rounded-[2.5rem] border-4 border-white/10 bg-surface-card p-3 shadow-premium">
              <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/40" />
              <div className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-surface-base to-surface-raised px-4 pt-8">
                <p className="text-xs text-black">Welcome back</p>
                <p className="text-lg font-semibold text-black">Jordan Lee</p>

                <div className="mt-5 rounded-2xl bg-orange-gradient p-4">
                  <p className="text-xs text-white">This month's earnings</p>
                  <p className="mt-1 text-2xl font-semibold text-white">$12,480</p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/[0.05] p-3">
                    <Users size={15} className="text-orages-500" />
                    <p className="mt-2 text-sm font-semibold text-white">1,204</p>
                    <p className="text-[10px] text-white">Team size</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.05] p-3">
                    <Wallet size={15} className="text-orages-500" />
                    <p className="mt-2 text-sm font-semibold text-white">$842</p>
                    <p className="text-[10px] text-white">Pending payout</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-xl bg-white/[0.05] p-3">
                  <Bell size={15} className="text-orages-500" />
                  <p className="text-xs text-white">3 new team members joined today</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="eyebrow">Mobile App</p>
            <h2 className="mt-3 text-3xl font-semibold text-black md:text-4xl">
              A branded app, in every distributor's pocket
            </h2>
            <p className="mt-4 text-black">
              Native iOS and Android apps, branded to your company, give distributors real-time
              visibility into earnings, team growth, and orders — no desktop required.
            </p>

            <ul className="mt-7 space-y-4">
              {[
                'Real-time commission tracking',
                'Genealogy and team management',
                'Push notifications for rank advancement',
                'In-app ordering and inventory',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-black">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orages-500/15 text-orages-500">
                    <Smartphone size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
