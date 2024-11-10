import React, { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GitBranch, Cloud, Terminal, Blocks, ArrowRightLeft, Lock, Layers } from 'lucide-react';

const ServiceFeature = memo(function ServiceFeature({ feature }: { feature: string }) {
  return (
    <li className="flex items-center text-slate-400 text-sm sm:text-base" role="listitem">
      <div 
        className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-3 flex-shrink-0" 
        aria-hidden="true"
      />
      <span className="line-clamp-2">{feature}</span>
    </li>
  );
});

const ServiceCard = memo(function ServiceCard({ 
  service, 
  index,
  animationDuration 
}: { 
  service: typeof services[number];
  index: number;
  animationDuration: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: animationDuration, delay: index * 0.1 }}
      className="group relative z-10 h-full"
      role="article"
      aria-labelledby={`service-title-${index}`}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" 
        aria-hidden="true"
      />
      
      <div className="relative h-full p-4 sm:p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-gold-500/50 transition-all duration-300 flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <div 
            className="p-3 rounded-xl bg-gradient-to-r from-gold-500/10 to-gold-600/10 w-fit group-hover:scale-110 transition-transform duration-300"
            aria-hidden="true"
          >
            <div className="text-gold-400">{service.icon}</div>
          </div>
          <h3 
            id={`service-title-${index}`}
            className="text-lg sm:text-xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300 leading-tight"
          >
            {service.title}
          </h3>
        </div>
        
        <p className="text-sm sm:text-base text-slate-300 mb-6 flex-grow leading-relaxed">
          {service.description}
        </p>
        
        <ul 
          className="space-y-2.5 sm:space-y-3 mt-auto"
          role="list"
          aria-label={`Features of ${service.title}`}
        >
          {service.features.map((feature) => (
            <ServiceFeature key={feature} feature={feature} />
          ))}
        </ul>

        {/* Enhanced hover effects */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
          {/* Gradient borders */}
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
          <div className="absolute inset-y-0 -left-px w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />
          <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />
          
          {/* Corner glows */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-gold-400/20 rounded-full blur-sm" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-gold-400/20 rounded-full blur-sm" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gold-400/20 rounded-full blur-sm" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gold-400/20 rounded-full blur-sm" />
        </div>
      </div>
    </motion.div>
  );
});

const services = [
  {
    icon: <GitBranch className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />,
    title: "GitOps Automation",
    description: "Transform your delivery pipeline with enterprise-grade GitOps practices",
    features: [
      "Single Source of Truth",
      "Declarative Everything",
      "Self-healing Systems"
    ]
  },
  {
    icon: <Cloud className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />,
    title: "Cloud Native",
    description: "Future-proof your infrastructure with cloud-native architecture",
    features: [
      "Infinite Scalability",
      "Global Availability",
      "Cloud Agnostic Design"
    ]
  },
  {
    icon: <Layers className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />,
    title: "Platform Engineering",
    description: "Accelerate development with Internal Developer Platforms",
    features: [
      "Self-service Infrastructure",
      "Golden Paths",
      "Developer Experience"
    ]
  },
  {
    icon: <Terminal className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />,
    title: "Infrastructure as Code",
    description: "Streamline operations with declarative infrastructure",
    features: [
      "Version Control",
      "Drift Prevention",
      "Reproducible States"
    ]
  },
  {
    icon: <Lock className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />,
    title: "Security & Compliance",
    description: "Maintain industry standards and regulatory compliance",
    features: [
      "Continuous Compliance",
      "Audit Readiness",
      "Policy Enforcement"
    ]
  },
  {
    icon: <ArrowRightLeft className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />,
    title: "Cloud Migration",
    description: "Seamless transition to modern cloud infrastructure",
    features: [
      "Progressive Migration",
      "Business Continuity",
      "Risk Mitigation"
    ]
  }
] as const;

const SectionTitle = memo(function SectionTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <div className="section-title">
        <div className="section-title-wrapper group">
          <div 
            className="section-title-icon"
            aria-hidden="true"
          >
            <Blocks className="h-4 w-4 sm:h-6 sm:w-6 text-gold-400" />
          </div>
          <div className="section-title-text">Our Services</div>
        </div>
      </div>
      <p className="section-description">
        Transform your infrastructure with enterprise-grade solutions that drive business value
      </p>
    </motion.div>
  );
});

function Services() {
  const shouldReduceMotion = useReducedMotion();
  const animationDuration = shouldReduceMotion ? 0 : 0.5;

  return (
    <section 
      id="solutions" 
      className="relative min-h-screen flex items-center py-16 sm:py-20 overflow-visible"
      role="region"
      aria-label="Solutions Section"
    >
      {/* Background effects */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-slate-800" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-800 to-slate-900" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <SectionTitle />

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-16"
          role="list"
          aria-label="Services offered"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              service={service}
              index={index}
              animationDuration={animationDuration}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" 
        aria-hidden="true"
      />
    </section>
  );
}

export default memo(Services);