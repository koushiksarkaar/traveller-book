import React, { useState } from "react";
import { useSite } from "../context/SiteContext";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { config } = useSite();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      // Simulate API call
      setSubscribed(true);
      setEmail("");
      
      // Reset status after a few seconds so they can see the input again if needed
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6 text-white">{config.name}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We curate premium, personalized travel experiences across India,
              unveiling the hidden gems and spiritual soul of this magnificent
              land.
            </p>
            <div className="flex space-x-4">
              <a href={config.socialLinks.facebook} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-secondary transition">
                <Facebook size={20} />
              </a>
              <a href={config.socialLinks.instagram} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-secondary transition">
                <Instagram size={20} />
              </a>
              <a href={config.socialLinks.twitter} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-secondary transition">
                <Twitter size={20} />
              </a>
              <a href={config.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-secondary transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-white transition">Destinations</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{config.contactInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-300">{config.contactInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-300">{config.contactInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-secondary">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to get the latest travel updates and exclusive offers.</p>
            
            {subscribed ? (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center text-green-200">
                <Check className="h-5 w-5 mr-2" />
                <span>Thanks for subscribing!</span>
              </div>
            ) : (
              <form className="flex flex-col space-y-3" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  required
                  className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition"
                />
                <button type="submit" className="px-4 py-2 bg-secondary text-primary font-bold rounded hover:bg-opacity-90 transition">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {config.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
