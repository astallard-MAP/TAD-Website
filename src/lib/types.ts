export interface UserProfile {
  // Identifiers
  uid: string;
  id?: string;

  // Personal
  title: string;
  firstName: string;
  surname: string;
  displayName: string;
  photoURL?: string;

  // Contact
  email: string;
  workEmail?: string;
  homeEmail?: string;
  telephone?: string;
  mobile?: string;
  primaryEmail?: 'HOME' | 'WORK';

  // Address
  addressLine1?: string;
  addressLine2?: string;
  townCity?: string;
  county?: string;
  postcode?: string;
  country?: string;

  // KYC/AML
  idProof?: string;
  addressProof?: string;
  role?: string;
}

export interface Property {
  id: string;
  
  // 1. Address Fields
  houseNameNumber: string;
  addressLine1: string;
  addressLine2?: string;
  townCity: string;
  county: string;
  postcode: string;
  coordinates?: {
    lat: number;
    lng: number;
  };

  // 2. Property Description & Accommodation
  type: 'House' | 'Flat/Apartment' | 'Bungalow' | 'Land' | 'Commercial' | 'Other';
  tenure: 'Freehold' | 'Leasehold' | 'Commonhold';
  tenancyStatus: 'Vacant' | 'Tenanted';
  headline: string;
  subheading: string;
  locationIntel: string;
  notes?: string;
  viewingArrangements: string;
  accommodationSchedule: FloorPlan[];

  // 3. Material Information & Compliance
  epcRating: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'N/A';
  epcCertificateUrl?: string; 
  auctionType: 'Traditional' | 'Modern Method';
  addendums?: string[]; // Last minute changes
  
  partA: {
    priceQualifier: string; 
    councilTaxBand: string; 
    leaseholdDetails?: {
      yearsRemaining: number;
      annualGroundRent: number;
      annualServiceCharge: number;
    };
  };

  partB: {
    constructionType: string;
    utilities: {
      electricity: string;
      water: string;
      sewerage: string;
      heating: string;
    };
    connectivity: {
      broadband: string;
      mobile: string;
    };
    parking: {
      type: string;
      spaces: number;
    };
  };

  partC: {
    safety: {
      buildingSafety: string;
      listedStatus: string;
      conservationArea: string;
    };
    restrictions: {
      publicRightsOfWay: string;
      floodRisk: string;
      coastalErosionRisk: string;
    };
  };

  // 4. Financial Fields
  pricing: {
    reservePrice?: number; // Secret minimum
    guidePrice: string; 
  };

  feesCommission: {
    entryFeeType: 'Instruct' | 'Deferred';
    commission: {
      type: 'fixed' | 'percentage';
      value: number;
    };
    buyerFees: {
      adminFee: number;
      buyerPremium: string; 
    };
  };

  // Metadata/System
  images: string[];
  auctionDate: string;
  legalPackUrl?: string;
}

export interface FloorPlan {
  floorName: string;
  rooms: Room[];
}

export interface Room {
  name: string;
  dimensions: {
    imperial: string; 
    metric: string; 
  };
}
