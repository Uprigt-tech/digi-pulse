import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  BarChart3,
  CheckCircle2,
  Facebook,
  Search,
  Instagram,
  Youtube,
  Zap,
  Shield,
  Clock
} from 'lucide-react';
import { SlideUp, StaggerContainer, StaggerItem, FadeIn, SlideInLeft, SlideInRight } from '../components/ui-custom/AnimatedSection';

const platforms = [
  {
    icon: Facebook,
    name: 'Facebook Ads',
    description: 'Reach billions of users with targeted campaigns',
  },
  {
    icon: Instagram,
    name: 'Instagram Ads',
    description: 'Visual storytelling that drives engagement',
  },
  {
    icon: Search,
    name: 'Google Search',
    description: 'Capture high-intent search traffic',
  },
  {
    icon: Youtube,
    name: 'YouTube Ads',
    description: 'Video campaigns that convert viewers',
  },
];

const benefits = [
  {
    icon: Target,
    title: 'Precise Targeting',
    description: 'Reach your ideal customers based on demographics, interests, and behaviors.',
  },
  {
    icon: TrendingUp,
    title: 'Measurable ROI',
    description: 'Track every dollar spent and see exactly what you\'re getting in return.',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Unlike SEO, paid ads start driving traffic and leads immediately.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven',
    description: 'Make decisions based on real data, not guesswork.',
  },
];

const process = [
  {
    number: '01',
    title: 'Research & Strategy',
    description: 'We analyze your market, competitors, and target audience to create a winning strategy.',
  },
  {
    number: '02',
    title: 'Campaign Setup',
    description: 'Build optimized campaigns with compelling ad copy and eye-catching creatives.',
  },
  {
    number: '03',
    title: 'Launch & Monitor',
    description: 'Deploy campaigns and monitor performance in real-time.',
  },
  {
    number: '04',
    title: 'Optimize & Scale',
    description: 'Continuously improve performance and scale winning campaigns.',
  },
];

const deliverables = [
  'Comprehensive audience research',
  'Ad copywriting & creative design',
  'Campaign setup & configuration',
  'A/B testing & optimization',
  'Weekly performance reports',
  'Monthly strategy calls',
  'Landing page recommendations',
  'Conversion tracking setup',
];

export default function Ads() {
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
                Paid Advertising
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
                ROI-Driven
                <br />
                <span className="text-primary">Meta & Google Ads</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Stop wasting money on ads that don't convert. We create targeted campaigns 
                that deliver measurable results and maximize your return on investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                  >
                    Get Ad Strategy
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-3.5 bg-secondary text-foreground font-medium rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    Free Audit
                  </motion.button>
                </Link>
              </div>
            </SlideInLeft>
            
            <SlideInRight>
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className="p-5 md:p-6 bg-secondary/50 rounded-2xl border border-border hover:border-primary/30 transition-all"
                  >
                    <platform.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-foreground font-semibold text-sm mb-1">{platform.name}</h3>
                    <p className="text-muted-foreground text-xs">{platform.description}</p>
                  </div>
                ))}
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.08}>
            {[
              { value: '300%', label: 'Average ROI Increase' },
              { value: '$50M+', label: 'Ad Spend Managed' },
              { value: '500+', label: 'Campaigns Launched' },
              { value: '95%', label: 'Client Retention' },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SlideUp className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Why Paid Ads
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Benefits of Paid Advertising
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Paid ads offer unique advantages that organic marketing can't match.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.08}>
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="p-6 md:p-8 bg-secondary/50 rounded-2xl border border-border h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SlideUp className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              How We Generate Leads
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our proven 4-step process to create high-performing ad campaigns.
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

      {/* Deliverables */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SlideInLeft>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                What You Get
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                Everything Included
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Our comprehensive ad management service includes everything you need 
                to run successful campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-foreground text-sm">No long-term contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-foreground text-sm">48-hour setup</span>
                </div>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </SlideInRight>
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
                  Ready to Scale with Paid Ads?
                </h2>
                <p className="text-muted-foreground text-base max-w-xl mx-auto mb-6">
                  Book a free strategy call and let's discuss how we can help you 
                  generate more leads and sales with Meta & Google Ads.
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                  >
                    Book Free Strategy Call
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
