import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/SimpleFooter";
import { motion } from "framer-motion";

import { Link } from "@/components/ui/link"; //Added Link import as per changes

const BlogPage = () => {
  const blogPosts = [
    {
      title: "The Future of Digital Marketing",
      date: "March 15, 2024",
      excerpt: "Explore the latest trends and innovations shaping the digital marketing landscape.",
      image: "/blog/digital-marketing.jpg",
      category: "Marketing"
    },
    {
      title: "Web Design Trends for 2024",
      date: "March 10, 2024",
      excerpt: "Discover the cutting-edge design trends that will dominate the web this year.",
      image: "/blog/web-design.jpg",
      category: "Design"
    },
    {
      title: "SEO Strategies That Work",
      date: "March 5, 2024",
      excerpt: "Learn about effective SEO techniques to improve your website's visibility.",
      image: "/blog/seo.jpg",
      category: "SEO"
    }
  ];

  return (
    <div className="bg-[#0c0e0c] text-white font-sans antialiased">
      <Navbar />
      <div className="py-16 bg-[#0d0f0d] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our <span className="text-[#00ff4c]">Blog</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Insights, updates, and expert knowledge from our team
            </p>
            <Link to="/blog/create" className="inline-block mt-4 px-6 py-2 bg-[#00ff4c] text-black rounded hover:bg-[#00cc3d] transition-colors">
              Write New Blog
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="h-48 bg-gray-800"></div>
                <div className="p-6">
                  <span className="text-[#00ff4c] text-sm">{post.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <button className="text-[#00ff4c] hover:underline">Read More</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default BlogPage;