import styles from './instant-offer.module.css';

export default function InstantOfferPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.hero}>
        <h1>Get an Instant Cash Offer</h1>
        <p>A guaranteed sale within days, not months. Skip the auction and get a direct offer for your property today.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.formContainer}>
          <form className={styles.offerForm}>
            <h2>Property Information</h2>
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
              <label>Full Property Address</label>
              <textarea placeholder="Address and Postcode..." rows={3} required></textarea>
            </div>
            <div className={styles.inputGroup}>
              <label>Estimated Market Value</label>
              <input type="text" placeholder="£..." />
            </div>
            <div className={styles.inputGroup}>
              <label>Reason for Sale</label>
              <select required>
                <option value="">Select Reason...</option>
                <option value="relocation">Relocation</option>
                <option value="financial">Financial Security</option>
                <option value="inherited">Inherited Property</option>
                <option value="retirement">Retirement</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button type="submit" className={`btn btn-secondary ${styles.submitBtn}`}>Get Instant Offer Quote</button>
          </form>
        </div>

        <aside className={styles.benefitsAside}>
          <div className={styles.benefitBox}>
            <h3>Why choose our Instant Offer?</h3>
            <ul className={styles.benefitList}>
              <li><strong>Guaranteed Sale:</strong> No fall-throughs. Once we agree, the deal is final.</li>
              <li><strong>Zero Commissions:</strong> You pay absolutely no selling fees to us.</li>
              <li><strong>Flexible Dates:</strong> We complete on your timescale, as fast as 7 days.</li>
              <li><strong>Private Sale:</strong> No public marketing or viewings required.</li>
            </ul>
          </div>
          <div className={styles.trustBadge}>
            <h3>Regulated & Professional</h3>
            <p>We are members of the Property Ombudsman and adhere strictly to professional standards, ensuring a fair and transparent cash purchase.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
