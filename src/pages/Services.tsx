import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Code, 
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Search,
  Share2,
  Mail,
  FileText
} from 'lucide-react';
import { SlideUp, StaggerContainer, StaggerItem, FadeIn } from '../components/ui-custom/AnimatedSection';

const mainServices = [
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies that drive growth and increase your online visibility.',
    features: [
      'SEO Optimization',
      'Content Strategy',
      'Social Media Management',
      'Analytics & Reporting',
    ],
    benefits: [
      'Increased brand awareness',
      'Higher search rankings',
      'More qualified leads',
      'Better ROI',
    ],
  },
  {
    icon: Users,
    title: 'Lead Generation',
    description: 'Targeted campaigns designed to attract and convert your ideal customers into qualified leads.',
    features: [
      'Landing Page Design',
      'Email Campaigns',
      'Conversion Optimization',
      'Lead Nurturing',
    ],
    benefits: [
      'Higher conversion rates',
      'Quality lead pipeline',
      'Reduced cost per lead',
      'Scalable systems',
    ],
  },
  {
    icon: Target,
    title: 'Meta & Google Ads',
    description: 'ROI-focused advertising campaigns across Facebook, Instagram, Google, and other platforms.',
    features: [
      'Campaign Setup & Management',
      'A/B Testing',
      'Audience Targeting',
      'Performance Tracking',
    ],
    benefits: [
      'Immediate results',
      'Precise targeting',
      'Measurable ROI',
      'Budget control',
    ],
  },
  {
    icon: Code,
    title: 'Website Development',
    description: 'Stunning, high-performing websites that convert visitors into customers.',
    features: [
      'Custom Design',
      'Responsive Development',
      'SEO Optimization',
      'Fast Performance',
    ],
    benefits: [
      'Professional appearance',
      'Better user experience',
      'Higher conversions',
      'Mobile-friendly',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Student Projects',
    description: 'Real-world projects for students and individuals looking to build their portfolio.',
    features: [
      'Academic Projects',
      'Portfolio Websites',
      'Final Year Projects',
      'Skill Development',
    ],
    benefits: [
      'Practical experience',
      'Portfolio building',
      'Mentorship',
      'Affordable rates',
    ],
  },
];

const additionalServices = [
  { icon: Search, title: 'SEO Services', description: 'Improve your search rankings' },
  { icon: Share2, title: 'Social Media', description: 'Build your brand presence' },
  { icon: Mail, title: 'Email Marketing', description: 'Nurture your audience' },
  { icon: FileText, title: 'Content Creation', description: 'Engaging content that converts' },
  { icon: BarChart3, title: 'Analytics', description: 'Data-driven insights' },
  { icon: Target, title: 'PPC Management', description: 'Optimized ad campaigns' },
];

export default function Services() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
              Everything You Need to
              <br />
              <span className="text-primary">Succeed Online</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From strategy to execution, we provide comprehensive digital marketing 
              solutions tailored to your business goals.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <StaggerContainer className="space-y-12 md:space-y-16" staggerDelay={0.15}>
            {mainServices.map((service, index) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 md:p-10 lg:p-12 bg-background rounded-3xl border border-border`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Link to={
                      service.title === 'Meta & Google Ads' ? '/ads' : 
                      service.title === 'Website Development' ? '/website-development' : 
                      service.title === 'Student Projects' ? '/projects' : 
                      '#'
                    }>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </motion.button>
                    </Link>
                  </div>
                  
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-3">
                      <h3 className="text-foreground font-semibold text-sm mb-3">Features</h3>
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-foreground font-semibold text-sm mb-3">Benefits</h3>
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SlideUp className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              More Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complementary services to enhance your digital presence.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {additionalServices.map((service) => (
              <StaggerItem key={service.title}>
                <div className="p-6 bg-secondary/50 rounded-2xl border border-border hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
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
            <div className="relative p-10 md:p-14 bg-background rounded-3xl border border-border text-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Not Sure What You Need?
                </h2>
                <p className="text-muted-foreground text-base max-w-xl mx-auto mb-6">
                  Let's discuss your goals and create a custom strategy that works for your business.
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                  >
                    Get Free Consultation
                    <ArrowRight size={16} />
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
