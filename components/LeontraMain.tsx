import React from 'react';
import HeroSection from './leontra/HeroSection';
import FeaturesSection from './leontra/FeaturesSection';
import ExpertiseSection from './leontra/ExpertiseSection';
import OverviewSection from './leontra/OverviewSection';
import ModernizationToggleSection from './leontra/ModernizationToggleSection';
import ExpertiseSlider from './leontra/ExpertiseSlider';
import FeaturedServicesSection from './leontra/FeaturedServicesSection';
import WorkProcessSection from './leontra/WorkProcessSection';
import CounterSection from './leontra/CounterSection';
import EmpoweringSection from './leontra/EmpoweringSection';
import WhyChooseUs from './leontra/WhyChooseUs';
import MissionVisionSection from './leontra/MissionVisionSection';
import ContactSupportSection from './leontra/ContactSupportSection';
import StayConnectedSection from './leontra/StayConnectedSection';

const LeontraMain: React.FC = () => {
  return (
    <article id="post-19" className="pt-[72px]">
      {/* 1. Main Banner Section */}
      <HeroSection />

      {/* 2. Features Section */}
      <FeaturesSection />

      {/* 3. Overview Section */}
      <OverviewSection />

      {/* 4. Expertise Slider */}
      <ExpertiseSlider />

      {/* 5. Featured Services */}
      <FeaturedServicesSection />

      {/* 6. Work Process & Annual Progression */}
      <WorkProcessSection />

      {/* 7. Counters Section */}
      <CounterSection />

      {/* 8. Empowering Businesses Everywhere */}
      <EmpoweringSection />

      {/* 9. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 10. Mission & Vision Section */}
      <MissionVisionSection />

      {/* 11. Contact Support Section */}
      <ContactSupportSection />

      {/* 12. Stay Connected Section */}
      <StayConnectedSection />
    </article>
  );
};

export default LeontraMain;