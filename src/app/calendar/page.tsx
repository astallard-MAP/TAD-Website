import styles from './calendar.module.css';

export default function CalendarPage() {
  const auctions = [
    {
      date: "24/03/2026",
      time: "11:00",
      title: "Spring Property Auction - London & South East",
      location: "Online / Grand Connaught Rooms",
      status: "Upcoming"
    },
    {
      date: "28/04/2026",
      time: "11:00",
      title: "National Land & Development Auction",
      location: "Online / London Marriott Hotel",
      status: "Upcoming"
    },
    {
      date: "26/05/2026",
      time: "11:00",
      title: "Mixed Use & Commercial Auction",
      location: "Online / The Grosvenor House Hotel",
      status: "Open for Entries"
    },
    {
      date: "30/06/2026",
      time: "11:00",
      title: "Summer Residential Portfolio Sale",
      location: "Online / Hilton London Metropole",
      status: "Open for Entries"
    }
  ];

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1>Upcoming Auction Dates</h1>
        <p>Stay updated with our schedule of property auctions across the UK. Mark your calendars for your next investment opportunity.</p>
      </div>

      <div className={styles.calendarList}>
        {auctions.map((auction, index) => (
          <div key={index} className={styles.auctionCard}>
            <div className={styles.dateBlock}>
              <span className={styles.day}>{auction.date.split('/')[0]}</span>
              <span className={styles.monthName}>March</span> {/* Placeholder, could be dynamic */}
              <span className={styles.year}>{auction.date.split('/')[2]}</span>
            </div>
            
            <div className={styles.infoBlock}>
              <div className={styles.statusLabel}>{auction.status}</div>
              <h3>{auction.title}</h3>
              <div className={styles.meta}>
                <span>🕒 <strong>Time:</strong> {auction.time} GMT</span>
                <span>📍 <strong>Location:</strong> {auction.location}</span>
              </div>
            </div>

            <div className={styles.actionBlock}>
              <button className="btn btn-outline">Add to Calendar</button>
              <button className="btn btn-primary">View Catalogue</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.ctaBox}>
        <h2>Looking to sell in an upcoming auction?</h2>
        <p>Entries for our June and July auctions are now being accepted. Get a free valuation today to ensure your property is included.</p>
        <button className="btn btn-secondary">Get a Valuation for these dates</button>
      </div>
    </div>
  );
}
