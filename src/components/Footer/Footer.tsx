import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <img src="/images/logo.png" alt="The Auction Department Logo" className={styles.footerLogo} />
            </div>
            <p className={styles.description}>
              The UK's leading Land and Property Auction specialists. Professional, transparent, and results-driven.
            </p>
            <div className={styles.accreditations}>
              <div className={styles.badge}>Property Ombudsman: R808</div>
              <div className={styles.badge}>VAT: GB 186 8746 44</div>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4>Navigate</h4>
            <ul>
              <li><Link href="/properties">Browse Properties</Link></li>
              <li><Link href="/sell">Sell Your Property</Link></li>
              <li><Link href="/buy">How to Buy</Link></li>
              <li><Link href="/valuation">Free Valuation</Link></li>
              <li><Link href="/blog">News & Insights</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy">Cookie Policy</Link></li>
              <li><Link href="/complaints">Complaints Procedure</Link></li>
              <li><Link href="/sitemap">Site Map</Link></li>
            </ul>
          </div>

          <div className={styles.contactCol}>
            <h4>Contact Details</h4>
            <div className={styles.contactItem}>
              <strong>T:</strong> <a href="tel:02031740330">0203 174 0330</a>
            </div>
            <div className={styles.contactItem}>
              <strong>E:</strong> <a href="mailto:info@auctiondepartment.com">info@auctiondepartment.com</a>
            </div>
            
            <div className={styles.addressBlock}>
              <strong>Head Office:</strong>
              <p>Hillsboro’<br/>377 Southchurch Road,<br/>Southend on Sea,<br/>Essex SS1 2PQ</p>
            </div>

            <div className={styles.addressBlock}>
              <strong>Registered Office:</strong>
              <p>Monometer House,<br/>Rectory Grove,<br/>Leigh on Sea,<br/>Essex SS9 2HN</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copy}>
            &copy; {currentYear} The Auction Department Limited. Company Registration: 08952748. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
