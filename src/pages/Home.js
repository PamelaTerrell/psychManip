import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  // Function to log click on the secret link
  const handleSecretLinkClick = async () => {
    try {
      await fetch('/api/log-hidden-click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Failed to log secret link click', error);
    }
  };

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
              trapped. By breaking down these behaviors—such as narcissism, gaslighting, trauma bonding, emotional coercion, and hoovering—this platform seeks to shed light on the tactics used and the effects they have on individuals and society.
            </p>
            <p>
              Understanding these concepts is crucial for recognizing manipulation in everyday life, improving
              personal relationships, and fostering resilience against psychological abuse.
            </p>
          </div>
          <div>
            <img
              src="/images/control.jpg"
              alt="Representation of psychological control"
              className="intro-image"
            />
            <p className="image-credit">
              Photo by{' '}
              <a
                href="https://unsplash.com/@agni11?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank" rel="noopener noreferrer"
              >
                Sivani Bandaru
              </a>{' '}
              on{' '}
              <a
                href="https://unsplash.com/photos/2-men-playing-basketball-in-grayscale-photography-bczrpU9n8f4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank" rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </p>
          </div>
        </div>
      </section>

      <p className="definition">
        <strong>Manipulation</strong> is the act of influencing someone’s thoughts, emotions, or behaviors
        through deceptive, exploitative, or coercive tactics — often without the person’s awareness. It
        involves control that undermines autonomy, using guilt, fear, or flattery to gain power.
      </p>

      {/* Secret link for narcissists */}
      <div className="secret-link">
        <Link
          to="/message"
          onClick={handleSecretLinkClick}
          style={{ textDecoration: 'underline dotted', color: '#555' }}
        >
          What if you see yourself in this?
        </Link>
      </div>

      {/* Featured Topics Section */}
      <section className="topics-preview">
        <h2>Featured Topics</h2>
        <div className="topics-grid">
          <Link to="/topics/narcissism" className="topic-card">Narcissism</Link>
          <Link to="/topics/gaslighting" className="topic-card">Gaslighting</Link>
          <Link to="/topics/triangulation" className="topic-card">Triangulation</Link>
          <Link to="/topics/trauma-bonding" className="topic-card">Trauma Bonding</Link>
          <Link to="/topics/emotional-coercion" className="topic-card">Emotional Coercion</Link>
          <Link to="/topics/hoovering" className="topic-card">Hoovering</Link> 
          <Link to="/topics/limerence" className="topic-card">Limerence</Link>
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
