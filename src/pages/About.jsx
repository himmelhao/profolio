import { motion } from 'framer-motion'
import { Database, Cloud, Cpu, Brain } from 'lucide-react'
import './About.css'

const About = () => {
  const skills = [
    {
      category: 'Data Engineering',
      icon: <Database size={24} />,
      technologies: ['Python', 'Spark', 'SQL', 'Delta Lake', 'Databricks', 'PostgreSQL']
    },
    {
      category: 'Cloud Infrastructure', 
      icon: <Cloud size={24} />,
      technologies: ['Azure', 'Terraform', 'CI/CD', 'GitHub Actions', 'DevOps', 'Docker']
    },
    {
      category: 'Programming',
      icon: <Cpu size={24} />,
      technologies: ['Python', 'C++', 'Java', 'Haskell', 'Erlang', 'Linux']
    },
    {
      category: 'Machine Learning',
      icon: <Brain size={24} />,
      technologies: ['Computer Vision', 'OpenCV', 'scikit-learn', 'Deep Learning', 'MobileNetV2']
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
    <div className="about">
      <div className="container">
        <motion.section
          className="about-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-content">
            <div className="about-text">
              <h1>About Me</h1>
              <p className="about-intro">
                I'm a Certified Data Engineer Associate with expertise in cloud infrastructure, data pipelines, 
                and machine learning. Currently working with Azure, Databricks, Spark, and Terraform to build 
                scalable data solutions that drive business insights.
              </p>
              
              <p>
                With a Master's in Computer Science from Chalmers University of Technology and hands-on experience 
                at companies like Aurobay and Volvo, I specialize in automating complex data workflows and 
                optimizing system performance. I'm passionate about leveraging cutting-edge technologies to solve 
                real-world problems in data engineering and machine learning.
              </p>
              
              <div className="about-stats">
                <div className="stat">
                  <h3>4+</h3>
                  <p>Companies Worked</p>
                </div>
                <div className="stat">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>95%</h3>
                  <p>Efficiency Improvement</p>
                </div>
                <div className="stat">
                  <h3>2</h3>
                  <p>Certifications</p>
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
                  src="/profile.jpg"
                  alt="Profile"
                  className="profile-photo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="skills-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <h3>{skill.category}</h3>
                <div className="skill-tags">
                  {skill.technologies.map((tech) => (
                    <span key={tech} className="skill-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="experience-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
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
        </motion.section>
      </div>
    </div>
  )
}

export default About
