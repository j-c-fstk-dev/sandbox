import DonateForm from "@/components/DonateForm";

export default function DonatePage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:py-16">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <header className="text-center mb-10 sm:mb-14 animate-fade-in">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-primary-green mb-4 leading-tight">
            Support Our Mission
          </h1>
          <p className="text-base sm:text-lg text-neutral-dark-gray leading-relaxed max-w-prose mx-auto">
            Your contribution fuels our monthly actions for a healthier planet.
          </p>
        </header>

        {/* Donation widget */}
        <div className="mb-12 sm:mb-16 animate-slide-up">
          <DonateForm />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-neutral-200" />
          <span className="text-xl">🌍</span>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        {/* Supporting copy */}
        <section className="animate-slide-up space-y-10 text-neutral-dark-gray">

          {/* Lead sentence */}
          <p className="text-lg sm:text-xl font-semibold text-neutral-800 leading-snug">
            Progress for our planet is built by consistent action.
          </p>

          {/* Feature blocks */}
          <div className="space-y-8">

            <div className="flex gap-4">
              <span className="text-2xl mt-0.5 shrink-0">🗓️</span>
              <div>
                <h3 className="font-semibold text-neutral-800 mb-1">Every 22nd, worldwide</h3>
                <p className="text-sm sm:text-base leading-7 text-neutral-600">
                  Monthly Earth Day mobilizes people across 100+ communities to take real
                  environmental action — cleanups, tree planting, and local projects that
                  create measurable change, one dedicated day at a time.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl mt-0.5 shrink-0">💚</span>
              <div>
                <h3 className="font-semibold text-neutral-800 mb-1">100% goes to the mission</h3>
                <p className="text-sm sm:text-base leading-7 text-neutral-600">
                  Your tax-deductible gift powers monthly actions, supports community
                  organizers, and tracks real results — trees planted, litter removed —
                  all year long, not just once a year.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl mt-0.5 shrink-0">🌱</span>
              <div>
                <h3 className="font-semibold text-neutral-800 mb-1">Building lasting habits</h3>
                <p className="text-sm sm:text-base leading-7 text-neutral-600">
                  This is how we protect what matters most — not through one-off events,
                  but through consistent, community-driven momentum that grows every month.
                </p>
              </div>
            </div>

          </div>

          {/* CTA line */}
          <div className="pt-4 border-t border-neutral-200 text-center">
          <p className="text-xl sm:text-2xl font-bold text-primary-green">
            Join the movement. Give monthly impact.
          </p>
        </div>

        </section>
      </div>
    </div>
  );
}