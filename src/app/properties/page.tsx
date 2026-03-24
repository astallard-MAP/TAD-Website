import Link from 'next/link';
import styles from './properties.module.css';

export default function Properties() {
  const properties = [
    {
      id: 1,
      title: "Southchurch Road, Southend-On-Sea, SS1 2PQ",
      price: "£450,000",
      tag: "Residential",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800",
      beds: 3,
      baths: 2,
      type: "Freehold"
    },
    {
      id: 2,
      title: "Monometer House, Rectory Grove, Leigh-On-Sea",
      price: "£275,000",
      tag: "Commercial",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      beds: 0,
      baths: 0,
      type: "Leasehold"
    },
    {
      id: 3,
      title: "Land on Southchurch Road, Southend-On-Sea",
      price: "£120,000",
      tag: "Land / Development",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      beds: 0,
      baths: 0,
      type: "Freehold"
    },
    {
      id: 4,
      title: "Victorian Terrace, Southend-On-Sea, SS1",
      price: "£325,000",
      tag: "Residential",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800",
      beds: 4,
      baths: 2,
      type: "Freehold"
    }
  ];

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1>Current Auction Lots</h1>
        <p>Showing {properties.length} properties available across the UK.</p>
      </div>

      <div className={styles.content}>
        {/* Filters Sidebar */}
        <aside className={styles.filters}>
          <div className={styles.filterGroup}>
            <h3>Filter Results</h3>
            <div className={styles.searchBox}>
              <input type="text" placeholder="Search by location or postcode..." className={styles.input} />
            </div>
          </div>

          <div className={styles.filterGroup}>
            <label>Property Type</label>
            <select className={styles.select}>
              <option>All Types</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Land</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Price Range</label>
            <div className={styles.range}>
              <select className={styles.select}><option>Min Price</option></select>
              <select className={styles.select}><option>Max Price</option></select>
            </div>
          </div>

          <button className="btn btn-primary" style={{width: '100%', marginTop: '1rem'}}>Update Search</button>
        </aside>

        {/* Property Grid */}
        <div className={styles.propertyGrid}>
          {properties.map(prop => (
            <Link key={prop.id} href={`/properties/${prop.id}`} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={prop.image} alt={prop.title} />
                <span className={styles.tag}>{prop.tag}</span>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.price}>Guide: {prop.price}</div>
                <h3 className={styles.title}>{prop.title}</h3>
                <div className={styles.details}>
                  <span>{prop.beds > 0 ? `${prop.beds} Beds` : prop.type}</span>
                  {prop.baths > 0 && <span>{prop.baths} Baths</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
