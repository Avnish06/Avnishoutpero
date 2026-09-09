import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Modes from './components/Modes';
import Capabilities from './components/Capabilities';
import MeetEmployee from './components/MeetEmployee';
import StartFree from './components/StartFree';
import Why from './components/Why';
import Integrations from './components/Integrations';
import Dashboard from './components/Dashboard';
import Pricing from './components/Pricing';
import Compare from './components/Compare';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-bg text-ink [overflow-x:clip] w-full min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Modes />
        <Capabilities />
        <MeetEmployee />
        <StartFree />
        <Why />
        <Integrations />
        <Dashboard />
        <Pricing />
        <Compare />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <div className="grain-page pointer-events-none fixed inset-0 z-40 opacity-[0.06] mix-blend-multiply" aria-hidden="true" />
    </div>
  );
}
