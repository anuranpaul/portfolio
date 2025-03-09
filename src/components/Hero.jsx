import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm <span>Anuran Paul</span></h1>
          <h2>Full-Stack Developer</h2>
          <p>I build robust and scalable server-side applications. With expertise in Java, I specialize in creating efficient, secure, and high-performance backend systems.</p>
          <a href="#projects" className="btn">View My Work</a>
          <div className="social-icons">
            <a href="https://github.com/anuranpaul" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/anuranpaul" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/anuranpaul" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="mailto:anuran34@gmail.com">
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        #hero {
          height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
        }
        
        .hero-content {
          max-width: 800px;
        }
        
        .hero-content h1 {
          font-size: 60px;
          line-height: 1.1;
          margin-bottom: 20px;
          color: var(--text);
        }
        
        .hero-content h1 span {
          color: var(--secondary);
        }
        
        .hero-content h2 {
          font-size: 48px;
          line-height: 1.1;
          margin-bottom: 20px;
          color: var(--text-secondary);
        }
        
        .hero-content p {
          font-size: 18px;
          margin-bottom: 30px;
          color: var(--text-secondary);
          max-width: 540px;
        }
        
        .social-icons {
          display: flex;
          margin-top: 30px;
        }
        
        .social-icons a {
          color: var(--text);
          font-size: 22px;
          margin-right: 25px;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        
        .social-icons a:hover {
          color: var(--secondary);
          transform: translateY(-3px);
        }
        
        @media screen and (max-width: 768px) {
          .hero-content h1 {
            font-size: 40px;
          }
          
          .hero-content h2 {
            font-size: 30px;
          }
        }
        
        @media screen and (max-width: 480px) {
          .hero-content h1 {
            font-size: 32px;
          }
          
          .hero-content h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;