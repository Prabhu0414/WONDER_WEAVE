"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Aditi Sharma", text: "Wonder Weave made our Kashmir trip seamless and unforgettable!" },
  { name: "Rahul Verma", text: "Best way to plan itineraries in India. Highly recommend!" },
  { name: "Priya Nair", text: "Loved the personalized experience and suggestions." },
];

export const TestimonialsCarousel: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="p-6 rounded-xl border bg-white dark:bg-slate-900 shadow-sm"
        >
          <p className="text-muted-foreground">"{t.text}"</p>
          <div className="mt-3 font-semibold">{t.name}</div>
        </motion.div>
      ))}
    </div>
  );
};
