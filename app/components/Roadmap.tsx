"use client";

const Roadmap = () => {
    return (
        <section className="relative flex flex-col items-center justify-center py-16 px-6 sm:px-12 lg:px-24">
            <h2 className="text-4xl sm:text-4xl font-bold text-center text-[#103d50] mb-12 tracking-wide">
                Our Journey Ahead
            </h2>

            <div className="relative w-full max-w-6xl">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-gradient-to-b from-purple-500 via-blue-500 to-red-500 shadow-lg hidden sm:block"></div>

                {[
                    {
                        title: "Q2 2025",
                        description: "MVP Launch: Core features such as AI-powered glucose tracking go live.\nUser Onboarding: Beta program for early adopters to provide feedback.",
                        side: "left",
                        color: "from-purple-400 to-purple-600 border-purple-500"
                    },
                    {
                        title: "Q3 2025",
                        description: "AI-Powered Insights: Smart diet & lifestyle suggestions.\nAdvanced Analytics: Graph-based trends to monitor sugar levels effectively.",
                        side: "right",
                        color: "from-blue-400 to-blue-600 border-blue-500"
                    },
                    {
                        title: "Q4 2025",
                        description: "Wearable Integration: Sync with smartwatches & health apps.\nBlockchain Security: Decentralized data storage for health records.",
                        side: "left",
                        color: "from-teal-400 to-teal-600 border-teal-500"
                    },
                    {
                        title: "Q1 2026",
                        description: "Community Challenges: Gamified tracking, rewards, and leaderboards.\nGlobal Expansion: Multi-language support & launch in new regions.",
                        side: "right",
                        color: "from-red-400 to-red-600 border-red-500"
                    }
                ].map((item, index) => (
                    <div key={index} className="relative flex flex-col sm:flex-row w-full py-8 items-center sm:items-start">
                        
                        {item.side === "left" ? (
                            <>
                                <div className="w-full sm:w-1/2 flex justify-end pr-0 sm:pr-6">
                                    <div className={`w-full sm:w-[450px] h-auto sm:h-[160px] rounded-lg shadow-xl border-l-4 bg-gradient-to-br ${item.color} transition-all duration-300 hover:scale-105 hover:shadow-2xl p-5`}>
                                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                        <p className="mt-2 text-gray-200 whitespace-pre-line text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                                <div className="w-6 h-6 bg-white rounded-full border-4 border-gray-900 shadow-md animate-pulse hidden sm:block"></div>
                                <div className="hidden sm:block w-1/2"></div>
                            </>
                        ) : (
                            <>
                                <div className="hidden sm:block w-1/2"></div>
                                <div className="w-6 h-6 bg-white rounded-full border-4 border-gray-900 shadow-md animate-pulse hidden sm:block"></div>
                                <div className="w-full sm:w-1/2 flex justify-start pl-0 sm:pl-6">
                                    <div className={`w-full sm:w-[450px] h-auto sm:h-[160px] rounded-lg shadow-xl border-l-4 bg-gradient-to-br ${item.color} transition-all duration-300 hover:scale-105 hover:shadow-2xl p-5`}>
                                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                        <p className="mt-2 text-gray-200 whitespace-pre-line text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Roadmap;