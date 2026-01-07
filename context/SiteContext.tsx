import React, { createContext, useContext, useEffect, useState } from "react";
import { BlogPost, Destination, SiteConfig } from "../types";
import { INITIAL_CONFIG, INITIAL_DESTINATIONS, INITIAL_POSTS } from "../constants";

interface SiteContextType {
  config: SiteConfig;
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
  resetConfig: () => void;
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, 'id'>) => void;
  updatePost: (id: string, post: Partial<BlogPost>) => void;
  deletePost: (id: string) => void;
  destinations: Destination[];
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load config from local storage or use initial
  const [config, setConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem("siteConfig");
    return saved ? JSON.parse(saved) : INITIAL_CONFIG;
  });

  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem("sitePosts");
    return saved ? JSON.parse(saved) : INITIAL_POSTS;
  });

  const [destinations] = useState<Destination[]>(INITIAL_DESTINATIONS); // Static for now, could be dynamic
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem("isAdmin") === "true";
  });

  // Persist changes
  useEffect(() => {
    localStorage.setItem("siteConfig", JSON.stringify(config));
    // Apply CSS variables
    const root = document.documentElement;
    root.style.setProperty("--color-primary", config.colors.primary);
    root.style.setProperty("--color-secondary", config.colors.secondary);
    root.style.setProperty("--color-bg", config.colors.background);
    root.style.setProperty("--color-surface", config.colors.surface);
    
    // Apply fonts (simplified)
    if (config.typography.headingFont !== 'Poppins') {
        // In a real app we'd fetch the font dynamically
    }
    
    // Update Document Title
    document.title = config.seo.title;

  }, [config]);

  useEffect(() => {
    localStorage.setItem("sitePosts", JSON.stringify(posts));
  }, [posts]);

  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };

  const resetConfig = () => {
    setConfig(INITIAL_CONFIG);
  };

  const addPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost = { ...post, id: Date.now().toString() };
    setPosts([newPost, ...posts]);
  };

  const updatePost = (id: string, updatedPost: Partial<BlogPost>) => {
    setPosts(posts.map(p => p.id === id ? { ...p, ...updatedPost } : p));
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const login = (password: string) => {
    // Hardcoded password as per requirements
    // Check if user changed password in localStorage, else default
    const storedPass = localStorage.getItem("adminPassword") || "admin123";
    if (password === storedPass) {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
  };

  return (
    <SiteContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        posts,
        addPost,
        updatePost,
        deletePost,
        destinations,
        isAdmin,
        login,
        logout,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used within a SiteProvider");
  }
  return context;
};
