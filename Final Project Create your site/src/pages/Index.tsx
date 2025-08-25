import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-landscape.jpg";

const Index = () => {
  return (
    <>
      {/* Skip to main content link - positioned with focus pseudo-class */}
      <a href="#main-content" className="skip-to-main">
        Skip to Main Content
      </a>
      
      {/* Navigation with flex and 3+ CSS properties */}
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
        {/* Hero section with flex layout */}
        <section className="hero-flex">
          <div className="hero-text fade-in">
            <h2 className="text-5xl font-bold mb-6 text-primary">
              Capturing Life's Beautiful Moments
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Professional photography that tells your story through stunning visuals, 
              natural lighting, and artistic composition.
            </p>
            <Link 
              to="/gallery" 
              className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              View My Work
            </Link>
          </div>
          
          <div className="hero-image-container fade-in">
            {/* Hero image with box model styling */}
            <img 
              src={heroImage} 
              alt="Stunning landscape photography showing mountains at golden hour"
              className="hero-image w-full max-w-lg"
            />
          </div>
        </section>

        {/* Features section */}
        <section className="py-16 px-8 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="section-title text-3xl font-bold mb-12">Why Choose PhotoFolio?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-semibold mb-4 text-primary">Professional Quality</h4>
                <p className="text-muted-foreground">High-end equipment and years of experience ensure every shot is perfect.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-semibold mb-4 text-primary">Creative Vision</h4>
                <p className="text-muted-foreground">Unique perspectives and artistic composition make your photos stand out.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-semibold mb-4 text-primary">Fast Delivery</h4>
                <p className="text-muted-foreground">Professional editing and quick turnaround without compromising quality.</p>
              </div>
            </div>
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

export default Index;