import React, { useState } from "react";
import { useSite } from "../context/SiteContext";
import { useSearchParams } from "react-router-dom";

const Destinations: React.FC = () => {
  const { destinations } = useSite();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "North", "South", "East", "West"];
  
  // Logic: If query exists, we prioritize that. If category is selected, we clear query.
  const filteredDestinations = destinations.filter(dest => {
    if (query) {
        const q = query.toLowerCase();
        return dest.name.toLowerCase().includes(q) || 
               dest.region.toLowerCase().includes(q) ||
               dest.description.toLowerCase().includes(q);
    }
    
    if (filter === "All") return true;
    return dest.region === filter;
  });

  const handleCategoryClick = (cat: string) => {
    setFilter(cat);
    // If we are currently in search mode, clear it so category filter takes over
    if (query) {
        setSearchParams({});
    }
  };

  const clearSearch = () => {
    setSearchParams({});
    setFilter("All");
  };

  return (
    <div className="py-12 bg-bgBody min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="font-heading text-4xl font-bold text-primary mb-4">Explore Destinations</h1>
            <p className="text-gray-600">Find your perfect getaway from the Himalayas to the Indian Ocean.</p>
        </div>

        {/* Search Results Indicator */}
        {query && (
            <div className="text-center mb-8 bg-white p-4 rounded-lg shadow-sm inline-block w-full max-w-md mx-auto">
                <p className="text-lg text-gray-700 mb-2">
                    Showing results for <span className="font-bold text-primary">"{query}"</span>
                </p>
                <button 
                    onClick={clearSearch} 
                    className="text-sm text-secondary font-semibold hover:underline"
                >
                    Clear Search & Show All
                </button>
            </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`px-6 py-2 rounded-full font-medium transition ${
                        (filter === cat && !query)
                        ? "bg-primary text-white" 
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Grid */}
        {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDestinations.map((dest) => (
                    <div key={dest.id} className="bg-surface rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 flex flex-col">
                        <div className="h-60 overflow-hidden relative">
                            <img src={dest.imageUrl} alt={dest.name} className="w-full h-full object-cover" />
                            <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold text-primary uppercase tracking-wide">
                                {dest.region}
                            </span>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-heading text-xl font-bold text-primary">{dest.name}</h3>
                                <span className="text-secondary font-bold">{dest.price}</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-6 flex-1">{dest.description}</p>
                            <button className="w-full py-2 border border-primary text-primary font-semibold rounded hover:bg-primary hover:text-white transition">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="text-center py-12">
                <p className="text-xl text-gray-500">No destinations found matching your criteria.</p>
                <button onClick={clearSearch} className="mt-4 text-primary font-bold hover:underline">View All Destinations</button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;