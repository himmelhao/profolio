import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Automated Warranty Data Pipeline',
      description: 'Built scalable data pipelines in Databricks using Python and Spark for warranty data processing. Integrated Power BI analytics with Unity Catalog for data governance and automated triggers via Azure Function App.',
      image: '/api/placeholder/400/250',
      technologies: ['Databricks', 'Python', 'Spark', 'Azure Functions', 'Power BI', 'Unity Catalog'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Azure Infrastructure Template',
      description: 'Designed and deployed automated Azure and Databricks platform template using Infrastructure as Code. Implemented CI/CD pipelines with GitHub Actions, reducing manual effort by 95% for 4 engineering teams.',
      image: '/api/placeholder/400/250',
      technologies: ['Terraform', 'Azure', 'GitHub Actions', 'CI/CD', 'Copier', 'DevOps'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Object Detection System',
      description: 'Developed efficient algorithm for detecting abandoned objects in vehicle cabins using background model and MobileNetV2. Optimized for embedded execution on Jetson Nano and Linux systems.',
      image: '/api/placeholder/400/250',
      technologies: ['C++', 'Computer Vision', 'OpenCV', 'MobileNetV2', 'ROS', 'Embedded Systems'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'High-Performance Data Conversion',
      description: 'Successfully converted simulation data to PostgreSQL tables with 100% success rate. Created parallel processing method using functional programming, achieving 40x speed improvement.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'PostgreSQL', 'Parallel Processing', 'Docker', 'Functional Programming'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Data Verification Model',
      description: 'Built verification model using Python and scikit-learn for accuracy assessment. Implemented web scraping and data gathering from websites, Excel files, and MySQL databases.',
      image: '/api/placeholder/400/250',
      technologies: ['Python', 'scikit-learn', 'MySQL', 'Beautiful Soup', 'Data Analysis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Databricks Asset Bundle Template',
      description: 'Developed reusable Databricks project template with Delta Lake integration. Implemented testing framework and automated job scheduling using Databricks workflows.',
      image: '/api/placeholder/400/250',
      technologies: ['Databricks', 'Delta Lake', 'Python', 'SQL', 'Workflow Automation'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

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
          <p>Here are some of the data engineering, cloud infrastructure, and machine learning projects I've worked on. Each project demonstrates my expertise in building scalable, efficient solutions using modern technologies.</p>
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          className="featured-projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="featured-project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <Calendar size={40} />
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <Github size={18} />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Other Projects */}
        <motion.section
          className="other-projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Other Projects</h2>
          <div className="projects-grid">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-actions">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag small">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Projects
