import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1>The Auction Department Story</h1>
        <p>A family-run business with a mission to deliver the fastest, most transparent land and property auction services in the UK.</p>
      </div>

      <div className={styles.storyContent}>
        <div className={styles.storyText}>
          <h2>Excellence and Integrity</h2>
          <p>Founded on years of experience in the UK Real Estate sector, The Auction Department Limited was established to redefine how land and property are sold. We believe in transparency, speed, and efficiency for both buyers and sellers.</p>
          <p>As a family-run company, we pride ourselves on providing a personal service. Every instruction is handled with care and professional diligence, ensuring our clients achieve the best possible outcomes in the current market.</p>
          
          <div className={styles.missionCard}>
            <h3>Our Mission</h3>
            <p>"To provide a secure and efficient trading floor for UK real estate, where professional guidance meets state-of-the-art marketing."</p>
          </div>
        </div>
        <div className={styles.storyImage}>
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Professional real estate team collaboration" />
        </div>
      </div>

      <div className={styles.mascotSection}>
        <div className={styles.mascotText}>
           <h2>Meet Frank Tadsworth-Bids</h2>
           <span className={styles.mascotRole}>Brand Ambassador & Chief Auctioneer</span>
           <p>Frank isn't just our mascot; he's the embodiment of our "look before you leap" philosophy. Wearing his signature purple suit and always carrying his trusted gavel, Frank represents the transparency, speed, and character of The Auction Department.</p>
           <p>You'll find Frank across our platform, helping you navigate the auction process and ensuring every bid is a fair one. He brings a touch of personality to the serious business of property auctions.</p>
        </div>
        <div className={styles.mascotImg}>
           <img src="/images/FTB.png" alt="Frank Tadsworth-Bids in his purple suit" />
        </div>
      </div>

      <div className={styles.teamSection}>
        <h2>Meet the Directors</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" alt="Director Portrait" />
            </div>
            <h3>Andrew Stallard</h3>
            <span className={styles.role}>Managing Director</span>
            <p>Expert in UK real estate auctions and strategic portfolio management.</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="Director Portrait" />
            </div>
            <h3>Jane Doe</h3>
            <span className={styles.role}>Auctioneer & Partner</span>
            <p>Vast experience in residential and commercial sales across London and the South East.</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.memberImage}>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" alt="Team Member Portrait" />
            </div>
            <h3>John Smith</h3>
            <span className={styles.role}>Head of Land & Planning</span>
            <p>Specialist in land acquisition, development appraisal, and city planning.</p>
          </div>
        </div>
      </div>

      <div className={styles.statsSection}>
        <div className={styles.statItem}>
          <h4>10+ Years</h4>
          <span>Industry Expertise</span>
        </div>
        <div className={styles.statItem}>
          <h4>£500M+</h4>
          <span>Property Sold</span>
        </div>
        <div className={styles.statItem}>
          <h4>95%</h4>
          <span>Auction Success Rate</span>
        </div>
        <div className={styles.statItem}>
          <h4>24hr</h4>
          <span>Valuation Response</span>
        </div>
      </div>
    </div>
  );
}
