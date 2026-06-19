import { ArrowRight } from 'lucide-react'

const services = [
  { name: 'Architecture', description: 'Full architectural design from concept to completion' },
  { name: 'Interior Design', description: 'Thoughtful interior spaces that enhance daily living' },
  { name: 'Renovation & Extension', description: 'Transforming existing structures for modern life' },
  { name: 'Planning Consultancy', description: 'Expert guidance through planning applications' },
]

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-[1600px] mx-auto">
        {/* Header with border-top */}
        <div className="border-t border-border pt-8 mb-12">
          <h2 className="font-sans font-bold text-5xl md:text-6xl">What We Do</h2>
        </div>

        {/* Service rows */}
        <div className="flex flex-col">
          {services.map((service) => (
            <a
              key={service.name}
              href="#contact"
              className="group flex items-center justify-between py-8 border-b border-border hover:bg-primary transition-colors duration-200 px-6 -mx-6"
            >
              <span className="font-bold text-3xl md:text-4xl group-hover:text-white transition-colors">{service.name}</span>
              <span className="hidden md:block font-light text-muted-foreground group-hover:text-white/70 transition-colors">{service.description}</span>
              <ArrowRight className="text-foreground group-hover:text-white transition-colors" size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
