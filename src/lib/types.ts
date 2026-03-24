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

  // Address
  addressLine1?: string;
  addressLine2?: string;
  townCity?: string;
  county?: string;
  postcode?: string;
  country?: string;
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

  // 3. Material Information (2026 Compliance)
  epcRating: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'N/A';
  epcCertificateUrl?: string; // PDF
  
  partA: {
    priceQualifier: string; // e.g., "Guide Price", "Offers Over"
    councilTaxBand: string; // A-H or "Business Rates"
    leaseholdDetails?: {
      yearsRemaining: number;
      annualGroundRent: number;
      annualServiceCharge: number;
    };
  };

  partB: {
    constructionType: string; // Standard or Non-Standard
    utilities: {
      electricity: string;
      water: string;
      sewerage: string;
      heating: string;
    };
    connectivity: {
      broadband: string; // speed
      mobile: string; // signal strength
    };
    parking: {
      type: string; // e.g. Garage, Off-road
      spaces: number;
    };
  };

  partC: {
    safety: {
      buildingSafety: string; // cladding/asbestos
      listedStatus: string;
      conservationArea: string;
    };
    restrictions: {
      publicRightsOfWay: string;
      floodRisk: string; // surface/river
      coastalErosionRisk: string;
    };
  };

  // 4. Financial Fields
  pricing: {
    reservePrice?: number; // Secret minimum
    guidePrice: string; // e.g. "£450,000" or "£450k - £500k"
  };

  feesCommission: {
    entryFeeType: 'Instruct' | 'Deferred';
    commission: {
      type: 'fixed' | 'percentage';
      value: number;
    };
    buyerFees: {
      adminFee: number;
      buyerPremium: string; // Fixed or %
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
    imperial: string; // e.g. 12'4" x 10'5"
    metric: string; // e.g. 3.75m x 3.18m
  };
}
