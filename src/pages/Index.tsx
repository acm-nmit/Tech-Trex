
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import CountdownTimer from '@/components/Countdown';
import Roadmap from '@/components/Roadmap';
import PrizePool from '@/components/PrizePool';
import FAQs from '@/components/FAQs';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import { ChevronDown, MapPin, Trophy, HelpCircle, Users, QrCode } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  
  // For smooth scroll navigation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      const element = document.querySelector(href);
      if (!element) return;
      
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <main ref={mainRef} className="circuit-bg min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-[100vh] flex flex-col items-center justify-center pt-16 pb-8 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-tech-darkest/80 to-tech-dark/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full text-center py-16">
          <div className="mb-6 inline-flex gap-2 items-center justify-center">
            <span className="bg-tech-dark/70 text-tech-teal px-4 py-1 rounded-full text-sm border border-tech-teal/20">
              ANAADYANTA 2025
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 title-gradient">
            TECH-TREX
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-foreground/90">
            Decode, Doodle, and Strategize Your Way Through Three Thrilling Rounds
          </p>
          
          <div className="mb-12">
            <CountdownTimer />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#register" 
              className="tech-button text-base md:text-lg"
            >
              Register Now
            </a>
            <a 
              href="#roadmap" 
              className="px-6 py-3 border border-tech-teal/50 rounded-md text-foreground 
              hover:bg-tech-teal/10 transition-all text-base md:text-lg"
            >
              Explore Events
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#roadmap" 
            className="w-10 h-10 rounded-full border border-tech-teal/50 flex items-center justify-center"
          >
            <ChevronDown className="text-tech-teal" />
          </a>
        </div>
      </section>
      
      {/* Roadmap Section */}
      <section id="roadmap" className="page-section bg-tech-darkest/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3 bg-tech-dark/50 py-2 px-4 rounded-full">
              <MapPin className="text-tech-teal" size={18} />
              <span className="text-sm font-medium">Event Roadmap</span>
            </div>
            <h2 className="section-heading">Three Epic Challenges</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Navigate through these exciting rounds designed to test your technical, creative, and strategic skills.
            </p>
          </div>
          
          <Roadmap />
        </div>
      </section>
      
      {/* Prize Pool Section */}
      <section id="prizes" className="page-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3 bg-tech-dark/50 py-2 px-4 rounded-full">
              <Trophy className="text-tech-teal" size={18} />
              <span className="text-sm font-medium">Exciting Rewards</span>
            </div>
            <h2 className="section-heading">Prize Pool</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Compete for these impressive prizes and gain recognition for your skills and creativity.
            </p>
          </div>
          
          <PrizePool />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="page-section bg-tech-darkest/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3 bg-tech-dark/50 py-2 px-4 rounded-full">
              <HelpCircle className="text-tech-teal" size={18} />
              <span className="text-sm font-medium">Common Questions</span>
            </div>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Find answers to the most common questions about TECH-TREX.
            </p>
          </div>
          
          <FAQs />
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="page-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3 bg-tech-dark/50 py-2 px-4 rounded-full">
              <Users className="text-tech-teal" size={18} />
              <span className="text-sm font-medium">Meet The Team</span>
            </div>
            <h2 className="section-heading">Event Organizers</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              The brilliant minds behind TECH-TREX and the ACM NMIT Chapter.
            </p>
          </div>
          
          <TeamSection />
        </div>
      </section>
      
      {/* Registration Section */}
      <section id="register" className="page-section bg-tech-darkest/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3 bg-tech-dark/50 py-2 px-4 rounded-full">
              <QrCode className="text-tech-teal" size={18} />
              <span className="text-sm font-medium">Join Now</span>
            </div>
            <h2 className="section-heading">Register for TECH-TREX</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Secure your spot in this exciting tech challenge event.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Scan & Register</h3>
                <p className="text-foreground/70 mb-6">
                  Scan the QR code using your smartphone or click the registration button to join the event.
                </p>
                <button className="tech-button">
                  Register Now
                </button>
              </div>
              
              <div className="w-full max-w-[200px] aspect-square bg-white p-4 rounded-xl">
                <img 
                  src="/lovable-uploads/ed4e74ab-bffe-4e2d-8848-d2ac69d3e501.png" 
                  alt="QR Code for registration" 
                  className="w-full h-full object-contain opacity-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;
