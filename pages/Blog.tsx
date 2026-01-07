import React from "react";
import { useSite } from "../context/SiteContext";
import { Calendar, User } from "lucide-react";

const Blog: React.FC = () => {
  const { posts } = useSite();
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="py-12 bg-bgBody min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="font-heading text-4xl font-bold text-primary mb-4">Travel Journal</h1>
            <p className="text-gray-600">Stories, tips, and inspiration from the road.</p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
            <div className="mb-16 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row h-auto md:h-96">
                <div className="md:w-1/2 h-64 md:h-full">
                    <img src={featuredPost.imageUrl} alt={featuredPost.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                        <span className="flex items-center"><Calendar size={14} className="mr-1"/> {featuredPost.date}</span>
                        <span className="flex items-center"><User size={14} className="mr-1"/> {featuredPost.author}</span>
                    </div>
                    <h2 className="font-heading text-3xl font-bold text-primary mb-4 hover:text-secondary cursor-pointer transition">{featuredPost.title}</h2>
                    <p className="text-gray-600 mb-6 flex-1">{featuredPost.excerpt}</p>
                    <button className="self-start px-6 py-2 bg-primary text-white font-medium rounded hover:bg-secondary hover:text-primary transition">Read Article</button>
                </div>
            </div>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
                    <div className="h-48 overflow-hidden">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center text-xs text-gray-400 mb-3 space-x-3">
                             <span className="flex items-center"><Calendar size={12} className="mr-1"/> {post.date}</span>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-primary mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                        <button className="text-secondary font-semibold hover:underline self-start">Read More</button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
