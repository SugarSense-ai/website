"use client"
import Image from "next/image";

const PromoBanner = () => {
  return (
    <div className="relative bg-gradient-to-r mt-10 from-[#40b3d3] to-[#20a6cb] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between text-white w-full max-w-6xl mx-auto">

      {/* Image Section */}
      <div className="flex flex-row justify-center mb-6 md:mb-0">
        <Image
          src="/fitness-band.png"
          alt="Smart Fitness Band"
          width={200}
          height={200}
          className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto"
          priority
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Track Your Health with{" "}
          <span className="text-yellow-300">SugarSense.ai</span>
        </h2>
        <p className="text-base sm:text-lg mt-3">
          Stay ahead of your fitness goals with real-time health monitoring!
        </p>
        <p className="text-lg sm:text-xl md:text-2xl font-bold mt-2">
          Join our Pilot Program and
          <span className="text-yellow-300 pl-1">Get a Free Smart Band Today!</span>
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-5 items-center justify-center md:justify-start">
          <button
            className="bg-white text-[#40b3d3] px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-base shadow-md hover:bg-gray-100 transition w-44 sm:w-48 text-center"
            aria-label="Claim your free smart band"
          >
            Claim Yours Now
          </button>
          <button
            className="border border-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-base hover:bg-white hover:text-[#20a6cb] transition w-44 sm:w-48 text-center"
            aria-label="Learn more about SugarSense.ai"
          >
            Learn More →
          </button>
        </div>

      </div>
    </div>
  );
};

export default PromoBanner;
