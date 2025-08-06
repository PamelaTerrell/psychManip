import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css'; 

const Topics = () => {
  return (
    <div className="topics-page">
      <h1>Explore Psychological Topics</h1>

      <p>
        Psychological manipulation is rarely obvious at first. It distorts reality, erodes boundaries, and makes you doubt your own mind. 
        These topics are here to help you see clearly, name what’s happening, and begin to reclaim your voice.
      </p>

      <p>
        Below are in-depth explorations of major concepts related to psychological manipulation. Click a topic to learn more.
      </p>

      <div className="topics-grid">
        <Link to="/topics/narcissism" className="topic-card">Narcissism</Link>
        <Link to="/topics/gaslighting" className="topic-card">Gaslighting</Link>
        <Link to="/topics/triangulation" className="topic-card">Triangulation in Romantic Relationships</Link>
        <Link to="/topics/trauma-bonding" className="topic-card">Trauma Bonding</Link>
        <Link to="/topics/emotional-coercion" className="topic-card">Emotional Coercion</Link>
        <Link to="/topics/hoovering" className="topic-card">Hoovering</Link> 
        <Link to="/topics/sex-and-narcissism" className="topic-card"> Sex and Intimacy with a Narcissist
        </Link>
        <Link to="topics/limerence" className="topic-card">Limerence</Link>
       

      </div>

      <section className="quote-section">
        <blockquote>
        “Sometimes the apology never comes. You must choose to heal anyway.”
        — Unknown
        </blockquote>
      </section>

    </div>
  );
};

export default Topics;
