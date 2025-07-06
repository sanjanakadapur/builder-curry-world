import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Zap, Users, Target, Sparkles, Quote } from "lucide-react";

// Floating Code Snippets Animation
const FloatingCodeElements = () => {
  const codeSnippets = [
    "{ connect: true }",
    "async thoughts()",
    "class Creative",
    "=> network.align",
    "{ minds: linked }",
    "function create()",
    "if (inspired) {",
    "console.log('✨')",
    "return success;",
    "} collaborate",
    "const magic = []",
    "while (true) {",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute text-align-green-400/30 font-mono text-sm"
          style={{
            left: `${10 + ((i * 15) % 80)}%`,
            top: `${15 + ((i * 12) % 70)}%`,
          }}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 0.7, 0],
            y: [-20, -100, -180],
            x: [0, Math.sin(i) * 30, Math.sin(i + 1) * 60],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  );
};

// Neural Network Animation
const NeuralNetwork = () => {
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 20 + (i % 4) * 20,
    y: 20 + Math.floor(i / 4) * 30,
    connections: Math.floor(Math.random() * 3) + 1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full">
        {nodes.map((node, i) => (
          <g key={i}>
            {/* Connections */}
            {nodes.slice(i + 1, i + node.connections + 1).map((target, j) => (
              <motion.line
                key={`${i}-${j}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="rgb(34, 197, 94)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: (i + j) * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Nodes */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="3"
              fill="rgb(34, 197, 94)"
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

// Matrix Digital Rain Effect
const DigitalRain = () => {
  const columns = 15;
  const characters = "ALIGNNETWORK01".split("");

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {Array.from({ length: columns }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 font-mono text-align-green-neon text-xs"
          style={{ left: `${(i / columns) * 100}%` }}
        >
          {Array.from({ length: 20 }).map((_, j) => (
            <motion.div
              key={j}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, window.innerHeight || 800],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear",
              }}
              className="block"
            >
              {characters[Math.floor(Math.random() * characters.length)]}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Interactive Cursor Follower
const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed w-6 h-6 border-2 border-align-green-neon rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Geometric Shapes Animation
const GeometricShapes = () => {
  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 20 + Math.random() * 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute border border-align-green-400/20"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
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
  const [typewriterText, setTypewriterText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Connect through Thoughts",
    "Not Swipes, But Minds",
    "Where Ideas Align",
    "Think. Create. Connect.",
  ];

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typewriterText.length < currentPhrase.length) {
            setTypewriterText(
              currentPhrase.slice(0, typewriterText.length + 1),
            );
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typewriterText.length > 0) {
            setTypewriterText(typewriterText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [typewriterText, currentPhraseIndex, isDeleting, phrases]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
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
      <CursorFollower />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Multiple Animation Layers */}
        <DigitalRain />
        <GeometricShapes />
        <NeuralNetwork />
        <FloatingCodeElements />

        {/* Dynamic Background Gradients */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* 3D Perspective Container */}
        <div
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          style={{
            transform: "perspective(1000px)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Logo/Brand Animation */}
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-12"
          >
            <motion.div
              className="inline-block p-4 border border-align-green-400/30 rounded-xl bg-align-green-500/5 backdrop-blur-sm"
              whileHover={{
                rotateY: 15,
                scale: 1.05,
                boxShadow: "0 0 50px rgba(34, 197, 94, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <span className="text-2xl font-mono font-bold text-align-green-400">
                ALIGN_NETWORK.exe
              </span>
            </motion.div>
          </motion.div>

          {/* Main Headline with Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotateX: 45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold font-space leading-tight mb-4">
              <span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #22c55e 50%, #00ff88 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {typewriterText}
              </span>
              <motion.span
                className="inline-block w-1 h-16 md:h-24 bg-align-green-neon ml-2"
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </h1>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              animate={{
                textShadow: [
                  "0 0 0px rgba(34, 197, 94, 0)",
                  "0 0 20px rgba(34, 197, 94, 0.3)",
                  "0 0 0px rgba(34, 197, 94, 0)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Where creative minds{" "}
              <span className="text-align-green-400 font-semibold">sync</span>,
              where ideas{" "}
              <span className="text-align-green-400 font-semibold">
                collide
              </span>
              , where the future of networking{" "}
              <span className="text-align-green-400 font-semibold">begins</span>
              .
            </motion.p>
          </motion.div>

          {/* Interactive Action Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <MagneticButton className="group relative px-10 py-5 bg-gradient-to-r from-align-green-500 to-align-green-400 text-black font-bold rounded-full text-lg font-space transition-all duration-300 hover:shadow-[0_0_50px_rgba(34,197,94,0.8)] overflow-hidden">
              <span className="relative z-10 flex items-center">
                Enter the Matrix
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-align-green-neon"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </MagneticButton>

            <motion.button
              className="group px-8 py-4 border-2 border-align-green-400 text-align-green-400 font-bold rounded-full text-lg font-space hover:bg-align-green-400 hover:text-black transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats/Features Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "10K+", label: "Creative Minds" },
              { number: "50K+", label: "Thoughts Shared" },
              { number: "95%", label: "Meaningful Connections" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-4 rounded-xl bg-align-green-500/5 border border-align-green-400/20 backdrop-blur-sm"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(34, 197, 94, 0.1)",
                  borderColor: "rgba(34, 197, 94, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <motion.div
                  className="text-2xl font-bold text-align-green-400 font-mono"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(34, 197, 94, 0)",
                      "0 0 10px rgba(34, 197, 94, 0.8)",
                      "0 0 0px rgba(34, 197, 94, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Action Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="w-8 h-12 border-2 border-align-green-400 rounded-full flex justify-center relative overflow-hidden"
              whileHover={{ scale: 1.1, borderColor: "rgb(0, 255, 136)" }}
            >
              <motion.div
                className="w-1.5 h-4 bg-align-green-400 rounded-full mt-2"
                animate={{
                  y: [0, 16, 0],
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.p
              className="text-xs text-gray-500 mt-2 font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              SCROLL_TO_EXPLORE
            </motion.p>
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
