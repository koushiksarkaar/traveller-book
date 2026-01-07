export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
}

export interface Destination {
  id: string;
  name: string;
  region: 'North' | 'South' | 'East' | 'West' | 'Central';
  description: string;
  imageUrl: string;
  price: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
}

export interface SiteConfig {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
