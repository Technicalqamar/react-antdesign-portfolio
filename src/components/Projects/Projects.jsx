import { useState } from 'react';
import { Card, Button, Tag, Modal } from 'antd';
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';
import schoolImage from '../../assets/images/school-management.png';
import hospitalImage from '../../assets/images/hospital-management.png';
import portfolioProjectImage from '../../assets/images/portfolio-project.png';
import './Projects.css';

const projectList = [
  {
    title: 'School Management System',
    tech: ['React', 'Firebase'],
    description: 'A complete school management platform for managing students, teachers, attendance, and grades efficiently.',
    detailedDescription: 'This is a full-featured school management system built with React and Firebase. It includes modules for student registration, teacher management, attendance tracking, grade management, and real-time notifications. The application uses Firebase Authentication for secure login and Firestore for real-time data storage.',
    status: 'Completed',
    image: schoolImage,
    liveDemoUrl: 'https://your-live-demo.com/school-management',
    githubUrl: 'https://github.com/Technicalqamar',
  },
  {
    title: 'Hospital Management System',
    tech: ['React', 'JavaScript'],
    description: 'A hospital management system designed to streamline patient records, appointments, and staff coordination.',
    detailedDescription: 'This hospital management system simplifies daily operations by providing tools for patient registration, appointment scheduling, doctor assignments, billing, and prescription management. Built with React and vanilla JavaScript, it offers a clean and intuitive interface for healthcare professionals.',
    status: 'In Progress',
    image: hospitalImage,
    liveDemoUrl: 'https://your-live-demo.com/hospital-management',
    githubUrl: 'https://github.com/Technicalqamar',
  },
  {
    title: 'Portfolio Website',
    tech: ['React', 'Ant Design'],
    description: 'A modern personal portfolio website showcasing skills, projects, and professional experience.',
    detailedDescription: 'This portfolio website was built using React and Ant Design to create a clean, professional, and responsive personal brand presence. It features sections for skills, projects, testimonials, and contact information. The design focuses on simplicity, readability, and a great user experience across all devices.',
    status: 'Completed',
    image: portfolioProjectImage,
    liveDemoUrl: 'https://react-antdesign-portfolio.vercel.app/',
    githubUrl: 'https://github.com/Technicalqamar/react-antdesign-portfolio',
  },
];

const Projects = () => {
  // Tracks which project is selected for the details modal
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-heading">My Projects</h2>
        <p className="projects-intro">
          Here are some of the projects I have built. Each project reflects my
          skills in modern web technologies and my passion for building useful
          applications.
        </p>

        <div className="projects-grid">
          {projectList.map((project) => (
            <Card key={project.title} className="project-card" hoverable>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-actions">
                <Button
                  type="primary"
                  icon={<FaExternalLinkAlt />}
                  size="small"
                  href={project.liveDemoUrl}
                  target="_blank"
                >
                  Live Demo
                </Button>
                <Button
                  icon={<FaGithub />}
                  size="small"
                  href={project.githubUrl}
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button
                  icon={<FaEye />}
                  size="small"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal showing full project details */}
      <Modal
        title={selectedProject?.title}
        open={selectedProject !== null}
        onCancel={() => setSelectedProject(null)}
        footer={null}
        width={520}
        centered
      >
        {selectedProject && (
          <div className="modal-content">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <p className="modal-description">{selectedProject.detailedDescription}</p>

            <div className="modal-info">
              <p><strong>Technologies:</strong></p>
              <div className="modal-tags">
                {selectedProject.tech.map((tech) => (
                  <Tag key={tech} color="blue">{tech}</Tag>
                ))}
              </div>
            </div>

            <div className="modal-info">
              <p><strong>Status:</strong> {selectedProject.status}</p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
