import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[900px] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://leontra.com/wp-content/uploads/2025/06/6035181_Computer_Business_1280x720.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl ml-auto text-right">
          <div className="bg-[#070059]/70 backdrop-blur-md p-10 inline-block text-white border-r-8 border-blue-600">
            <p className="text-xl mb-4 font-light tracking-wider animate-fade-up">
              Accelerate your digital journey with our <br /> transformative business technology services.
            </p>
            <h1 className="text-6xl font-extrabold leading-tight">
              Smart IT Solutions. <br />
              Scalable Results.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;