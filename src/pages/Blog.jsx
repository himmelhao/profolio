import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      id: 'datasphere-integration',
      title: 'Integrating SAP Datasphere with Databricks',
      excerpt: 'Building a production-grade JDBC connector for reliable data extraction',
      date: 'June 2026',
      readTime: '8 min',
      skills: ['Databricks', 'PySpark', 'JDBC'],
    },
  ]

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
          <p>Technical deep-dives on data engineering, cloud infrastructure, and software development.</p>
        </motion.section>

        {/* Blog Posts */}
        <motion.section
          className="blog-posts"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="blog-card"
              whileHover={{ y: -5 }}
            >
              <Link to={`/blog/${post.id}`} className="card-link">
                <div className="card-header">
                  <h3>{post.title}</h3>
                  <ArrowRight size={20} className="card-icon" />
                </div>
                <p className="card-excerpt">{post.excerpt}</p>
                <div className="card-meta">
                  <span><Calendar size={14} /> {post.date}</span>
                  <span><Clock size={14} /> {post.readTime}</span>
                </div>
                <div className="card-skills">
                  {post.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
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
