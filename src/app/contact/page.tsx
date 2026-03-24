import styles from './contact.module.css';

export default function ContactPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1>Contact The Auction Department</h1>
        <p>Whether you are buying, selling, or just seeking advice, our expert team is here to assist you with all your property auction needs.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.formContainer}>
          <form className={styles.contactForm}>
            <h2>Send us a Message</h2>
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
              <label>Subject</label>
              <select required>
                <option value="">Select a subject...</option>
                <option value="selling">Selling at Auction</option>
                <option value="buying">Buying at Auction</option>
                <option value="valuation">Request a Valuation</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea placeholder="How can we help you?" rows={6} required></textarea>
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>Send Message</button>
          </form>
        </div>

        <aside className={styles.contactDetails}>
          <div className={styles.detailCard}>
            <h3>General Inquiries</h3>
            <div className={styles.contactItem}>
              <strong>Telephone:</strong>
              <a href="tel:02031740330">0203 174 0330</a>
            </div>
            <div className={styles.contactItem}>
              <strong>Email:</strong>
              <a href="mailto:info@auctiondepartment.com">info@auctiondepartment.com</a>
            </div>
          </div>

          <div className={styles.detailCard}>
            <h3>Our Offices</h3>
            <div className={styles.addressBlock}>
              <strong>Head Office:</strong>
              <p>Hillsboro’<br/>377 Southchurch Road,<br/>Southend on Sea,<br/>Essex SS1 2PQ</p>
            </div>
            <div className={styles.addressBlock}>
              <strong>Registered Office:</strong>
              <p>Monometer House,<br/>Rectory Grove,<br/>Leigh on Sea,<br/>Essex SS9 2HN</p>
            </div>
          </div>

          <div className={styles.mapContainer}>
             {/* Placeholder for Map */}
             <div className={styles.mapPlaceholder}>
                <p>Interactive Map</p>
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
