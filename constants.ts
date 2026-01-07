import { BlogPost, Destination, ServiceItem, SiteConfig, TeamMember } from "./types";

export const INITIAL_CONFIG: SiteConfig = {
  name: "Traveller Book",
  colors: {
    primary: "#2E3A59", // Deep Indigo
    secondary: "#FF9933", // Saffron
    background: "#F5E8D0", // Earthy Sand (lightened for body)
    surface: "#FFFFFF",
  },
  typography: {
    headingFont: "Poppins",
    bodyFont: "Open Sans",
  },
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
  contactInfo: {
    address: "Gariahat Road, Kolkata, India",
    phone: "8017888122",
    email: "kou9831798026@gmail.com",
  },
  seo: {
    title: "Traveller Book - Discover the Soul of India",
    description: "Premium travel agency specializing in curated Indian experiences.",
  },
};

export const INITIAL_DESTINATIONS: Destination[] = [
  {
    id: "6",
    name: "Darjeeling",
    region: "East",
    description: "Witness the majestic Kanchenjunga from the Queen of Hills.",
    imageUrl: "https://picsum.photos/seed/darjeeling_snow_mountain_ice/600/400",
    price: "₹14,900",
  },
  {
    id: "7",
    name: "Puri",
    region: "East",
    description: "Sacred temples and golden beaches on the Bay of Bengal.",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    price: "₹15,900",
  },
  {
    id: "8",
    name: "Sundarban Forest",
    region: "East",
    description: "Home of the Royal Bengal Tiger and vast mangroves.",
    imageUrl: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80",
    price: "₹9,900",
  },
  {
    id: "9",
    name: "Daringbari",
    region: "East",
    description: "The Kashmir of Odisha, lush coffee gardens and pine forests.",
    imageUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
    price: "₹14,900",
  },
  {
    id: "10",
    name: "Mandarmoni",
    region: "East",
    description: "Relax in eco-friendly cottages by the longest drive-in beach in India.",
    imageUrl: "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=800&q=80",
    price: "₹12,900",
  },
  {
    id: "1",
    name: "Taj Mahal, Agra",
    region: "North",
    description: "Experience the eternal symbol of love at sunrise.",
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    price: "₹25,000",
  },
  {
    id: "2",
    name: "Kerala Backwaters",
    region: "South",
    description: "Cruise through the serene palm-fringed canals.",
    imageUrl: "https://picsum.photos/seed/kerala/600/400",
    price: "₹45,000",
  },
  {
    id: "3",
    name: "Jaipur, Rajasthan",
    region: "West",
    description: "Explore the Pink City's majestic forts and palaces.",
    imageUrl: "https://picsum.photos/seed/jaipur/600/400",
    price: "₹32,000",
  },
  {
    id: "4",
    name: "Varanasi",
    region: "North",
    description: "A spiritual journey through the oldest living city.",
    imageUrl: "https://picsum.photos/seed/varanasi/600/400",
    price: "₹28,000",
  },
  {
    id: "5",
    name: "Ladakh",
    region: "North",
    description: "Adventure in the land of high passes.",
    imageUrl: "https://picsum.photos/seed/ladakh/600/400",
    price: "₹55,000",
  },
];

export const INITIAL_SERVICES: ServiceItem[] = [
  { id: '1', title: 'Custom Itineraries', description: 'Tailor-made trips just for you.', iconName: 'Map' },
  { id: '2', title: 'Hotel Bookings', description: 'Luxury stays at best prices.', iconName: 'Hotel' },
  { id: '3', title: 'Guided Tours', description: 'Expert local guides.', iconName: 'Users' },
  { id: '4', title: 'Transportation', description: 'Comfortable private transfers.', iconName: 'Car' },
  { id: '5', title: 'Visa Assistance', description: 'Hassle-free entry support.', iconName: 'FileText' },
];

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "10 Hidden Gems in Rajasthan",
    excerpt: "Discover the forts less traveled in the land of kings.",
    content: "Rajasthan is more than just Jaipur and Udaipur...",
    author: "Aditi Sharma",
    date: "2023-10-15",
    imageUrl: "https://picsum.photos/seed/blog1/800/600",
  },
  {
    id: "2",
    title: "A Culinary Journey Through South India",
    excerpt: "From dosas to seafood, explore the spices of the south.",
    content: "The flavors of Kerala and Tamil Nadu are distinct...",
    author: "Rahul Verma",
    date: "2023-11-02",
    imageUrl: "https://picsum.photos/seed/blog2/800/600",
  },
  {
    id: "3",
    title: "Yoga Retreats in Rishikesh",
    excerpt: "Find your inner peace by the banks of the Ganges.",
    content: "Rishikesh is the yoga capital of the world...",
    author: "Sarah Jenkins",
    date: "2023-12-10",
    imageUrl: "https://picsum.photos/seed/blog3/800/600",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
    { id: '1', name: 'Koushik Sarkar', role: 'Founder & CEO', photoUrl: 'https://picsum.photos/seed/person1/300/300' },
    { id: '2', name: 'Debashis G', role: 'Head of Experiences', photoUrl: 'https://picsum.photos/seed/person2/300/300' },
    { id: '3', name: 'David Ross', role: 'Travel Consultant', photoUrl: 'https://picsum.photos/seed/person3/300/300' },
    { id: '4', name: 'P. Majumder', role: 'Operations Manager', photoUrl: 'https://picsum.photos/seed/person4/300/300' },
];