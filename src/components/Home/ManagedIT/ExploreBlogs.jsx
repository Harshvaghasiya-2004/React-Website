import React from "react";
import { motion } from "framer-motion";

// --- Placeholder Data ---
const featuredBlog = {
  id: 1,
  title: "How to Successfully Migrate Your Business to the Cloud",
  author: "Ellinien Loma",
  category: "Solutions",
  summary:
    "Managed IT Services provide businesses with proactive technology support, ensuring seamless operations and enhanced security measures.",
  imageUrl:
    "https://themejunction.net/html/tekmino/demo/assets/images/blog/blog-1.webp",
};

const smallBlogs = [
  {
    id: 2,
    title: "Building a Stronger Workforce with IT Training",
    author: "Ellinien Loma",
    category: "Solutions",
    imageUrl:
      "https://themejunction.net/html/tekmino/demo/assets/images/blog/blog-2.webp",
  },
  {
    id: 3,
    title: "Optimizing Your IT Budget: Tips and Strategies",
    author: "Ellinien Loma",
    category: "Solutions",
    imageUrl:
      "https://themejunction.net/html/tekmino/demo/assets/images/blog/blog-3.webp",
  },
  {
    id: 4,
    title: "The Top 5 IT Challenges Faced by Modern Enterprises",
    author: "Ellinien Loma",
    category: "Solutions",
    imageUrl:
      "https://themejunction.net/html/tekmino/demo/assets/images/blog/blog-4.webp",
  },
];

// --- Category Badge ---
const CategoryBadge = ({ text }) => (
  <span
    className="inline-block text-[10px] font-semibold px-3 py-1 rounded-full 
    bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 
    shadow-[0_0_10px_rgba(234,179,8,0.15)] 
    hover:bg-yellow-400 hover:text-gray-900 hover:shadow-[0_0_18px_rgba(234,179,8,0.45)] 
    transition-all duration-300 cursor-pointer"
  >
    {text}
  </span>
);

// --- Featured Card ---
const FeaturedCard = ({ blog }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700/50
      shadow-xl hover:shadow-yellow-400/20 transition-all duration-500"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      {/* Image */}
      <div className="relative h-72 w-full group overflow-hidden">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/800x450/1c1c1c/ffffff?text=Featured+Image";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-7 space-y-4 bg-gradient-to-br from-gray-900 via-gray-800/70 to-gray-900/90 backdrop-blur-sm">
        <CategoryBadge text={blog.category} />

        <p className="text-xs text-gray-400">
          By <span className="text-yellow-400 font-medium">{blog.author}</span>
        </p>

        <h2 className="text-2xl font-bold text-white leading-snug">
          {blog.title}
        </h2>

        <p className="text-gray-400 text-sm line-clamp-3 border-l-2 border-yellow-400/60 pl-4">
          {blog.summary}
        </p>

        <a className="text-sm text-yellow-400 font-semibold flex items-center hover:opacity-80 transition">
          Read More
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3L278.6 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

// --- Small Card ---
const SmallCard = ({ blog, index }) => {
  return (
    <motion.div
      className="flex items-start gap-4 bg-gray-900 p-4 rounded-xl 
      hover:bg-gray-800 transition-all cursor-pointer border border-gray-700/50
      hover:border-yellow-400/40"
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
    >
      {/* Image */}
      <div className="relative w-28 h-20 rounded-md overflow-hidden group">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/300x200/1c1c1c/ffffff?text=Img";
          }}
        />
      </div>

      {/* Content */}
      <div className="space-y-1">
        <CategoryBadge text={blog.category} />

        <p className="text-[11px] text-gray-400">
          By <span className="text-yellow-400">{blog.author}</span>
        </p>

        <h3 className="text-white text-sm font-semibold leading-snug">
          {blog.title}
        </h3>

        <a className="text-xs text-gray-400 flex items-center hover:text-yellow-400 transition">
          Read More
          <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3L278.6 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const BlogNews = () => {
  return (
    <div className="bg-gray-900 text-white p-6 lg:p-12 flex justify-center">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex justify-between items-end flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-yellow-400 flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              Explore Blogs
            </p>

            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              Read Latest Blog & News.
            </h1>
          </div>

          <a className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-500 transition-all cursor-pointer">
            Explore More
          </a>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <FeaturedCard blog={featuredBlog} />

          <div className="space-y-4">
            {smallBlogs.map((blog, index) => (
              <SmallCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
