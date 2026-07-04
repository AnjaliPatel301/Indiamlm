import { Bot, Zap, ShieldAlert, TrendingUp, Check } from 'lucide-react';
import Reveal from '@components/common/Reveal';

const aiCapabilities = [
  {
    icon: Zap,
    title: 'Instant payout processing',
    description: 'Commission runs that took hours now complete in minutes, at any network size.',
  },
  {
    icon: ShieldAlert,
    title: 'Automated fraud detection',
    description: 'AI flags suspicious placement patterns and duplicate accounts before payout.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive growth forecasting',
    description: 'Model network growth and commission liability months ahead of time.',
  },
];

export default function AIAutomation() {
  return (
    <section className="">
      {/* <div className="container-app">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">AI Automation</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink-100 md:text-4xl">
              Let AI run the math. Your team runs the business.
            </h2>
            <p className="mt-4 text-ink-400">
              Apex AI sits underneath your compensation engine — watching every transaction,
              catching anomalies, and forecasting growth so your team can focus on distributors,
              not spreadsheets.
            </p>

            <ul className="mt-8 space-y-5">
              {aiCapabilities.map((cap) => (
                <li key={cap.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500">
                    <cap.icon size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-medium text-ink-100">{cap.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-400">{cap.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative rounded-2xl border border-white/[0.08] bg-surface-card p-6 shadow-premium">
              <div className="flex items-center gap-2 border-b border-white/[0.06] pb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-gradient text-white">
                  <Bot size={16} />
                </span>
                <p className="text-sm font-medium text-ink-100">Apex AI — Payout Engine</p>
                <span className="ml-auto flex items-center gap-1.5 rounded-full bg-primary-500/10 px-2.5 py-1 text-xs text-primary-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500 animate-pulse-glow" />
                  Live
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { label: 'Validating 84,221 transactions', status: 'done' },
                  { label: 'Scanning for placement anomalies', status: 'done' },
                  { label: 'Calculating binary pair bonuses', status: 'active' },
                  { label: 'Generating commission statements', status: 'pending' },
                ].map((step) => (
                  <div
                    key={step.label}
                    className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-3"
                  >
                    {step.status === 'done' && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-white">
                        <Check size={12} strokeWidth={3} />
                      </span>
                    )}
                    {step.status === 'active' && (
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/10 border-t-primary-500" />
                    )}
                    {step.status === 'pending' && (
                      <span className="h-5 w-5 rounded-full border-2 border-white/10" />
                    )}
                    <span
                      className={`text-sm ${
                        step.status === 'pending' ? 'text-ink-600' : 'text-ink-200'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl bg-primary-500/10 px-4 py-3 text-center">
                <p className="text-xs text-ink-400">Estimated time saved this run</p>
                <p className="mt-1 text-lg font-semibold text-primary-400">4.2 hours</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div> */}
    </section>
  );
}
