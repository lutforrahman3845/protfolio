"use client";

import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log("Form submitted", formData);
  };

  return (
    <section id="contact" className="w-full py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Typography Block */}
        <h2 className="text-[clamp(3rem,8vw,10rem)] leading-[0.8] font-bold tracking-tighter uppercase mb-24">
          <span className="text-foreground block">Let's Work</span>
          <span className="text-foreground/20 block">Together</span>
        </h2>
        
        <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col md:flex-row gap-8">
          <div className="flex-1 text-left border-b border-foreground/20 pb-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground/60 mb-2 block">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your Name"
              className="w-full bg-transparent border-none outline-none text-xl placeholder:text-foreground/30"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="flex-1 text-left border-b border-foreground/20 pb-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground/60 mb-2 block">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Your Email"
              className="w-full bg-transparent border-none outline-none text-xl placeholder:text-foreground/30"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </form>
      </div>
    </section>
  );
}
