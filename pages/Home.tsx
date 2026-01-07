import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Star, Map } from "lucide-react";
import { useSite } from "../context/SiteContext";

const Home: React.FC = () => {
  const { destinations } = useSite();
  const featuredDestinations = destinations.slice(0, 6); // Show top 6 for trending
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/destinations?q=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate('/destinations');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const curatedExperiences = [
    { 
      title: 'Silk Route', 
      caption: 'Trace the historic trade route through the winding roads of East Sikkim.',
      imageUrl: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      title: 'Spiritual Retreats', 
      caption: 'Discover inner peace at India\'s sacred Mandirs and temples.',
      imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      title: 'Wildlife Safari', 
      caption: 'Thrilling jeep safaris in the heart of the national parks.',
      imageUrl: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      title: 'Himalayan Treks', 
      caption: 'Adventure across the snow-capped peaks with expert trekkers.',
      imageUrl: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80' 
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/kanchanjunga_mountain_peak_snow_view/1920/1080"
            alt="Mount Kanchenjunga"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/50 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Discover the <span className="text-secondary">Soul</span> of India
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-100">
            From the majestic Kanchenjunga to the serene coastal shores.
          </p>
          
          {/* Booking Widget Placeholder */}
          <div className="bg-white p-4 rounded-lg shadow-xl max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Where to? (e.g. Puri, Sundarban)" 
                  className="w-full p-3 border rounded text-gray-800 focus:outline-none focus:border-primary" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
            </div>
            <div className="flex-1">
                <input type="date" className="w-full p-3 border rounded text-gray-800 focus:outline-none focus:border-primary" />
            </div>
            <button 
              onClick={handleSearch}
              className="bg-secondary text-primary font-bold py-3 px-8 rounded hover:bg-opacity-90 transition"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="font-heading text-4xl font-bold text-primary mb-4">Trending Destinations</h2>
                <div className="h-1 w-20 bg-secondary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {featuredDestinations.map((dest) => (
                    <div key={dest.id} className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
                        <div className="relative h-64 overflow-hidden">
                            <img src={dest.imageUrl} alt={dest.name} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                            <div className="absolute top-4 right-4 bg-secondary text-primary font-bold px-3 py-1 rounded-full text-sm">
                                {dest.price}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="font-heading text-xl font-bold text-primary mb-2">{dest.name}</h3>
                            <p className="text-gray-600 mb-4">{dest.description}</p>
                            <Link 
                                to={`/destinations?q=${encodeURIComponent(dest.name)}`}
                                className="inline-flex items-center text-secondary font-semibold hover:underline"
                            >
                                Explore <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link to="/destinations" className="inline-block border-2 border-primary text-primary font-bold py-3 px-8 rounded hover:bg-primary hover:text-white transition duration-300">
                    View All Destinations
                </Link>
            </div>
        </div>
      </section>

      {/* Curated Experiences */}
      <section className="py-20 bg-bgBody">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="font-heading text-4xl font-bold text-primary mb-4">Curated Experiences</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Immerse yourself in themes that resonate with your spirit.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {curatedExperiences.map((exp, idx) => (
                    <div key={idx} className="relative h-80 rounded-lg overflow-hidden group cursor-pointer" onClick={() => navigate(`/destinations?q=${encodeURIComponent(exp.title)}`)}>
                        <img src={exp.imageUrl} alt={exp.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <h3 className="font-heading text-2xl font-bold mb-2">{exp.title}</h3>
                            <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">{exp.caption}</p>
                            <span className="text-secondary font-bold text-sm uppercase tracking-wider border-b-2 border-transparent group-hover:border-secondary transition-all duration-300">View Packages</span>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl font-bold mb-12">What Our Travelers Say</h2>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <div className="flex justify-center mb-4 text-secondary">
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                    <Star fill="currentColor" />
                </div>
                <p className="text-xl italic mb-6">"An absolutely magical experience. The team at Traveller Book handled every detail perfectly. The trip to Varanasi changed my perspective on life."</p>
                <h4 className="font-bold text-lg">- Sarah & James, UK</h4>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface text-center">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-heading text-4xl font-bold text-primary mb-6">Ready to Plan Your Dream Trip?</h2>
            <p className="text-gray-600 text-lg mb-8">Let our experts craft a personalized itinerary just for you.</p>
            <Link to="/contact" className="inline-block bg-secondary text-primary font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300">
                Start Planning Today
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;