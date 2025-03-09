import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com/anuranpaul" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/anuranpaul" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/anuranpaul" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
          <p className="copyright">Designed & Built by Anuran Paul © {new Date().getFullYear()}</p>
        </div>
      </div>
      
      <style jsx>{`
        footer {
          padding: 40px 0;
          background-color: var(--bg);
        }
        
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .social-links {
          display: flex;
          margin-bottom: 20px;
        }
        
        .social-links a {
          color: var(--text-secondary);
          font-size: 20px;
          margin: 0 15px;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        
        .social-links a:hover {
          color: var(--secondary);
          transform: translateY(-3px);
        }
        
        .copyright {
          color: var(--text-secondary);
          font-size: 14px;
        }
      `}</style>
    </footer>
  );
};

export default Footer; 