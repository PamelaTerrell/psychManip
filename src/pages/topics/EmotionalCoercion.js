import React from 'react';
import '../../App.css';


import { FaExclamationTriangle, FaUserSlash, FaSadTear, FaHandsHelping, FaBrain } from 'react-icons/fa';

const EmotionalCoercion = () => {
  return (
    <div className="topic-page">
      <h1>Emotional Coercion</h1>
      <p>
        Emotional coercion involves using fear, guilt, shame, or obligation to control another person's
        actions or decisions. It is a subtle yet powerful form of manipulation often present in toxic
        relationships and social dynamics.
      </p>

      <h2>What Is Emotional Coercion?</h2>
      <p>
        Emotional coercion works by distorting emotions to control behavior. It often happens behind closed doors
        and may not be recognized as abuse at first, which makes it even more dangerous.
      </p>

      <h2>Common Tactics of Emotional Coercion</h2>
      <ul className="tactic-list">
        <li><FaSadTear className="icon" /> <strong>Guilt-Tripping:</strong> Making someone feel bad to manipulate them into doing something.</li>
        <li><FaUserSlash className="icon" /> <strong>Silent Treatment:</strong> Withholding communication to punish or regain control. <em>(See more below)</em></li>
        <li><FaHandsHelping className="icon" /> <strong>Playing the Victim:</strong> Using self-pity to deflect blame and responsibility.</li>
        <li><FaExclamationTriangle className="icon" /> <strong>Emotional Blackmail:</strong> Threatening emotional consequences like withdrawal of love or support.</li>
        <li><FaBrain className="icon" /> <strong>Gaslighting:</strong> Undermining someone’s reality to make them question their memory or sanity.</li>
      </ul>

      <h2>Deeper Look: The Silent Treatment</h2>
      <p>
        The silent treatment is more than just avoiding a conversation—it’s a deliberate tactic to exert control.
        It’s a passive-aggressive form of punishment where one person withdraws communication to manipulate
        or dominate the other.
      </p>
      <h3>How It Works</h3>
      <p>
        The person giving the silent treatment may:
      </p>
      <ul>
        <li>Ignore messages or calls</li>
        <li>Refuse to speak or acknowledge your presence</li>
        <li>Use silence to avoid accountability</li>
        <li>Make you feel invisible, guilty, or anxious</li>
      </ul>
      <h3>Why It’s Harmful</h3>
      <p>
        This tactic can cause deep emotional distress. The target is often left confused, walking on eggshells,
        and may blame themselves for the silence—even when they’ve done nothing wrong.
      </p>
      <h3>What You Can Do</h3>
      <ul>
        <li>Recognize the behavior as a form of manipulation</li>
        <li>Set clear boundaries—let them know silence is not a healthy response</li>
        <li>Refuse to engage in the emotional game; stay grounded in your truth</li>
        <li>Seek outside support if the pattern continues or escalates</li>
      </ul>

      <h2>How to Identify Emotional Coercion</h2>
      <p>
        You might be experiencing emotional coercion if you frequently:
      </p>
      <ul>
        <li>Feel responsible for someone else’s emotions or actions</li>
        <li>Change your behavior to avoid emotional backlash</li>
        <li>Feel anxious, guilty, or unsure of your reality after conversations</li>
        <li>Experience chronic self-doubt in the relationship</li>
      </ul>

      <h2>Breaking Free and Healing</h2>
      <p>
        Recovery starts with awareness. You are not responsible for someone else’s manipulation. Set
        boundaries, talk to someone you trust, and consider therapy to unpack deeper emotional effects.
      </p>
    </div>
  );
};

export default EmotionalCoercion;
