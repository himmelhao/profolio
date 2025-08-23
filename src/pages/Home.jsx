import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Database, Cloud, Code, Hexagon, Cpu, Brain, 
         Terminal, Layers, Eye, Settings, Zap, Shield, FileCode, Boxes, BookOpen, Server, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Home.css'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('Backend')
  const [showAllSkillsModal, setShowAllSkillsModal] = useState(false)
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skills = [
    {
      category: 'Backend',
      icon: <Database size={24} />,
      technologies: [
        { name: 'Python', logo: '🐍', proficiency: 85, description: 'Primary language for data engineering and automation' },
        { name: 'Spark', logo: '⚡', proficiency: 80, description: 'Distributed data processing at Aurobay' },
        { name: 'SQL', logo: '🗃️', proficiency: 90, description: 'Database optimization and complex queries' },
        { name: 'Delta Lake', logo: '🏔️', proficiency: 75, description: 'Data lakehouse architecture implementation' },
        { name: 'Databricks', logo: '🧱', proficiency: 85, description: 'Platform for automated data pipelines' },
        { name: 'PostgreSQL', logo: '🐘', proficiency: 70, description: 'Relational database management' }
      ]
    },
    {
      category: 'Cloud',
      icon: <Cloud size={24} />,
      technologies: [
        { name: 'Azure', logo: '☁️', proficiency: 80, description: 'Infrastructure design and deployment' },
        { name: 'Terraform', logo: '🌍', proficiency: 75, description: 'Infrastructure as Code automation' },
        { name: 'CI/CD', logo: '🔄', proficiency: 70, description: 'Continuous integration and deployment' },
        { name: 'GitHub Actions', logo: '🐙', proficiency: 75, description: 'Workflow automation and DevOps' },
        { name: 'DevOps', logo: '⚙️', proficiency: 70, description: 'Development and operations practices' },
        { name: 'Docker', logo: '🐳', proficiency: 65, description: 'Containerization and deployment' }
      ]
    },
    {
      category: 'Programming',
      icon: <Cpu size={24} />,
      technologies: [
        { name: 'Python', logo: '🐍', proficiency: 85, description: 'Advanced programming and scripting' },
        { name: 'C++', logo: '⚡', proficiency: 70, description: 'System programming and optimization' },
        { name: 'Java', logo: '☕', proficiency: 65, description: 'Object-oriented programming' },
        { name: 'Haskell', logo: 'λ', proficiency: 55, description: 'Functional programming paradigm' },
        { name: 'Erlang', logo: '📡', proficiency: 50, description: 'Concurrent and fault-tolerant systems' },
        { name: 'Linux', logo: '🐧', proficiency: 75, description: 'System administration and scripting' }
      ]
    },
    {
      category: 'AI',
      icon: <Brain size={24} />,
      technologies: [
        { name: 'Computer Vision', logo: '👁️', proficiency: 80, description: 'Object detection and image processing' },
        { name: 'OpenCV', logo: '📷', proficiency: 75, description: 'Real-time computer vision applications' },
        { name: 'scikit-learn', logo: '🤖', proficiency: 70, description: 'Machine learning model development' },
        { name: 'Deep Learning', logo: '🧠', proficiency: 65, description: 'Neural network architectures' },
        { name: 'MobileNetV2', logo: '📱', proficiency: 60, description: 'Efficient mobile computer vision' }
      ]
    }
  ]

  const experience = [
    {
      role: 'Data Engineer',
      company: 'Aurobay',
      period: '2024.8 - Present',
      description: 'Automated warranty data pipelines in Databricks and designed Azure infrastructure templates using Terraform, reducing manual effort by 95%.'
    },
    {
      role: 'Master Thesis Student',
      company: 'Smart Eye',
      period: '2024.1 - 2024.6', 
      description: 'Developed efficient algorithm for detecting abandoned objects in vehicle cabins using computer vision and machine learning.'
    },
    {
      role: 'Data Engineer Intern',
      company: 'Volvo Autonomous Solutions',
      period: '2023.6 - 2023.8',
      description: 'Converted simulation data to PostgreSQL with 100% success rate and optimized processing speed by 40x using parallel programming.'
    },
    {
      role: 'Data Analyst Intern', 
      company: 'Hikvision',
      period: '2021.1 - 2021.2',
      description: 'Built verification models using Python and scikit-learn, and gathered data from various sources including web scraping.'
    }
  ]

  return (
    <div className="home">
      {/* About Section */}
      <motion.section
        className="about-section main-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-container">
          <div className="about-content">
            <div className="about-text">
              <h1>Hej, I'm <span className="name-highlight">Hao Hu</span></h1>
              <p className="role-title">Data Platform Engineer</p>
              <p className="location-info">
                📍 Gothenburg, Sweden • <a href="https://horse-powertrain.com/" target="_blank" rel="noopener noreferrer">@Aurobay</a>
              </p>
              
              <div className="intro-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🚀</span>
                  <span>Build and automate data workflows</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">☁️</span>
                  <span>Azure & Databricks expertise</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🤖</span>
                  <span>Machine Learning & AI solutions</span>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <motion.div
                className="image-placeholder"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="src/images/profile.jpg"
                  alt="Profile"
                  className="profile-photo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                />
              </motion.div>
              
              <div className="social-and-cv">
                <div className="social-links">
                  <a href="https://github.com/haohu1108" className="social-link" aria-label="GitHub">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/haohu1108/" className="social-link" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:huhaohu001108@gmail.com" className="social-link" aria-label="Email">
                    <Mail size={24} />
                  </a>
                  <button className="social-link cv-button" title="View My CV">
                    CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="skills-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-container">
          <h2>Tech Stack</h2>
          <p className="skills-subtitle">My technical skills automatically analyzed from GitHub repositories and contributions.</p>
          
          <div className="top-skills-header">
            <h3>Top Skills Analysis</h3>
          </div>
          
          {/* Category Selection Buttons */}
          <div className="category-selector">
            {skills.map((skillCategory) => (
              <motion.button
                key={skillCategory.category}
                className={`category-btn ${selectedCategory === skillCategory.category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(skillCategory.category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="btn-icon">
                  {skillCategory.icon}
                </div>
                <span>{skillCategory.category}</span>
              </motion.button>
            ))}
          </div>
          
          <div className="skills-categories">
            {skills
              .filter(skillCategory => skillCategory.category === selectedCategory)
              .map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                layout
              >
                <div className="category-header">
                  <div className="category-icon">
                    {skillCategory.icon}
                  </div>
                  <h4 className="category-title">{skillCategory.category}</h4>
                </div>
                
                <div className="category-skills">
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      layout
                    >
                      <div className="skill-icon">
                        <span className="skill-logo">{tech.logo}</span>
                      </div>
                      
                      <div className="skill-content">
                        <div className="skill-header">
                          <span className="skill-name">{tech.name}</span>
                          <div className="skill-meta">
                            <span className={`skill-level ${
                              tech.proficiency >= 80 ? 'expert' : 
                              tech.proficiency >= 60 ? 'intermediate' : 'beginner'
                            }`}>
                              {tech.proficiency >= 80 ? 'Expert' : 
                               tech.proficiency >= 60 ? 'Intermediate' : 'Beginner'}
                            </span>
                          </div>
                        </div>
                        
                        <p className="skill-description">{tech.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View Complete Tech Stack Button */}
          <div className="complete-stack-section">
            <motion.button
              className="view-complete-btn"
              onClick={() => setShowAllSkillsModal(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Complete Tech Stack</span>
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* All Skills Modal */}
      {showAllSkillsModal && (
        <motion.div
          className="skills-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowAllSkillsModal(false)}
        >
          <motion.div
            className="skills-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Complete Tech Stack</h3>
              <button
                className="modal-close-btn"
                onClick={() => setShowAllSkillsModal(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="modal-content">
              <div className="all-skills-grid">
                {skills.map((category) => (
                  <div key={category.category} className="modal-category">
                    <div className="modal-category-header">
                      <div className="modal-category-icon">
                        {category.icon}
                      </div>
                      <h4>{category.category}</h4>
                    </div>
                    <div className="modal-skills-list">
                      {category.technologies.map((tech) => (
                        <div key={tech.name} className="modal-skill-item">
                          <span className="modal-skill-logo">{tech.logo}</span>
                          <span className="modal-skill-name">{tech.name}</span>
                          <span className={`modal-skill-level ${
                            tech.proficiency >= 80 ? 'expert' : 
                            tech.proficiency >= 60 ? 'intermediate' : 'beginner'
                          }`}>
                            {tech.proficiency >= 80 ? '⭐⭐⭐' : 
                             tech.proficiency >= 60 ? '⭐⭐' : '⭐'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Experience Section */}
      <motion.section
        className="experience-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-container">
          <h2>Experience</h2>
          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="experience-marker"></div>
                <div className="experience-content">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <p className="experience-period">{exp.period}</p>
                  <p className="experience-description">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
