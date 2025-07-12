"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav S.",
    feedback: "InsightIQ connected me with a mentor who truly understood my challenges. I cracked my exam with confidence!",
    avatar: "/assets/avatar1.png",
  },
  {
    name: "Priya M.",
    feedback: "The personalized roadmap and regular check-ins kept me motivated. Highly recommend for anyone serious about their goals.",
    avatar: "/assets/avatar2.png",
  },
  {
    name: "Rahul D.",
    feedback: "The community support and expert advice made all the difference in my preparation journey.",
    avatar: "/assets/avatar3.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Success Stories
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              className="flex-1 bg-blue-50 rounded-2xl shadow p-8 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-red-200"
              />
              <p className="text-gray-700 text-center mb-4">"{t.feedback}"</p>
              <div className="font-bold text-red-600">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}