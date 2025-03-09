import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useState, useEffect } from 'react';

// Custom hook for typewriter effect with visibility handling
const useTypewriter = (text, speed = 70, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    let timeout;
    let currentIndex = 0;
    
    const initialDelay = setTimeout(() => {

      const typeCharacter = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeCharacter, speed);
        } else {
          setIsComplete(true);
        }
      };
      
      typeCharacter();
    }, delay);
    
    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeout);
    };
  }, [text, speed, delay]);
  
  return { displayText, isComplete };
};

const Hero = () => {
  const titleText = "Hi , I'm ";
  const nameText = "Anuran Paul";
  const roleText = "Full-Stack Developer";
  const descriptionText = "I build robust and scalable server-side applications. With expertise in Java, I specialize in creating efficient, secure, and high-performance backend systems.";
  
  const title = useTypewriter(titleText, 70, 0);
  const name = useTypewriter(nameText, 70, titleText.length * 70 + 300);
  const role = useTypewriter(roleText, 50, titleText.length * 70 + nameText.length * 70 + 600);
  const description = useTypewriter(
    descriptionText,
    20,
    titleText.length * 70 + nameText.length * 70 + roleText.length * 50 + 900
  );
  
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            <span className="title-wrapper">{title.displayText}</span>
            <span className="name">{name.displayText}</span>
            <span className="cursor"></span>
          </h1>
          
          <h2 className="role-wrapper">{role.displayText}</h2>
          
          <p className="description-wrapper">{description.displayText}</p>
          
          {description.isComplete && (
            <>
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
            </>
          )}
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
          white-space: nowrap;
          min-height: 66px;
        }
        
        .title-wrapper, .name {
          display: inline-block;
          white-space: pre;
        }
        
        .hero-content h1 .name {
          color: var(--secondary);
        }
        
        .cursor {
          display: inline-block;
          width: 3px;
          height: 50px;
          background-color: var(--secondary);
          margin-left: 5px;
          animation: blink 1s infinite;
          vertical-align: middle;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .hero-content h2 {
          font-size: 48px;
          line-height: 1.1;
          margin-bottom: 20px;
          color: var(--text-secondary);
          min-height: 52px;
        }
        
        .hero-content p {
          font-size: 18px;
          margin-bottom: 30px;
          color: var(--text-secondary);
          max-width: 540px;
          min-height: 54px;
        }
        
        .role-wrapper, .description-wrapper {
          white-space: pre-wrap;
          display: block;
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
            min-height: 44px;
          }
          
          .hero-content h2 {
            font-size: 30px;
            min-height: 33px;
          }
          
          .cursor {
            height: 35px;
          }
        }
        
        @media screen and (max-width: 480px) {
          .hero-content h1 {
            font-size: 32px;
            min-height: 35px;
          }
          
          .hero-content h2 {
            font-size: 24px;
            min-height: 26px;
          }
          
          .cursor {
            height: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;