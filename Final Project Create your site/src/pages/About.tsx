import { Link } from "react-router-dom";
import photographerImage from "@/assets/about-photographer.jpg";

const About = () => {
  return (
    <>
      {/* Skip to main content link */}
      <a href="#main-content" className="skip-to-main">
        Skip to Main Content
      </a>
      
      {/* Navigation */}
      <nav className="main-nav">
        <h1 className="text-2xl font-bold text-primary">PhotoFolio</h1>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
        </ul>
      </nav>

      {/* Main content */}
      <main id="main-content">
        {/* About hero section with flex */}
        <section className="hero-flex py-16">
          <div className="hero-text fade-in">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Meet the Artist Behind the Lens
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Hello! I'm Alex Martinez, a passionate photographer with over 8 years of experience 
              capturing life's most precious moments. My journey began with a simple love for nature 
              and has evolved into a full-service photography business.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              I specialize in landscape, portrait, and architectural photography, always seeking 
              to find the perfect balance between technical excellence and artistic vision. 
              Each photograph is a story waiting to be told.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full">Landscape Photography</span>
              <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full">Portrait Sessions</span>
              <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full">Event Coverage</span>
              <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full">Fine Art Prints</span>
            </div>
          </div>
          
          <div className="hero-image-container fade-in">
            {/* About image with box model styling */}
            <img 
              src={photographerImage} 
              alt="Professional photographer Alex Martinez in studio with cameras and equipment"
              className="about-image w-full max-w-md mx-auto"
            />
          </div>
        </section>

        {/* Experience section */}
        <section className="py-16 px-8 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <h3 className="section-title text-3xl font-bold mb-12">My Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-primary">Education & Training</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Bachelor of Fine Arts in Photography - Art Institute</li>
                  <li>• Advanced Landscape Photography Workshop</li>
                  <li>• Professional Portrait Lighting Certification</li>
                  <li>• Drone Photography Licensed Operator</li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-primary">Recognition</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Winner - National Geographic Photo Contest 2023</li>
                  <li>• Featured in Photography Magazine</li>
                  <li>• Local Artist of the Year Award</li>
                  <li>• 500+ satisfied clients worldwide</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section className="py-16 px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="section-title text-3xl font-bold mb-8">Let's Work Together</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to capture your special moments? I'd love to discuss your photography needs 
              and create something beautiful together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:bg-accent hover:text-accent-foreground">
                <h4 className="text-xl font-semibold mb-2">Email</h4>
                <p>alex@photofolio.com</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:bg-accent hover:text-accent-foreground">
                <h4 className="text-xl font-semibold mb-2">Phone</h4>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <Link 
              to="/gallery" 
              className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              View More Work
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-8 text-center">
        <p>&copy; 2024 PhotoFolio. All rights reserved. | Professional Photography Services</p>
      </footer>
    </>
  );
};

export default About;