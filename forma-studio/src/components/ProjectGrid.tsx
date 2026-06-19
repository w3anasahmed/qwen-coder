import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  { name: 'Hampstead House', category: 'Residential', year: '2024', aspect: '4/3', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80' },
  { name: 'Shoreditch Office', category: 'Commercial', year: '2024', aspect: '3/4', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { name: 'Kensington Penthouse', category: 'Residential', year: '2023', aspect: '4/3', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
  { name: 'Cultural Centre', category: 'Public', year: '2023', aspect: '3/4', image: 'https://images.unsplash.com/photo-1596230529625-7ee541cc5e4e?w=800&q=80' },
  { name: 'Notting Hill Kitchen', category: 'Interior', year: '2022', aspect: '4/3', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80' },
  { name: 'Concrete Staircase', category: 'Detail', year: '2022', aspect: '3/4', image: 'https://images.unsplash.com/photo-1590059390239-0d2c76b5f0d9?w=800&q=80' },
]

export default function ProjectGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-sans font-bold text-5xl md:text-6xl">Selected Work</h2>
          <span className="font-light text-muted-foreground hidden md:block">( 12 projects )</span>
        </div>

        {/* Masonry Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className={`relative overflow-hidden cursor-pointer group ${
                project.aspect === '4/3' ? 'aspect-[4/3]' : 'aspect-[3/4]'
              }`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img 
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-85 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="font-bold text-white text-3xl mb-2">{project.name}</h3>
                <p className="label-text text-white/70">{project.category} · {project.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
