"use client"
import { FC } from "react";
import { Zap, ShieldCheck, Banknote, Globe } from "lucide-react";

interface FeatureProps {
  title: string;
  desc: string;
  icon: FC<{ className?: string }>;
  color: string;
  text: string;
}

const features: FeatureProps[] = [
  {
    title: "AI-Powered Insights",
    desc: "Get real-time predictions on your sugar levels based on your diet and lifestyle patterns.",
    icon: Zap,
    color: "from-purple-600 to-purple-800 border-purple-500/50",
    text: "text-yellow-400",
  },
  {
    title: "Personalized Recommendations",
    desc: "Receive tailored meal suggestions and lifestyle tips to maintain optimal sugar levels.",
    icon: ShieldCheck,
    color: "from-blue-600 to-blue-800 border-blue-500/50",
    text: "text-green-400",
  },
  {
    title: "Seamless Health Tracking",
    desc: "Log meals, monitor trends, and track progress effortlessly with an intuitive interface.",
    icon: Banknote,
    color: "from-green-600 to-green-800 border-teal-500/50",
    text: "text-orange-400",
  },
  {
    title: "Accessible for Everyone",
    desc: "Designed for all users, providing easy and insightful sugar level management worldwide.",
    icon: Globe,
    color: "from-red-600 to-red-800 border-red-500/50",
    text: "text-blue-400",
  },
];

const FeatureCard: FC<FeatureProps> = ({ title, desc, icon: Icon, color, text }) => (
  <div
    className={`bg-gradient-to-br ${color} p-6 sm:p-8 rounded-2xl border backdrop-blur-lg text-center transition-transform hover:scale-105 hover:shadow-lg w-full sm:w-64`}
    aria-label={title}
  >
    <div className="flex items-center justify-center mb-4">
      <Icon className={`h-10 w-10 sm:h-12 sm:w-12 ${text}`} />
    </div>
    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-200 text-sm sm:text-base">{desc}</p>
  </div>
);

const SugarSenseAITargets: FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 mb-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#103d50] mb-12 text-center">
        Why Choose SugarSense.ai?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default SugarSenseAITargets;
