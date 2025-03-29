
import { CheckCircle } from "lucide-react";

export function About() {
  const skills = [
    "Frontend Development", 
    "React & TypeScript", 
    "UI/UX Design", 
    "Responsive Layouts",
    "Backend Development",
    "Database Design"
  ];

  return (
    <section id="about" className="section container px-4 md:px-8">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="animate-slide-in">
          <p className="text-lg mb-6">
            I'm a passionate web developer with expertise in creating modern, responsive websites and applications. 
            With a strong foundation in both frontend and backend technologies, I strive to build seamless digital 
            experiences that are both functional and aesthetically pleasing.
          </p>
          
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or enjoying outdoor activities. I believe in continuous learning and staying updated with the latest 
            industry trends.
          </p>
        </div>
        
        <div className="animate-slide-in" style={{ animationDelay: "200ms" }}>
          <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
