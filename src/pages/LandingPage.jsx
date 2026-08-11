import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-eyebrow">
            WELCOME TO BREW SHOWCASE
          </p>

          <h1>
            Discover Your
            <br />
            Perfect Brew.
          </h1>

          <p className="hero-text">
            Explore our collection of carefully selected coffee products,
            discover new flavors, and find the perfect brew for your day.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="hero-button primary">
              Explore Products
            </Link>

            <Link to="/add-product" className="hero-button secondary">
              Add Product
            </Link>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src={heroImage}
            alt="Featured coffee"
            className="hero-image"
          />
        </div>
      </section>

      <section className="intro-section">
        <p className="section-label">OUR COLLECTION</p>

        <h2>Great coffee starts with great beans.</h2>

        <p>
          Browse our selection of coffee from different origins and roast
          profiles. Whether you prefer a light, medium, or dark roast,
          there is something for every coffee lover.
        </p>

        <Link to="/products" className="text-link">
          View all products →
        </Link>
      </section>
    </main>
  );
}

export default LandingPage;