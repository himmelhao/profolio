import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import './DatasphereIntegration.css'

const DatasphereIntegration = () => {
  return (
    <div className="blog-post">
      <div className="container">
        {/* Back Button */}
        <motion.div
          className="back-link"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          className="post-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Integrating SAP Datasphere with Databricks</h1>
          <div className="post-meta">
            <div className="meta-item">
              <Calendar size={16} />
              <span>June 2026</span>
            </div>
            <div className="meta-item">
              <Clock size={16} />
              <span>8 min read</span>
            </div>
          </div>
          <div className="skills-tags">
            <span className="skill-tag">Databricks</span>
            <span className="skill-tag">PySpark</span>
            <span className="skill-tag">Data Engineering</span>
            <span className="skill-tag">JDBC</span>
          </div>
        </motion.header>

        {/* TL;DR Section */}
        <motion.section
          className="tldr"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>TL;DR</h2>
          <ul>
            <li>Built a JDBC connector to reliably extract 20 tables from SAP Datasphere</li>
            <li>Handles authentication, schema evolution, and idempotent writes</li>
            <li>Loads 401K+ rows daily with zero duplicates</li>
            <li>Key learnings: JDBC advantages over REST, Datasphere schema management, Delta idempotency</li>
          </ul>
        </motion.section>

        {/* Main Content */}
        <motion.article
          className="post-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* The Challenge */}
          <section>
            <h2>The Challenge</h2>
            <p>
              <strong>SAP Datasphere</strong> publishes data through semantic models. We needed a reliable way to extract 20 tables into Databricks for analytics use.
            </p>
            <p>Building a connector to Datasphere requires:</p>
            <ul>
              <li>Secure authentication (credentials in Secrets)</li>
              <li>Efficient data extraction (JDBC vs REST trade-offs)</li>
              <li>Schema flexibility (Datasphere schemas evolve)</li>
              <li>Idempotent writes (safe to replay on failure)</li>
            </ul>
          </section>

          {/* Architecture */}
          <section>
            <h2>Architecture</h2>
            <div className="code-block">
              <pre>{`SAP Datasphere
    ↓
[JDBC Connector]
    ↓
Databricks Delta Tables
    ↓
[Downstream: Transformations, Analytics]`}</pre>
            </div>
          </section>

          {/* Building the Connector */}
          <section>
            <h2>Building the JDBC Connector</h2>

            <h3>Authentication</h3>
            <p>Store Datasphere credentials in Databricks Secrets:</p>
            <div className="code-block">
              <pre>{`class DatasphereConfig:
    def __init__(self, dbutils, secret_scope, connection_name, url_key):
        self.url = dbutils.secrets.get(scope=secret_scope, key=url_key)
        # JDBC connection string points directly to Datasphere DB
        # No OAuth handshakes per query—credentials cached at cluster level`}</pre>
            </div>

            <h3>JDBC Connection</h3>
            <p>Unlike REST APIs, JDBC gives us direct database access:</p>
            <div className="code-block">
              <pre>{`def read_datasphere_table(spark, config, source_table: str):
    """Read via JDBC directly from Datasphere"""
    
    jdbc_url = config.url
    query = f"(SELECT * FROM {source_table})"
    
    df = spark.read \\
        .format("jdbc") \\
        .option("url", jdbc_url) \\
        .option("query", query) \\
        .option("fetchsize", 10000) \\
        .load()
    
    return df`}</pre>
            </div>

            <p><strong>Benefits over REST:</strong></p>
            <ul>
              <li>Full-table scans are vastly faster than paginated API calls</li>
              <li>No rate limiting per row</li>
              <li>Streaming reads handle large tables without memory pressure</li>
            </ul>

            <h3>Delta Loading</h3>
            <p>Write to Delta with idempotency guarantees:</p>
            <div className="code-block">
              <pre>{`target = f"\\\`{catalog}\\\`.\\\`{schema}\\\`.\\\`{table_name}\\\`"
df.write.format("delta") \\
    .mode("overwrite") \\
    .option("overwriteSchema", "true") \\
    .saveAsTable(target)

print(f"Loaded: {source_table} ({df.count():,} rows)")`}</pre>
            </div>
          </section>

          {/* Key Learnings */}
          <section>
            <h2>Key Learnings</h2>

            <div className="learning-item">
              <h3>JDBC > REST for Datasphere</h3>
              <p>
                REST APIs have rate limits and pagination overhead. JDBC queries let us fetch full tables without throttling. For a 180K-row table, JDBC is 10x faster.
              </p>
            </div>

            <div className="learning-item">
              <h3>Use <code>overwriteSchema</code> for evolving schemas</h3>
              <p>
                Datasphere adds columns frequently. <code>overwriteSchema=true</code> lets the connector adapt without changes.
              </p>
              <div className="code-block">
                <pre>{`df.write.format("delta") \\
    .mode("overwrite") \\
    .option("overwriteSchema", "true") \\
    .saveAsTable(target)`}</pre>
              </div>
            </div>

            <div className="learning-item">
              <h3>Idempotency via overwrite</h3>
              <p>
                Always use <code>mode("overwrite")</code> to ensure jobs are safely replayable. No duplicates on retry.
              </p>
            </div>

            <div className="learning-item">
              <h3>Validate schema at runtime</h3>
              <p>
                When a new column appears in Datasphere, log it. Alert if expected columns disappear.
              </p>
            </div>
          </section>

          {/* Stack */}
          <section>
            <h2>Stack</h2>
            <ul>
              <li>SAP Datasphere (JDBC source)</li>
              <li>Databricks Workflows (orchestration)</li>
              <li>PySpark + Spark SQL (transformations)</li>
              <li>Delta Lake (storage + ACID guarantees)</li>
              <li>Azure Databricks (compute)</li>
            </ul>
          </section>

          {/* Results */}
          <section>
            <h2>Results</h2>
            <p><strong>Connector performance:</strong></p>
            <div className="results-table">
              <table>
                <tbody>
                  <tr>
                    <td>Tables extracted</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>Total rows</td>
                    <td>401,188</td>
                  </tr>
                  <tr>
                    <td>Largest table</td>
                    <td>179,939 rows (product master data)</td>
                  </tr>
                  <tr>
                    <td>Extraction time</td>
                    <td>~3-4 min</td>
                  </tr>
                  <tr>
                    <td>Rows/second</td>
                    <td>~1,500</td>
                  </tr>
                  <tr>
                    <td>Success rate</td>
                    <td>100% (no duplicates across all runs)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p><strong>Why it works:</strong></p>
            <ul>
              <li>✓ JDBC is 10x faster than REST pagination</li>
              <li>✓ <code>overwriteSchema</code> handles Datasphere schema changes</li>
              <li>✓ Idempotent writes prevent duplicates</li>
              <li>✓ Schema validation catches issues early</li>
            </ul>
          </section>

          {/* Summary */}
          <section>
            <h2>Summary</h2>
            <p>
              Building a reliable Datasphere-Databricks connector means choosing JDBC over REST, handling schema evolution gracefully, and enforcing idempotency. These patterns ensure you can extract 400K+ rows daily without manual intervention or data corruption.
            </p>
            <p>
              If you're integrating Datasphere, this approach should save you weeks of debugging and re-engineering.
            </p>
          </section>
        </motion.article>

        {/* CTA */}
        <motion.section
          className="post-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Questions or implementing this?</h2>
          <p>Feel free to reach out. I'd love to hear about your Datasphere integration journey.</p>
          <Link to="/contact" className="cta-button">
            Get in Touch
          </Link>
        </motion.section>
      </div>
    </div>
  )
}

export default DatasphereIntegration
