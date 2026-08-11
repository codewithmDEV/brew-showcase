import { Link } from "react-router-dom";

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

          <p className="hero-description">
            Explore our collection of carefully selected coffee products.
            Find your favorite flavors, discover new origins, and enjoy
            coffee made for every moment.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="primary-button">
              Explore Products
            </Link>

            <Link to="/add-product" className="secondary-button">
              Add Product
            </Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <p className="section-label">OUR COLLECTION</p>

          <h2>Great coffee starts with great beans.</h2>

          <p>
            Brew Showcase brings together coffee products from different
            origins and roast profiles. Whether you prefer a light,
            medium, or dark roast, discover something that suits your taste.
          </p>

          <Link to="/products" className="collection-link">
            Explore our collection →
          </Link>
        </div>
      </section>

      <section className="features-section">
        <div className="feature">
          <div className="feature-number">01</div>
          <h3>Quality Coffee</h3>
          <p>
            Carefully selected products from trusted coffee origins.
          </p>
        </div>

        <div className="feature">
          <div className="feature-number">02</div>
          <h3>Discover Flavors</h3>
          <p>
            Explore different roast levels, origins, and unique flavors.
          </p>
        </div>

        <div className="feature">
          <div className="feature-number">03</div>
          <h3>Easy Management</h3>
          <p>
            Manage products, prices, and stock through our admin portal.
          </p>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;