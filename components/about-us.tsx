'use client';

export default function AboutUs() {
  const team = [
    {
      name: 'Lakshya Saraf',
      role: 'Co-Founder',
      bio: 'Leads development of our proprietary sensory methodology, runs double-blind pilot studies, and converts raw response signatures into decision-grade FMCG strategy. Works cross-functionally with the full product and infrastructure stack.',
    },
    {
      name: 'Parth Panot',
      role: 'Co-Founder',
      bio: 'Architects platform infrastructure, builds Stickiness Score computation pipelines, and scales our decentralized data network. Collaborates directly on study design, analytics interpretation, and client-facing reporting.',
    },
  ];

  const values = [
    {
      title: 'Consumer-Centric',
      description: 'We believe real consumer voices drive innovation and growth for brands.',
    },
    {
      title: 'Transparency',
      description: 'Complete visibility into data collection, processing, and insights generation.',
    },
    {
      title: 'Excellence',
      description: 'Highest standards in data quality, accuracy, and actionability.',
    },
    {
      title: 'Trust',
      description: 'Building long-term partnerships through reliable, ethical practices.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are a lean, cross-functional founding team building an unnamed sensory intelligence
            platform ahead of official brand launch. We engineered a proprietary framework to strip
            away Brand Equity Bias and compute true sensory Stickiness, validated through a rigorous
            independent pilot across four market-leading Cream & Onion samples with 44 university participants.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="card-glass p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To build the digital infrastructure that connects FMCG R&D directly with unbiased
              consumer palates at scale.
            </p>
          </div>
          <div className="card-glass p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To replace slow, subjective market research with pure sensory physics and real-time
              behavioral data.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-glass p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Founding Team */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">The Founding Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mb-4 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-5xl font-bold text-primary/30">
                    CF
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-1">{member.name}</h4>
                <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 pt-24 border-t border-border">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">44</div>
            <p className="text-muted-foreground">Pilot Participants</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">176</div>
            <p className="text-muted-foreground">Blind Product Evaluations</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">4</div>
            <p className="text-muted-foreground">Market-Leading Samples Deconstructed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
