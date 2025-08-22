import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="font-black text-3xl mb-4">
              <span className="hero-title text-3xl">TICO</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming innovative ideas into market-leading companies through 
              strategic partnership, capital, and expertise.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Idea Validation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Product Development</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Funding & Investment</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Team Building</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Go-to-Market</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Growth Acceleration</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 TICO Startup Studio. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </a>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;