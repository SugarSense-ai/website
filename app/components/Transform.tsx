const TransformSection = () => {
    return (
      <section className="bg-gradient-to-br from-white to-blue-50 text-gray-800 py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-sm uppercase font-bold mb-2 text-blue-600">Smart Tracking</h2>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Track Your Sugar Levels with AI-Powered Precision
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Experience effortless diabetes management with our AI-driven platform. Our smart system analyzes your historical patterns, 
              provides real-time insights, and delivers personalized recommendations to help you maintain optimal sugar levels. 
              Stay ahead of your health with predictive analytics and customized meal plans.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded font-bold hover:bg-blue-700 transition-colors">Start Tracking</button>
              <button className="bg-transparent border border-blue-600 text-blue-600 px-6 py-3 rounded font-bold hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
  
          {/* Image */}
          <div>
            <img
              src="/ai-management.png"
              alt="AI-Powered Diabetes Management"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default TransformSection;