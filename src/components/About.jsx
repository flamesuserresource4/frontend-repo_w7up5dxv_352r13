import { motion } from 'framer-motion';

export default function About() {
  const items = [
    {
      title: 'Preventive Cardiology',
      desc: 'Risk assessment, lipid management, nutrition, and tailored exercise plans to keep your heart healthy.'
    },
    {
      title: 'Advanced Diagnostics',
      desc: 'Echocardiography, stress testing, ambulatory monitoring, and coronary CTA interpretation.'
    },
    {
      title: 'Interventional Expertise',
      desc: 'Evidence-based procedures with a focus on safety, precision, and fast recovery.'
    }
  ];

  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Comprehensive cardiac care, centered on you
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-white/70"
        >
          From prevention to intervention, I provide thoughtful, technology-enabled care. I partner with primary care physicians and specialists to deliver seamless, outcomes-driven treatment.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition-all group-hover:scale-110" />
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-2 text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
