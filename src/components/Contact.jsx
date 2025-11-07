import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Book an appointment
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-white/70"
        >
          Send a quick message and we’ll get back to you with available times.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/70">Full Name</label>
            <input
              required
              type="text"
              className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-blue-500/50"
              placeholder="Jane Doe"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/70">Email</label>
            <input
              required
              type="email"
              className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-blue-500/50"
              placeholder="jane@example.com"
            />
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="text-sm text-white/70">Message</label>
            <textarea
              required
              rows={4}
              className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-blue-500/50"
              placeholder="How can we help?"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-blue-600 sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </motion.form>

        <div className="mt-8 grid gap-4 text-white/70 sm:grid-cols-3">
          <div>
            <div className="text-white">Clinic</div>
            <div>123 Heartline Ave, Suite 200</div>
            <div>San Francisco, CA</div>
          </div>
          <div>
            <div className="text-white">Email</div>
            <a href="mailto:care@drmalikcardio.com" className="text-blue-400 hover:underline">care@drmalikcardio.com</a>
          </div>
          <div>
            <div className="text-white">Phone</div>
            <a href="tel:+14155550123" className="text-blue-400 hover:underline">(415) 555-0123</a>
          </div>
        </div>
      </div>
    </section>
  );
}
