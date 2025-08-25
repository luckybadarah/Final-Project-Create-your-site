import { Link } from "react-router-dom";
import forestImage from "@/assets/gallery-forest.jpg";
import oceanImage from "@/assets/gallery-ocean.jpg";
import architectureImage from "@/assets/gallery-architecture.jpg";
import flowersImage from "@/assets/gallery-flowers.jpg";
import starsImage from "@/assets/gallery-stars.jpg";

const Gallery = () => {
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
        <section className="py-16">
          <h2 className="section-title text-4xl font-bold">Photography Gallery</h2>
          <p className="text-center text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore a collection of my finest work, from breathtaking landscapes to intimate portraits,
            each image tells a unique story.
          </p>

          {/* Gallery grid with 5+ images - uses grid property and nth-child selector */}
          <div className="gallery-grid">
            {/* Image 1 - Forest (nth-child odd - different border-radius) */}
            <div className="fade-in">
              <img 
                src={forestImage}
                alt="Serene forest with sunlight filtering through tall trees"
                className="gallery-image w-full h-80 object-cover"
              />
              <h3 className="text-lg font-semibold mt-4 text-primary">Forest Serenity</h3>
              <p className="text-muted-foreground">Capturing the peaceful moments in nature's cathedral.</p>
            </div>

            {/* Image 2 - Ocean (nth-child even - circular border-radius) */}
            <div className="fade-in">
              <img 
                src={oceanImage}
                alt="Dramatic ocean waves crashing against rocky cliffs at sunset"
                className="gallery-image w-full h-80 object-cover"
              />
              <h3 className="text-lg font-semibold mt-4 text-primary">Ocean Power</h3>
              <p className="text-muted-foreground">The raw energy of the sea meeting ancient stone.</p>
            </div>

            {/* Image 3 - Architecture (nth-child odd) */}
            <div className="fade-in">
              <img 
                src={architectureImage}
                alt="Modern glass building with geometric patterns and reflections"
                className="gallery-image w-full h-80 object-cover"
              />
              <h3 className="text-lg font-semibold mt-4 text-primary">Urban Geometry</h3>
              <p className="text-muted-foreground">Finding art in architectural innovation.</p>
            </div>

            {/* Image 4 - Flowers (nth-child even) */}
            <div className="fade-in">
              <img 
                src={flowersImage}
                alt="Colorful wildflowers in a meadow with shallow depth of field"
                className="gallery-image w-full h-80 object-cover"
              />
              <h3 className="text-lg font-semibold mt-4 text-primary">Wildflower Dreams</h3>
              <p className="text-muted-foreground">Macro photography revealing nature's delicate beauty.</p>
            </div>

            {/* Image 5 - Stars (nth-child odd) */}
            <div className="fade-in">
              <img 
                src={starsImage}
                alt="Milky Way galaxy over silhouetted mountain range at night"
                className="gallery-image w-full h-80 object-cover"
              />
              <h3 className="text-lg font-semibold mt-4 text-primary">Cosmic Wonder</h3>
              <p className="text-muted-foreground">Astrophotography capturing the universe above.</p>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4 text-primary">Love What You See?</h3>
            <p className="text-muted-foreground mb-8">Let's create something beautiful together.</p>
            <Link 
              to="/about" 
              className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Get In Touch
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

export default Gallery;