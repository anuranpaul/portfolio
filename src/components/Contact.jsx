const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-text">
            <p>I'm currently open to new opportunities and would love to hear about your project. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <a href="mailto:anuran34@gmail.com" className="btn">
              Say Hello
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        #contact {
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        
        .contact-content {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .contact-text p {
          color: var(--text-secondary);
          font-size: 18px;
          margin-bottom: 30px;
        }
        
        @media screen and (max-width: 768px) {
          .contact-text p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact; 