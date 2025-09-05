import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Database, Cloud, Code, Hexagon, Cpu, Brain, 
         Terminal, Layers, Eye, Settings, Zap, Shield, FileCode, Boxes, BookOpen, Server, X, 
         MapPin, Calendar, Award, GraduationCap, Briefcase, Clock, Star, Building, School } from 'lucide-react'
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

  // My Journey - The real story behind the fancy titles 😄
  const allExperiences = [
    {
      type: 'work',
      role: 'Data Platform Engineer',
      company: 'Aurobay',
      period: 'Aug 2024 - Present',
      location: 'Gothenburg, Sweden',
      jobType: 'Full-time',
      description: 'Databricks platform development and operations. Building scalable data pipelines and infrastructure templates. Joined Hubbau\'s young talent program.',
      technologies: ['Databricks', 'Azure', 'Terraform', 'Python', 'Spark', 'SQL', 'Delta Lake', 'CI/CD', 'GitHub Actions'],
      achievements: 'Built data pipelines, created Azure Databricks Platform infrastructure templates, onboarded 4 teams to the platform, built Asset Bundle template for easy deployment.'
    },
    {
      type: 'work',
      role: 'Master Thesis Student',
      company: 'Smart Eye',
      period: 'Jan 2024 - Jun 2024',
      location: 'Gothenburg, Sweden',
      jobType: 'Thesis Project',
      description: 'Developed object detection algorithms for forgotten items in cars using computer vision.',
      technologies: ['C++', 'Machine Learning', 'Computer Vision', 'OpenCV', 'ROS', 'MobileNetV2', 'Embedded Systems'],
      achievements: 'Implemented object detection on embedded devices, optimized for Jetson Nano, explored AI in automotive.'
    },
    {
      type: 'education',
      degree: 'Master of Computer Science',
      school: 'Chalmers University of Technology',
      specialization: 'Algorithms, Languages and Logic',
      period: 'Aug 2022 - Aug 2024',
      location: 'Gothenburg, Sweden',
      description: 'Advanced CS studies focusing on theoretical foundations, functional programming, and machine learning.',
      gpa: 'Completed',
      relevantCourses: ['Functional Programming', 'Machine Learning', 'Cyber Security', 'Programming Language Technology']
    },
    {
      type: 'work',
      role: 'Data Engineer',
      company: 'Volvo Autonomous Solutions',
      period: 'Jun 2023 - Aug 2023',
      location: 'Gothenburg, Sweden',
      jobType: 'Summer Internship',
      description: 'Converted autonomous vehicle simulation data into PostgreSQL databases.',
      technologies: ['Python', 'PostgreSQL', 'Git', 'JIRA', 'Parallel Processing', 'Docker'],
      achievements: 'Successfully migrated simulation data, implemented parallel processing, handled large-scale autonomous vehicle datasets.'
    },
    {
      type: 'education',
      degree: 'Bachelor of Information Systems',
      school: 'Dalarna University',
      period: '2020 - 2022',
      location: 'Sweden',
      description: 'Foundation in programming, web development, and business strategy with focus on digital transformation.',
      gpa: 'Completed',
      relevantCourses: ['Java Programming', 'Web Development', 'Database Systems', 'Machine Learning', 'Business Strategy']
    }
    // {
    //   type: 'work',
    //   role: 'Data Analyst Intern',
    //   company: 'Hikvision',
    //   period: 'Jan 2021 - Feb 2021',
    //   location: 'Nanchang, China',
    //   jobType: 'Winter Internship',
    //   description: 'First tech internship focusing on data analysis and machine learning model development.',
    //   technologies: ['Python', 'MySQL', 'scikit-learn', 'Beautiful Soup', 'Web Scraping'],
    //   achievements: 'Built first ML models, mastered web scraping techniques, discovered passion for data engineering.'
    // }
  ]

  return (
    <div className="home">
      {/* Wrapper for About and Experience sections with shared background */}
      <div className="main-sections-wrapper">
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
              
              <p className="intro-description">
                Certified Data Engineer Associate with experience in Cloud Infrastructure, Data Pipelines, and Machine Learning. Currently working with Azure, Databricks, Spark, and Terraform to build scalable data solutions. Passionate about automating workflows and driving data-driven insights.
              </p>
            </div>
            
            <div className="about-image">
              <motion.div
                className="image-placeholder"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/profile.jpg"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      {/* 
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
      */}

      {/* Experience Section */}
      <motion.section
        className="experience-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-30px" }}
      >
        <div className="section-container">
          <h2>My Journey So Far</h2>
          <p className="journey-subtitle">The good, the challenging, and the "wait, how did I end up here?" moments 🚀</p>
          
          <div className="timeline">
            {allExperiences.map((item, index) => (
              <motion.div
                key={`${item.type}-${index}`}
                className={`timeline-item ${item.type}-item`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className={`timeline-marker ${item.type}-marker`}
                  initial={{ opacity: 0 }}
                  whileInView={{ 
                    opacity: 1,
                    transition: {
                      duration: 0.3,
                      delay: index * 0.1 + 0.1,
                      ease: "easeOut"
                    }
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {item.type === 'work' ? (
                    <Building size={20} />
                  ) : (
                    <GraduationCap size={20} />
                  )}
                </motion.div>
                <motion.div 
                  className="timeline-content"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.3,
                      delay: index * 0.1 + 0.2
                    }
                  }}
                  viewport={{ once: true, margin: "-30px" }}
                >
                  {item.type === 'work' ? (
                    <>
                      <motion.div 
                        className="content-header"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            duration: 0.3,
                            delay: index * 0.1 + 0.25
                          }
                        }}
                        viewport={{ once: true, margin: "-30px" }}
                      >
                        <div className="title-info">
                          <h3 className="role-title">{item.role}</h3>
                          <h4 className="company-name">{item.company}</h4>
                        </div>
                        <motion.div 
                          className="job-type-badge"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ 
                            opacity: 1, 
                            y: 0,
                            transition: {
                              duration: 0.3,
                              delay: index * 0.1 + 0.3,
                              ease: "easeOut"
                            }
                          }}
                          viewport={{ once: true, margin: "-30px" }}
                        >
                          {item.jobType}
                        </motion.div>
                      </motion.div>
                      
                      <motion.div 
                        className="content-meta"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            duration: 0.25,
                            delay: index * 0.1 + 0.3
                          }
                        }}
                        viewport={{ once: true, margin: "-30px" }}
                      >
                        <div className="meta-item">
                          <Calendar size={16} />
                          <span>{item.period}</span>
                        </div>
                        <div className="meta-item">
                          <MapPin size={16} />
                          <span>{item.location}</span>
                        </div>
                      </motion.div>
                      
                      <motion.p 
                        className="content-description"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            duration: 0.25,
                            delay: index * 0.1 + 0.35
                          }
                        }}
                        viewport={{ once: true, margin: "-30px" }}
                      >
                        {item.description}
                      </motion.p>
                      
                      <motion.div 
                        className="achievements"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            duration: 0.3,
                            delay: index * 0.1 + 0.4
                          }
                        }}
                        viewport={{ once: true, margin: "-30px" }}
                      >
                        <h5>Key Achievements</h5>
                        <p className="achievements-text">{item.achievements}</p>
                      </motion.div>
                      
                      <motion.div 
                        className="technologies"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            duration: 0.25,
                            delay: index * 0.1 + 0.45
                          }
                        }}
                        viewport={{ once: true, margin: "-30px" }}
                      >
                        {item.technologies.map((tech, i) => (
                          <motion.span 
                            key={i} 
                            className="tech-tag work-tech"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ 
                              opacity: 1, 
                              y: 0,
                              transition: {
                                duration: 0.3,
                                delay: index * 0.1 + 0.5 + (i * 0.02),
                                ease: "easeOut"
                              }
                            }}
                            viewport={{ once: true, margin: "-30px" }}
                            whileHover={{ 
                              y: -2,
                              transition: { duration: 0.15 }
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div 
                        className="content-header"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            duration: 0.3,
                            delay: index * 0.1 + 0.25
                          }
                        }}
                        viewport={{ once: true, margin: "-30px" }}
                      >
                        <div className="title-info">
                          <h3 className="degree-title">{item.degree}</h3>
                          <h4 className="school-name">{item.school}</h4>
                          {item.specialization && (
                            <p className="specialization">{item.specialization}</p>
                          )}
                        </div>
                        <motion.div 
                          className="gpa-badge"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ 
                            opacity: 1, 
                            y: 0,
                            transition: {
                              duration: 0.3,
                              delay: index * 0.1 + 0.3,
                              ease: "easeOut"
                            }
                          }}
                          viewport={{ once: true, margin: "-30px" }}
                        >
                          {item.gpa}
                        </motion.div>
                      </motion.div>
                      
                      <motion.div 
                        className="content-meta"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            duration: 0.25,
                            delay: index * 0.1 + 0.3
                          }
                        }}
                        viewport={{ once: true, margin: "-30px" }}
                      >
                        <div className="meta-item">
                          <Calendar size={16} />
                          <span>{item.period}</span>
                        </div>
                        <div className="meta-item">
                          <MapPin size={16} />
                          <span>{item.location}</span>
                        </div>
                      </motion.div>
                      
                      <motion.p 
                        className="content-description"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            duration: 0.25,
                            delay: index * 0.1 + 0.35
                          }
                        }}
                        viewport={{ once: true, margin: "-30px" }}
                      >
                        {item.description}
                      </motion.p>
                      
                      <motion.div 
                        className="relevant-courses"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            duration: 0.3,
                            delay: index * 0.1 + 0.4
                          }
                        }}
                        viewport={{ once: true, margin: "-30px" }}
                      >
                        <h5>Key Courses</h5>
                        <div className="courses">
                          {item.relevantCourses.map((course, i) => (
                            <motion.span 
                              key={i} 
                              className="course-tag education-course"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ 
                                opacity: 1, 
                                y: 0,
                                transition: {
                                  duration: 0.3,
                                  delay: index * 0.1 + 0.45 + (i * 0.02),
                                  ease: "easeOut"
                                }
                              }}
                              viewport={{ once: true, margin: "-30px" }}
                              whileHover={{ 
                                y: -2,
                                transition: { duration: 0.15 }
                              }}
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      </div>
    </div>
  )
}

export default Home
