import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Approach from './components/Approach';
import BentoGrid from './components/BentoGrid';
import Transformations from './components/Transformations';
import InteractiveEstimator from './components/InteractiveEstimator';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledBudget, setPrefilledBudget] = useState<string>('');
  const [prefilledArea, setPrefilledArea] = useState<number>(1500);

  // Initialize automatic Navigation focus trigger with Intersection Observer
  useEffect(() => {
    const sectionIds = ['home', 'competencies', 'projects', 'approach', 'estimator', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // balanced focus detection offset
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Handler for custom services requested from Bento Grid specs modal
  const handleServiceSelected = (title: string) => {
    setPrefilledService(title);
    setPrefilledBudget('Requested Spec Valuation');
    setPrefilledArea(2000);
  };

  // Handler for estimate parameters calculated in budget builder
  const handleEstimateApplied = (estimate: { type: string; area: number; material: string; cost: string }) => {
    setPrefilledService(estimate.type);
    setPrefilledBudget(estimate.cost);
    setPrefilledArea(estimate.area);
  };

  return (
    <div className="bg-deep-obsidian text-on-primary selection:bg-heritage-gold selection:text-deep-obsidian min-h-screen">
      
      {/* 1. Navigation Shell Header */}
      <Header
        activeSection={activeSection}
        onNavigate={(sec) => setActiveSection(sec)}
      />

      {/* 2. Hero Presentation */}
      <Hero onScrollToSection={(id) => setActiveSection(id)} />

      {/* 3. Our Collaborative Approach */}
      <Approach />

      {/* 4. Core Competencies Bento Grid Section */}
      <BentoGrid onSelectServiceForConsult={handleServiceSelected} />

      {/* 5. Before & After transformations slideshow */}
      <Transformations />

      {/* 6. Dynamic Estimator */}
      <InteractiveEstimator onApplyEstimate={handleEstimateApplied} />

      {/* 7. Consultation Ticket Lead Form */}
      <ContactForm
        preloadedProjectType={prefilledService}
        preloadedBudget={prefilledBudget}
        preloadedAreaSize={prefilledArea}
      />

      {/* 8. Responsive Footer, mobile bottom bar, and Floating Chat node */}
      <Footer
        onNavigate={(sec) => setActiveSection(sec)}
        activeSection={activeSection}
      />

    </div>
  );
}
