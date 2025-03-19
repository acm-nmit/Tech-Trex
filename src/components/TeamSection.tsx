
import { Users, User, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

// Team members data
const teamMembers = [
  {
    name: "Kaushik P",
    role: "Event Coordinator",
    contact: "7625067221",
    avatar: "/placeholder.svg"
  },
  {
    name: "Disha R",
    role: "Event Coordinator",
    contact: "7795675617",
    avatar: "/placeholder.svg"
  },
  {
    name: "Dr. Rajashekar P",
    role: "Faculty Coordinator",
    department: "Computer Science",
    avatar: "/placeholder.svg"
  },
  {
    name: "Anika Sharma",
    role: "ACM Student Chapter President",
    avatar: "/placeholder.svg"
  },
  {
    name: "Vikram Singh",
    role: "GeekwayFem Lead",
    avatar: "/placeholder.svg"
  }
];

const TeamSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 mb-3 bg-tech-dark/50 py-2 px-4 rounded-full">
          <Users className="text-tech-cyan" size={18} />
          <span className="text-sm font-medium">The Organizing Team</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={cn(
              "glass-card rounded-xl p-6 transition-all duration-300",
              "hover:shadow-[0_0_15px_rgba(30,253,202,0.2)] group"
            )}
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative w-24 h-24 mb-4 overflow-hidden rounded-full border-2 border-tech-teal/30">
                <div className="absolute inset-0 bg-gradient-to-b from-tech-teal/20 to-tech-blue/20 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="flex items-center justify-center w-full h-full bg-tech-dark">
                  <User className="text-tech-teal" size={40} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-foreground/70 mb-3">{member.role}</p>
              
              {member.department && (
                <span className="text-sm bg-tech-dark/50 py-1 px-3 rounded-full text-tech-cyan mb-3">
                  {member.department}
                </span>
              )}
              
              {member.contact && (
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 text-sm text-foreground/70">
                    <Phone className="text-tech-teal" size={14} />
                    <span>{member.contact}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
