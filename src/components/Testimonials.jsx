import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aisha K.',
    text: 'Dr. Malik took the time to explain everything. With his guidance, my blood pressure is finally under control and I feel better than ever.',
  },
  {
    name: 'Daniel R.',
    text: 'State-of-the-art care delivered with genuine kindness. The diagnostic process was seamless and reassuring.',
  },
  {
    name: 'Priya S.',
    text: 'His preventive approach made all the difference. I feel informed, supported, and confident in my heart health.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Trusted by patients and peers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-white/70"
        >
          Real stories from individuals who chose proactive, compassionate cardiac care.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-white/80">“{t.text}”</p>
              <div className="mt-4 text-sm text-white/60">— {t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
