import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <main>

      /* FIRST SECTION / HERO */
      <section className="hero">

        <div className="hero-content">
          <p className="hero-tagline">
            FRESHLY BREWED • PERFECTLY CRAFTED
          </p>

          <h1>
            Discover Your
            <br />
            Perfect Brew
          </h1>

          <p>
            Explore our collection of carefully selected
            coffees made for every coffee lover.
          </p>

          <Link to="/products" className="hero-button">
            Explore Products
          </Link>
        </div>

        /* TWO COFFEE IMAGES */
        <div className="hero-images">

          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="Freshly brewed coffee"
            className="hero-image main-image"
          />

          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            alt="Cup of coffee"
            className="hero-image secondary-image"
          />

        </div>

      </section>

      /* SECTION 2 */
      <section className="about">
        <h2>Why Choose Brew Showcase?</h2>

        <p>
          We bring together quality coffee products for
          coffee lovers who appreciate great taste.
        </p>
      </section>

    </main>
  );
}

export default LandingPage;