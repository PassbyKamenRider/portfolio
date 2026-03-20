import { Send, Mail, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Send size={28} className="text-accent" />
          <h2 className="text-3xl font-bold">Get In Touch</h2>
        </div>
        <p className="text-text-secondary mb-10 leading-relaxed">
          I&apos;m currently open to new opportunities. Whether you have a
          question, a project idea, or just want to say hi — feel free to reach
          out!
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-accent text-bg-primary font-semibold rounded-lg hover:bg-accent-light transition-colors"
          >
            <Mail size={18} />
            Say Hello
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-accent/30 text-accent rounded-lg hover:bg-accent/10 transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-accent/30 text-accent rounded-lg hover:bg-accent/10 transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
