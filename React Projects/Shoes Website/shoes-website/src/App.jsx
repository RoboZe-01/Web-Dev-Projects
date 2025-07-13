import './App.css';
import HeroSection from './Components/Hero';
import Navigation from './Components/Navigation';

const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <HeroSection/>
      
      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Premium Quality</h3>
              <p>Our shoes are crafted with the finest materials for maximum comfort and durability.</p>
            </div>
            <div className="feature-card">
              <h3>Free Shipping</h3>
              <p>Enjoy free shipping on all orders over $50 with no hidden fees.</p>
            </div>
            <div className="feature-card">
              <h3>30-Day Returns</h3>
              <p>Not satisfied? Return your purchase within 30 days for a full refund.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Shop</h3>
              <ul>
                <li><a href="#">Men's Shoes</a></li>
                <li><a href="#">Women's Shoes</a></li>
                <li><a href="#">Kids' Shoes</a></li>
                <li><a href="#">New Arrivals</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Help</h3>
              <ul>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Track Order</a></li>
                <li><a href="#">Returns & Exchanges</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>About</h3>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Shoe Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Dark Mode Toggle */}
      <div className="dark-mode-toggle">
        <span>🌓</span>
      </div>
    </div>
  );
};

export default App;