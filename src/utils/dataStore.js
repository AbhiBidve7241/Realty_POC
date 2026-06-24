// Initial default data sets
const defaultStats = [
  { id: '1', value: '25+', label: 'Years Experience' },
  { id: '2', value: '1200+', label: 'Homes Delivered' },
  { id: '3', value: '8', label: 'Ongoing Projects' },
  { id: '4', value: '15', label: 'Project Completed' },
];

const defaultGallery = [
  { id: '1', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Exterior', span: 'col-span-1 md:col-span-2 row-span-2' },
  { id: '2', src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Living Room', span: 'col-span-1 row-span-1' },
  { id: '3', src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Kitchen', span: 'col-span-1 row-span-1' },
  { id: '4', src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Balcony View', span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: '5', src: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Amenities', span: 'col-span-1 row-span-1' },
];

const defaultUpcoming = [
  {
    id: '1',
    title: 'Elite Crown',
    city: 'Wakad, Pune',
    launchDate: 'Q4 2026',
    image: 'https://www.tatacarnatica.ind.in/project/new-township-projects-in-bangalore-2022.webp',
  },
  {
    id: '2',
    title: 'Green Vista Villas',
    city: 'Hinjewadi Phase 3, Pune',
    launchDate: 'Q1 2027',
    image: 'https://assets.architecturaldigest.in/photos/67c6a32993c76f196dc5b842/16:9/w_1920,c_limit/Untitled%20design%20-%202025-03-04T122218.613.png',
  },
  {
    id: '3',
    title: 'Skyline Signature',
    city: 'Kharadi, Pune',
    launchDate: 'Q2 2027',
    image: 'https://www.squareyards.com/blog/wp-content/uploads/2023/11/what-is-Residential-Buildings.jpg',
  },
  {
    id: '4',
    title: 'Urban Greens',
    city: 'Punawale, PCMC',
    launchDate: 'Q3 2027',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  }
];

const defaultOngoing = [
  {
    id: '1',
    title: 'Skyline Heights',
    location: 'Hinjewadi Phase 2, Pune',
    status: 'Ongoing',
    progress: 75,
    expectedCompletion: 'Dec 2026',
    flatsAvailable: 18,
    startingPrice: '₹72 Lakh',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Green Valley Residency',
    location: 'Tathawade, Pune',
    status: 'Ongoing',
    progress: 55,
    expectedCompletion: 'Mar 2027',
    flatsAvailable: 32,
    startingPrice: '₹58 Lakh',
    category: 'Affordable Housing',
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Business Square',
    location: 'Baner Road, Pune',
    status: 'Ongoing',
    progress: 85,
    expectedCompletion: 'Sep 2026',
    flatsAvailable: 10,
    startingPrice: '₹1.45 Cr',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'Royal Enclave',
    location: 'Kharadi, Pune',
    status: 'Ongoing',
    progress: 35,
    expectedCompletion: 'Jan 2028',
    flatsAvailable: 48,
    startingPrice: '₹95 Lakh',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    title: 'Park View Residency',
    location: 'Punawale, Pune',
    status: 'Ongoing',
    progress: 60,
    expectedCompletion: 'Jun 2027',
    flatsAvailable: 25,
    startingPrice: '₹65 Lakh',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    title: 'Urban Greens',
    location: 'Ravet, PCMC',
    status: 'Ongoing',
    progress: 45,
    expectedCompletion: 'Nov 2027',
    flatsAvailable: 40,
    startingPrice: '₹54 Lakh',
    category: 'Affordable Housing',
    image: 'https://plus.unsplash.com/premium_photo-1748406880127-ece0f3119976?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
];

const KEYS = {
  STATS: 'realty_poc_stats',
  GALLERY: 'realty_poc_gallery',
  UPCOMING: 'realty_poc_upcoming',
  ONGOING: 'realty_poc_ongoing',
};

// Helper function to read from localStorage
const readKey = (key, defaults) => {
  try {
    const val = localStorage.getItem(key);
    if (!val) {
      localStorage.setItem(key, JSON.stringify(defaults));
      return defaults;
    }
    return JSON.parse(val);
  } catch (e) {
    console.error(`Error reading ${key} from localStorage`, e);
    return defaults;
  }
};

// Helper function to write to localStorage
const writeKey = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error(`Error writing ${key} to localStorage`, e);
  }
};

export const dataStore = {
  // Statistics
  getStats: () => readKey(KEYS.STATS, defaultStats),
  saveStats: (data) => writeKey(KEYS.STATS, data),

  // Gallery
  getGallery: () => readKey(KEYS.GALLERY, defaultGallery),
  saveGallery: (data) => writeKey(KEYS.GALLERY, data),

  // Upcoming Projects
  getUpcoming: () => readKey(KEYS.UPCOMING, defaultUpcoming),
  saveUpcoming: (data) => writeKey(KEYS.UPCOMING, data),

  // Ongoing Projects
  getOngoing: () => readKey(KEYS.ONGOING, defaultOngoing),
  saveOngoing: (data) => writeKey(KEYS.ONGOING, data),
};
