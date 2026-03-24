import Link from 'next/link';
import styles from './property.module.css';
import { Property } from '@/lib/types';

export default function PropertyDetails({ params }: { params: { id: string } }) {
  // Mock detailed property data mirrored from reference project
  const property: Property = {
    id: params.id,
    houseNameNumber: "377",
    addressLine1: "Southchurch Road",
    townCity: "Southend-On-Sea",
    county: "Essex",
    postcode: "SS1 2PQ",
    
    headline: "STUNNING 3-BED RESIDENTIAL INVESTMENT OPPORTUNITY",
    subheading: "A spacious freehold house with significant development potential and modern interiors.",
    type: 'House',
    tenure: 'Freehold',
    tenancyStatus: 'Vacant',
    locationIntel: "Ideally located within walking distance of Southend East station and the vibrant Southchurch village shops.",
    viewingArrangements: "Strictly by appointment via The Auction Department.",

    accommodationSchedule: [
      {
        floorName: "Ground Floor",
        rooms: [
          { name: "Lounge", dimensions: { imperial: "14'2\" x 12'5\"", metric: "4.32m x 3.78m" } },
          { name: "Kitchen / Diner", dimensions: { imperial: "18'5\" x 11'2\"", metric: "5.61m x 3.40m" } }
        ]
      },
      {
        floorName: "First Floor",
        rooms: [
          { name: "Bedroom 1", dimensions: { imperial: "12'8\" x 11'4\"", metric: "3.86m x 3.45m" } },
          { name: "Bedroom 2", dimensions: { imperial: "11'6\" x 9'8\"", metric: "3.51m x 2.95m" } },
          { name: "Bedroom 3", dimensions: { imperial: "8'2\" x 7'5\"", metric: "2.49m x 2.26m" } }
        ]
      }
    ],

    epcRating: 'C',
    partA: {
      priceQualifier: "Guide Price",
      councilTaxBand: "Band C"
    },
    partB: {
      constructionType: "Brick & Tile (Standard)",
      utilities: {
        electricity: "Mains Electricity",
        water: "Mains Water",
        sewerage: "Mains Drainage",
        heating: "Gas Central Heating"
      },
      connectivity: {
        broadband: "Ultrafast (1000Mbps)",
        mobile: "Excellent (4G/5G)"
      },
      parking: {
        type: "On-street & Off-road drive",
        spaces: 2
      }
    },
    partC: {
      safety: {
        buildingSafety: "No known issues (No cladding)",
        listedStatus: "Not Listed",
        conservationArea: "Situated in a Conservation Area"
      },
      restrictions: {
        publicRightsOfWay: "None",
        floodRisk: "Very Low flood risk",
        coastalErosionRisk: "No risk identified"
      }
    },
    
    pricing: {
      guidePrice: "£450,000"
    },
    feesCommission: {
      entryFeeType: 'Instruct',
      commission: { type: 'percentage', value: 2 },
      buyerFees: {
        adminFee: 1500,
        buyerPremium: "3% of final sale price"
      }
    },

    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400"
    ],
    auctionDate: "24/03/2026",
    legalPackUrl: "#"
  };

  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <div className={styles.tag}>{property.type} - {property.tenure}</div>
        <h1>{property.headline}</h1>
        <div className={styles.metaRow}>
          <span>📍 {property.addressLine1}, {property.townCity}</span>
          <span>📅 Auction: {property.auctionDate}</span>
          <span>🔋 EPC: {property.epcRating}</span>
        </div>
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.detailsCol}>
          <div className={styles.mainImage}>
             <img src={property.images[0]} alt={property.headline} />
          </div>
          <div className={styles.thumbnails}>
             {property.images.map((img, i) => (
                <img key={i} src={img} alt={`${property.headline} thumbnail ${i}`} className={styles.thumb} />
             ))}
          </div>

          <section className={styles.section}>
             <h2>Description</h2>
             <p className={styles.subheading}>{property.subheading}</p>
             <p>{property.locationIntel}</p>
          </section>

          <section className={styles.section}>
             <h2>Accommodation</h2>
             {property.accommodationSchedule.map((floor, idx) => (
                <div key={idx} className={styles.floorBlock}>
                   <h3>{floor.floorName}</h3>
                   <div className={styles.roomList}>
                      {floor.rooms.map((room, rIdx) => (
                         <div key={rIdx} className={styles.roomItem}>
                            <strong>{room.name}</strong>
                            <span>{room.dimensions.imperial} ({room.dimensions.metric})</span>
                         </div>
                      ))}
                   </div>
                </div>
             ))}
          </section>

          <section className={styles.section}>
             <h2>Material Information</h2>
             <div className={styles.complianceGrid}>
                <div className={styles.complianceItem}>
                   <h5>Finance & Tax (Part A)</h5>
                   <p><strong>Council Tax:</strong> {property.partA.councilTaxBand}</p>
                   <p><strong>Qualifier:</strong> {property.partA.priceQualifier}</p>
                   {property.tenure === 'Leasehold' && property.partA.leaseholdDetails && (
                      <div className={styles.subDetail}>
                         <p><strong>Lease:</strong> {property.partA.leaseholdDetails.yearsRemaining} years remaining</p>
                         <p><strong>Ground Rent:</strong> £{property.partA.leaseholdDetails.annualGroundRent} p/a</p>
                         <p><strong>Service Charge:</strong> £{property.partA.leaseholdDetails.annualServiceCharge} p/a</p>
                      </div>
                   )}
                </div>
                <div className={styles.complianceItem}>
                   <h5>Utilities & Physical (Part B)</h5>
                   <p><strong>Construction:</strong> {property.partB.constructionType}</p>
                   <p><strong>Utilities:</strong> {property.partB.utilities.electricity}, {property.partB.utilities.water}, {property.partB.utilities.heating}</p>
                   <p><strong>Connectivity:</strong> {property.partB.connectivity.broadband}</p>
                   <p><strong>Parking:</strong> {property.partB.parking.type} ({property.partB.parking.spaces} spaces)</p>
                </div>
                <div className={styles.complianceItem}>
                   <h5>Safety & Risks (Part C)</h5>
                   <p><strong>Safety:</strong> {property.partC.safety.buildingSafety}</p>
                   <p><strong>Listed Status:</strong> {property.partC.safety.listedStatus}</p>
                   <p><strong>Flood Risk:</strong> {property.partC.restrictions.floodRisk}</p>
                </div>
             </div>
          </section>

          <section className={styles.section}>
             <h2>Viewing Arrangements</h2>
             <p>{property.viewingArrangements}</p>
          </section>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.bidBox}>
             <div className={styles.priceHead}>
                <span>{property.partA.priceQualifier}</span>
                <h3>{property.pricing.guidePrice}</h3>
             </div>
             <p className={styles.bidNote}>Fall of the hammer creates a legally binding contract.</p>
             <button className={`btn btn-primary ${styles.bidBtn}`}>Register to Bid</button>
          </div>

          <div className={styles.actionCard}>
             <h3>Financial Summary</h3>
             <ul className={styles.featureList}>
                <li><strong>Admin Fee:</strong> £{property.feesCommission.buyerFees.adminFee}</li>
                <li><strong>Buyer Premium:</strong> {property.feesCommission.buyerFees.buyerPremium}</li>
                <li><strong>Tenure:</strong> {property.tenure}</li>
             </ul>
             <Link href="/register" className={styles.actionBtn}>
                <span>📄</span>
                <span>Download Legal Pack</span>
             </Link>
          </div>

          <div className={styles.contactExpert}>
             <h3>Expert Assistance</h3>
             <p>Have questions about Part B or C compliance?</p>
             <a href="tel:02031740330" className={styles.phoneLink}>0203 174 0330</a>
          </div>
        </aside>
      </div>
    </div>
  );
}

