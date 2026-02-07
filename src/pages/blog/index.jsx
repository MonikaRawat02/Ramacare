import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import axios from "axios";
import Link from "next/link";

export default function BlogListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/blog/published");
        if (res.data.success) {
          // Add topics to each post
          const postsWithTopics = res.data.blogs.map(post => ({
            ...post,
            topics: extractTopics(post.content || "")
          }));
          setPosts(postsWithTopics);
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

  // Extract topics from content (hidden topic markers)
  const extractTopics = (html) => {
    if (!html || typeof html !== "string") return [];
    // Look for hidden paragraphs containing hashtags
    const topicRegex = /<p[^>]*style="display:\s*none[^"]*"[^>]*>(.*?)<\/p>/gi;
    const matches = html.matchAll(topicRegex);
    const topics = [];
    for (const match of matches) {
      const content = match[1];
      // Extract hashtags from the content
      const hashtagMatches = content.match(/#(\w+)/g);
      if (hashtagMatches) {
        const extractedTopics = hashtagMatches.map(tag => tag.substring(1)); // Remove # symbol
        topics.push(...extractedTopics);
      }
    }
    // Remove duplicates and return
    return [...new Set(topics)].slice(0, 3); // Limit to first 3 topics
  };

  const filtered = posts.filter((p) =>
    (p.title || "").toLowerCase().includes(search.toLowerCase()),
  );

  const formatDate = (d) => {
    try {
      return new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
    } catch {
      return "";
    }
  };

  return (
    <Layout>
      <div className="force-light">
        <div className="relative bg-gradient-to-b from-teal-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">Insights & Updates</h1>
              <p className="mt-3 text-gray-600">Discover the latest articles from our experts</p>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-xl">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search posts..."
                  className="w-full pl-4 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {loading ? (
            <div className="flex justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.paramlink}`}
                  className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col h-full"
                >
                  {(() => {
                    const src = extractFirstImageSrc(post.content || "");
                    return src ? (
                      <img
                        src={src}
                        alt={post.title || ""}
                        className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="h-44 bg-gradient-to-br from-teal-100 to-teal-50" />
                    );
                  })()}
                  <div className="p-5 flex-1">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{post.postedBy?.name || "Admin"}</span>
                      <span>•</span>
                      <span>{formatDate(post.createdAt)}</span>
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-gray-900">{post.title}</h2>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3 blog-content-preview">
                      {(post.content || "").replace(/<[^>]*>/g, "").slice(0, 160)}
                    </p>
                    
                    {/* Display topics/hashtags */}
                    {post.topics.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {post.topics.map((topic) => (
                          <span 
                            key={topic}
                            className="px-2 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-medium"
                          >
                            #{topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 text-sm text-teal-700 font-medium">
                    Read article
                  </div>
                </Link>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full text-center py-12 text-gray-500">
                  No posts found.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}