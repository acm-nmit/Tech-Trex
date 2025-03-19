
import { useEffect, useRef } from 'react';
import { Zap, Code, Paintbrush, MessageSquareDashed } from 'lucide-react';
import { cn } from '@/lib/utils';

const events = [
  {
    id: 1,
    title: "Dot-Dash Decipher",
    description: "Crack codes, solve puzzles, and decipher hidden messages in this cryptographic challenge.",
    icon: <Code className="text-tech-purple" size={24} />,
    color: "from-tech-purple/20 to-tech-purple/5"
  },
  {
    id: 2,
    title: "InvisiSketch",
    description: "Put your visualization and drawing skills to the test as you bring abstract concepts to life.",
    icon: <Paintbrush className="text-tech-blue" size={24} />,
    color: "from-tech-blue/20 to-tech-blue/5"
  },
  {
    id: 3,
    title: "Promptopia",
    description: "Master the art of prompt engineering to generate creative solutions using AI tools.",
    icon: <MessageSquareDashed className="text-tech-cyan" size={24} />,
    color: "from-tech-cyan/20 to-tech-cyan/5"
  }
];

const Roadmap = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }, index * 200);
        }
      });
    }, { threshold: 0.1 });

    elementsRef.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto hexagon-grid py-8">
      {/* Central Lightning Line */}
      <div className="absolute left-1/2 transform -translate-x-[1px] h-full w-[2px] bg-gradient-to-b from-tech-purple via-tech-blue to-tech-cyan opacity-30" />
      
      {events.map((event, index) => (
        <div 
          key={event.id}
          ref={el => elementsRef.current[index] = el}
          className={cn(
            "relative flex items-center mb-16 opacity-0 transition-all duration-700",
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          )}
        >
          <div className={cn(
            "w-full md:w-[calc(50%-32px)] glass-card rounded-xl p-6 relative z-10",
            "transition-all duration-500 hover:shadow-[0_0_20px_rgba(149,118,255,0.15)]",
            index % 2 === 0 ? "border-l-2 border-tech-purple/30" : "border-r-2 border-tech-purple/30"
          )}>
            <div className={cn(
              "absolute inset-0 rounded-xl bg-gradient-to-br opacity-20",
              event.color
            )} />
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-tech-dark rounded-lg">
                {event.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold">{event.title}</h3>
            </div>
            <p className="text-foreground/70">{event.description}</p>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 z-20 w-16 h-16 flex items-center justify-center">
            <div className="relative w-12 h-12 overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-tech-dark flex items-center justify-center border-2 border-tech-purple/50 shadow-[0_0_15px_rgba(149,118,255,0.3)]">
                <span className="text-tech-purple font-bold">{event.id}</span>
              </div>
              <div className="absolute inset-0 bg-tech-purple/10 animate-pulse-glow rounded-full"></div>
            </div>
          </div>
        </div>
      ))}

      <div className="text-center mt-8">
        <div className="inline-flex items-center gap-2 glass-card py-3 px-5 rounded-full">
          <Zap className="text-tech-purple" size={18} />
          <span className="text-sm font-medium">Three thrilling rounds, one epic challenge!</span>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
