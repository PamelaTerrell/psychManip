import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Psychological Manipulation</h1>
        <p className="subheadline">
          Understanding narcissism, gaslighting, coercion, and the psychology of control.
        </p>
        <Link to="/topics" className="cta-button">Explore Topics</Link>
      </section>

      {/* Introduction Section */}
      <section className="intro">
        <div className="intro-flex">
          <div className="intro-text">
            <h2>Why This Site Exists</h2>
            <p>
    This site was created by Pamela Terrell, B.A. in Sociology, to explore the often hidden
    mechanisms of psychological manipulation. With a scholarly lens on topics like narcissistic
    abuse and social influence, our aim is to inform, educate, and empower.
  </p>
  <p>
    Psychological manipulation can be subtle and complex, often leaving victims feeling confused or
    trapped. By breaking down these behaviors—such as narcissism, gaslighting, trauma bonding, and emotional coercion—this platform seeks to shed light on the tactics used and the effects they have on individuals and society.
  </p>
  <p>
    Understanding these concepts is crucial for recognizing manipulation in everyday life, improving
    personal relationships, and fostering resilience against psychological abuse.
  </p>
          </div>
          <img
            src="/images/control.jpg"
            alt="Representation of psychological control"
            className="intro-image"
          />
        </div>
      </section>

      {/* Featured Topics Section */}
      <section className="topics-preview">
        <h2>Featured Topics</h2>
        <div className="topics-grid">
          <Link to="/topics/narcissism" className="topic-card">Narcissism</Link>
          <Link to="/topics/gaslighting" className="topic-card">Gaslighting</Link>
          <Link to="/topics/trauma-bonding" className="topic-card">Trauma Bonding</Link>
          <Link to="/topics/emotional-coercion" className="topic-card">Emotional Coercion</Link>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <blockquote>
          “The most dangerous psychological manipulations are the ones we don’t even realize are happening.”
        </blockquote>
      </section>
    </div>
  );
};

export default Home;
