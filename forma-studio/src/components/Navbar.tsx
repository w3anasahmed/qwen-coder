import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-sans font-bold text-lg tracking-[0.2em] uppercase">FORMA</div>
        
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {['Work', 'Studio', 'Services', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link text-foreground hover:text-muted-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <a 
            href="#contact"
            className="nav-link flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
          >
            Get in touch <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  )
}
