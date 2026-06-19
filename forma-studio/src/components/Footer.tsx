import { Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-6 border-t border-border">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Logo */}
          <div className="font-sans font-bold text-lg tracking-[0.2em] uppercase">FORMA</div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-6">
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

          {/* Social */}
          <div className="flex gap-4">
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <p className="font-light text-sm text-muted-foreground">
          © 2026 Forma Studio · London, UK · ARB Registered · RIBA Member
        </p>
      </div>
    </footer>
  )
}
