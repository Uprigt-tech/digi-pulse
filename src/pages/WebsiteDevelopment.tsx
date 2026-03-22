import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  Smartphone, 
  Search,
  CheckCircle2,
  Layout,
  Globe,
  ShoppingCart,
  FileText,
  Layers,
  Rocket,
  Clock,
  Shield
} from 'lucide-react';
import { SlideUp, StaggerContainer, StaggerItem, FadeIn, SlideInLeft, SlideInRight } from '../components/ui-custom/AnimatedSection';

const services = [
  {
    icon: Globe,
    title: 'Business Websites',
    description: 'Professional websites that establish credibility and convert visitors into customers.',
    features: ['Custom Design', 'SEO Optimized', 'Mobile Responsive', 'Fast Loading'],
  },
  {
    icon: Layout,
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to maximize your campaign ROI.',
    features: ['A/B Testing', 'Conversion Focused', 'Lead Capture', 'Analytics'],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Online stores that provide seamless shopping experiences and drive sales.',
    features: ['Payment Integration', 'Inventory Management', 'User Accounts', 'Order Tracking'],
  },
  {
    icon: FileText,
    title: 'Portfolio Sites',
    description: 'Stunning portfolios that showcase your work and attract new opportunities.',
    features: ['Gallery Layouts', 'Case Studies', 'Contact Forms', 'Social Integration'],
  },
];

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed with 90+ PageSpeed scores.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Perfect experience on every device and screen size.',
  },
  {
    icon: Search,
    title: 'SEO Ready',
    description: 'Built with search engines in mind from day one.',
  },
  {
    icon: Layers,
    title: 'Scalable',
    description: 'Grows with your business needs.',
  },
];

const process = [
  { number: '01', title: 'Discovery', description: 'We understand your goals, audience, and requirements.' },
  { number: '02', title: 'Design', description: 'Create stunning mockups that align with your brand.' },
  { number: '03', title: 'Development', description: 'Build your site with clean, optimized code.' },
  { number: '04', title: 'Launch', description: 'Deploy, test, and go live with confidence.' },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$999',
    description: 'Perfect for small businesses and startups',
    features: [
      '5 Pages',
      'Mobile Responsive',
      'Basic SEO',
      'Contact Form',
      '2 Revision Rounds',
      '1 Week Delivery',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$2,499',
    description: 'Ideal for growing businesses',
    features: [
      '10 Pages',
      'Mobile Responsive',
      'Advanced SEO',
      'Contact Forms',
      'Blog Setup',
      'Analytics Integration',
      '4 Revision Rounds',
      '2 Weeks Delivery',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale projects',
    features: [
      'Unlimited Pages',
      'Custom Features',
      'E-commerce',
      'CMS Integration',
      'API Integration',
      'Priority Support',
      'Unlimited Revisions',
      'Custom Timeline',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export default function WebsiteDevelopment() {
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
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SlideInLeft>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Web Development
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
                Websites That
                <br />
                <span className="text-primary">Convert Visitors</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Stunning, high-performing websites built for speed, SEO, and conversions. 
                From landing pages to full e-commerce solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                  >
                    Start Your Project
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-3.5 bg-secondary text-foreground font-medium rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    View Pricing
                  </motion.button>
                </Link>
              </div>
            </SlideInLeft>
            
            <SlideInRight>
              <div className="relative">
                <div className="aspect-square bg-secondary/50 rounded-3xl border border-border p-6 md:p-8 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="space-y-4">
                      <div className="h-20 md:h-24 bg-primary/15 rounded-xl" />
                      <div className="h-28 md:h-32 bg-muted rounded-xl" />
                    </div>
                    <div className="space-y-4">
                      <div className="h-28 md:h-32 bg-muted rounded-xl" />
                      <div className="h-20 md:h-24 bg-primary/15 rounded-xl" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 p-4 bg-background rounded-2xl border border-border shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">Fast Delivery</p>
                      <p className="text-muted-foreground text-xs">1-2 weeks average</p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SlideUp className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              What We Build
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Website Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From simple landing pages to complex web applications, we build it all.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.08}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="p-6 md:p-8 bg-background rounded-2xl border border-border h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SlideInLeft>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                Built for Performance
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Every website we build is optimized for speed, search engines, and conversions. 
                We don't just make pretty websites—we make websites that work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-foreground text-sm">Fast turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-foreground text-sm">Quality guaranteed</span>
                </div>
              </div>
            </SlideInLeft>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="p-5 md:p-6 bg-secondary/50 rounded-2xl border border-border">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Process */}
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
              A streamlined process to get your website live quickly.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
            {process.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative p-6 md:p-8 bg-background rounded-2xl border border-border h-full">
                  <span className="absolute top-4 right-4 text-5xl font-bold text-muted/20">
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

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SlideUp className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Transparent Pricing
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the plan that fits your needs. No hidden fees.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.08}>
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div className={`relative p-6 md:p-8 rounded-2xl border h-full ${
                  plan.popular 
                    ? 'bg-primary/5 border-primary' 
                    : 'bg-secondary/50 border-border'
                }`}>
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{plan.description}</p>
                    <p className="text-3xl md:text-4xl font-bold text-foreground">{plan.price}</p>
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${
                          plan.popular ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 rounded-full font-medium transition-colors ${
                        plan.popular
                          ? 'bg-primary text-primary-foreground hover:opacity-90'
                          : 'bg-secondary text-foreground hover:bg-secondary/80'
                      }`}
                    >
                      {plan.cta}
                    </motion.button>
                  </Link>
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
                  Ready for Your New Website?
                </h2>
                <p className="text-muted-foreground text-base max-w-xl mx-auto mb-6">
                  Let's discuss your project and get started on building something amazing.
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                  >
                    Get Free Quote
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
