import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Define form validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }).max(100),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    
    // Display success toast
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });
    
    // Reset form
    form.reset();
  };

  // Animation variants
  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#0c0e0c] relative">
      {/* Gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0e0c] via-[#0c0e0c] to-[#0c0e0c] opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0c0e0c] to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Get in <span className="text-[#00ff4c]">Touch</span>
            </h2>
            
            <p className="text-gray-300 mb-8">
              We'd love to hear from you. Whether you have a question about our services, 
              pricing, or just want to say hello, we're here to help.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="mr-4 bg-[#181a18] p-3 rounded-full border border-[#00ff4c] border-opacity-20">
                  <svg className="h-6 w-6 text-[#00ff4c]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Working Hours</h3>
                  <p className="text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">Weekend: By appointment</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="mr-4 bg-[#181a18] p-3 rounded-full border border-[#00ff4c] border-opacity-20">
                  <svg className="h-6 w-6 text-[#00ff4c]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-400">(123) 456-7890</p>
                  <p className="text-gray-400">(123) 456-7891</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="mr-4 bg-[#181a18] p-3 rounded-full border border-[#00ff4c] border-opacity-20">
                  <svg className="h-6 w-6 text-[#00ff4c]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-400">info@pixelpulse.com</p>
                  <p className="text-gray-400">support@pixelpulse.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="mr-4 bg-[#181a18] p-3 rounded-full border border-[#00ff4c] border-opacity-20">
                  <svg className="h-6 w-6 text-[#00ff4c]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">123 Digital Avenue</p>
                  <p className="text-gray-400">Silicon Valley, CA 94000</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#181a18] p-8 rounded-lg border border-[#00ff4c] border-opacity-10">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <Form {...form}>
                <motion.form 
                  onSubmit={form.handleSubmit(onSubmit)} 
                  className="space-y-6"
                  variants={formAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={itemAnimation}>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="bg-[#0c0e0c] border-[#00ff4c] border-opacity-30 focus:border-[#00ff4c]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                  
                  <motion.div variants={itemAnimation}>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              className="bg-[#0c0e0c] border-[#00ff4c] border-opacity-30 focus:border-[#00ff4c]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                  
                  <motion.div variants={itemAnimation}>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="How can we help you?" 
                              className="bg-[#0c0e0c] border-[#00ff4c] border-opacity-30 focus:border-[#00ff4c]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                  
                  <motion.div variants={itemAnimation}>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us more about your project or question" 
                              className="bg-[#0c0e0c] border-[#00ff4c] border-opacity-30 focus:border-[#00ff4c] min-h-32" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                  
                  <motion.div 
                    variants={itemAnimation}
                    className="pt-4"
                  >
                    <motion.button 
                      type="submit" 
                      className="w-full bg-[#00ff4c] hover:bg-[#00dd3f] text-[#0c0e0c] font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Send Message
                    </motion.button>
                  </motion.div>
                </motion.form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;