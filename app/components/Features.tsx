"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import Card from "./Card";

const SugarSenseAIFeatures = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        customPaging: () => <div className="custom-dot"></div>, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div id="features" className="container mx-auto pt-20 w-full max-w-6xl mb-20 px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                    Manage Your Sugar Levels Effectively
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    SugarSense.ai is your smart health companion, providing AI-powered insights, personalized recommendations, and expert guidance to help you maintain a balanced lifestyle.
                </p>
            </div>

            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#40b3d3]/10 to-transparent blur-3xl" />
                <Slider {...settings} className="relative z-10">
                    <div className="px-2">
                        <Card
                            title="AI-Powered Glucose Predictions"
                            description="Get real-time AI-driven insights to predict your sugar level fluctuations and take proactive measures to stay healthy."
                            buttonLabel="Coming Soon"
                            imageUrl="/ai-glucose.png"
                            comingSoon={true}
                            isActive={activeIndex === 0}
                            onClick={() => handleCardClick(0)}
                            link="#"
                        />
                    </div>
                    <div className="px-2">
                        <Card
                            title="Personalized Meal Recommendations"
                            description="Receive customized meal suggestions tailored to your sugar levels, dietary preferences, and health goals."
                            buttonLabel="Coming Soon"
                            imageUrl="/meal-recommendation.png"
                            comingSoon={true}
                            isActive={activeIndex === 1}
                            onClick={() => handleCardClick(1)}
                            link="#"
                        />
                    </div>
                    <div className="px-2">
                        <Card
                            title="AI Health Assistant"
                            description="Chat with our AI assistant to get instant answers about your diabetes management, based on your historical patterns and personalized health data."
                            buttonLabel="Coming Soon"
                            imageUrl="/ai-assistance.png"
                            comingSoon={true}
                            isActive={activeIndex === 2}
                            onClick={() => handleCardClick(2)}
                            link="#"
                        />
                    </div>
                    <div className="px-2">
                        <Card
                            title="Lifestyle & Activity Tracking"
                            description="Monitor your physical activities, sleep patterns, and daily habits to ensure a healthier lifestyle."
                            buttonLabel="Coming Soon"
                            imageUrl="/lifestyle-tracking.png"
                            comingSoon={true}
                            isActive={activeIndex === 3}
                            onClick={() => handleCardClick(3)}
                            link="#"
                        />
                    </div>
                    <div className="px-2">
                        <Card
                            title="Token Rewards for Healthy Habits"
                            description="Earn tokens for maintaining balanced sugar levels, following meal plans, and staying active, which can be redeemed for health benefits."
                            buttonLabel="Coming Soon"
                            imageUrl="/token-rewards.png"
                            comingSoon={true}
                            isActive={activeIndex === 4}
                            onClick={() => handleCardClick(4)}
                            link="#"
                        />
                    </div>
                    <div className="px-2">
                        <Card
                            title="Consult with Doctors & Nutritionists"
                            description="Get expert advice from certified doctors and nutritionists to optimize your diet and health management."
                            buttonLabel="Coming Soon"
                            imageUrl="/doctor-consultation.png"
                            comingSoon={true}
                            isActive={activeIndex === 5}
                            onClick={() => handleCardClick(5)}
                            link="#"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default SugarSenseAIFeatures;
