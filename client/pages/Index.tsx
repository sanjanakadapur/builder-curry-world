import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Zap, Users, Target, Sparkles, Quote } from "lucide-react";

const ParticleField = () => {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    const particleCount = 50;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-align-green-neon rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const MagneticButton = ({ children, className = "", onClick }: any) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.button>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="group relative"
    >
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-align-black to-gray-900 border border-gray-800 hover:border-align-green-400 transition-all duration-500 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-align-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />

        <motion.div
          className="relative z-10"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-align-green-500/10 border border-align-green-500/20 mb-6 group-hover:bg-align-green-500/20 transition-colors duration-300">
            <Icon className="w-8 h-8 text-align-green-400 group-hover:text-align-green-300 transition-colors duration-300" />
          </div>

          <h3 className="text-xl font-semibold text-white mb-4 font-space">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        </motion.div>

        <motion.div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-align-green-neon to-align-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </motion.div>
  );
};

const DiscoveryStep = ({ number, title, description, isActive }: any) => (
  <motion.div
    className={`relative p-6 rounded-xl border transition-all duration-500 ${
      isActive
        ? "bg-align-green-500/10 border-align-green-400"
        : "bg-gray-900/50 border-gray-700 hover:border-gray-600"
    }`}
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
  >
    <div
      className={`flex items-center justify-center w-10 h-10 rounded-full mb-4 font-mono font-bold ${
        isActive ? "bg-align-green-500 text-black" : "bg-gray-800 text-gray-400"
      }`}
    >
      {number}
    </div>
    <h4 className="text-lg font-semibold text-white mb-2 font-space">
      {title}
    </h4>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ quote, author, role, delay = 0 }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-align-black border border-gray-800 hover:border-align-green-500/50 transition-all duration-500"
    >
      <Quote className="w-8 h-8 text-align-green-400 mb-6" />
      <blockquote className="text-gray-300 text-lg mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-align-green-400 to-align-green-600 flex items-center justify-center text-black font-bold mr-4">
          {author.charAt(0)}
        </div>
        <div>
          <div className="text-white font-semibold">{author}</div>
          <div className="text-gray-400 text-sm">{role}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Index() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const [currentStep, setCurrentStep] = useState(0);
  const [glitchText, setGlitchText] = useState(
    "Connect through Thoughts, Not Swipes",
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const original = "Connect through Thoughts, Not Swipes";
      const glitched = original
        .split("")
        .map((char) =>
          Math.random() < 0.1
            ? String.fromCharCode(33 + Math.floor(Math.random() * 94))
            : char,
        )
        .join("");

      setGlitchText(glitched);
      setTimeout(() => setGlitchText(original), 100);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Micro-Blogging",
      description:
        "Share thoughts, not photos. Express yourself through words and ideas that matter.",
    },
    {
      icon: Users,
      title: "Smart Matching",
      description:
        "Connect with like-minded creatives based on thoughts, goals, and creative synergy.",
    },
    {
      icon: Target,
      title: "Credit System",
      description:
        "Earn credits for meaningful interactions and quality content creation.",
    },
    {
      icon: Sparkles,
      title: "Growth Hub",
      description:
        "Track your creative journey with personalized insights and milestone celebrations.",
    },
  ];

  const discoverySteps = [
    { title: "Complete Task", description: "Take on creative challenges" },
    { title: "Share Post", description: "Document your journey" },
    { title: "Earn Credits", description: "Get rewarded for quality" },
    { title: "Connect", description: "Meet your creative tribe" },
  ];

  const testimonials = [
    {
      quote:
        "Finally, a platform that values substance over superficiality. I've connected with amazing creators here.",
      author: "Sarah Chen",
      role: "Digital Artist",
    },
    {
      quote:
        "The credit system motivates me to create better content. It's like LinkedIn meets creativity.",
      author: "Marcus Rivera",
      role: "UX Designer",
    },
    {
      quote:
        "No more mindless scrolling. Every interaction here feels meaningful and purposeful.",
      author: "Aisha Patel",
      role: "Content Creator",
    },
  ];

  return (
    <div className="min-h-screen bg-align-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <ParticleField />

        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-align-green-900/10 via-transparent to-align-green-800/5"
          style={{ y, opacity }}
        />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold font-space leading-tight mb-8"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #22c55e 50%, #00ff88 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {glitchText.split("\n").map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            The social platform where early-career creatives connect through
            meaningful thoughts, not endless swipes. Build your network with
            purpose.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <MagneticButton className="group relative px-8 py-4 bg-gradient-to-r from-align-green-500 to-align-green-400 text-black font-bold rounded-full text-lg font-space transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] overflow-hidden">
              <span className="relative z-10 flex items-center">
                Join the Network
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-align-green-neon"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-align-green-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-align-green-400 rounded-full mt-2"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-space mb-6">
              <span className="bg-gradient-to-r from-white to-align-green-400 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built for creatives who value depth over likes, connections over
              followers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Flow Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent to-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-space mb-6">
              <span className="bg-gradient-to-r from-align-green-400 to-align-green-neon bg-clip-text text-transparent">
                Your Journey
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A simple flow that transforms tasks into connections.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {discoverySteps.map((step, index) => (
              <DiscoveryStep
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                isActive={currentStep === index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold font-space mb-6">
              <span className="bg-gradient-to-r from-white to-align-green-400 bg-clip-text text-transparent">
                Early Voices
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              What our pioneering creatives are saying.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-6 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-align-green-900/20 via-transparent to-align-green-900/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold font-space mb-8"
          >
            <span className="bg-gradient-to-r from-align-green-neon to-white bg-clip-text text-transparent">
              Ready to Align?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Join the beta and be part of the creative network that values
            thoughts over aesthetics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <MagneticButton className="group relative px-12 py-6 bg-gradient-to-r from-align-green-neon to-align-green-400 text-black font-bold rounded-full text-xl font-space transition-all duration-300 hover:shadow-[0_0_50px_rgba(57,255,20,0.8)] overflow-hidden">
              <motion.span
                className="relative z-10 flex items-center"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(57,255,20,0)",
                    "0 0 20px rgba(57,255,20,0.8)",
                    "0 0 0px rgba(57,255,20,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Get Early Access
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.span>

              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute inset-0 bg-align-green-glow"
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 font-mono">
            © 2024 Align Network. Connect through thoughts, not swipes.
          </p>
        </div>
      </footer>
    </div>
  );
}
