import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  Globe
} from 'lucide-react';
import { SlideUp, FadeIn, SlideInLeft, SlideInRight } from '../components/ui-custom/AnimatedSection';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@nexgen.com',
    href: 'mailto:hello@nexgen.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'New York, NY 10001',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Fri: 9AM - 6PM EST',
    href: '#',
  },
];

const services = [
  'Digital Marketing',
  'Meta & Google Ads',
  'Website Development',
  'Student Projects',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <SlideUp>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
              Let's Start Your
              <br />
              <span className="text-primary">Project Today</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Fill out the form below 
              or reach out directly—we're here to help.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <SlideInLeft>
              <div className="p-6 md:p-10 bg-background rounded-3xl border border-border">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-foreground text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-foreground text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-foreground text-sm font-medium mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-foreground text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send size={16} />
                    </motion.button>
                  </form>
                )}
              </div>
            </SlideInLeft>

            {/* Contact Info */}
            <SlideInRight>
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Prefer to reach out directly? Here's how you can get in touch with us.
                  </p>
                </div>

                <div className="space-y-3">
                  {contactInfo.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-4 p-4 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs">{item.title}</p>
                        <p className="text-foreground text-sm font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="p-4 bg-primary/5 rounded-2xl border border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-medium text-sm">Chat on WhatsApp</p>
                      <p className="text-muted-foreground text-xs">Get instant responses</p>
                    </div>
                    <a
                      href="https://wa.me/15551234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
                    >
                      Chat
                    </a>
                  </div>
                </div>

                {/* Global Reach */}
                <div className="flex items-center gap-3 p-4">
                  <Globe className="w-4 h-4 text-primary" />
                  <p className="text-muted-foreground text-sm">
                    Serving clients worldwide remotely
                  </p>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SlideUp className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quick answers to frequently asked questions.
            </p>
          </SlideUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              {
                q: 'How quickly can you start?',
                a: 'We can typically start within 48 hours of project approval.',
              },
              {
                q: 'Do you offer ongoing support?',
                a: 'Yes, we offer monthly retainer packages for continued support.',
              },
              {
                q: 'What industries do you work with?',
                a: 'We work with businesses across all industries and sizes.',
              },
              {
                q: 'How do you measure success?',
                a: 'We track KPIs and provide regular reports on all metrics.',
              },
            ].map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="p-5 md:p-6 bg-secondary/50 rounded-2xl border border-border">
                  <h3 className="text-foreground font-semibold text-sm mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeIn>
            <div className="relative p-10 md:p-14 bg-background rounded-3xl border border-border text-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground text-base max-w-xl mx-auto mb-6">
                  Don't wait—let's discuss your project today and start building something amazing.
                </p>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </motion.button>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  );
}
