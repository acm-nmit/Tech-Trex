
import { Award, Trophy, Medal, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const prizes = [
  {
    position: 1,
    title: "First Place",
    description: "Champion's package including exclusive tech gadgets and recognition.",
    icon: <Trophy className="text-yellow-400" size={28} />,
    color: "from-tech-purple/30 to-tech-blue/10",
    borderColor: "border-yellow-400/30",
    shadowColor: "shadow-[0_0_15px_rgba(149,118,255,0.3)]",
    amount: "₹15,000"
  },
  {
    position: 2,
    title: "Second Place",
    description: "Runner-up prize with valuable tech accessories and certificates.",
    icon: <Award className="text-gray-300" size={28} />,
    color: "from-tech-blue/30 to-tech-cyan/10",
    borderColor: "border-gray-400/30",
    shadowColor: "shadow-[0_0_15px_rgba(118,136,255,0.3)]",
    amount: "₹10,000"
  },
  {
    position: 3,
    title: "Third Place",
    description: "Bronze winner package with tech goodies and recognition.",
    icon: <Medal className="text-amber-600" size={28} />,
    color: "from-tech-cyan/30 to-tech-purple/10",
    borderColor: "border-amber-600/30",
    shadowColor: "shadow-[0_0_15px_rgba(111,195,223,0.3)]",
    amount: "₹5,000"
  }
];

const PrizePool = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {prizes.map((prize, index) => {
          const isFirst = prize.position === 1;
          
          return (
            <div 
              key={prize.position}
              className={cn(
                "glass-card rounded-xl p-6 md:p-8 relative overflow-hidden transition-all duration-500",
                isFirst ? "md:transform md:-translate-y-4 md:scale-105" : "",
                prize.shadowColor,
                prize.borderColor
              )}
            >
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-20",
                prize.color
              )} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-full",
                    "bg-tech-dark border-2",
                    prize.borderColor
                  )}>
                    <span className="font-bold text-xl">#{prize.position}</span>
                  </span>
                  <div>{prize.icon}</div>
                </div>
                
                <h3 className={cn(
                  "text-xl md:text-2xl font-bold mb-3",
                  prize.position === 1 ? "text-yellow-400" : 
                  prize.position === 2 ? "text-gray-300" : "text-amber-600"
                )}>
                  {prize.title}
                </h3>
                
                <p className="text-foreground/70 mb-4">{prize.description}</p>
                
                <div className="flex items-center gap-2 mt-2 bg-tech-dark/50 p-3 rounded-lg">
                  <Sparkles size={18} className="text-tech-purple" />
                  <span className="font-mono font-bold text-lg">{prize.amount}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrizePool;
