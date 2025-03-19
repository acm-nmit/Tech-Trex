
import { Github, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-tech-teal/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 title-gradient">TECH-TREX</h3>
            <p className="text-foreground/70 mb-4">
              An exciting tech challenge featuring code-breaking, visualization, 
              and prompt engineering rounds hosted by ACM NMIT.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/70 hover:text-tech-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-tech-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-tech-teal transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-tech-teal transition-colors">Home</a>
              </li>
              <li>
                <a href="#roadmap" className="text-foreground/70 hover:text-tech-teal transition-colors">Events</a>
              </li>
              <li>
                <a href="#prizes" className="text-foreground/70 hover:text-tech-teal transition-colors">Prizes</a>
              </li>
              <li>
                <a href="#register" className="text-foreground/70 hover:text-tech-teal transition-colors">Register</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <address className="not-italic text-foreground/70">
              <p>Nitte Meenakshi Institute of Technology</p>
              <p>Room No. 253, C Block</p>
              <p className="mt-2">Event Date: April 4th, 2025</p>
            </address>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-tech-teal/20 text-center text-foreground/50">
          <p className="flex items-center justify-center gap-1">
            <span>Created with</span>
            <Heart className="text-tech-teal" size={16} />
            <span>by ACM NMIT & GeekwayFem</span>
          </p>
          <p className="mt-1 text-sm">&copy; {new Date().getFullYear()} ANAADYANTA 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
