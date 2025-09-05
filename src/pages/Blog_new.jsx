import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, FileText } from 'lucide-react'
import './Blog.css'

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <motion.section
          className="blog-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Blog & Insights</h1>
          <p>This is where I'll share my thoughts on data engineering, cloud infrastructure, and software development. Stay tuned for upcoming content!</p>
        </motion.section>

        {/* Empty State */}
        <motion.section
          className="empty-state"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="empty-state-content">
            <FileText size={80} className="empty-icon" />
            <h2>Coming Soon</h2>
            <p>I'm currently working on some exciting blog posts about data engineering, cloud infrastructure, and software development. Check back soon for fresh insights and technical deep-dives!</p>
            <div className="planned-topics">
              <h3>Planned Topics:</h3>
              <ul>
                <li>Building Scalable Data Pipelines with Databricks</li>
                <li>Infrastructure as Code Best Practices</li>
                <li>Optimizing Python for Data Processing</li>
                <li>Cloud Architecture Patterns</li>
                <li>Machine Learning in Production</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          className="newsletter"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to get notified about new blog posts and updates.</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Blog
