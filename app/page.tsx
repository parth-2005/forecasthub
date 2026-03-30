import Nav from '@/components/nav';
import Hero from '@/components/hero';
import Problem from '@/components/problem';
import Solution from '@/components/solution';
import SampleInsights from '@/components/sample-insights';
import SocialProof from '@/components/social-proof';
import AboutUs from '@/components/about-us';
import UseCases from '@/components/use-cases';
import CTA from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      {/* <SampleInsights /> */}
      <SocialProof />
      <AboutUs />
      <UseCases />
      <CTA />
      <Footer />
    </main>
  );
}
