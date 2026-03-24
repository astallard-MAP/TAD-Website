import Link from 'next/link';
import styles from './buy.module.css';

export default function BuyPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.hero}>
        <h1>The Buyer&apos;s Journey</h1>
        <p>A comprehensive guide to buying land and property through The Auction Department. Experience the clarity and speed of auction transactions.</p>
        <Link href="/properties" className={`btn btn-primary ${styles.cta}`}>Browse Current Lots</Link>
      </div>

      <div className={styles.journeyGroup}>
        <div className={styles.step}>
          <div className={styles.stepContent}>
            <h2>1. Search and Inspect</h2>
            <p>Browse our current auction catalog online. Once you find a property of interest, we recommend arranging a physical viewing. You can book viewings directly through our property pages.</p>
          </div>
          <div className={styles.stepImage}>
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" alt="Searching properties" />
          </div>
        </div>

        <div className={`${styles.step} ${styles.reverse}`}>
          <div className={styles.stepContent}>
            <h2>2. Review the Legal Pack</h2>
            <p>Every property has a dedicated legal pack. It&apos;s crucial to review this with your solicitor before the auction. This contains all titles, searches, and special conditions of sale.</p>
          </div>
          <div className={styles.stepImage}>
            <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800" alt="Legal documents" />
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepContent}>
            <h2>3. Register and Bid</h2>
            <p>Registration is mandatory for all bidders. You can bid in person, via telephone, or online. Ensure you have your deposit and proof of identity ready before the auction starts.</p>
          </div>
          <div className={styles.stepImage}>
            <img src="https://images.unsplash.com/photo-1518175006663-356939920531?auto=format&fit=crop&q=80&w=800" alt="Auction bidding" />
          </div>
        </div>

        <div className={`${styles.step} ${styles.reverse}`}>
          <div className={styles.stepContent}>
            <h2>4. Completion</h2>
            <p>If you are the successful bidder, the hammer fall creates a legally binding contract. A 10% deposit is payable immediately. Completion typically occurs within 28-56 days.</p>
          </div>
          <div className={styles.stepImage}>
            <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dee3f?auto=format&fit=crop&q=80&w=800" alt="Keys ceremony" />
          </div>
        </div>
      </div>

      <div className={styles.faqSection}>
        <h2>Common Questions</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Do I need a solicitor?</h3>
            <p>Yes, we always recommend having a solicitor review the legal pack before you bid.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>What is a Guide Price?</h3>
            <p>The guide price is an indication of the seller&apos;s minimum expectation. It is not necessarily the price the property will sell for.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>What is a Reserve Price?</h3>
            <p>The reserve price is the confidential minimum price the seller will accept. It is typically no more than 10% above the guide price.</p>
          </div>
          <div className={styles.faqItem}>
            <h3>When do I pay the deposit?</h3>
            <p>The 10% deposit (minimum £5,000) is payable immediately upon the fall of the hammer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
