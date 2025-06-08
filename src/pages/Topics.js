import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css'; // Optional: for styling

const Topics = () => {
  return (
    <div className="topics-page">
      <h1>Explore Psychological Topics</h1>
      <p>
        Below are in-depth explorations of major concepts related to psychological manipulation. Click a topic to learn more.
      </p>

      <div className="topics-grid">
        <Link to="/topics/narcissism" className="topic-card">Narcissism</Link>
        <Link to="/topics/gaslighting" className="topic-card">Gaslighting</Link>
        <Link to="/topics/trauma-bonding" className="topic-card">Trauma Bonding</Link>
        <Link to="/topics/emotional-coercion" className="topic-card">Emotional Coercion</Link>
      </div>
    </div>
  );
};

export default Topics;
