
import { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "What is TECH-TREX?",
    answer: "TECH-TREX is a thrilling tech challenge event featuring three exciting rounds: Dot-Dash Decipher for code-breaking, InvisiSketch for visualization, and Promptopia for AI prompt engineering. Participants will decode, doodle, and strategize their way through these challenges."
  },
  {
    question: "Who can participate?",
    answer: "The event is open to all students of Nitte Meenakshi Institute of Technology. Whether you're a beginner or advanced in tech skills, the event is designed to be accessible and challenging for all skill levels."
  },
  {
    question: "Do I need to register in advance?",
    answer: "Yes, advance registration is required to participate. You can register through the QR code provided on the event poster or through the registration button on this website."
  },
  {
    question: "Can I participate as a team?",
    answer: "Yes, TECH-TREX is a team-based event. Teams should consist of 2-3 members. You can either form your own team during registration or be assigned to a team if you register individually."
  },
  {
    question: "What should I bring to the event?",
    answer: "Participants should bring their own laptops, chargers, and any personal stationery they prefer to use. All specific tools or software required for the challenges will be provided or specified before the event."
  },
  {
    question: "How will the winners be determined?",
    answer: "Winners will be determined based on cumulative scores across all three rounds. Each round has specific scoring criteria related to accuracy, creativity, and efficiency of solutions. The team with the highest total score wins."
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={cn(
              "glass-card rounded-xl overflow-hidden transition-all duration-300",
              openIndex === index 
                ? "shadow-[0_0_15px_rgba(149,118,255,0.2)] border-l-2 border-tech-purple/50" 
                : "border-l-2 border-transparent"
            )}
          >
            <button
              className="w-full text-left p-5 flex items-center justify-between gap-4"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center gap-3">
                {openIndex === index ? 
                  <Sparkles className="text-tech-purple min-w-[20px]" size={20} /> : 
                  <HelpCircle className="text-tech-blue min-w-[20px]" size={20} />
                }
                <span className="font-medium text-lg">{faq.question}</span>
              </div>
              <ChevronDown 
                className={cn(
                  "text-tech-purple transition-transform duration-300 min-w-[20px]",
                  openIndex === index ? "transform rotate-180" : ""
                )} 
                size={20} 
              />
            </button>
            
            <div 
              className={cn(
                "overflow-hidden transition-all duration-300",
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="p-5 pt-0 text-foreground/70 border-t border-tech-purple/20">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
