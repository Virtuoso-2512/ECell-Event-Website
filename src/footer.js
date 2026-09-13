import "./Footer.css";

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    window.alert("Thank you for subscribing! We will reach out to you shortly.");
    e.target.reset();
  };
 
  const infoTitles = ["Quick Bio", "Location", "Current Status"];
  const socials = ["github", "twitter", "instagram"];
  const socialas = ["github.com", "twitter.com", "instagram.com"];

  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        {/* Left Side: Branding and Info */}
        <div className="footer-left">
          <div className="footer-brand">
            <span className="brand-orange">E-CELL</span>
            <span className="brand-white">BITS HYD</span>
          </div>
          <p className="footer-desc">
            Whether you lead teams or just launched your career — Launchpad helps you grow through live events, expert insights, and real interaction.
          </p>
          <div className="footer-links">
            <a href="#upcoming">Upcoming Sessions</a>
            <a href="#speakers">Meet the Experts</a>
            <a href="#contact">Partner with Us</a>
          </div>
        </div>

        {/* Right Side: Contact and Newsletter */}
        <div className="footer-right" id="CONTACT US">
          <h3>Stay Updated</h3>
          <p>Join our newsletter for the latest event announcements and exclusive startup resources.</p>
          
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required 
              className="subscribe-input"
            />
            <button type="submit" className="subscribe-btn">SUBSCRIBE</button>
          </form>
          
          <div className="contact-info">
            <p><strong>Contact Us:</strong> ecell@hyderabad.bits-pilani.ac.in</p>
          </div>
        </div>
      </div>
      
      <div id="footer-actions" className="action-buttons">
            {infoTitles.map((title, idx) => (
              <button key={idx} className="action-icon-btn">
                <i className={`fa-solid fa-${idx === 0 ? 'user' : idx === 1 ? 'location-dot' : 'briefcase'}`} />
              </button>
            ))}
            
            {socialas.map((a, idx) => (
              <button key={idx + 3} className="action-icon-btn" onClick={() => window.open(`https://${a}/`)}>
                <i className={`fa-brands fa-${socials[idx]}`} />
              </button>
            ))}
        </div>

      {/* Bottom Legal/Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2026 Arnav Thakare. All Rights Reserved.</p>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>


    </footer>
  );
};