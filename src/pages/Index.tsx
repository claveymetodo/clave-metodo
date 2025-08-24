import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
