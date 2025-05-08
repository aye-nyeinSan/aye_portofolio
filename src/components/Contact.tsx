
import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="section container px-4 md:px-8">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="animate-slide-in">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          
          <p className="text-muted-foreground mb-6">
            Have a question or want to work together? Feel free to reach out using the contact form or directly via email.
          </p>
          
          <div className="flex items-center space-x-3 mb-4">
            <Mail className="h-5 w-5 text-primary" />
            <a href="mailto:ayenyeinsan.rubi@gmail.com" className="hover:text-primary transition-colors">
             ayenyeinsan.rubi@gmail.com
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <MessageSquare className="h-5 w-5 text-primary" />
            <span>I'll respond within 24-48 hours</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 animate-slide-in" style={{ animationDelay: "200ms" }}>
          <div>
            <Input placeholder="Your Name" required />
          </div>
          
          <div>
            <Input type="email" placeholder="Your Email" required />
          </div>
          
          <div>
            <Input placeholder="Subject" required />
          </div>
          
          <div>
            <Textarea placeholder="Your Message" rows={5} required />
          </div>
          
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>Processing...</>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
