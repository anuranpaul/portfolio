import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-top">
        <FaFolderOpen className="folder-icon" />
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
      <h3 className="project-title">
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
      </h3>
      <div className="project-description">
        <p>{project.description}</p>
      </div>
      <div className="project-tech">
        {project.technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>

      <style jsx>{`
        .project-card {
          background: #112240;
          border-radius: 5px;
          padding: 25px;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .folder-icon {
          color: var(--secondary);
          font-size: 40px;
        }

        .project-links {
          display: flex;
        }

        .project-links a {
          color: var(--text);
          font-size: 20px;
          margin-left: 15px;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .project-links a:hover {
          color: var(--secondary);
        }

        .project-title {
          font-size: 20px;
          margin-bottom: 10px;
          color: var(--text);
        }

        .project-title a {
          color: var(--text);
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .project-title a:hover {
          color: var(--secondary);
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: auto;
        }

        .project-tech span {
          color: var(--text-secondary);
          font-size: 12px;
          font-family: var(--font-mono);
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
