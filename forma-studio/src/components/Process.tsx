const phases = [
  { number: '01', title: 'Brief & Vision', description: 'Understanding your needs and aspirations' },
  { number: '02', title: 'Concept Design', description: 'Developing the initial design direction' },
  { number: '03', title: 'Planning & Build', description: 'Navigating approvals and construction' },
  { number: '04', title: 'Handover', description: 'Final delivery and post-occupancy support' },
]

export default function Process() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="font-sans font-bold text-5xl md:text-6xl mb-16">How We Work</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {phases.map((phase) => (
            <div key={phase.number} className="relative">
              {/* Large faded number behind */}
              <span className="absolute -top-8 -left-4 font-bold text-[120px] leading-none opacity-[0.06] select-none pointer-events-none">
                {phase.number}
              </span>
              
              <div className="relative z-10 pt-12">
                <p className="label-text text-muted-foreground mb-2">{phase.number}</p>
                <h3 className="font-bold text-xl mb-3">{phase.title}</h3>
                <p className="font-light text-muted-foreground">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
