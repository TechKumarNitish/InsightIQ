"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Verified Mentors",
    description: "All mentors are vetted for expertise and commitment to your success.",
    icon: "✅",
  },
  {
    title: "Flexible Scheduling",
    description: "Book sessions that fit your timetable, with easy rescheduling options.",
    icon: "⏰",
  },
  {
    title: "Personalized Roadmaps",
    description: "Get a learning plan tailored to your strengths, weaknesses, and goals.",
    icon: "🗺️",
  },
  {
    title: "Community Support",
    description: "Join a vibrant community for peer learning, motivation, and networking.",
    icon: "🤝",
  },
];

export default function Features() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Why Choose InsightIQ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-2xl shadow p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold text-red-600 mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}