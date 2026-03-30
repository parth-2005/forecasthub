'use client';

const solutions = [
  {
    title: 'Campus Ambassador Network',
    description: 'Real people in real environments collecting authentic behavioral data on demand',
    color: 'from-primary',
  },
  {
    title: 'Real-Time Data Collection',
    description: 'Instant feedback loops from diverse demographics across universities nationwide',
    color: 'from-accent',
  },
  {
    title: 'Robust Proprietary Analytics Algorithm',
    description: 'Raw data automatically validated, cleaned, and transformed into actionable insights',
    color: 'from-secondary',
  },
];

export default function Solution() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Our <span className="gradient-text">Solution</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Powered by real students in real environments, delivering consumer insights at the speed of business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative card-glass p-8 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-foreground">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
            </div>
          ))}
        </div>

        {/* Visual representation of data flow */}
        <div className="card-glass p-12 rounded-2xl border border-white/20 overflow-x-auto">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center md:min-w-max">
              {/* Campus Ambassadors */}
              <div className="text-center group flex-shrink-0">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
            👥
          </div>
          <h4 className="font-bold text-foreground mb-2">Campus Ambassadors</h4>
          <p className="text-sm text-muted-foreground">Collect real-world data</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center flex-shrink-0">
          <div className="text-4xl text-primary/50">→</div>
              </div>

              {/* Data Processing */}
              <div className="text-center group flex-shrink-0">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/40 to-accent/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
            ⚙️
          </div>
          <h4 className="font-bold text-foreground mb-2">Data Processing</h4>
          <p className="text-sm text-muted-foreground">Validate & clean insights</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center flex-shrink-0">
          <div className="text-4xl text-accent/50">→</div>
              </div>

              {/* Actionable Insights */}
              <div className="text-center group flex-shrink-0">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/40 to-secondary/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
            📈
          </div>
          <h4 className="font-bold text-foreground mb-2">Actionable Insights</h4>
          <p className="text-sm text-muted-foreground">Drive product decisions</p>
              </div>
            </div>

            {/* Timeline on mobile */}
            <div className="md:hidden space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary">Collection</span>
                <div className="flex-1 h-1 mx-2 bg-primary/30 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-accent">Processing</span>
                <div className="flex-1 h-1 mx-2 bg-accent/30 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-secondary">Insights</span>
                <div className="flex-1 h-1 mx-2 bg-secondary/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
