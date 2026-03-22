import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Target, 
  Code, 
  GraduationCap,
  BarChart3,
  Zap,
  HeadphonesIcon,
  Star
} from 'lucide-react';
import { SlideUp, StaggerContainer, StaggerItem, FadeIn, SlideInLeft } from '../components/ui-custom/AnimatedSection';

const services = [
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Comprehensive strategies to boost your online presence and drive sustainable growth.',
    path: '/services',
  },
  {
    icon: Users,
    title: 'Lead Generation',
    description: 'Targeted campaigns that convert visitors into qualified leads for your business.',
    path: '/services',
  },
  {
    icon: Target,
    title: 'Meta & Google Ads',
    description: 'ROI-driven advertising campaigns across all major platforms.',
    path: '/ads',
  },
  {
    icon: Code,
    title: 'Website Development',
    description: 'Stunning, high-performing websites that convert visitors into customers.',
    path: '/website-development',
  },
  {
    icon: GraduationCap,
    title: 'Student Projects',
    description: 'Real-world projects for students and individuals building their portfolio.',
    path: '/projects',
  },
];

const whyChooseUs = [
  {
    icon: BarChart3,
    title: 'Data-Driven',
    description: 'Every decision backed by analytics and thorough market research.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick turnaround without ever compromising on quality.',
  },
  {
    icon: Target,
    title: 'Affordable Pricing',
    description: 'Competitive rates designed to fit businesses of all sizes.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: 'Round-the-clock support to keep your campaigns running smoothly.',
  },
];

const processSteps = [
  { number: '01', title: 'Strategy', description: 'We analyze your business and craft a winning strategy tailored to your goals.' },
  { number: '02', title: 'Execution', description: 'Implement campaigns with precision, expertise, and attention to detail.' },
  { number: '03', title: 'Optimization', description: 'Continuously improve performance based on real data and insights.' },
  { number: '04', title: 'Growth', description: 'Scale what works and maximize your return on investment.' },
];

const testimonials = [
  {
    quote: "They transformed our online presence completely. Our leads increased by 250% in just 3 months.",
    author: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
  },
  {
    quote: "The team's expertise in Meta and Google Ads is unmatched. Best ROI we've ever seen from any agency.",
    author: 'Michael Chen',
    role: 'Marketing Director, GrowthCo',
  },
  {
    quote: "Professional, responsive, and results-driven. Exactly what we needed for our growing startup.",
    author: 'Emily Rodriguez',
    role: 'Founder, StyleHub',
  },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Digital Marketing Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            We Help Businesses
            <br />
            <span className="text-primary">Grow</span> with Smart
            <br />
            Digital Marketing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Data-driven strategies, stunning websites, and ROI-focused campaigns 
            that turn clicks into loyal customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Book Free Consultation
                <ArrowRight size={18} />
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-secondary text-foreground font-medium rounded-full hover:bg-secondary/80 transition-colors"
              >
                View Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SlideUp className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Services We Offer
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From strategy to execution, we provide end-to-end digital marketing solutions.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Link to={service.path}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group p-6 md:p-8 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all h-full"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    <div className="mt-5 flex items-center gap-2 text-primary font-medium text-sm">
                      <span>Learn More</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SlideInLeft>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                We Deliver Results,
                <br />
                <span className="text-primary">Not Just Promises</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our team of experts combines creativity with data-driven strategies 
                to help your business thrive in the competitive digital landscape.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
                >
                  Start Your Project
                </motion.button>
              </Link>
            </SlideInLeft>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
              {whyChooseUs.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="p-5 md:p-6 bg-secondary/50 rounded-2xl">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SlideUp className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven 4-step process to deliver exceptional results consistently.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {processSteps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative p-6 md:p-8 bg-background rounded-2xl border border-border h-full">
                  <span className="absolute top-4 right-4 text-5xl font-bold text-muted/30">
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-5">
                      <span className="text-primary-foreground font-bold text-sm">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SlideUp className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Clients Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.author}>
                <div className="p-6 md:p-8 bg-secondary/30 rounded-2xl border border-border h-full">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-foreground text-base leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeIn>
            <div className="relative p-10 md:p-16 bg-background rounded-3xl border border-border text-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Ready to Grow Your
                  <br />
                  <span className="text-primary">Business?</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                  Let's discuss how we can help you achieve your digital marketing goals. 
                  Book a free consultation today.
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                  >
                    Contact Us
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  );
}
