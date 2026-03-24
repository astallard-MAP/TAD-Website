import Link from 'next/link';
import styles from './sell.module.css';

export default function SellPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.hero}>
        <h1>Sell Your Property with The Auction Department</h1>
        <p>A fast, transparent, and secure way to sell your land or property. Achieve an immediate sale with fixed completion dates.</p>
        <Link href="/valuation" className={`btn btn-primary ${styles.cta}`}>Get Your Free Valuation</Link>
      </div>

      <div className={styles.processGroup}>
        <h2>Our Three-Step Selling Process</h2>
        <div className={styles.processGrid}>
          <div className={styles.processStep}>
            <div className={styles.stepNum}>1</div>
            <h3>Free Appraisals</h3>
            <p>Our experts provide a realistic valuation based on current market trends and potential development value.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNum}>2</div>
            <h3>Comprehensive Marketing</h3>
            <p>Your property is showcased on Rightmove, Zoopla, and OnTheMarket, as well as to our extensive buyer network.</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNum}>3</div>
            <h3>Fixed Completion</h3>
            <p>Once the hammer falls, the contract is legally binding, ensuring a guaranteed sale and completion within 28-56 days.</p>
          </div>
        </div>
      </div>

      <div className={styles.benefitsSection}>
        <div className={styles.benefitsCard}>
          <h2>Why Sell at Auction?</h2>
          <ul className={styles.benefitList}>
            <li><strong>Speed:</strong> Contracts exchanged immediately upon the fall of the hammer.</li>
            <li><strong>Certainty:</strong> No chains or late-stage renegotiations.</li>
            <li><strong>Competitive Bidding:</strong> Transparent competition drives up the price.</li>
            <li><strong>Extensive Marketing:</strong> Professional exposure locally and nationally.</li>
          </ul>
        </div>
        <div className={styles.valuationCta}>
          <h2>Find out what your property is worth</h2>
          <p>Submit your details online for a free, no-obligation appraisal from our directors.</p>
          <Link href="/valuation" className="btn btn-secondary">Get Instant Appraisal</Link>
        </div>
      </div>
    </div>
  );
}
