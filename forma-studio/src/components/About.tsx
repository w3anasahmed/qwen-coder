export default function About() {
  return (
    <section id="studio" className="py-24 px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Pull quote */}
        <div className="flex justify-center mb-16">
          <p 
            className="font-light italic text-center max-w-[800px]"
            style={{ fontSize: 'clamp(28px, 3vw, 48px)' }}
          >
            "We believe the best spaces are felt before they are understood."
          </p>
        </div>

        {/* Two column grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Portrait */}
          <div className="aspect-[3/4] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
              alt="Tom Hargreaves, Founder"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Studio info */}
          <div className="pt-8 md:pt-0">
            <h3 className="font-bold text-3xl mb-6">Tom Hargreaves, Founder</h3>
            <p className="font-light text-lg leading-relaxed mb-8 text-muted-foreground">
              Forma Studio was founded in 2014 by Tom Hargreaves on a single principle: 
              that thoughtful design improves the quality of daily life. With over 15 years 
              of experience across residential and commercial projects, Tom leads a team 
              dedicated to creating spaces that stand the test of time.
            </p>
            
            {/* Awards chips */}
            <div className="flex flex-wrap gap-3">
              {['RIBA Award 2023', 'Dezeen Shortlist', 'ARB Registered'].map((award) => (
                <span 
                  key={award}
                  className="label-text border border-border px-4 py-2"
                >
                  {award}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
