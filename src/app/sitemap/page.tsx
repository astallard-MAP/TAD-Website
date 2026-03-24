import Link from 'next/link';
import styles from './sitemap.module.css';

export default function SitemapPage() {
  const sections = [
    {
      title: "Core Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "Properties", href: "/properties" },
        { name: "How to Sell", href: "/sell" },
        { name: "How to Buy", href: "/buy" },
        { name: "Free Valuation", href: "/valuation" },
        { name: "Auction Dates", href: "/calendar" }
      ]
    },
    {
      title: "Services & Insights",
      links: [
        { name: "Instant Cash Offer", href: "/instant-offer" },
        { name: "Blog & News", href: "/blog" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "Member Portal",
      links: [
        { name: "Login", href: "/login" },
        { name: "Register", href: "/register" },
        { name: "User Dashboard", href: "/profile" }
      ]
    },
    {
      title: "Legal & Technical",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Cookie Policy", href: "/cookie-policy" },
        { name: "Complaints Procedure", href: "/complaints" }
      ]
    }
  ];

  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.header}>
        <h1>Site Map</h1>
        <p>A comprehensive index of all the pages on The Auction Department website.</p>
      </header>

      <div className={styles.grid}>
        {sections.map((section, idx) => (
          <div key={idx} className={styles.section}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
