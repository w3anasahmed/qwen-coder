import { motion } from 'framer-motion'

const words = ["Let's", 'Build', 'Something', 'Extraordinary']

export default function ContactCTA() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#141414]">
      <div className="max-w-[1600px] mx-auto">
        {/* Animated headline */}
        <motion.h2 
          className="font-bold text-white mb-6"
          style={{ fontSize: 'clamp(48px, 6vw, 96px)', lineHeight: 1.1 }}
        >
          {words.map((word, i) => (
            <motion.span
              key={word}
              className="inline-block mr-4"
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {word}
              <br />
            </motion.span>
          ))}
        </motion.h2>

        <p className="font-light text-white/70 text-lg mb-12 max-w-md">
          We take on a select number of projects each year
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <a 
            href="mailto:hello@formastudio.co.uk"
            className="bg-white text-primary px-8 py-4 font-medium hover:bg-white/90 transition-colors inline-flex items-center gap-2"
          >
            Start a conversation →
          </a>
          <a 
            href="mailto:hello@formastudio.co.uk"
            className="font-light text-white/70 hover:text-white transition-colors"
          >
            hello@formastudio.co.uk
          </a>
        </div>
      </div>
    </section>
  )
}
