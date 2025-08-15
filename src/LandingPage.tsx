import { useState } from "react";
import { Button } from "./components/ui/button.tsx";
import { Linkedin, ChevronDown, MapPin } from "lucide-react";
import ContactForm from "./components/ContactForm.tsx";
import ImageGallery from "./components/ImageGallery.tsx";

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar with Contact Info */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>California's Premier Rebar Experts</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">831-758-1820</span>
          </div>
          <a href="https://www.linkedin.com/company/associated-rebar-inc./" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50" style={{ backgroundColor: '#d3d3d3' }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="text-3xl font-bold">
                <span style={{ color: '#004c97' }}>ARI</span>
                <div className="text-xs text-gray-800 tracking-wider">ASSOCIATED REBAR INC.</div>
              </div>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#about" className="text-gray-800 font-medium transition-colors" style={{ textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4A5568'} onMouseLeave={(e) => e.currentTarget.style.color = '#2D3748'}>
                ABOUT
              </a>
              <a href="#projects" className="text-gray-800 font-medium transition-colors" style={{ textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4A5568'} onMouseLeave={(e) => e.currentTarget.style.color = '#2D3748'}>
                PROJECTS
              </a>
              <a href="#values" className="text-gray-800 font-medium transition-colors" style={{ textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4A5568'} onMouseLeave={(e) => e.currentTarget.style.color = '#2D3748'}>
                VALUES
              </a>
              <a href="#contact" className="text-gray-800 font-medium transition-colors" style={{ textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4A5568'} onMouseLeave={(e) => e.currentTarget.style.color = '#2D3748'}>
                CONTACT
              </a>
              <Button 
                className="text-white px-6 py-2 rounded-full" 
                style={{ backgroundColor: '#004c97' }} 
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003670'} 
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#004c97'}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                INQUIRE
              </Button>
            </nav>
            <div className="flex items-center gap-2">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="block lg:hidden p-2 rounded-md text-gray-800 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600 z-50"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white shadow-lg fixed top-20 inset-x-0 z-40">
          <nav className="container py-4 space-y-2">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PROJECTS
            </a>
            <a
              href="#values"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              VALUES
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </a>
            <Button 
              className="w-full mt-2 text-white" 
              style={{ backgroundColor: '#004c97' }} 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003670'} 
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#004c97'}
              onClick={() => {
                setIsMobileMenuOpen(false)
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              INQUIRE
            </Button>
          </nav>
        </div>
      )}

      {/* Main content wrapper */}
      <main className="relative z-10">
        {/* Hero Section with New Frontier Theme */}
        <section id="home" className="relative overflow-hidden" style={{ height: '90vh' }}>
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/Main.png"
              alt="Construction site with steel framework and crane"
              className="w-full h-full object-cover"
              onLoad={() => {}}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                BUILDING FOR<br />
                TOMORROW, TODAY
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Established in 1988, Associated Rebar Inc delivers precision<br />
                rebar placement and installation services across California and beyond.
              </p>
              <p className="text-base md:text-lg text-white/80 mb-8">
                We're a forward-thinking rebar placement company that combines<br />
                traditional craftsmanship with cutting-edge technology. From high-rise<br />
                towers to infrastructure projects, we provide the structural backbone<br />
                that keeps communities strong and connected.
              </p>
              <Button 
                className="text-white px-8 py-3 text-lg rounded" 
                style={{ backgroundColor: '#004c97' }} 
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003670'} 
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#004c97'}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discover Our Capabilities
              </Button>
            </div>
          </div>

          {/* Chevron scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-white h-8 w-8" />
          </div>
        </section>

        {/* Company Background Section - Solving Century-Old Problem */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <video
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  onError={(e) => {
                    console.error('Video failed to load, showing fallback image');
                    const img = document.createElement('img');
                    img.src = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
                    img.className = 'w-full h-96 object-cover rounded-lg shadow-lg';
                    e.currentTarget.parentNode?.replaceChild(img, e.currentTarget);
                  }}
                >
                  <source src="https://i.imgur.com/1GboMSf.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  ENGINEERING EXCELLENCE<br />
                  THROUGH INNOVATION
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The construction industry demands precision, reliability, and expertise. At Associated Rebar Inc, 
                  we've built our reputation on delivering complex rebar placement and installation that meet the 
                  highest standards of quality and safety.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our team of skilled professionals leverages advanced placement techniques and 
                  state-of-the-art equipment to install and place rebar that forms the structural foundations 
                  that support California's growing infrastructure needs.
                </p>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 100 100" fill="none">
                      <polygon points="10,80 50,20 90,80" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <strong>Associated Rebar Inc</strong> stands at the forefront of modern rebar placement, 
                      combining decades of industry expertise with innovative processes. 
                      We're committed to sustainable practices, efficient project delivery, 
                      and building lasting partnerships with contractors, developers, and 
                      communities throughout California.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Example Image Section */}
        <section id="projects" className="py-0">
          <div className="w-full h-64 md:h-96 bg-gray-200 overflow-hidden">
            <img
              src="/images/divider.png"
              alt="Steel construction framework"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Mission Statement Section */}
        <section id="values" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  REINFORCING<br />
                  COMMUNITIES
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Associated Rebar Inc, we believe that strong infrastructure creates 
                  strong communities. Every project we undertake contributes to California's 
                  economic growth and quality of life.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From local hospitals and schools to major transportation networks, 
                  our work supports the essential structures that connect and serve 
                  millions of Californians every day.
                </p>
                <Button className="text-white px-6 py-3 rounded" style={{ backgroundColor: '#004c97' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003670'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#004c97'}>
                  OUR VALUES
                </Button>
              </div>
              <ImageGallery />
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 md:py-32 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white">Let's Build Together</h2>
                <p className="text-gray-300 text-lg">
                  Ready to strengthen your next project? Connect with our expert team today.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" style={{ color: '#004c97' }} />
                    <div>
                      <p className="text-gray-300 text-sm">Office</p>
                      <p className="text-white font-medium">1095 Madison Ln, Salinas, CA 93907</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-medium">831-758-1820</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">phil@associatedrebar.com</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://www.linkedin.com/company/associated-rebar-inc./"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin size={18} className="text-blue-600" />
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Linkedin className="mx-auto mb-6 text-white h-8 w-8" />
            </div>
            <div className="text-center space-y-4">
              <p className="text-gray-400 text-sm">
                Email: phil@associatedrebar.com | Office: 1095 Madison Ln, Salinas, CA 93907 | Phone: 831-758-1820
              </p>
              <p className="text-gray-500 text-xs">
                © 2025 Associated Rebar Inc | Privacy Policy | Contractors License # 997880
              </p>
              <p className="text-gray-500 text-xs">
                Imagined by LANDE Digital Marketing Agency
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}