'use client';

export default function AboutUs() {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Founder & CEO',
      bio: 'Ph.D. in Consumer Behavior. 12+ years building market research platforms.',
    },
    {
      name: 'James Rodriguez',
      role: 'VP of Product',
      bio: 'Led product teams at major FMCG companies. Expert in consumer insights.',
    },
    {
      name: 'Alex Kumar',
      role: 'Head of Technology',
      bio: 'Previously at leading data analytics firm. Specialized in real-time processing.',
    },
    {
      name: 'Maria Okonkwo',
      role: 'Head of Operations',
      bio: 'Managed 500+ ambassador network. Expert in data quality and compliance.',
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
            We're a team of consumer behavior experts, technologists, and industry veterans
            united by one mission: to make real consumer intelligence accessible to every brand.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="card-glass p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower FMCG brands with authentic, real-time consumer insights by connecting
              them directly with campus communities through our network of dedicated ambassadors.
              We make consumer intelligence accessible, actionable, and trustworthy.
            </p>
          </div>
          <div className="card-glass p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A world where every brand decision is informed by real consumer voices. Where
              market research is faster, cheaper, and more authentic. Where students earn
              meaningful income while shaping the products they love.
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

        {/* Leadership Team */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mb-4 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-5xl font-bold text-primary/30">
                    {member.name[0]}
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
            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
            <p className="text-muted-foreground">Campus Ambassadors</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">25+</div>
            <p className="text-muted-foreground">Brand Partners</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">3M+</div>
            <p className="text-muted-foreground">Data Points Collected</p>
          </div>
        </div>
      </div>
    </section>
  );
}
