import { useState } from 'react';
import { cards, events } from './data';

const HeroMarquee = () => {
  const text = " • IDEATE • INNOVATE • INCUBATE • PITCH • LAUNCH";
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {text}{text}{text}{text}
      </div>
    </div>
  );
};

const TargetAudience = () => {
  return (
    <section className="target-section">
      <div className="section-header">
        <p className="subtitle">WHAT WE OFFER</p>
        <h2 className="title">Ideal for <span style={{color: "#ea580c", fontWeight: 700}}>people who want</span> to be</h2>
      </div>
      <div className="cards-grid">
        {cards.map((card, idx) => (
          <div key={idx} className="target-card">
            <div className={`hover-circle ${card.color}`}></div>
            <div className="card-content">
              <h3>{card.title}</h3>
              <div className="card-hidden-details">
                <ul>
                  {card.items.map(item => <li key={item}>{item}</li>)}
                </ul>
                <p>{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const UpcomingEvents = () => {
  const [activeEvent, setActiveEvent] = useState(0); 

  return (
    <section id="events" className="events-section">
      <h2 className="title center" id='TIMELINE' style={{fontFamily:"Poppins"}}>EVENT <span style={{color: "#ea580c", fontWeight: 700}}>TIMELINE</span></h2>
      
      <div className="events-container glass-panel">
        <div className="event-image-wrapper">
          <img 
            src={events[activeEvent].img} 
            className="event-hero-img"
            alt="Event"
          />
          <div className="image-overlay"></div>
        </div>

        <div className="event-details">
          <p className="event-date">{events[activeEvent].date}</p>
          <h3 className="event-title">{events[activeEvent].title}</h3>
          
          <div className="speaker-info">
            <span className="live-tag">{events[activeEvent].offline ? "[ OFFLINE ]" : "[ OFFLINE + REPLAY ]"}</span>
            <p className="speaker-role">{events[activeEvent].role}</p>
          </div>
          
          {!events[activeEvent].offline && <button className="join-btn">JOIN EVENT</button>}
          
          <div className="thumbnails">
            {events.map((evt, idx) => (
              <div key={idx} onClick={() => setActiveEvent(idx)} className={`thumbnail ${activeEvent === idx ? 'active' : ''}`} >
                <img src={evt.img} alt="thumbnail" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function LaunchpadEvent() {
  return (
    <div className="app-container">      
      <main style={{display:"flex", flexDirection:"row",padding:"10rem 2rem 4rem"}}>
        <div className='hero'>
          <div className="status-badge">
            <span className="pulse-dot"></span>
            <span>REGISTRATIONS OPEN NOW</span>
          </div>
          
          <h1 className="hero-title">
            The Ultimate <br/> <span className="text-gradient">Launchpad</span>
          </h1>
          <p className="hero-desc">
            Join 500+ aspiring entrepreneurs, industry leaders, and tech innovators at BITS Hyderabad's flagship Event.
          </p>
          
          <div className="hero-buttons">
            <button className="primary-btn">SAVE MY SPOT</button>
            <button className="secondary-btn glass-panel">VIEW SCHEDULE</button>
          </div>
        </div>
        <div className='hero'>
          <img src={require("./assets/seed.png")} style={{width:"30vw", height:"30vw",borderRadius:"25px"}} className='hero-logo-img'/>
        </div>
      </main>

      <HeroMarquee />
      <TargetAudience />
      <UpcomingEvents />
      
      <section className="cta-section">
        <p className="subtitle">TAKE ACTION</p>
        <h2 className="title cta-title">
          EXPLORE <span className="highlight-orange">SEED</span> TODAY
        </h2>
        <button className="final-btn">Save My Spot</button>
      </section>
    </div>
  );
}