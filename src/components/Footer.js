import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Pamela Terrell. All rights reserved.</p>
      <p>
        This website is for educational purposes only and does not constitute
        professional psychological advice.
      </p>
      <p>
        Learn more about the author at{" "}
        <a
          href="https://www.pamelajterrell.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          pamelajterrell.com
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
