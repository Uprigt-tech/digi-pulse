import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Heart,
  Users,
  CheckCircle2,
  Zap,
  Shield
} from 'lucide-react';
import { SlideUp, StaggerContainer, StaggerItem, FadeIn, SlideInLeft, SlideInRight } from '../components/ui-custom/AnimatedSection';

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '300%', label: 'Avg. ROI Increase' },
];

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on what matters—delivering measurable results that impact your bottom line.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay ahead of the curve, using the latest tools and strategies to keep you competitive.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work with you, not just for you. Your success is our success.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Transparent pricing, honest communication, and ethical practices in everything we do.',
  },
];

const team = [
  {
    name: 'Alex Morrison',
    role: 'Founder & CEO',
    bio: '10+ years in digital marketing, former Google strategist.',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Strategy',
    bio: 'Data-driven marketer with a passion for growth.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Creative Director',
    bio: 'Award-winning designer and brand strategist.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Lead Developer',
    bio: 'Full-stack expert building high-performance websites.',
  },
];

const whyTrustUs = [
  'Proven track record of success',
  'Transparent reporting and communication',
  'Dedicated account managers',
  'Flexible, affordable pricing',
  'No long-term contracts',
  '24/7 support and monitoring',
];

export default function About() {
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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
                We're a Team of
                <br />
                <span className="text-primary">Digital Experts</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Founded in 2019, we've helped over 150 businesses grow their online presence 
                and achieve their marketing goals. Our data-driven approach and creative 
                solutions set us apart.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  Work With Us
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </SlideInLeft>
            
            <SlideInRight>
              <div className="aspect-[4/3] bg-secondary/50 rounded-3xl border border-border overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-foreground font-semibold text-xl">Your Success</p>
                  <p className="text-muted-foreground">Is Our Mission</p>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.08}>
            {stats.map((stat) => (
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

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SlideInLeft>
              <div className="p-8 md:p-10 bg-secondary/50 rounded-3xl border border-border h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes with accessible, effective digital marketing 
                  solutions that drive real growth. We believe every business deserves a strong 
                  online presence, regardless of budget.
                </p>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="p-8 md:p-10 bg-secondary/50 rounded-3xl border border-border h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted digital marketing partner for growing businesses 
                  worldwide. We envision a future where data-driven creativity helps every 
                  business reach its full potential.
                </p>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SlideUp className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our values guide everything we do, from strategy to execution.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.08}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-6 md:p-8 bg-background rounded-2xl border border-border h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SlideUp className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A passionate team dedicated to your success.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="p-6 bg-secondary/50 rounded-2xl border border-border text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-0.5">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-xs">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SlideInLeft>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Why Trust Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                Clients Trust Us
                <br />
                <span className="text-primary">Because We Deliver</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We've built our reputation on results, transparency, and genuine care 
                for our clients' success. Here's why businesses choose to work with us.
              </p>
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
            </SlideInLeft>

            <SlideInRight>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyTrustUs.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
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
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeIn>
            <div className="relative p-10 md:p-14 bg-secondary/50 rounded-3xl border border-border text-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Let's Work Together
                </h2>
                <p className="text-muted-foreground text-base max-w-xl mx-auto mb-6">
                  Ready to take your business to the next level? Let's discuss how we can help 
                  you achieve your goals.
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                  >
                    Get in Touch
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
