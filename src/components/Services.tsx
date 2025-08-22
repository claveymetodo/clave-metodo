import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Target, 
  Users, 
  TrendingUp, 
  Code, 
  DollarSign,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Idea Validation",
    description: "Transform your concept into a viable business model with our proven validation framework.",
    features: ["Market Research", "Competitor Analysis", "MVP Strategy"]
  },
  {
    icon: Code,
    title: "Product Development",
    description: "Build cutting-edge products with our world-class engineering and design teams.",
    features: ["Technical Architecture", "UI/UX Design", "Quality Assurance"]
  },
  {
    icon: DollarSign,
    title: "Funding & Investment",
    description: "Access capital and investor networks to fuel your startup's growth journey.",
    features: ["Seed Funding", "Series A-C", "Investor Connections"]
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Recruit top talent and build high-performing teams that scale with your vision.",
    features: ["Executive Search", "Technical Hiring", "Culture Building"]
  },
  {
    icon: Target,
    title: "Go-to-Market",
    description: "Launch successfully with data-driven marketing and sales strategies.",
    features: ["Market Strategy", "Brand Development", "Sales Optimization"]
  },
  {
    icon: TrendingUp,
    title: "Growth Acceleration",
    description: "Scale rapidly with our growth hacking expertise and strategic partnerships.",
    features: ["Growth Analytics", "Partnership Development", "International Expansion"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            End-to-End Startup Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial concept to market leader, we provide comprehensive support 
            at every stage of your startup journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 glow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="w-full group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;