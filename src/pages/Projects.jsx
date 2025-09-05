import { motion, AnimatePresence } from 'framer-motion'
import { Github, Calendar, X, Code, Settings, Palette } from 'lucide-react'
import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const workProjects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      shortDescription: 'A responsive portfolio website built with React and Vite showcasing modern web development skills.',
      fullDescription: 'This portfolio website demonstrates my front-end development capabilities using modern technologies and best practices. The project showcases clean design principles, smooth user interactions, and optimized performance.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Vite', 'JavaScript', 'CSS3', 'Framer Motion', 'Responsive Design'],
      githubUrl: 'https://github.com/himmelhao/profolio',
      technicalDetails: {
        development: [
          'Built with React 18 and modern functional components using hooks',
          'Vite for fast development and optimized production builds',
          'Component-based architecture for maintainable code',
          'ES6+ JavaScript features for clean, modern syntax'
        ],
        styling: [
          'Custom CSS3 with CSS Grid and Flexbox for responsive layouts',
          'CSS custom properties (variables) for consistent theming',
          'Mobile-first responsive design approach',
          'Smooth hover effects and transitions'
        ],
        animations: [
          'Framer Motion for smooth, professional animations',
          'Page transitions and scroll-triggered animations',
          'Interactive hover states and micro-interactions',
          'Performance-optimized animations using transform properties'
        ],
        features: [
          'Fully responsive design across all device sizes',
          'Fast loading times with optimized assets',
          'Clean, modern UI/UX design',
          'Contact form with email integration',
          'SEO-friendly structure and metadata'
        ]
      }
    }
  ]

  return (
    <div className="projects">
      <div className="container">
        <motion.section
          className="projects-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>My Projects</h1>
          <p>Here's my latest project - this portfolio website itself! Click to explore the technical details.</p>
        </motion.section>

        {/* Projects */}
        <motion.section
          className="featured-projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="featured-grid">
            {workProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="featured-project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <Calendar size={40} />
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a 
                      href={project.githubUrl} 
                      className="project-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h2>{selectedProject.title}</h2>
                  <button 
                    className="close-button"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="modal-content">
                  <p className="project-description">{selectedProject.fullDescription}</p>
                  
                  <div className="technical-sections">
                    <div className="tech-section">
                      <h3><Code size={20} /> Development</h3>
                      <ul>
                        {selectedProject.technicalDetails.development.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="tech-section">
                      <h3><Palette size={20} /> Styling & Design</h3>
                      <ul>
                        {selectedProject.technicalDetails.styling.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="tech-section">
                      <h3><Settings size={20} /> Animations & Interactions</h3>
                      <ul>
                        {selectedProject.technicalDetails.animations.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="tech-section">
                      <h3><Calendar size={20} /> Key Features</h3>
                      <ul>
                        {selectedProject.technicalDetails.features.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="modal-technologies">
                    <h3>Technologies Used</h3>
                    <div className="tech-tags">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="tech-tag large">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-actions">
                    <a 
                      href={selectedProject.githubUrl} 
                      className="github-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                      View Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Projects
