import Link from 'next/link';
import styles from './property.module.css';

export default function PropertyDetails({ params }: { params: { id: string } }) {
  // Mock property data
  const property = {
    id: params.id,
    title: "Southchurch Road, Southend-On-Sea, SS1 2PQ",
    guidePrice: "£450,000",
    tag: "Residential Auction",
    description: "A fantastic opportunity to acquire this spacious three-bedroom residential property in the heart of Southend-On-Sea. The property offers excellent development potential and is within walking distance of local amenities and transport links.",
    features: ["3 Spacious Bedrooms", "2 Modern Bathrooms", "Freehold Interest", "Large Rear Garden", "Development Potential"],
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400"
    ],
    auctionDate: "24/03/2026",
    legalPackAvailable: true
  };

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <div className={styles.tag}>{property.tag}</div>
        <h1>{property.title}</h1>
        <div className={styles.metaRow}>
          <span>📍 Southend-on-Sea, Essex</span>
          <span>🏠 Freehold</span>
          <span>📅 Auction: {property.auctionDate}</span>
        </div>
      </div>

      <div className={styles.mainGrid}>
        {/* Left Col: Imagery & Details */}
        <div className={styles.detailsCol}>
          <div className={styles.mainImage}>
             <img src={property.images[0]} alt={property.title} />
          </div>
          <div className={styles.thumbnails}>
             {property.images.map((img, i) => (
               <img key={i} src={img} alt={`${property.title} thumbnail ${i}`} className={styles.thumb} />
             ))}
          </div>

          <section className={styles.section}>
             <h2>Property Description</h2>
             <p>{property.description}</p>
          </section>

          <section className={styles.section}>
             <h2>Key Features</h2>
             <ul className={styles.featureList}>
                {property.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
             </ul>
          </section>

          <section className={styles.section}>
             <h2>Location</h2>
             <div className={styles.mapPlaceholder}>
                <p>Interactive Map View</p>
             </div>
          </section>
        </div>

        {/* Right Col: Bidding & Legal */}
        <aside className={styles.sidebar}>
          <div className={styles.bidBox}>
             <div className={styles.priceHead}>
                <span>Guide Price</span>
                <h3>{property.guidePrice}</h3>
             </div>
             <p className={styles.bidNote}>Fall of the hammer creates a legally binding contract.</p>
             <button className={`btn btn-primary ${styles.bidBtn}`}>Register to Bid</button>
             <button className={`btn btn-secondary ${styles.valuationBtn}`}>Proxy/Telephone bid</button>
          </div>

          <div className={styles.actionCard}>
             <h3>Important Documents</h3>
             <p>Register to view the comprehensive legal pack for this property.</p>
             <Link href="/register" className={styles.actionBtn}>
                <span>📄</span>
                <span>Download Legal Pack</span>
             </Link>
             <Link href="/contact" className={styles.actionBtn}>
                <span>📞</span>
                <span>Request Viewing</span>
             </Link>
          </div>

          <div className={styles.contactExpert}>
             <h3>Have a question?</h3>
             <p>Our auction specialists are ready to help.</p>
             <a href="tel:02031740330" className={styles.phoneLink}>0203 174 0330</a>
          </div>
        </aside>
      </div>
    </div>
  );
}
