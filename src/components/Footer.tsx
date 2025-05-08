
import { Mail, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-12">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AYE NYEIN SAN. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/aye-nyeinSan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayenyeinsan-2904/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
