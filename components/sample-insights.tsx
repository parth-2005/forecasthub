'use client';

const insights = [
  {
    title: "The 'Stickiness' Disconnect",
    description:
      "A high 'Base Taste' does not guarantee loyalty. Our winning sample dominated the market by engineering a polarizing, high-acid textural matrix.",
    stat: '76',
    substat: 'Stickiness Score',
    color: 'bg-primary',
  },
  {
    title: 'Flavor-Driven Foot Traffic',
    description:
      'True product loyalty overrides convenience. For the winning sensory profile, consumers actively rejected vending machines to seek it out.',
    stat: '58%',
    substat: 'Walk-to-Shop Loyalty',
    color: 'bg-accent',
  },
  {
    title: 'The Manufacturing Penalty',
    description:
      'Severe structural breakdowns and high fryer-oil retention (-1 penalty) cause immediate consumer flight-risk, regardless of seasoning.',
    stat: '-1',
    substat: 'Oiliness Penalty',
    color: 'bg-destructive',
  },
  {
    title: 'Palate Fatigue vs. Cleansing',
    description:
      'Traditional heavy dairy profiles cause rapid palate fatigue, while precise tangy/citrus notes act as a palate cleanser to drive volume consumption.',
    stat: '19%',
    substat: 'Optimal Acid Profile',
    color: 'bg-secondary',
  },
];

export default function SampleInsights() {
  return (
    <section id="insights" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Sample <span className="text-primary">Consumer Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real data from our blind pilot study deconstructing the true drivers of consumer loyalty in the Cream & Onion category.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`group relative card-glass p-8 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Key Finding</p>
                    <h3 className="text-xl font-bold text-foreground">{insight.title}</h3>
                  </div>
                  <div className={`w-16 h-16 rounded-xl ${insight.color} flex flex-col items-center justify-center text-white`}>
                    <span className="text-2xl font-bold">{insight.stat}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{insight.description}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{insight.substat}</p>
              </div>

              {/* Hover background */}
              <div className={`absolute inset-0 ${insight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10 rounded-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Chart visualization */}
        <div className="card-glass p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Channel Substitution Risk (Premium Profile)</h3>
          
          <div className="space-y-6">
            {[
              { label: 'Walk to a nearby shop', percentage: 58, color: 'bg-primary' },
              { label: 'Skip buying altogether', percentage: 33, color: 'bg-secondary' },
              { label: 'Settle for vending machine competitor', percentage: 8, color: 'bg-destructive' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{item.label}</span>
                  <span className="text-accent font-bold">{item.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-700`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
