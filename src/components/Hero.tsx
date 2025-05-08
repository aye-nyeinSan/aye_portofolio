
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profileStand.png";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <section id="hero" className="h-screen flex  justify-center items-center text-center px-4">
      <div className="mt-8 md:ml-10 max-sm:mx-8 drop-shadow-2xl cursor-pointer ">
        <img
          src={profileImg}
          className="contrast-125 grayscale max-w-full hover:animate-bounce "
          width={200}
          height={100}
          alt="profile"
          loading="lazy"
        ></img>
      </div>
      <div className="mx-6 flex flex-col ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
          Hi, I'm <span className="text-primary">Aye Nyein San</span>
        </h1>

        <p
          className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          A passionate developer crafting beautiful digital experiences
        </p>

        <div
          className="mt-10 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          <Button
            onClick={scrollToAbout}
            variant="outline"
            size="lg"
            className="group"
          >
            Learn more
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
