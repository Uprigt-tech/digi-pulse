import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  GraduationCap, 
  Code, 
  Lightbulb, 
  Rocket,
  BookOpen,
  Briefcase,
  Users,
  Star,
  Clock,
  MessageCircle
} from 'lucide-react';
import { SlideUp, StaggerContainer, StaggerItem, FadeIn, SlideInLeft, SlideInRight } from '../components/ui-custom/AnimatedSection';

const projectTypes = [
  {
    icon: BookOpen,
    title: 'Academic Projects',
    description: 'Complete your coursework with professional guidance and implementation.',
    examples: ['Research Projects', 'Case Studies', 'Presentations', 'Reports'],
  },
  {
    icon: Code,
    title: 'Custom Builds',
    description: 'Build real-world applications to showcase your skills.',
    examples: ['Web Applications', 'Mobile Apps', 'APIs', 'Automation Tools'],
  },
  {
    icon: Rocket,
    title: 'Final Year Projects',
    description: 'Make your final year project stand out with expert help.',
    examples: ['Thesis Projects', 'Capstone Projects', 'Dissertations', 'Research Papers'],
  },
];

const benefits = [
  {
    icon: Lightbulb,
    title: 'Learn by Doing',
    description: 'Gain practical experience by working on real projects.',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Get guidance from industry professionals.',
  },
  {
    icon: Briefcase,
    title: 'Portfolio Building',
    description: 'Create impressive projects for your portfolio.',
  },
  {
    icon: Star,
    title: 'Better Grades',
    description: 'Submit high-quality work that impresses professors.',
  },
];

const howItWorks = [
  {
    number: '01',
    title: 'Share Your Requirements',
    description: 'Tell us about your project, deadline, and specific needs.',
  },
  {
    number: '02',
    title: 'Get a Quote',
    description: 'Receive a transparent price estimate within 24 hours.',
  },
  {
    number: '03',
    title: 'Work Together',
    description: 'Collaborate with our experts throughout the project.',
  },
  {
    number: '04',
    title: 'Deliver & Succeed',
    description: 'Submit your project with confidence and achieve your goals.',
  },
];

const subjects = [
  'Computer Science',
  'Information Technology',
  'Business Administration',
  'Marketing',
  'Data Science',
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'Digital Marketing',
  'Project Management',
];

const testimonials = [
  {
    quote: "They helped me build an amazing final year project. I got an A+ and landed my dream job!",
    author: 'Alex Thompson',
    role: 'CS Student, MIT',
  },
  {
    quote: "The mentorship I received was invaluable. I learned so much while completing my project.",
    author: 'Maria Garcia',
    role: 'IT Student, Stanford',
  },
  {
    quote: "Affordable, professional, and on-time delivery. Highly recommend for any student project!",
    author: 'James Wilson',
    role: 'Business Student, NYU',
  },
];

export default function Projects() {
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
                For Students & Individuals
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
                Build Real-World
                <br />
                <span className="text-primary">Projects</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We help students and individuals create impressive projects that stand out. 
                From academic assignments to portfolio pieces, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                  >
                    Get Started
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-3.5 bg-secondary text-foreground font-medium rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    Get a Quote
                  </motion.button>
                </Link>
              </div>
            </SlideInLeft>
            
            <SlideInRight>
              <div className="relative">
                <div className="aspect-square bg-secondary/50 rounded-3xl border border-border p-6 md:p-8">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="space-y-4">
                      <div className="h-20 md:h-24 bg-primary/15 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                      <div className="h-28 md:h-32 bg-muted rounded-xl flex items-center justify-center">
                        <Code className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-28 md:h-32 bg-muted rounded-xl flex items-center justify-center">
                        <Lightbulb className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <div className="h-20 md:h-24 bg-primary/15 rounded-xl flex items-center justify-center">
                        <Rocket className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 p-4 bg-background rounded-2xl border border-border shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">500+ Projects</p>
                      <p className="text-muted-foreground text-xs">Completed successfully</p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SlideUp className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Types of Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We support a wide range of project types across various disciplines.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.08}>
            {projectTypes.map((type) => (
              <StaggerItem key={type.title}>
                <div className="p-6 md:p-8 bg-background rounded-2xl border border-border h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <type.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example) => (
                      <span
                        key={example}
                        className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
              {benefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <div className="p-5 md:p-6 bg-secondary/50 rounded-2xl border border-border">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <SlideInRight>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Why Work With Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                More Than Just
                <br />
                <span className="text-primary">Project Help</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We don't just complete your projects—we help you learn and grow. 
                Our mentorship approach ensures you understand the work and can 
                confidently present it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-foreground text-sm">On-time delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-foreground text-sm">24/7 support</span>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SlideUp className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Subjects We Cover
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Wide Range of Disciplines
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our experts cover various fields and specializations.
            </p>
          </SlideUp>

          <StaggerContainer className="flex flex-wrap justify-center gap-3" staggerDelay={0.04}>
            {subjects.map((subject) => (
              <StaggerItem key={subject}>
                <span className="px-5 py-2.5 bg-background rounded-full text-foreground text-sm border border-border hover:border-primary/30 transition-colors">
                  {subject}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SlideUp className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Getting help with your project is easy and straightforward.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
            {howItWorks.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative p-6 md:p-8 bg-secondary/50 rounded-2xl border border-border h-full">
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

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SlideUp className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Student Stories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Students Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from students who've succeeded with our help.
            </p>
          </SlideUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.08}>
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.author}>
                <div className="p-6 md:p-8 bg-background rounded-2xl border border-border h-full">
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
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <FadeIn>
            <div className="relative p-10 md:p-14 bg-secondary/50 rounded-3xl border border-border text-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Ready to Start Your Project?
                </h2>
                <p className="text-muted-foreground text-base max-w-xl mx-auto mb-6">
                  Share your requirements and get a free quote within 24 hours. 
                  Let's make your project a success!
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
