import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users2, 
  Globe, 
  Target,
  ArrowRight
} from "lucide-react";

const stats = [
  { icon: Award, value: "15 Years", label: "Industry Experience" },
  { icon: Users2, value: "200+", label: "Team Members" },
  { icon: Globe, value: "25+", label: "Countries Served" },
  { icon: Target, value: "50+", label: "Successful Exits" }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Shaping Tomorrow's Leaders
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              TICO Startup Studio is more than an incubator – we're your co-founding partner. 
              With over 15 years of experience building and scaling companies, we provide the 
              strategic guidance, resources, and network needed to transform breakthrough ideas 
              into market-leading businesses.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Co-Creation Model</h4>
                  <p className="text-muted-foreground">We don't just invest – we build alongside you as true partners.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Proven Methodology</h4>
                  <p className="text-muted-foreground">Our systematic approach has created billions in shareholder value.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Global Network</h4>
                  <p className="text-muted-foreground">Access our extensive network of investors, mentors, and industry experts.</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Partner With Us
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-6 text-center glow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "To democratize entrepreneurship by providing world-class resources, expertise, 
              and capital to visionary founders building the future. We believe that great ideas 
              can come from anywhere, and our job is to help them reach their full potential."
            </p>
            <div className="mt-6 text-primary font-semibold">
              — The TICO Team
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;