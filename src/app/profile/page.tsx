'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './profile.module.css';

import { UserProfile } from '@/lib/types';

type Tab = 'DASHBOARD' | 'PROFILE' | 'REQUIREMENTS' | 'SAVED' | 'BIDS' | 'SETTINGS';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<Tab>('DASHBOARD');
  const [profileSubTab, setProfileSubTab] = useState<'IDENTITY' | 'CONTACT' | 'SECURITY'>('IDENTITY');
  
  // Mock User Data (Mirrored from UserProfile interface)
  const [profile, setProfile] = useState<Partial<UserProfile & { role: string; status: string; branch: string }>>({
    uid: 'user-123',
    title: 'Mr',
    firstName: 'Andrew',
    surname: 'Stallard',
    displayName: 'Andrew Stallard',
    email: 'info@auctiondepartment.com',
    workEmail: 'info@auctiondepartment.com',
    homeEmail: '',
    mobile: '0203 174 0330',
    telephone: '0203 174 0331',
    addressLine1: 'Hillsboro’, 377 Southchurch Road',
    addressLine2: '',
    townCity: 'Southend on Sea',
    county: 'Essex',
    postcode: 'SS1 2PQ',
    country: 'United Kingdom',
    role: 'Primary Member / Admin',
    status: 'Active',
    branch: 'Southend Head Office'
  });

  const [requirements, setRequirements] = useState({
    propertyType: 'Residential',
    minPrice: '100000',
    maxPrice: '500000',
    location: 'Essex, UK',
    radius: '10',
    bedrooms: '3+'
  });

  const savedProperties = [
    {
      id: 1,
      title: "Southchurch Road, Southend-On-Sea, SS1 2PQ",
      price: "£450,000",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=400",
      status: "Active"
    },
    {
       id: 2,
       title: "Monometer House, Rectory Grove, Leigh-On-Sea",
       price: "£275,000",
       image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400",
       status: "Closing Soon"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'DASHBOARD':
        return (
          <div className={styles.dashboard}>
            <header className={styles.dashHeader}>
              <h1>Welcome back, {profile.firstName}</h1>
              <p>Your property portfolio is looking strong today. Here's your overview.</p>
            </header>

            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                 <h4>Active Bids</h4>
                 <span className={styles.statNum}>2</span>
                 <p>Across Essex & London</p>
              </div>
              <div className={styles.statBox}>
                 <h4>Saved Items</h4>
                 <span className={styles.statNum}>{savedProperties.length}</span>
                 <p>Properties of interest</p>
              </div>
              <div className={styles.statBox}>
                 <h4>Search Alerts</h4>
                 <span className={styles.statNum}>1</span>
                 <p>New matching properties</p>
              </div>
            </div>

            <section className={styles.section}>
              <h3><span className={styles.sideIcon}>⭐</span> Featured for You</h3>
              <div className={styles.propGrid}>
                 {savedProperties.map(prop => (
                   <div key={prop.id} className={styles.propCard}>
                      <div className={styles.propBadge}>{prop.status}</div>
                      <img src={prop.image} alt={prop.title} />
                      <div className={styles.propInfo}>
                         <h4>{prop.title}</h4>
                         <span className={styles.propPrice}>{prop.price}</span>
                      </div>
                   </div>
                 ))}
                 <div className={styles.addProperty}>
                    <span style={{fontSize: '3rem'}}>🔍</span>
                    <p>Find more investments</p>
                 </div>
              </div>
            </section>

            <div className={styles.frankTip}>
              <img src="/images/face.png" alt="Frank" />
              <div className={styles.tipContent}>
                <h5>Frank's Auction Tip</h5>
                <p>"Always have your solicitor review the legal pack before the hammer falls. It's the secret to a smooth landing!"</p>
              </div>
            </div>
          </div>
        );

      case 'PROFILE':
        return (
          <div className={styles.dashboard}>
            <header className={styles.dashHeader}>
              <h1>User Management</h1>
              <p>Mirroring your profile configuration from our integrated platforms.</p>
            </header>
            
            <nav className={styles.tabNav}>
              <div 
                className={`${styles.tabLink} ${profileSubTab === 'IDENTITY' ? styles.activeTab : ''}`}
                onClick={() => setProfileSubTab('IDENTITY')}
              >
                Identity
              </div>
              <div 
                className={`${styles.tabLink} ${profileSubTab === 'CONTACT' ? styles.activeTab : ''}`}
                onClick={() => setProfileSubTab('CONTACT')}
              >
                Contact
              </div>
              <div 
                className={`${styles.tabLink} ${profileSubTab === 'SECURITY' ? styles.activeTab : ''}`}
                onClick={() => setProfileSubTab('SECURITY')}
              >
                Security
              </div>
            </nav>

            {profileSubTab === 'IDENTITY' && (
              <div className={styles.section}>
                <h3><span className={styles.sideIcon}>🛡️</span> Name Details & Emails</h3>
                <form className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Title</label>
                    <select 
                      value={profile.title || ''} 
                      onChange={(e) => setProfile({...profile, title: e.target.value})}
                    >
                      <option value="">Select...</option>
                      <option>Mr</option>
                      <option>Mrs</option>
                      <option>Ms</option>
                      <option>Dr</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>First Name</label>
                    <input 
                      type="text" 
                      value={profile.firstName} 
                      onChange={(e) => setProfile({...profile, firstName: e.target.value, displayName: `${e.target.value} ${profile.surname}`})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Surname</label>
                    <input 
                      type="text" 
                      value={profile.surname} 
                      onChange={(e) => setProfile({...profile, surname: e.target.value, displayName: `${profile.firstName} ${e.target.value}`})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Display Name</label>
                    <input 
                      type="text" 
                      value={profile.displayName} 
                      onChange={(e) => setProfile({...profile, displayName: e.target.value})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Work Email</label>
                    <input 
                      type="email" 
                      value={profile.workEmail || ''} 
                      onChange={(e) => setProfile({...profile, workEmail: e.target.value})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Home Email</label>
                    <input 
                      type="email" 
                      value={profile.homeEmail || ''} 
                      onChange={(e) => setProfile({...profile, homeEmail: e.target.value})}
                    />
                  </div>
                  <div className={styles.fullWidth}>
                    <button type="button" className={styles.saveBtn}>Update Identity Details</button>
                  </div>
                </form>
              </div>
            )}

            {profileSubTab === 'CONTACT' && (
              <div className={styles.section}>
                <h3><span className={styles.sideIcon}>📞</span> Contact & Address</h3>
                <form className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Mobile Number</label>
                    <input 
                      type="tel" 
                      value={profile.mobile || ''} 
                      onChange={(e) => setProfile({...profile, mobile: e.target.value})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Landline (Telephone)</label>
                    <input 
                      type="tel" 
                      value={profile.telephone || ''} 
                      onChange={(e) => setProfile({...profile, telephone: e.target.value})}
                    />
                  </div>
                  <div className={styles.fullWidth} style={{display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                    <label>Address Line 1</label>
                    <input 
                      type="text" 
                      value={profile.addressLine1 || ''} 
                      onChange={(e) => setProfile({...profile, addressLine1: e.target.value})}
                    />
                  </div>
                  <div className={styles.fullWidth} style={{display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                    <label>Address Line 2 (Optional)</label>
                    <input 
                      type="text" 
                      value={profile.addressLine2 || ''} 
                      onChange={(e) => setProfile({...profile, addressLine2: e.target.value})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Town / City</label>
                    <input 
                      type="text" 
                      value={profile.townCity || ''} 
                      onChange={(e) => setProfile({...profile, townCity: e.target.value})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>County</label>
                    <input 
                      type="text" 
                      value={profile.county || ''} 
                      onChange={(e) => setProfile({...profile, county: e.target.value})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Postcode</label>
                    <input 
                      type="text" 
                      value={profile.postcode || ''} 
                      onChange={(e) => setProfile({...profile, postcode: e.target.value})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Country</label>
                    <input 
                      type="text" 
                      value={profile.country || 'United Kingdom'} 
                      onChange={(e) => setProfile({...profile, country: e.target.value})}
                    />
                  </div>
                  <div className={styles.fullWidth}>
                    <button type="button" className={styles.saveBtn}>Update Contact Info</button>
                  </div>
                </form>
              </div>
            )}

            {profileSubTab === 'SECURITY' && (
              <div className={styles.section}>
                <div className={styles.securityNote}>
                  <span>⚠️</span>
                  <p>Security and role-based permissions can only be modified by a system administrator.</p>
                </div>
                <h3><span className={styles.sideIcon}>🔐</span> Admin Settings</h3>
                <form className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Access Role</label>
                    <input type="text" value={profile.role} disabled />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Account Status</label>
                    <input type="text" value={profile.status} disabled />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Assigned Branch</label>
                    <input type="text" value={profile.branch} disabled />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last Login</label>
                    <input type="text" value={new Date().toLocaleDateString('en-GB')} disabled />
                  </div>
                </form>
              </div>
            )}
          </div>
        );

      case 'REQUIREMENTS':
        return (
          <div className={styles.dashboard}>
            <header className={styles.dashHeader}>
              <h1>Search Requirements</h1>
              <p>Tell us exactly what you're looking for, and Frank will find it for you.</p>
            </header>

            <div className={styles.section}>
              <form className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Property Interest</label>
                  <select 
                    value={requirements.propertyType}
                    onChange={(e) => setRequirements({...requirements, propertyType: e.target.value})}
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Land / Development</option>
                    <option>Mixed Use</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Preferred Location</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Southend, London, Essex"
                    value={requirements.location}
                    onChange={(e) => setRequirements({...requirements, location: e.target.value})}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Min Price (£)</label>
                  <input 
                    type="number" 
                    value={requirements.minPrice}
                    onChange={(e) => setRequirements({...requirements, minPrice: e.target.value})}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Max Price (£)</label>
                  <input 
                    type="number" 
                    value={requirements.maxPrice}
                    onChange={(e) => setRequirements({...requirements, maxPrice: e.target.value})}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Min Bedrooms</label>
                  <select 
                    value={requirements.bedrooms}
                    onChange={(e) => setRequirements({...requirements, bedrooms: e.target.value})}
                  >
                    <option>Any</option>
                    <option>1+</option>
                    <option>2+</option>
                    <option>3+</option>
                    <option>4+</option>
                    <option>5+</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Search Radius (miles)</label>
                  <input 
                    type="number" 
                    value={requirements.radius}
                    onChange={(e) => setRequirements({...requirements, radius: e.target.value})}
                  />
                </div>
                
                <div className={styles.fullWidth}>
                  <h4>Current Active Filters</h4>
                  <div className={styles.tags}>
                    <span className={styles.tag}>📍 {requirements.location}</span>
                    <span className={styles.tag}>🏠 {requirements.propertyType}</span>
                    <span className={styles.tag}>💰 £{Number(requirements.minPrice).toLocaleString()} - £{Number(requirements.maxPrice).toLocaleString()}</span>
                  </div>
                </div>

                <div className={styles.fullWidth}>
                  <button type="button" className={styles.saveBtn}>Save Search Parameters</button>
                </div>
              </form>
            </div>
          </div>
        );

      default:
        return (
          <div className={styles.dashboard}>
            <header className={styles.dashHeader}>
              <h1>Working on it...</h1>
              <p>This section is being synchronized with our auction servers. Please check back shortly.</p>
            </header>
          </div>
        );
    }
  };

  return (
    <div className={styles.page}>
      <div className={`container ${styles.content}`}>
        {/* Sidebar Nav */}
        <aside className={styles.sidebar}>
          <div className={styles.userHead}>
            <div className={styles.avatar}>
               {(profile.firstName || 'A')[0]}{(profile.surname || 'S')[0]}
            </div>
            <div className={styles.userName}>
              <h3>{profile.firstName} {profile.surname}</h3>
              <span>Member ID: TAD-{(profile.postcode || '').replace(' ', '')}</span>
            </div>
          </div>
          
          <nav className={styles.sideNav}>
            <div 
              className={`${styles.sideLink} ${activeTab === 'DASHBOARD' ? styles.active : ''}`}
              onClick={() => setActiveTab('DASHBOARD')}
            >
              <span className={styles.sideIcon}>📊</span> Dashboard
            </div>
            <div 
              className={`${styles.sideLink} ${activeTab === 'PROFILE' ? styles.active : ''}`}
              onClick={() => setActiveTab('PROFILE')}
            >
              <span className={styles.sideIcon}>👤</span> My Profile
            </div>
            <div 
              className={`${styles.sideLink} ${activeTab === 'REQUIREMENTS' ? styles.active : ''}`}
              onClick={() => setActiveTab('REQUIREMENTS')}
            >
              <span className={styles.sideIcon}>🎯</span> Requirements
            </div>
            <div 
              className={`${styles.sideLink} ${activeTab === 'BIDS' ? styles.active : ''}`}
              onClick={() => setActiveTab('BIDS')}
            >
              <span className={styles.sideIcon}>🔨</span> My Active Bids <span className={styles.count}>2</span>
            </div>
            <div 
              className={`${styles.sideLink} ${activeTab === 'SAVED' ? styles.active : ''}`}
              onClick={() => setActiveTab('SAVED')}
            >
              <span className={styles.sideIcon}>❤️</span> Saved Items
            </div>
            <div 
              className={`${styles.sideLink} ${activeTab === 'SETTINGS' ? styles.active : ''}`}
              onClick={() => setActiveTab('SETTINGS')}
            >
              <span className={styles.sideIcon}>⚙️</span> Settings
            </div>
          </nav>
          
          <button className={styles.logoutBtn}>Sign Out</button>
        </aside>

        {/* Dynamic Main Content */}
        <main style={{flex: 1}}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

