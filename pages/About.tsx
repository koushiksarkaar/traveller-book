import React from "react";
import { TEAM_MEMBERS } from "../constants";
import { ShieldCheck, Heart, Leaf } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="pt-10 pb-20">
      {/* Hero */}
      <div className="bg-primary text-white py-20 px-4 mb-20">
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-heading text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Founded with a passion for authentic exploration, Traveller Book bridges the gap between luxury and local culture.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
                <img src="https://picsum.photos/seed/teamwork/800/600" alt="Our Team" className="rounded-lg shadow-xl" />
            </div>
            <div>
                <h2 className="font-heading text-3xl font-bold text-primary mb-6">Mission & Vision</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    Our mission is to showcase India's diversity through responsible, immersive travel experiences that respect local communities and the environment.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    We envision a world where travel is seamless, meaningful, and transformative. We strive to be the most trusted partner for anyone seeking to discover the true heart of India.
                </p>
            </div>
        </div>

        {/* Values */}
        <div className="mb-24">
            <h2 className="font-heading text-3xl font-bold text-center text-primary mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-white rounded-lg shadow-md border-t-4 border-secondary">
                    <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-xl mb-2">Trust</h3>
                    <p className="text-gray-600">Transparent pricing and reliable service you can count on.</p>
                </div>
                <div className="text-center p-8 bg-white rounded-lg shadow-md border-t-4 border-secondary">
                    <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-xl mb-2">Personalization</h3>
                    <p className="text-gray-600">Every journey is unique, crafted specifically for your preferences.</p>
                </div>
                <div className="text-center p-8 bg-white rounded-lg shadow-md border-t-4 border-secondary">
                    <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-xl mb-2">Sustainability</h3>
                    <p className="text-gray-600">Committed to eco-friendly practices and supporting local economies.</p>
                </div>
            </div>
        </div>

        {/* Team */}
        <div>
            <h2 className="font-heading text-3xl font-bold text-center text-primary mb-12">Meet The Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {TEAM_MEMBERS.map((member) => (
                    <div key={member.id} className="text-center">
                        <img src={member.photoUrl} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg" />
                        <h3 className="font-bold text-lg text-primary">{member.name}</h3>
                        <p className="text-secondary text-sm uppercase tracking-wide">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;
