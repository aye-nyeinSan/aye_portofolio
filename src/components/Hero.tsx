
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
        Hi, I'm <span className="text-primary">YourName</span>
      </h1>
      
      <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
        A passionate developer crafting beautiful digital experiences
      </p>
      
      <div className="mt-10 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <Button onClick={scrollToAbout} variant="outline" size="lg" className="group">
          Learn more
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}
