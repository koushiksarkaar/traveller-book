import React, { useState } from "react";
import { useSite } from "../context/SiteContext";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact: React.FC = () => {
  const { config } = useSite();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
        setStatus("error");
        return;
    }
    // Simulate send
    setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="py-12 bg-bgBody min-h-screen">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="font-heading text-4xl font-bold text-primary mb-4">Get in Touch</h1>
                <p className="text-gray-600">We'd love to hear from you. Start your journey today.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h3 className="font-heading text-xl font-bold text-primary mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-bgBody p-3 rounded-full mr-4">
                                    <MapPin className="text-secondary h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Our Office</h4>
                                    <p className="text-gray-600">{config.contactInfo.address}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-bgBody p-3 rounded-full mr-4">
                                    <Phone className="text-secondary h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Phone</h4>
                                    <p className="text-gray-600">{config.contactInfo.phone}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-bgBody p-3 rounded-full mr-4">
                                    <Mail className="text-secondary h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Email</h4>
                                    <p className="text-gray-600">{config.contactInfo.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-64 rounded-xl overflow-hidden shadow-sm bg-gray-200 relative group">
                        <img src="https://picsum.photos/seed/map/600/400" alt="Map Location" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="bg-white px-4 py-2 rounded shadow text-sm font-bold text-primary">Map Preview</span>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="font-heading text-xl font-bold text-primary mb-6">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input 
                                    type="text" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input 
                                    type="email" 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input 
                                type="text" 
                                value={formData.subject}
                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea 
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded hover:bg-opacity-90 transition flex items-center justify-center">
                            <Send size={18} className="mr-2" /> Send Message
                        </button>

                        {status === "success" && <p className="text-green-600 text-center mt-2">Message sent successfully!</p>}
                        {status === "error" && <p className="text-red-600 text-center mt-2">Please fill in all fields.</p>}
                    </form>
                </div>
            </div>
       </div>
    </div>
  );
};

export default Contact;
