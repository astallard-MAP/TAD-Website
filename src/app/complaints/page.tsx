import styles from '../privacy-policy/legal.module.css';

export default function ComplaintsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.header}>
        <h1>Complaints Procedure</h1>
        <p>Our commitment to professional excellence. How we handle concerns and feedback.</p>
      </div>

      <div className={styles.legalBody}>
         <section className={styles.section}>
            <h2>1. Our Standards</h2>
            <p>The Auction Department Limited is committed to providing a professional service to all our clients and customers. When something goes wrong, we need you to tell us about it. This will help us to improve our standards.</p>
         </section>

         <section className={styles.section}>
            <h2>2. Making a Complaint</h2>
            <p>If you have a complaint, please put it in writing, including as much detail as possible. We will then respond in line with the timeframes set out below. You should send your complaint to:</p>
            <p><strong>The Complaints Manager</strong><br/>
            The Auction Department Limited<br/>
            Hillsboro’, 377 Southchurch Road,<br/>
            Southend on Sea, Essex SS1 2PQ</p>
         </section>

         <section className={styles.section}>
            <h2>3. Our Process</h2>
            <ul>
               <li><strong>Acknowledgement:</strong> We will acknowledge your complaint within 3 working days of receipt.</li>
               <li><strong>Investigation:</strong> We will investigate your complaint. This will normally be dealt with by the office manager who will review your file and speak to the member of staff who dealt with you.</li>
               <li><strong>Formal Response:</strong> A formal written outcome of our investigation will be sent to you within 15 working days.</li>
               <li><strong>Final Review:</strong> If you are still not satisfied, you can request a final review by our Managing Director.</li>
            </ul>
         </section>

         <section className={styles.section}>
            <h2>4. The Property Ombudsman</h2>
            <p>If you remain dissatisfied with our final viewpoint, you can then contact The Property Ombudsman to request an independent review:</p>
            <p><strong>The Property Ombudsman Ltd</strong><br/>
            Milford House, 43-55 Milford Street,<br/>
            Salisbury, Wiltshire SP1 2BP<br/>
            <a href="https://www.tpos.co.uk" target="_blank" rel="noopener">www.tpos.co.uk</a></p>
            <p>Please note the following: You will need to submit your complaint to The Property Ombudsman within 12 months of receiving our final viewpoint letter, including any evidence to support your case.</p>
         </section>
      </div>
    </div>
  );
}
