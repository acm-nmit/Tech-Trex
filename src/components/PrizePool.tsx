
import { Award, Trophy, Medal } from 'lucide-react';
import { cn } from '@/lib/utils';

const prizes = [
  {
    position: 1,
    title: "First Place",
    description: "Champion's package including exclusive tech gadgets and recognition.",
    icon: <Trophy className="text-yellow-400" size={28} />,
    color: "from-yellow-500/20 to-yellow-600/5",
    borderColor: "border-yellow-400/30",
    shadowColor: "shadow-[0_0_15px_rgba(234,179,8,0.3)]"
  },
  {
    position: 2,
    title: "Second Place",
    description: "Runner-up prize with valuable tech accessories and certificates.",
    icon: <Award className="text-gray-300" size={28} />,
    color: "from-gray-400/20 to-gray-500/5",
    borderColor: "border-gray-400/30",
    shadowColor: "shadow-[0_0_15px_rgba(156,163,175,0.3)]"
  },
  {
    position: 3,
    title: "Third Place",
    description: "Bronze winner package with tech goodies and recognition.",
    icon: <Medal className="text-amber-600" size={28} />,
    color: "from-amber-700/20 to-amber-800/5",
    borderColor: "border-amber-600/30",
    shadowColor: "shadow-[0_0_15px_rgba(180,83,9,0.3)]"
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
                
                <p className="text-foreground/70">{prize.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrizePool;
