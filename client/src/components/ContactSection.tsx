import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LucidePhone, LucideMail, LucideMapPin, LucideCheck, LucideLoader2 } from "lucide-react";

// Form schema with validation
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: ""
    }
  });
  
  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: LucidePhone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: LucideMail,
      title: "Email",
      details: "hello@pixelpulse.com",
      link: "mailto:hello@pixelpulse.com"
    },
    {
      icon: LucideMapPin,
      title: "Address",
      details: "123 Digital Street, Tech City, 90210",
      link: "https://maps.google.com"
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="contact" className="py-24 bg-[#0c0e0c] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-40 right-[5%] w-96 h-96 rounded-full bg-gradient-to-r from-[#00ff4c]/5 to-transparent blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -bottom-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-[#00ff4c]/5 to-transparent blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
            x: [0, 30, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            className="text-[#00ff4c] text-sm uppercase tracking-wider font-medium block mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Let's <span className="text-[#00ff4c]">Connect</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Ready to elevate your digital presence? Reach out to discuss how we can help you achieve your goals.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact info */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6"
              variants={itemVariants}
            >
              Contact <span className="text-[#00ff4c]">Information</span>
            </motion.h3>
            
            <motion.div className="space-y-6" variants={containerVariants}>
              {contactInfo.map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.link}
                  className="flex items-start gap-4 p-5 bg-[#121512] rounded-lg border border-[#2c2e2c] hover:border-[#00ff4c]/30 transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.5)" }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#181a18] flex items-center justify-center text-[#00ff4c] shrink-0 group-hover:bg-[#00ff4c]/10 transition-colors duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-gray-400 group-hover:text-[#00ff4c] transition-colors duration-300">{item.details}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
            
            {/* Social media */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#121512] border border-[#2c2e2c] hover:border-[#00ff4c]/30 flex items-center justify-center text-gray-400 hover:text-[#00ff4c] transition-all duration-300"
                    whileHover={{ y: -3, backgroundColor: "rgba(0, 255, 76, 0.05)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    {/* Simple social media icons */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {social === 'facebook' && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>}
                      {social === 'twitter' && <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>}
                      {social === 'instagram' && <>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </>}
                      {social === 'linkedin' && <>
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </>}
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div 
            className="lg:col-span-3 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            {/* Success message */}
            {isSubmitted ? (
              <motion.div 
                className="bg-[#121512] rounded-2xl border border-[#00ff4c]/30 p-8 text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#00ff4c]/10 flex items-center justify-center text-[#00ff4c]"
                  initial={{ scale: 0.5, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <LucideCheck className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-400 mb-8">
                  Thank you for contacting us. We'll get back to you shortly.
                </p>
                <motion.button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#181a18] text-white px-6 py-3 rounded-full border border-[#2c2e2c] hover:bg-[#00ff4c]/10 hover:border-[#00ff4c]/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit(onSubmit)}
                className="bg-[#121512] rounded-2xl border border-[#2c2e2c] p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3 className="text-2xl font-bold mb-6">Send Us a <span className="text-[#00ff4c]">Message</span></h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        className={`w-full bg-[#181a18] rounded-lg border px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff4c]/50 transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-[#2c2e2c] focus:border-[#00ff4c]/50'}`}
                        placeholder="John Doe"
                        {...register('name')}
                      />
                      {errors.name && (
                        <motion.p 
                          className="text-red-500 text-xs mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.name.message}
                        </motion.p>
                      )}
                    </div>
                  </div>
                  
                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        className={`w-full bg-[#181a18] rounded-lg border px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff4c]/50 transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-[#2c2e2c] focus:border-[#00ff4c]/50'}`}
                        placeholder="john@example.com"
                        {...register('email')}
                      />
                      {errors.email && (
                        <motion.p 
                          className="text-red-500 text-xs mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Service field */}
                <div className="space-y-2 mb-6">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300">
                    Service You're Interested In
                  </label>
                  <select
                    id="service"
                    className={`w-full bg-[#181a18] rounded-lg border px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff4c]/50 transition-all duration-300 ${errors.service ? 'border-red-500' : 'border-[#2c2e2c] focus:border-[#00ff4c]/50'}`}
                    {...register('service')}
                  >
                    <option value="">Select a service</option>
                    <option value="web-design">Web Design</option>
                    <option value="seo">SEO Services</option>
                    <option value="social-media">Social Media</option>
                    <option value="content-writing">Content Writing</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && (
                    <motion.p 
                      className="text-red-500 text-xs mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.service.message}
                    </motion.p>
                  )}
                </div>
                
                {/* Message field */}
                <div className="space-y-2 mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className={`w-full bg-[#181a18] rounded-lg border px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff4c]/50 transition-all duration-300 ${errors.message ? 'border-red-500' : 'border-[#2c2e2c] focus:border-[#00ff4c]/50'}`}
                    placeholder="Tell us about your project or inquiry..."
                    {...register('message')}
                  ></textarea>
                  {errors.message && (
                    <motion.p 
                      className="text-red-500 text-xs mt-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </div>
                
                {/* Submit button */}
                <motion.button
                  type="submit"
                  className="w-full bg-[#00ff4c] text-[#0c0e0c] py-4 rounded-lg font-medium hover:bg-[#00ff4c]/90 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <LucideLoader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </motion.form>
            )}
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-12 -right-12 w-24 h-24 rounded-full border border-[#00ff4c]/20"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.div 
              className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full border border-[#00ff4c]/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;