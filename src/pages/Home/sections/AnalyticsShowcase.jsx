import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';
import Reveal from '@components/common/Reveal';

const chartBars = [38, 52, 44, 61, 58, 72, 68, 80, 75, 88, 84, 95];

export default function AnalyticsShowcase() {
  return (
    <section className="section-pad bg-gray-200 ">
      <div className="container-app">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Analytics</p>
          <h2 className="mt-3 text-3xl font-semibold text-black md:text-4xl">
            Every metric that matters, in one dashboard
          </h2>
          <p className="mt-4 text-black">
            Track sales, commissions, and network growth in real time — no exports, no waiting
            for end-of-month reports.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 rounded-2xl border border-white/[0.08] bg-surface-card p-6 shadow-premium md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-5">
            <div className="flex items-center gap-2">
              <BarChart3 size={18} className="text-primary-500" />
              <p className="text-sm font-medium text-white">Network Performance — Last 12 Months</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-primary-400">
              <TrendingUp size={14} />
              +24.6% growth
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1fr_280px]">
            <div className="flex h-56 items-end gap-2">
              {chartBars.map((height, i) => (
                <div
                  key={i}
                  className="group relative flex-1 rounded-t-md bg-gradient-to-t from-primary-600/40 to-primary-500 transition-all duration-500 hover:to-primary-400"
                  style={{ height: `${height}%` }}
                >
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-surface-base px-2 py-1 text-[10px] text-ink-200 opacity-0 transition-opacity group-hover:opacity-100">
                    {height * 1240}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="rounded-xl bg-white/[0.04] p-4">
                <div className="flex items-center gap-2 text-white">
                  <DollarSign size={14} />
                  <p className="text-xs">Total commissions paid</p>
                </div>
                <p className="mt-2 text-xl font-semibold text-white">$4.82M</p>
              </div>
              <div className="rounded-xl bg-white/[0.04] p-4">
                <div className="flex items-center gap-2 text-ink-400">
                  <Users size={14} />
                  <p className="text-xs">Active distributors</p>
                </div>
                <p className="mt-2 text-xl font-semibold text-white">214,820</p>
              </div>
              <div className="rounded-xl bg-white/[0.04] p-4">
                <div className="flex items-center gap-2 text-ink-400">
                  <TrendingUp size={14} />
                  <p className="text-xs">New sign-ups (30d)</p>
                </div>
                <p className="mt-2 text-xl font-semibold text-white">9,104</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
