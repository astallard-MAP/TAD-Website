import Link from 'next/link';
import styles from './blog.module.css';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "How to Prepare Your Property for Auction",
      excerpt: "Expert tips on how to maximize your property's value before it goes to auction. Focus on legal packs and physical appearance.",
      date: "14/03/2026",
      category: "Selling Advice",
      image: "https://images.unsplash.com/photo-1460472178825-e5240623abe5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Why Auction is the Best Way to Sell Land",
      excerpt: "The UK land market is booming. Find out why auction is the most efficient platform for selling development land.",
      date: "08/03/2026",
      category: "Land & Development",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Auction Trends in London and the South East",
      excerpt: "A comprehensive look at the market performance of real estate auctions in Q1 2026. What investors need to know.",
      date: "01/03/2026",
      category: "Market Insights",
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1>Industry News & Insights</h1>
        <p>Stay informed with the latest updates from the UK real estate and auction market.</p>
      </div>

      <div className={styles.featuredPost}>
        <div className={styles.featuredImage}>
          <img src="https://images.unsplash.com/photo-1454165833767-1314389da860?auto=format&fit=crop&q=80&w=1200" alt="Featured News Article" />
        </div>
        <div className={styles.featuredContent}>
          <span className={styles.category}>The Auction Department News</span>
          <h2>The Rise of Online Auctioning: Efficiency and Results</h2>
          <p>The auction market has evolved beyond the traditional room. Discover how our online platform is delivering record results for our clients.</p>
          <div className={styles.postMeta}>
            <span>18/03/2026</span>
            <span>By Andrew Stallard</span>
          </div>
          <Link href="/blog/1" className="btn btn-primary">Read More</Link>
        </div>
      </div>

      <div className={styles.blogGrid}>
        {posts.map(post => (
          <div key={post.id} className={styles.postCard}>
            <div className={styles.postImage}>
              <img src={post.image} alt={post.title} />
            </div>
            <div className={styles.postContent}>
              <span className={styles.category}>{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className={styles.postFooter}>
                <span>{post.date}</span>
                <Link href={`/blog/${post.id}`} className={styles.readMore}>Read Article &rarr;</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.newsletter}>
         <h2>Subscribe to our Auction Alerts</h2>
         <p>Get the latest property listings and market insights delivered to your inbox every week.</p>
         <div className={styles.newsletterForm}>
           <input type="email" placeholder="email@address.com" required />
           <button className="btn btn-primary">Subscribe</button>
         </div>
      </div>
    </div>
  );
}
