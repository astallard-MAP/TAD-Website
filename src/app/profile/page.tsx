import Link from 'next/link';
import styles from './profile.module.css';

export default function ProfilePage() {
  const savedProperties = [
    {
      id: 1,
      title: "Southchurch Road, Southend-On-Sea, SS1 2PQ",
      price: "£450,000",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=400"
    },
    {
       id: 2,
       title: "Monometer House, Rectory Grove, Leigh-On-Sea",
       price: "£275,000",
       image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.content}>
        {/* Sidebar Nav */}
        <aside className={styles.sidebar}>
          <div className={styles.userHead}>
            <div className={styles.avatar}>AS</div>
            <div className={styles.userName}>
              <h3>Andrew Stallard</h3>
              <span>astallard-MAP</span>
            </div>
          </div>
          <nav className={styles.sideNav}>
            <Link href="/profile" className={`${styles.sideLink} ${styles.active}`}>Dashboard</Link>
            <Link href="/profile/bids" className={styles.sideLink}>My Active Bids</Link>
            <Link href="/profile/saved" className={styles.sideLink}>Saved Properties</Link>
            <Link href="/profile/notifications" className={styles.sideLink}>Notifications <span className={styles.count}>3</span></Link>
            <Link href="/profile/settings" className={styles.sideLink}>Account Settings</Link>
          </nav>
          <button className={styles.logoutBtn}>Sign Out</button>
        </aside>

        {/* Main Content Dashboard */}
        <main className={styles.dashboard}>
          <header className={styles.dashHeader}>
            <h1>My Dashboard</h1>
            <p>Track your property investments and account activity.</p>
          </header>

          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
               <h4>My Bids</h4>
               <span className={styles.statNum}>12</span>
               <p>2 active, 10 completed</p>
            </div>
            <div className={styles.statBox}>
               <h4>Saved</h4>
               <span className={styles.statNum}>{savedProperties.length}</span>
               <p>Properties of interest</p>
            </div>
            <div className={styles.statBox}>
               <h4>Messages</h4>
               <span className={styles.statNum}>5</span>
               <p>Unread enquiries</p>
            </div>
          </div>

          <section className={styles.section}>
            <h3>Saved Properties</h3>
            <div className={styles.propGrid}>
               {savedProperties.map(prop => (
                 <div key={prop.id} className={styles.propCard}>
                    <img src={prop.image} alt={prop.title} />
                    <div className={styles.propInfo}>
                       <h4>{prop.title}</h4>
                       <span>{prop.price}</span>
                    </div>
                 </div>
               ))}
               <Link href="/properties" className={styles.addProperty}>
                  <span>+</span>
                  <p>Browse more properties</p>
               </Link>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.notifications}>
               <h3>Recent Notifications</h3>
               <div className={styles.notifItem}>
                  <div className={styles.notifIcon}>📢</div>
                  <div className={styles.notifText}>
                     <p><strong>Auction Alert:</strong> Spring Property Auction begins in 2 hours.</p>
                     <span>Today, 09:00</span>
                  </div>
               </div>
               <div className={styles.notifItem}>
                  <div className={styles.notifIcon}>💳</div>
                  <div className={styles.notifText}>
                     <p><strong>Payment Received:</strong> Your deposit for SS1 2PQ has been confirmed.</p>
                     <span>Yesterday, 15:30</span>
                  </div>
               </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
