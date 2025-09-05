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
      </div>
    </div>
  )
}

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
          <p>Sharing my thoughts on data engineering, cloud infrastructure, and machine learning innovations in the modern tech landscape.</p>
        </motion.section>

        {/* Featured Posts */}
        <motion.section
          className="featured-posts"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Featured Posts</h2>
          <div className="featured-posts-grid">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="featured-post-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="post-image">
                  <div className="image-placeholder">
                    <span className="category-badge">{post.category}</span>
                  </div>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="post-date">
                      <Calendar size={16} />
                      {formatDate(post.date)}
                    </span>
                    <span className="post-read-time">
                      <Clock size={16} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href="#" className="read-more">
                    Read More <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Recent Posts */}
        <motion.section
          className="recent-posts"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Recent Posts</h2>
          <div className="posts-grid">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="post-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="post-header">
                  <span className="category-tag">{post.category}</span>
                  <div className="post-meta">
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#" className="read-more">
                  Read More <ArrowRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Signup */}
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
