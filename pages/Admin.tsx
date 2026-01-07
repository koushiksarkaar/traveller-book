import React, { useState } from "react";
import { useSite } from "../context/SiteContext";
import { Lock, Save, RotateCcw, Layout, Type, Palette, FileText, Settings, Trash2, Edit, Plus } from "lucide-react";

const Admin: React.FC = () => {
  const { config, updateConfig, resetConfig, posts, addPost, updatePost, deletePost, isAdmin, login, logout } = useSite();
  
  // Login State
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Dashboard Tab State
  const [activeTab, setActiveTab] = useState<"general" | "content" | "seo">("general");

  // Post Editor State
  const [editingPost, setEditingPost] = useState<string | null>(null);
  const [postForm, setPostForm] = useState({ title: "", excerpt: "", content: "", imageUrl: "", author: "Admin", date: new Date().toISOString().split('T')[0] });

  // Handlers
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
        setError("");
    } else {
        setError("Invalid password");
    }
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
        updatePost(editingPost, postForm);
        setEditingPost(null);
    } else {
        addPost(postForm);
    }
    setPostForm({ title: "", excerpt: "", content: "", imageUrl: "", author: "Admin", date: new Date().toISOString().split('T')[0] });
  };

  const startEdit = (post: any) => {
    setEditingPost(post.id);
    setPostForm({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        imageUrl: post.imageUrl,
        author: post.author,
        date: post.date
    });
  };

  const cancelEdit = () => {
    setEditingPost(null);
    setPostForm({ title: "", excerpt: "", content: "", imageUrl: "", author: "Admin", date: new Date().toISOString().split('T')[0] });
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
            <div className="text-center mb-8">
                <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800">Admin Access</h2>
                <p className="text-gray-500 text-sm">Default password: admin123</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
                <div>
                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    />
                </div>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded hover:bg-opacity-90 transition">
                    Login
                </button>
            </form>
            <div className="mt-6 text-center">
                 <a href="/" className="text-sm text-gray-500 hover:text-primary">Back to Home</a>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Admin Header */}
        <div className="bg-white shadow z-10">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Settings className="w-5 h-5" /> Admin Dashboard
                </h1>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">Welcome, Admin</span>
                    <button onClick={logout} className="text-sm text-red-600 font-medium hover:underline">Logout</button>
                </div>
            </div>
        </div>

        <div className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
            {/* Sidebar Tabs */}
            <div className="w-full md:w-64 flex flex-col gap-2">
                <button 
                    onClick={() => setActiveTab("general")} 
                    className={`text-left px-4 py-3 rounded font-medium flex items-center gap-3 ${activeTab === "general" ? "bg-white shadow text-primary" : "text-gray-600 hover:bg-white/50"}`}
                >
                    <Palette size={18} /> Appearance
                </button>
                <button 
                    onClick={() => setActiveTab("content")} 
                    className={`text-left px-4 py-3 rounded font-medium flex items-center gap-3 ${activeTab === "content" ? "bg-white shadow text-primary" : "text-gray-600 hover:bg-white/50"}`}
                >
                    <FileText size={18} /> Blog Posts
                </button>
                <button 
                    onClick={() => setActiveTab("seo")} 
                    className={`text-left px-4 py-3 rounded font-medium flex items-center gap-3 ${activeTab === "seo" ? "bg-white shadow text-primary" : "text-gray-600 hover:bg-white/50"}`}
                >
                    <Layout size={18} /> SEO & Info
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-white rounded-xl shadow p-8 min-h-[500px]">
                
                {/* --- Appearance Tab --- */}
                {activeTab === "general" && (
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Theme Customization</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                                <div className="flex items-center gap-2">
                                    <input 
                                        type="color" 
                                        value={config.colors.primary}
                                        onChange={(e) => updateConfig({ colors: { ...config.colors, primary: e.target.value } })}
                                        className="h-10 w-20 rounded border cursor-pointer"
                                    />
                                    <span className="text-gray-500 font-mono text-sm">{config.colors.primary}</span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                                <div className="flex items-center gap-2">
                                    <input 
                                        type="color" 
                                        value={config.colors.secondary}
                                        onChange={(e) => updateConfig({ colors: { ...config.colors, secondary: e.target.value } })}
                                        className="h-10 w-20 rounded border cursor-pointer"
                                    />
                                    <span className="text-gray-500 font-mono text-sm">{config.colors.secondary}</span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Background Color (Body)</label>
                                <div className="flex items-center gap-2">
                                    <input 
                                        type="color" 
                                        value={config.colors.background}
                                        onChange={(e) => updateConfig({ colors: { ...config.colors, background: e.target.value } })}
                                        className="h-10 w-20 rounded border cursor-pointer"
                                    />
                                    <span className="text-gray-500 font-mono text-sm">{config.colors.background}</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t">
                             <div className="flex gap-4">
                                <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300" onClick={resetConfig}>
                                    <RotateCcw size={16} /> Reset Defaults
                                </button>
                                <div className="text-sm text-green-600 self-center hidden" id="saved-msg">Saved!</div>
                             </div>
                             <p className="text-xs text-gray-400 mt-2">* Changes are applied instantly. 'Reset' clears localStorage.</p>
                        </div>
                    </div>
                )}

                {/* --- SEO & Info Tab --- */}
                {activeTab === "seo" && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Site Info & SEO</h2>
                        
                        <div className="grid gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
                                <input 
                                    type="text" 
                                    value={config.name} 
                                    onChange={(e) => updateConfig({ name: e.target.value })}
                                    className="w-full border p-2 rounded" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Title</label>
                                <input 
                                    type="text" 
                                    value={config.seo.title} 
                                    onChange={(e) => updateConfig({ seo: { ...config.seo, title: e.target.value } })}
                                    className="w-full border p-2 rounded" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Description</label>
                                <textarea 
                                    value={config.seo.description} 
                                    onChange={(e) => updateConfig({ seo: { ...config.seo, description: e.target.value } })}
                                    className="w-full border p-2 rounded" 
                                    rows={3}
                                />
                            </div>
                        </div>

                        <h3 className="text-lg font-bold mt-6 mb-4">Contact Info</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" value={config.contactInfo.email} onChange={(e) => updateConfig({contactInfo: {...config.contactInfo, email: e.target.value}})} className="border p-2 rounded" placeholder="Email" />
                            <input type="text" value={config.contactInfo.phone} onChange={(e) => updateConfig({contactInfo: {...config.contactInfo, phone: e.target.value}})} className="border p-2 rounded" placeholder="Phone" />
                            <input type="text" value={config.contactInfo.address} onChange={(e) => updateConfig({contactInfo: {...config.contactInfo, address: e.target.value}})} className="border p-2 rounded col-span-2" placeholder="Address" />
                        </div>

                        <h3 className="text-lg font-bold mt-6 mb-4">Social Media Links</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Facebook</label>
                                <input 
                                    type="text" 
                                    value={config.socialLinks.facebook} 
                                    onChange={(e) => updateConfig({ socialLinks: { ...config.socialLinks, facebook: e.target.value } })}
                                    className="w-full border p-2 rounded" 
                                    placeholder="https://facebook.com/..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
                                <input 
                                    type="text" 
                                    value={config.socialLinks.instagram} 
                                    onChange={(e) => updateConfig({ socialLinks: { ...config.socialLinks, instagram: e.target.value } })}
                                    className="w-full border p-2 rounded" 
                                    placeholder="https://instagram.com/..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Twitter (X)</label>
                                <input 
                                    type="text" 
                                    value={config.socialLinks.twitter} 
                                    onChange={(e) => updateConfig({ socialLinks: { ...config.socialLinks, twitter: e.target.value } })}
                                    className="w-full border p-2 rounded" 
                                    placeholder="https://twitter.com/..."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                                <input 
                                    type="text" 
                                    value={config.socialLinks.linkedin} 
                                    onChange={(e) => updateConfig({ socialLinks: { ...config.socialLinks, linkedin: e.target.value } })}
                                    className="w-full border p-2 rounded" 
                                    placeholder="https://linkedin.com/..."
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* --- Content (Blog) Tab --- */}
                {activeTab === "content" && (
                    <div>
                         <h2 className="text-2xl font-bold mb-6 border-b pb-2">Manage Blog Posts</h2>
                         
                         {/* Edit Form */}
                         <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
                            <h3 className="font-bold text-lg mb-4">{editingPost ? "Edit Post" : "Add New Post"}</h3>
                            <form onSubmit={handleSavePost} className="grid grid-cols-1 gap-4">
                                <input type="text" placeholder="Title" required value={postForm.title} onChange={e => setPostForm({...postForm, title: e.target.value})} className="border p-2 rounded" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="date" required value={postForm.date} onChange={e => setPostForm({...postForm, date: e.target.value})} className="border p-2 rounded" />
                                    <input type="text" placeholder="Image URL (e.g. https://picsum.photos/...)" value={postForm.imageUrl} onChange={e => setPostForm({...postForm, imageUrl: e.target.value})} className="border p-2 rounded" />
                                </div>
                                <textarea placeholder="Short Excerpt" required value={postForm.excerpt} onChange={e => setPostForm({...postForm, excerpt: e.target.value})} className="border p-2 rounded h-20" />
                                <textarea placeholder="Full Content" required value={postForm.content} onChange={e => setPostForm({...postForm, content: e.target.value})} className="border p-2 rounded h-32" />
                                
                                <div className="flex gap-2">
                                    <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 flex items-center gap-2">
                                        <Save size={16} /> {editingPost ? "Update Post" : "Create Post"}
                                    </button>
                                    {editingPost && (
                                        <button type="button" onClick={cancelEdit} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
                                    )}
                                </div>
                            </form>
                         </div>

                         {/* List */}
                         <div className="space-y-4">
                            {posts.map(post => (
                                <div key={post.id} className="flex justify-between items-center p-4 bg-white border rounded shadow-sm hover:shadow-md transition">
                                    <div>
                                        <h4 className="font-bold text-lg">{post.title}</h4>
                                        <span className="text-xs text-gray-500">{post.date}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button onClick={() => startEdit(post)} className="p-2 text-blue-600 hover:bg-blue-50 rounded"><Edit size={18} /></button>
                                        <button onClick={() => deletePost(post.id)} className="p-2 text-red-600 hover:bg-red-50 rounded"><Trash2 size={18} /></button>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default Admin;