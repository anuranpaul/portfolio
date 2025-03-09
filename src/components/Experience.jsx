import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('job1');

  // Job data
  const jobs = [
    {
      id: 'job1',
      title: 'Software Engineer',
      company: 'Capgemini',
      duration: 'March 2024 - Present',
      responsibilities: [
        'Developed and optimized backend services using Java (Spring Boot, Spring MVC, Hibernate), improving application scalability and maintainability.',
        'Refactored core application logic following SOLID principles and applied relevant design patterns (e.g., Factory, Singleton) where applicable, leading to a 20% improvement in code maintainability.',
        'Implemented high-performance REST APIs, reducing response time by 40% through Spring Boot optimizations, Hibernate query tuning, and performance monitoring using AWS CloudWatch.',
        'Integrated Spring Security with JWT authentication, enhancing API security and ensuring compliance with industry security standards.',
        'Developed and deployed containerized microservices using Spring Cloud and Docker on AWS ECS, improving system scalability and deployment efficiency.',
        'Implemented asynchronous messaging with RabbitMQ, improving inter-service communication and reducing system latency by 30%.'
      ]
    }
    // {
    //   id: 'job2',
    //   title: 'Backend Developer',
    //   company: 'Company Two',
    //   duration: 'March 2019 - December 2021',
    //   responsibilities: [
    //     'Built and maintained Python/Django APIs that processed over 1 million transactions daily.',
    //     'Implemented caching strategies with Redis that reduced database load by 60%.',
    //     'Collaborated with the DevOps team to containerize applications using Docker and set up CI/CD pipelines.',
    //     'Developed and maintained data processing pipelines that handled large volumes of user analytics.'
    //   ]
    // },
    // {
    //   id: 'job3',
    //   title: 'Junior Developer',
    //   company: 'Company Three',
    //   duration: 'June 2017 - February 2019',
    //   responsibilities: [
    //     'Assisted in developing and maintaining backend services for a SaaS platform.',
    //     'Implemented authentication and authorization systems using OAuth 2.0 and JWT.',
    //     'Collaborated with frontend developers to integrate client-side applications with backend APIs.',
    //     'Participated in code reviews and helped improve development processes and standards.'
    //   ]
    // }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Where I've Worked</h2>
        <div className="tab-container">
          <div className="tab-list">
            {jobs.map(job => (
              <button
                key={job.id}
                className={`tab-button ${activeTab === job.id ? 'active' : ''}`}
                onClick={() => setActiveTab(job.id)}
              >
                {job.company}
              </button>
            ))}
          </div>
          <div className="tab-content">
            {jobs.map(job => (
              <div
                key={job.id}
                className={`tab-panel ${activeTab === job.id ? 'active' : ''}`}
                style={{ display: activeTab === job.id ? 'block' : 'none' }}
              >
                <h3 className="job-title">{job.title}</h3>
                <h4 className="job-company">{job.company}</h4>
                <p className="job-duration">{job.duration}</p>
                <div className="job-description">
                  <ul>
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .tab-container {
          display: flex;
          margin-top: 50px;
        }
        
        .tab-list {
          display: flex;
          flex-direction: column;
          min-width: 200px;
          border-left: 2px solid var(--text-secondary);
        }
        
        .tab-button {
          padding: 15px 20px;
          text-align: left;
          background: transparent;
          border: none;
          color: var(--text);
          cursor: pointer;
          font-size: 16px;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
          position: relative;
        }
        
        .tab-button:hover {
          color: var(--secondary);
          background: rgba(100, 255, 218, 0.1);
        }
        
        .tab-button.active {
          color: var(--secondary);
        }
        
        .tab-button.active::before {
          content: "";
          position: absolute;
          width: 2px;
          height: 100%;
          background-color: var(--secondary);
          left: -2px;
          top: 0;
        }
        
        .tab-content {
          padding: 0 30px;
          flex-grow: 1;
        }
        
        .job-title {
          font-size: 22px;
          margin-bottom: 5px;
          color: var(--text);
        }
        
        .job-company {
          font-size: 18px;
          margin-bottom: 15px;
          color: var(--secondary);
        }
        
        .job-duration {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        
        .job-description ul {
          padding-left: 20px;
          margin-bottom: 20px;
        }
        
        .job-description li {
          position: relative;
          padding-left: 30px;
          margin-bottom: 10px;
          color: var(--text-secondary);
        }
        
        .job-description li::before {
          content: "▹";
          position: absolute;
          left: 0;
          top: 0;
          color: var(--secondary);
          font-size: 20px;
          line-height: 20px;
        }
        
        @media screen and (max-width: 768px) {
          .tab-container {
            flex-direction: column;
          }
          
          .tab-list {
            flex-direction: row;
            overflow-x: auto;
            min-width: 100%;
            border-left: none;
            border-bottom: 2px solid var(--text-secondary);
          }
          
          .tab-button {
            padding: 10px 15px;
          }
          
          .tab-button.active::before {
            width: 100%;
            height: 2px;
            left: 0;
            bottom: -2px;
            top: auto;
          }
          
          .tab-content {
            padding: 30px 0 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;