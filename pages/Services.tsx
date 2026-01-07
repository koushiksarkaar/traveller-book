import React from "react";
import { INITIAL_SERVICES } from "../constants";
import * as Icons from "lucide-react";

// Helper to render icon dynamically
const IconRenderer = ({ name, className }: { name: string; className?: string }) => {
  const Icon = (Icons as any)[name];
  return Icon ? <Icon className={className} /> : null;
};

const Services: React.FC = () => {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h1 className="font-heading text-4xl font-bold text-primary mb-4">Our Premium Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">We handle the logistics so you can focus on the memories. Comprehensive support for a seamless journey.</p>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {INITIAL_SERVICES.map((service) => (
                <div key={service.id} className="p-8 rounded-xl bg-bgBody hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition duration-300 group">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:bg-secondary group-hover:text-white transition">
                        <IconRenderer name={service.iconName} className="h-7 w-7" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                </div>
            ))}
        </div>

        {/* Process Infographic */}
        <div className="bg-surface rounded-2xl p-8 md:p-12 shadow-inner bg-gray-50">
            <h2 className="font-heading text-3xl font-bold text-center text-primary mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10"></div>

                <div className="text-center relative">
                    <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 border-4 border-white shadow">1</div>
                    <h4 className="font-bold text-lg mb-2">Consultation</h4>
                    <p className="text-sm text-gray-500">Discuss your interests and budget.</p>
                </div>
                <div className="text-center relative">
                    <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 border-4 border-white shadow">2</div>
                    <h4 className="font-bold text-lg mb-2">Planning</h4>
                    <p className="text-sm text-gray-500">We craft a custom itinerary.</p>
                </div>
                <div className="text-center relative">
                    <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 border-4 border-white shadow">3</div>
                    <h4 className="font-bold text-lg mb-2">Booking</h4>
                    <p className="text-sm text-gray-500">Confirm hotels and transport.</p>
                </div>
                <div className="text-center relative">
                    <div className="w-24 h-24 bg-secondary text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 border-4 border-white shadow">4</div>
                    <h4 className="font-bold text-lg mb-2">Travel</h4>
                    <p className="text-sm text-gray-500">Enjoy your trip with 24/7 support.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
