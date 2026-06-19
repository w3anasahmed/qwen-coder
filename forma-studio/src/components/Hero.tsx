import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen pt-20">
      {/* Full-bleed project image */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=2400&q=80"
          alt="Modern minimalist building exterior"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(250,250,250,1) 0%, transparent 40%)'
          }}
        />
      </div>

      {/* Content below image */}
      <div className="max-w-[1600px] mx-auto px-6 py-12">
        <p className="label-text text-muted-foreground mb-4">
          Architecture & Interior Design — London
        </p>
        
        <motion.h1 
          className="font-sans font-bold leading-tight mb-8"
          style={{ fontSize: 'clamp(56px, 8vw, 128px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Space.<br />Light.<br />Purpose.
        </motion.h1>

        <div className="flex flex-wrap gap-6 items-center">
          <a 
            href="#work"
            className="bg-primary text-primary-foreground px-8 py-4 font-medium hover:bg-muted-foreground transition-colors inline-flex items-center gap-2"
          >
            View our work →
          </a>
          <a 
            href="#studio"
            className="text-foreground hover:text-muted-foreground transition-colors underline-offset-4 hover:underline"
          >
            About the studio
          </a>
        </div>
      </div>
    </section>
  )
}
