import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Raven Exchange. All rights reserved.
      </div>
      <div className="social-icons">
        <a href="#" aria-label="Twitter">Twitter</a>
        <a href="#" aria-label="Facebook">Facebook</a>
        <a href="#" aria-label="LinkedIn">LinkedIn</a>
      </div>
      <div className="contact">
        <a href="#">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
