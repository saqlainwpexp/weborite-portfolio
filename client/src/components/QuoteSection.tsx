import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast";

// Service options for the form
const serviceOptions = [
  { id: "web-design", label: "Web Design" },
  { id: "web-development", label: "Web Development" },
  { id: "content-writing", label: "Content Writing" },
  { id: "social-media", label: "Social Media Management" },
  { id: "seo", label: "SEO" },
  { id: "custom", label: "Custom Requests" },
];

// Budget ranges for the dropdown
const budgetRanges = [
  { value: "small", label: "$1,000 - $5,000" },
  { value: "medium", label: "$5,000 - $10,000" },
  { value: "large", label: "$10,000 - $25,000" },
  { value: "enterprise", label: "$25,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

// Trust indicators
const trustIndicators = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 5L25.9 12.8L35 14.1L27.5 20.2L29 29.2L20 24.9L11 29.2L12.5 20.2L5 14.1L14.1 12.8L20 5Z" stroke="#00ff4c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "100+ Projects Delivered",
    description: "Successfully completed over 100 digital projects across various industries and scales."
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 12.5L17.5 25L10 17.5" stroke="#00ff4c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#00ff4c" strokeWidth="2"/>
      </svg>
    ),
    title: "Small Business Growth",
    description: "Specialized in helping small businesses achieve significant digital growth and market presence."
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 5V20L30 25" stroke="#00ff4c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#00ff4c" strokeWidth="2"/>
      </svg>
    ),
    title: "Quick Turnaround",
    description: "Efficient project management ensuring timely delivery without compromising quality."
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#00ff4c" strokeWidth="2"/>
        <path d="M5 20H35" stroke="#00ff4c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 5C24.7406 9.94668 27.4872 15.8238 28 20C27.4872 24.1762 24.7406 30.0533 20 35" stroke="#00ff4c" strokeWidth="2"/>
      </svg>
    ),
    title: "Global Experience",
    description: "Trusted by clients across 10+ countries, bringing diverse perspectives to every project."
  },
];

// Testimonials
const testimonials = [
  {
    quote: "They transformed our online presence completely. Our conversion rate increased by 45% within 3 months!",
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    image: "/testimonials/sarah.jpg",
  },
  {
    quote: "The team's attention to detail and commitment to our success was evident from day one. Highly recommended!",
    name: "Michael Chen",
    company: "Growth Ventures",
    image: "/testimonials/michael.jpg",
  },
];

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    budget: "",
    deadline: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle service checkbox changes
  const handleServiceChange = (serviceId: string) => {
    setFormData((prev) => {
      const services = prev.services.includes(serviceId)
        ? prev.services.filter((id) => id !== serviceId)
        : [...prev.services, serviceId];
      return { ...prev, services };
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Show success message
      setShowSuccess(true);
      toast.success("Your quote request has been submitted successfully!");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        services: [],
        budget: "",
        deadline: "",
        description: "",
      });
    } catch (error) {
      toast.error("Failed to submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden bg-[#0c0e0c]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00ff4c] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00ff4c] rounded-full opacity-5 blur-3xl"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="w-full h-full" style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(0,255,76,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,255,76,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px' 
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0d0f0d] p-8 rounded-2xl shadow-lg border border-[#00ff4c]/20 relative overflow-hidden group hover:border-[#00ff4c]/40 transition-all duration-300"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff4c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {!showSuccess ? (
              <form onSubmit={handleSubmit} className="relative">
                <h3 className="text-3xl font-bold mb-6 text-white relative">
                  Get Your Custom Quote
                  <span className="block h-1 w-20 bg-[#00ff4c] mt-2"></span>
                </h3>
                <p className="text-gray-400 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours with a customized quote for your project.
                </p>
                
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#0c0e0c] border border-[#00ff4c]/30 text-white focus:ring-2 focus:ring-[#00ff4c] focus:border-[#00ff4c] transition"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#0c0e0c] border border-[#00ff4c]/30 text-white focus:ring-2 focus:ring-[#00ff4c] focus:border-[#00ff4c] transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone (optional) */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0c0e0c] border border-[#00ff4c]/30 text-white focus:ring-2 focus:ring-[#00ff4c] focus:border-[#00ff4c] transition"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Company (optional) */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                      Company/Website (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0c0e0c] border border-[#00ff4c]/30 text-white focus:ring-2 focus:ring-[#00ff4c] focus:border-[#00ff4c] transition"
                      placeholder="Your company name or website"
                    />
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Services Needed *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <div key={service.id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={service.id}
                            checked={formData.services.includes(service.id)}
                            onChange={() => handleServiceChange(service.id)}
                            className="h-4 w-4 text-[#00ff4c] focus:ring-[#00ff4c] border-[#00ff4c]/30 rounded bg-[#0c0e0c]"
                          />
                          <label htmlFor={service.id} className="ml-2 text-sm text-gray-300">
                            {service.label}
                          </label>
                        </div>
                      ))}
                    </div>
                    {formData.services.length === 0 && (
                      <p className="text-red-400 text-sm mt-1">Please select at least one service</p>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#0c0e0c] border border-[#00ff4c]/30 text-white focus:ring-2 focus:ring-[#00ff4c] focus:border-[#00ff4c] transition"
                    >
                      <option value="">Select a budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Deadline */}
                  <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-300 mb-1">
                      Project Deadline (optional)
                    </label>
                    <input
                      type="text"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0c0e0c] border border-[#00ff4c]/30 text-white focus:ring-2 focus:ring-[#00ff4c] focus:border-[#00ff4c] transition"
                      placeholder="e.g., ASAP, 3 months, etc."
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                      Brief Project Description (optional)
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-[#0c0e0c] border border-[#00ff4c]/30 text-white focus:ring-2 focus:ring-[#00ff4c] focus:border-[#00ff4c] transition"
                      placeholder="Tell us about your project goals and requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || formData.services.length === 0}
                      className={`w-full inline-flex items-center justify-center rounded-full px-8 py-3 font-medium transition-all duration-300 ${
                        isSubmitting || formData.services.length === 0
                          ? "bg-gray-400 cursor-not-allowed text-gray-700"
                          : "bg-[#00ff4c] hover:bg-[#00dd3f] text-[#0c0e0c] shadow-lg hover:shadow-xl hover:scale-[1.02]"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? "Submitting..." : "Get My Custom Quote"}
                        {!isSubmitting && (
                          <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </span>
                    </motion.button>
                  </div>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 relative"
              >
                <div className="text-[#00ff4c] text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Thank You!</h3>
                <p className="text-gray-300 mb-6">
                  We've received your quote request and will get back to you within 24 hours.
                </p>
                <motion.button
                  onClick={() => setShowSuccess(false)}
                  className="inline-flex items-center rounded-full px-8 py-3 font-medium bg-[#00ff4c] text-[#0c0e0c] shadow-lg hover:shadow-xl hover:bg-[#00dd3f] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Another Request
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 sticky top-8"
          >
            {/* Why Choose Us */}
            <div className="bg-[#0d0f0d] p-8 rounded-xl border border-[#00ff4c]/20 hover:border-[#00ff4c]/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff4c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-8 text-white relative inline-block">
                  Why Choose Us
                  <span className="block h-1 w-20 bg-[#00ff4c] mt-2"></span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trustIndicators.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-start space-y-3 p-4 rounded-lg bg-[#0c0e0c]/50 hover:bg-[#0c0e0c] transition-colors duration-300"
                    >
                      <div className="p-2 rounded-lg bg-[#0c0e0c] border border-[#00ff4c]/20">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-[#0d0f0d] p-8 rounded-xl border border-[#00ff4c]/20 hover:border-[#00ff4c]/40 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff4c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-8 text-white relative inline-block">
                  What Our Clients Say
                  <span className="block h-1 w-20 bg-[#00ff4c] mt-2"></span>
                </h3>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="p-6 rounded-lg bg-[#0c0e0c]/50 hover:bg-[#0c0e0c] transition-colors duration-300 relative"
                    >
                      {/* Quote icon */}
                      <svg className="absolute top-4 right-4 w-8 h-8 text-[#00ff4c]/10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                      
                      <p className="text-gray-300 italic mb-6 text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-[#0c0e0c] overflow-hidden mr-4 border border-[#00ff4c]/20">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://via.placeholder.com/150";
                            }}
                          />
                        </div>
                        <div>
                          <p className="font-medium text-white">{testimonial.name}</p>
                          <p className="text-sm text-gray-400">{testimonial.company}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live Chat CTA - Full Width */}
        <motion.div 
          className="mt-12 bg-[#0d0f0d] p-8 rounded-xl border border-[#00ff4c]/20 hover:border-[#00ff4c]/40 transition-all duration-300 group relative overflow-hidden"
          whileHover={{ scale: 1.01 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00ff4c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between max-w-4xl mx-auto">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 text-white">Need Immediate Assistance?</h3>
              <p className="text-gray-300">
                Our team is available for a free 15-minute consultation to discuss your project.
              </p>
            </div>
            <motion.button 
              className="inline-flex items-center rounded-full px-8 py-3 font-medium bg-[#00ff4c] text-[#0c0e0c] shadow-lg hover:shadow-xl hover:bg-[#00dd3f] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Call
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 