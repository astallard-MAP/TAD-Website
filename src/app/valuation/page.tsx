import styles from './valuation.module.css';

export default function ValuationPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1>Free Property Appraisal</h1>
        <p>Expert, confidential, and accurate valuations for all property types. Find out what your property could achieve at auction.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.formContainer}>
          <form className={styles.valuationForm}>
            <h2>Property Details</h2>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="email@address.com" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Phone Number</label>
              <input type="tel" placeholder="0203..." required />
            </div>
            <div className={styles.inputGroup}>
              <label>Property Address</label>
              <textarea placeholder="Enter the full address including postcode..." rows={3} required></textarea>
            </div>
            <div className={styles.inputGroup}>
              <label>Property Type</label>
              <select required>
                <option value="">Select Type...</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="land">Land</option>
                <option value="development">Development Opportunity</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label>Additional Information</label>
              <textarea placeholder="Any specific details or features we should know about?" rows={4}></textarea>
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>Request Appraisal</button>
          </form>
        </div>

        <aside className={styles.infoAside}>
          <div className={styles.infoCard}>
            <h3>What happens next?</h3>
            <ul className={styles.infoList}>
              <li><strong>Review:</strong> One of our directors will review your property details.</li>
              <li><strong>Contact:</strong> We will contact you within 24 hours to discuss our initial appraisal.</li>
              <li><strong>Expertise:</strong> We provide detailed advice on guide and reserve prices for auction.</li>
              <li><strong>Secure:</strong> No obligation and completely confidential.</li>
            </ul>
          </div>
          <div className={styles.directContact}>
            <h3>Prefer to speak with us?</h3>
            <p>Our valuation team is ready to help. Give us a call directly:</p>
            <a href="tel:02031740330" className={styles.phoneLink}>0203 174 0330</a>
          </div>
        </aside>
      </div>
    </div>
  );
}
