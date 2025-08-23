import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import './Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Data Pipelines with Databricks',
      excerpt: 'Learn how to design and implement automated data pipelines using Databricks, Spark, and Unity Catalog for enterprise-scale data processing.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Data Engineering',
      featured: true
    },
    {
      id: 2,
      title: 'Infrastructure as Code with Terraform and Azure',
      excerpt: 'Best practices for implementing Infrastructure as Code using Terraform to deploy and manage Azure cloud resources efficiently.',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Cloud Infrastructure',
      featured: true
    },
    {
      id: 3,
      title: 'Optimizing Computer Vision Models for Edge Devices',
      excerpt: 'A comprehensive guide to optimizing machine learning models for embedded systems using techniques like MobileNetV2 and quantization.',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Machine Learning',
      featured: false
    },
    {
      id: 4,
      title: 'Parallel Processing in Python for Data Engineering',
      excerpt: 'Learn functional programming techniques to speed up data processing and achieve significant performance improvements.',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Python',
      featured: false
    },
    {
      id: 5,
      title: 'Azure DevOps for Data Engineering Workflows',
      excerpt: 'Implementing CI/CD pipelines for data engineering projects using Azure DevOps, Git, and automated testing.',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'DevOps',
      featured: false
    },
    {
      id: 6,
      title: 'Real-time Data Processing with Apache Kafka',
      excerpt: 'Building event-driven architectures for real-time data streaming and processing in enterprise environments.',
      date: '2023-12-15',
      readTime: '11 min read',
      category: 'Data Engineering',
      featured: false
    }
  ]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured)

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
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
