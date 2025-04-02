"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBox from "./components/ChatBox";
import PromoBanner from "./components/PromoBanner";
import SugarSenseAIFeatures from "./components/Features";
import SugarSenseAITargets from "./components/Targets";
import { MessageCircle } from "lucide-react";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  return (
    <main className="relative min-h-screen bg-white text-gray-800">
      <Header />
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-10 text-center sm:px-12 lg:px-24 z-0">
        <div className="relative z-10 max-w-4xl px-4 sm:px-0">
          <Image className="mx-auto drop-shadow-lg" src="/sugar-sense-ai-logo.png" alt="logo" width={200} height={200} priority />
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold text-transparent bg-gradient-to-r from-[#103d50] to-[#103d50] bg-clip-text animate-slide-up">SugarSense.ai</h1>
          <p className="mt-2 text-xl sm:text-2xl font-semibold text-transparent bg-gradient-to-r from-[#103d50] to-[#103d50] bg-clip-text animate-slide-up">
            Predict. Prevent. Prosper.
          </p>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#103d50] animate-slide-up delay-200">
            Track and manage your sugar levels effortlessly with AI-powered insights and personalized recommendations
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-slide-up delay-400 items-center">
            <Link href="/">
              <button className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white transition-transform duration-300 bg-gradient-to-r bg-[#103d50] hover:bg-[#092633] rounded-lg hover:scale-105 hover:shadow-lg w-48 sm:w-52 text-center">
              Get Started
              </button>
            </Link>
            <Link href="https://github.com/alexaustin007/sugarSense-AI">
              <button className="px-6 sm:px-8 py-3 sm:py-4 font-semibold text-[#103d50] transition-transform duration-300 border border-[#103d50] rounded-lg hover:bg-[#afbec5] hover:scale-105 w-48 sm:w-52 text-center">
                Learn More →
              </button>
            </Link>
          </div>

        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center py-16 px-6 sm:px-12 lg:px-24">
        <SugarSenseAITargets />
        <SugarSenseAIFeatures />
        <PromoBanner />
        <button onClick={() => setIsChatOpen(!isChatOpen)} className="fixed bottom-8 right-8 bg-[#40b3d3] hover:bg-[#31859c] p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#235462]">
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
        <ChatBox isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </section>
      <Footer />
    </main>
  );
}