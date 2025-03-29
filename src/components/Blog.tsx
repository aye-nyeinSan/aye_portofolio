
import { Calendar } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export function Blog() {
  const posts: BlogPost[] = [
    {
      title: "Getting Started with React and TypeScript",
      excerpt: "A comprehensive guide to setting up a React project with TypeScript and best practices for type-safe components.",
      date: "May 15, 2023",
      slug: "react-typescript-guide"
    },
    {
      title: "Mastering Tailwind CSS",
      excerpt: "Learn how to leverage Tailwind CSS to create beautiful, responsive designs without writing custom CSS.",
      date: "April 23, 2023",
      slug: "mastering-tailwind"
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming technologies and trends that will shape the future of web development in the next decade.",
      date: "March 10, 2023",
      slug: "future-web-development"
    }
  ];

  return (
    <section id="blog" className="section container px-4 md:px-8">
      <h2 className="section-title">Blog</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Card key={index} className="flex flex-col h-full animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1">
              <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button variant="outline" asChild>
                <a href={`/blog/${post.slug}`}>Read More</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <Button variant="outline" asChild>
          <a href="/blog">View All Posts</a>
        </Button>
      </div>
    </section>
  );
}
