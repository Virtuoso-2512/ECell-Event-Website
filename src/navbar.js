import './navbar.css';

export default function Navbar() {
  const opt = ["TIMELINE", "OUR MISSION", "CONTACT US"];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <nav id="navbar" className="glass-nav">
      <div id="logo" className="nav-group">
        <img alt="igi" src={require("./assets/Logo.png")} className="logo-img"/>
        <img alt="igi" src={require("./assets/LP.png")} className="logo-img" style={{width:"30px"}}/>
        <div className="title-container">
          <span className="brand-orange" style={{fontFamily:"Roboto"}}>E-CELL </span>
          <span className="brand-white" style={{fontFamily:"Roboto"}}>BITS HYD</span>
        </div>
      </div>

      {/* Navigation Links & Action Button */}
      <div className="nav-group">
        <div className="nav-links">
          {opt.map((item, idx) => (
            <span key={idx} className="nav-item" onClick={() => scrollToSection(item)}>
              {item}
            </span>
          ))}
        </div>
        
        <button className="erp-btn" onClick={() => window.alert("Placeholder for now :)")} >
          Save My Spot
        </button>
      </div>
    </nav>
  );
}