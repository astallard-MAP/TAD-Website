import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Land & Property Auctions Redefined.</h1>
          <p>
            Experience the UK&apos;s most professional and transparent auction platform. 
            Whether you are expanding your portfolio or seeking an immediate sale, 
            we provide the expertise you need.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/properties" className={`btn btn-primary ${styles.ctaBtnLarge}`}>
              Browse Properties
            </Link>
            <Link href="/sell" className={`btn btn-secondary ${styles.ctaBtnLarge}`}>
              Sell My Property
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Lots */}
      <section className={styles.featuredSection}>
        <div className="container">
          <div className={styles.featuredHeader}>
            <div>
              <h2>Current Auction Lots</h2>
              <p>Explore our wide selection of residential, commercial, and land opportunities across the UK.</p>
            </div>
            <Link href="/properties" className={styles.viewAll}>
              View All Properties &rarr;
            </Link>
          </div>

          <div className={styles.propertyGrid}>
            {/* Sample Property 1 */}
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800" alt="Beautiful residential property" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardTag}>Residential</span>
                <div className={styles.cardPrice}>Guide Price: £450,000</div>
                <h3 className={styles.cardTitle}>Southchurch Road, Southend-On-Sea, SS1 2PQ</h3>
                <div className={styles.cardDetails}>
                  <span>3 Bedrooms</span>
                  <span>2 Bathrooms</span>
                  <span>Freehold</span>
                </div>
              </div>
            </div>

            {/* Sample Property 2 */}
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" alt="Commercial property opportunity" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardTag}>Commercial</span>
                <div className={styles.cardPrice}>Guide Price: £275,000</div>
                <h3 className={styles.cardTitle}>Monometer House, Rectory Grove, Leigh-On-Sea</h3>
                <div className={styles.cardDetails}>
                  <span>850 sq ft</span>
                  <span>Excellent Location</span>
                  <span>Leasehold</span>
                </div>
              </div>
            </div>

            {/* Sample Property 3 */}
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" alt="Land development project" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardTag}>Land / Development</span>
                <div className={styles.cardPrice}>Guide Price: £120,000</div>
                <h3 className={styles.cardTitle}>Land on Southchurch Road, Southend-On-Sea</h3>
                <div className={styles.cardDetails}>
                  <span>0.5 Acres</span>
                  <span>Planning Potential</span>
                  <span>Freehold</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>🏠</div>
              <h3>Marketing Experts</h3>
              <p>State-of-the-art marketing across Rightmove, Zoopla, and OnTheMarket.</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>⚖️</div>
              <h3>Legal Security</h3>
              <p>Comprehensive legal packs provided for every property, ensuring a secure transaction.</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>⚡</div>
              <h3>Speed & Efficiency</h3>
              <p>Immediate sales with fixed completion dates, typically within 28-56 days.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
