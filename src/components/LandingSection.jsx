import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const LandingSection = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    
    
    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 60);
        };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="landing" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10"> 
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Jeremy </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Perkins </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I create intuitive websites using modern technologies and frameworks. I specialize in
                        front end development, with experience building CMS and Shopify websites for small businesses.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className={cn(
                    "text-sm text-muted-foreground mb-2",
                    isScrolled ? "hidden" : "text-sm text-muted-foreground mb-2"
                )}> Scroll </span>
                <ArrowDown className={cn(
                        "h-5 w-h text-primary",
                        isScrolled ? "hidden" : "h-5 w-h text-primary"
                      )}/>
            </div>
        </section>
    );
}