import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";

const portfolioItems = [
  {
    name: "FinTech Pro",
    description: "Revolutionary payment processing platform serving 10M+ users globally",
    category: "FinTech",
    valuation: "$500M",
    growth: "+300%",
    status: "Series B",
    technologies: ["React", "Node.js", "AWS", "Blockchain"]
  },
  {
    name: "HealthSync",
    description: "AI-powered healthcare management system improving patient outcomes",
    category: "HealthTech",
    valuation: "$200M", 
    growth: "+250%",
    status: "Series A",
    technologies: ["Python", "TensorFlow", "React", "GCP"]
  },
  {
    name: "EduFlow",
    description: "Next-generation learning platform with 50M+ students worldwide",
    category: "EdTech",
    valuation: "$1.2B",
    growth: "+400%", 
    status: "Series C",
    technologies: ["Vue.js", "Django", "PostgreSQL", "ML"]
  },
  {
    name: "GreenEnergy",
    description: "Smart energy management solutions for sustainable businesses",
    category: "CleanTech",
    valuation: "$150M",
    growth: "+180%",
    status: "Series A",
    technologies: ["IoT", "React", "Python", "Azure"]
  },
  {
    name: "RetailAI",
    description: "Intelligent inventory management reducing waste by 40%",
    category: "Retail",
    valuation: "$300M",
    growth: "+220%",
    status: "Series B", 
    technologies: ["AI/ML", "React", "Microservices", "AWS"]
  },
  {
    name: "CyberShield",
    description: "Advanced cybersecurity platform protecting Fortune 500 companies",
    category: "CyberSec",
    valuation: "$800M",
    growth: "+350%",
    status: "Series C",
    technologies: ["Security", "Go", "React", "Kubernetes"]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the companies we've helped transform from ideas into industry leaders.
            Our portfolio represents billions in combined valuation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className="p-6 glow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <Badge variant="secondary" className="mb-2">
                    {item.category}
                  </Badge>
                </div>
                <Badge variant="outline" className="text-accent border-accent">
                  {item.status}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-4 line-clamp-3">
                {item.description}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Valuation</span>
                  <span className="font-semibold text-primary">{item.valuation}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Growth</span>
                  <span className="font-semibold text-secondary flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {item.growth}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {item.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button variant="ghost" className="w-full group">
                View Case Study
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg">
            See All Portfolio Companies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;