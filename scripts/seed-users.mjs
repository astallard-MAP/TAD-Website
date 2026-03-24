import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDZF8dIcD3Km1PT0fQDkshpARIOYcOf_E8",
    authDomain: "tad-website-27cbd.firebaseapp.com",
    projectId: "tad-website-27cbd",
    storageBucket: "tad-website-27cbd.firebasestorage.app",
    messagingSenderId: "343391246021",
    appId: "1:343391246021:web:14e9f059e4a4eca08bc2ac"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, "tad-website");

const seedUsers = async () => {
  const users = [
    {
      uid: "G9S36zhuhKQeDXW0YgBY28FdLTZ2",
      title: "Mr",
      firstName: "Andrew",
      surname: "Stallard",
      displayName: "Andrew Stallard",
      email: "Andrew@AuctionDepartment.com",
      mobile: "0203 174 0330",
      addressLine1: "377 Southchurch Road",
      townCity: "Southend-On-Sea",
      county: "Essex",
      postcode: "SS1 2PQ",
      role: "Global Administrator",
      status: "Active",
      branch: "Southend Head Office"
    }
  ];

  for (const user of users) {
    try {
      await setDoc(doc(db, "users", user.uid), user);
      console.log(`Seeded Global Admin: ${user.displayName}`);
    } catch (e) {
      console.error("Error seeding admin:", e);
    }
  }
  process.exit(0);
};

seedUsers();
