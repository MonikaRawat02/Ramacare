import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import axios from "axios";
import Link from "next/link";

export default function BlogListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [featuredPost, setFeaturedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/blog/published");
        if (res.data.success) {
          const postsWithTopics = res.data.blogs.map(post => ({
            ...post,
            topics: extractTopics(post.content || ""),
            readTime: calculateReadTime(post.content || "")
          }));
          setPosts(postsWithTopics);
          if (postsWithTopics.length > 0) {
            setFeaturedPost(postsWithTopics[0]);
          }
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const extractFirstImageSrc = (html) => {
    if (!html || typeof html !== "string") return null;
    const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
    return match ? match[1] : null;
  };

  const extractTopics = (html) => {
    if (!html || typeof html !== "string") return [];
    const topicRegex = /<p[^>]*style="display:\s*none[^"]*"[^>]*>(.*?)<\/p>/gi;
    const matches = html.matchAll(topicRegex);
    const topics = [];
    for (const match of matches) {
      const content = match[1];
      const hashtagMatches = content.match(/#(\w+)/g);
      if (hashtagMatches) {
        const extractedTopics = hashtagMatches.map(tag => tag.substring(1));
        topics.push(...extractedTopics);
      }
    }
    return [...new Set(topics)].slice(0, 3);
  };

  const calculateReadTime = (html) => {
    // Decode HTML entities before stripping tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const decodedText = tempDiv.textContent || tempDiv.innerText || '';
    const words = decodedText.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return minutes;
  };

  const allTopics = [...new Set(posts.flatMap(p => p.topics))];

  const getFilteredPosts = () => {
    let filtered = posts.filter((p) =>
      (p.title || "").toLowerCase().includes(search.toLowerCase())
    );

    if (selectedTopic !== "all") {
      filtered = filtered.filter(p => p.topics.includes(selectedTopic));
    }

    return filtered;
  };

  const filtered = getFilteredPosts();
  const regularPosts = filtered.filter(p => p._id !== featuredPost?._id);

  const formatDate = (d) => {
    try {
      return new Date(d).toLocaleDateString(undefined, { 
        year: "numeric", 
        month: "short", 
        day: "numeric" 
      });
    } catch {
      return "";
    }
  };

  return (
    <Layout>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #065f46, #059669, #10b981);
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .glass-dark {
          background: rgba(6, 95, 70, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .shimmer-line {
          background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.4), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }

        .mesh-gradient {
          background: 
            radial-gradient(at 0% 0%, rgba(6, 95, 70, 0.05) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(5, 150, 105, 0.05) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(16, 185, 129, 0.05) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(6, 78, 59, 0.05) 0px, transparent 50%);
        }

        .hover-lift {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px) scale(1.01);
        }

        .playfair {
          font-family: 'Playfair Display', serif;
        }

        .inter {
          font-family: 'Inter', sans-serif;
        }

        .space-grotesk {
          font-family: 'Space Grotesk', sans-serif;
        }

        .text-shadow-sm {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .glow-green {
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.3);
        }

        .border-gradient {
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
        }

        .border-gradient::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, #10b981, #059669);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .border-gradient:hover::before {
          opacity: 1;
        }

        .perspective-card {
          perspective: 1000px;
        }

        .perspective-card:hover .card-inner {
          transform: rotateX(2deg) rotateY(-2deg);
        }

        .card-inner {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
        }
      `}</style>

      <div className="force-light min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 mesh-gradient relative overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-green-400/10 to-emerald-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-emerald-500/10 to-green-700/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-bl from-green-300/10 to-emerald-800/10 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Hero Section */}
        <div className="relative pt-20 pb-16">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Status Badge */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="glass-effect inline-flex items-center gap-3 px-5 py-3 rounded-full shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                </span>
                <span className="space-grotesk text-sm font-bold text-green-900 tracking-wider uppercase">
                  Medical Insights
                </span>
                <div className="h-4 w-px bg-green-900/20"></div>
                <span className="inter text-xs text-green-700 font-medium">{posts.length} Articles</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="text-center mb-10 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <h1 className="playfair text-7xl md:text-8xl font-black mb-4 gradient-text text-shadow-sm leading-tight">
                Health & Wellness
              </h1>
              <div className="h-1 w-32 mx-auto mb-6 rounded-full shimmer-line"></div>
              <p className="inter text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Expert medical insights, treatment guides, and health tips from 
                <span className="text-green-700 font-semibold"> Ramacare Polyclinic</span>
              </p>
            </div>

            {/* Search & Filters */}
            <div className="max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="glass-effect rounded-2xl p-6 shadow-xl">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                      <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search treatments, health topics, medical advice..."
                      className="inter w-full pl-14 pr-14 py-4 bg-white/60 border-2 border-green-100 rounded-xl shadow-sm focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all text-gray-900 placeholder-gray-400 font-medium"
                    />
                    {search && (
                      <button
                        onClick={() => setSearch("")}
                        className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-green-600 transition-colors"
                      >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex bg-white/80 rounded-xl p-1.5 shadow-sm border border-green-100">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`px-5 py-3 rounded-lg font-semibold text-sm transition-all space-grotesk ${
                        viewMode === "grid"
                          ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/30"
                          : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`px-5 py-3 rounded-lg font-semibold text-sm transition-all space-grotesk ${
                        viewMode === "list"
                          ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/30"
                          : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedTopic === "all" && !search && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
              <span className="space-grotesk text-sm font-bold text-green-700 tracking-widest uppercase">Featured Article</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
            </div>
            
            <Link
              href={`/blog/${featuredPost.paramlink}`}
              className="group perspective-card block"
            >
              <div className="card-inner glass-effect rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover-lift">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    {(() => {
                      const src = extractFirstImageSrc(featuredPost.content || "");
                      return src ? (
                        <>
                          <img
                            src={src}
                            alt={featuredPost.title || ""}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 via-green-800/20 to-transparent"></div>
                        </>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 flex items-center justify-center">
                          <svg className="w-24 h-24 text-white/30" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v8h12V6H4zm2 2h8v4H6V8z" />
                          </svg>
                        </div>
                      );
                    })()}
                    
                    <div className="absolute top-6 left-6">
                      <div className="glass-effect px-4 py-2 rounded-full">
                        <span className="space-grotesk text-xs font-bold text-green-900 uppercase tracking-wider">
                          ⭐ Featured
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-sm">
                            {(featuredPost.postedBy?.name || "Admin").charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="inter text-sm font-semibold text-gray-900">
                            {featuredPost.postedBy?.name || "Admin"}
                          </p>
                          <p className="inter text-xs text-gray-500">{formatDate(featuredPost.createdAt)}</p>
                        </div>
                      </div>
                      <div className="h-6 w-px bg-gray-300"></div>
                      <div className="flex items-center gap-2 text-green-700">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="inter text-sm font-semibold">{featuredPost.readTime} min read</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-green-700 transition-colors">
                      {featuredPost.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="inter text-lg text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {(() => {
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = featuredPost.content || '';
                        const decodedText = tempDiv.textContent || tempDiv.innerText || '';
                        return decodedText.slice(0, 200) + '...';
                      })()}
                    </p>

                    {/* Topics */}
                    {featuredPost.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPost.topics.map((topic) => (
                          <span 
                            key={topic}
                            className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-semibold space-grotesk border border-green-200"
                          >
                            #{topic}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex items-center gap-3 text-green-700 font-bold inter">
                      <span className="text-lg">Read Complete Guide</span>
                      <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Topics Filter */}
        {allTopics.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="glass-effect rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                  <span className="space-grotesk text-sm font-bold text-gray-800 uppercase tracking-wider">Topics</span>
                </div>
                <div className="glass-dark px-4 py-2 rounded-full">
                  <span className="inter text-sm font-semibold text-green-800">
                    {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedTopic("all")}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all space-grotesk border-2 ${
                    selectedTopic === "all"
                      ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white border-transparent shadow-lg shadow-green-500/30 scale-105"
                      : "bg-white/80 text-gray-700 border-green-200 hover:border-green-400 hover:bg-white"
                  }`}
                >
                  All Topics
                </button>
                {allTopics.map(topic => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all space-grotesk border-2 ${
                      selectedTopic === topic
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white border-transparent shadow-lg shadow-green-500/30 scale-105"
                        : "bg-white/80 text-gray-700 border-green-200 hover:border-green-400 hover:bg-white"
                    }`}
                  >
                    #{topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid/List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-green-100"></div>
                <div className="absolute inset-0 rounded-full border-4 border-green-600 border-t-transparent animate-spin"></div>
              </div>
              <p className="inter text-lg text-gray-600 font-medium">Loading health articles...</p>
            </div>
          ) : (
            <>
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post, index) => (
                    <Link
                      key={post._id}
                      href={`/blog/${post.paramlink}`}
                      className="group perspective-card animate-fade-in"
                      style={{animationDelay: `${index * 0.05}s`}}
                    >
                      <div className="card-inner glass-effect rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover-lift border-gradient h-full flex flex-col">
                        {/* Image */}
                        <div className="relative h-56 overflow-hidden">
                          {(() => {
                            const src = extractFirstImageSrc(post.content || "");
                            return src ? (
                              <>
                                <img
                                  src={src}
                                  alt={post.title || ""}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-green-800/20 to-transparent"></div>
                              </>
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 flex items-center justify-center">
                                <svg className="w-16 h-16 text-white/30" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v8h12V6H4zm2 2h8v4H6V8z" />
                                </svg>
                              </div>
                            );
                          })()}
                          
                          <div className="absolute top-4 right-4 glass-effect px-3 py-2 rounded-full shadow-lg">
                            <div className="flex items-center gap-1.5">
                              <svg className="w-4 h-4 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                              <span className="inter text-xs font-bold text-gray-800">{post.readTime}m</span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          {/* Author */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center shadow-md">
                              <span className="text-white font-bold text-xs">
                                {(post.postedBy?.name || "Admin").charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="inter text-xs font-semibold text-gray-900 truncate">
                                {post.postedBy?.name || "Admin"}
                              </p>
                              <p className="inter text-xs text-gray-500">{formatDate(post.createdAt)}</p>
                            </div>
                          </div>

                          {/* Title */}
                          <h2 className="playfair text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors leading-snug">
                            {post.title}
                          </h2>

                          {/* Excerpt */}
                          <p className="inter text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed flex-1">
                            {(() => {
                              const tempDiv = document.createElement('div');
                              tempDiv.innerHTML = post.content || '';
                              const decodedText = tempDiv.textContent || tempDiv.innerText || '';
                              return decodedText.slice(0, 120) + '...';
                            })()}
                          </p>

                          {/* Topics */}
                          {post.topics.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.topics.slice(0, 2).map((topic) => (
                                <span 
                                  key={topic}
                                  className="px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-xs font-semibold space-grotesk border border-green-200"
                                >
                                  #{topic}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Read More */}
                          <div className="flex items-center gap-2 text-green-700 font-bold text-sm mt-auto pt-4 border-t border-green-100 inter">
                            <span>Continue Reading</span>
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>

                        {/* Accent Border */}
                        <div className="h-1.5 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {regularPosts.map((post, index) => (
                    <Link
                      key={post._id}
                      href={`/blog/${post.paramlink}`}
                      className="group perspective-card block animate-fade-in"
                      style={{animationDelay: `${index * 0.05}s`}}
                    >
                      <div className="card-inner glass-effect rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 border-gradient hover-lift">
                        <div className="flex flex-col sm:flex-row gap-6 p-6">
                          {/* Image */}
                          <div className="relative w-full sm:w-64 h-44 rounded-xl overflow-hidden flex-shrink-0">
                            {(() => {
                              const src = extractFirstImageSrc(post.content || "");
                              return src ? (
                                <img
                                  src={src}
                                  alt={post.title || ""}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 flex items-center justify-center">
                                  <svg className="w-14 h-14 text-white/30" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v8h12V6H4zm2 2h8v4H6V8z" />
                                  </svg>
                                </div>
                              );
                            })()}
                            
                            <div className="absolute top-3 right-3 glass-effect px-3 py-1.5 rounded-full">
                              <span className="inter text-xs font-bold text-gray-800">{post.readTime} min</span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 flex flex-col justify-between min-w-0">
                            <div>
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                                  <span className="text-white font-bold text-xs">
                                    {(post.postedBy?.name || "Admin").charAt(0).toUpperCase()}
                                  </span>
                                </div>
                                <span className="inter text-sm font-semibold text-gray-900">
                                  {post.postedBy?.name || "Admin"}
                                </span>
                                <span className="text-gray-300">•</span>
                                <span className="inter text-xs text-gray-500">{formatDate(post.createdAt)}</span>
                              </div>

                              <h2 className="playfair text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
                                {post.title}
                              </h2>

                              <p className="inter text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                                {(() => {
                                  const tempDiv = document.createElement('div');
                                  tempDiv.innerHTML = post.content || '';
                                  const decodedText = tempDiv.textContent || tempDiv.innerText || '';
                                  return decodedText.slice(0, 180) + '...';
                                })()}
                              </p>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                              {post.topics.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {post.topics.slice(0, 3).map((topic) => (
                                    <span 
                                      key={topic}
                                      className="px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-xs font-semibold space-grotesk border border-green-200"
                                    >
                                      #{topic}
                                    </span>
                                  ))}
                                </div>
                              )}

                              <div className="flex items-center gap-2 text-green-700 font-bold text-sm whitespace-nowrap inter">
                                <span>Read Article</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Empty State */}
              {filtered.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="playfair text-2xl font-bold text-gray-900 mb-3">No Articles Found</h3>
                  <p className="inter text-gray-600 mb-8 text-center max-w-md">
                    We couldn't find any articles matching your criteria. Try adjusting your filters or search terms.
                  </p>
                  <button
                    onClick={() => {
                      setSearch("");
                      setSelectedTopic("all");
                    }}
                    className="px-8 py-3.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-bold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/30 space-grotesk hover:scale-105"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Decoration */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
        </div>
      </div>
    </Layout>
  );
}