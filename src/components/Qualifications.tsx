import React, { useEffect, useRef } from 'react';
import { GraduationCap } from 'lucide-react';

interface QualificationsProps {
  scrollY: number;
}

const Qualifications: React.FC<QualificationsProps> = ({ scrollY }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (sectionElement) {
      const sectionTop = sectionElement.offsetTop;
      const sectionHeight = sectionElement.offsetHeight;
      if (scrollY > sectionTop - window.innerHeight / 2 && scrollY < sectionTop + sectionHeight) {
        sectionElement.classList.add('section-enter-active');
      } else {
        sectionElement.classList.remove('section-enter-active');
      }
    }
  }, [scrollY]);

  return (
    <section id="qualifications" className="py-16 section-enter" ref={sectionRef}>
      <h2 className="text-4xl font-bold mb-8 flex items-center neon-text">
        <GraduationCap className="mr-2" /> Qualifications
      </h2>
      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg neon-border">
          <h3 className="text-2xl font-semibold mb-2 text-green-400">Software Engineering</h3>
          <p className="text-cyan-300">42 Abu Dhabi, UAE</p>
          <p className="text-sm text-gray-400">OCTOBER 2023 - PRESENT</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg neon-border">
          <h3 className="text-2xl font-semibold mb-2 text-green-400">Bachelor of Science in Information Technology</h3>
          <p className="text-cyan-300">University of Khartoum, Sudan</p>
          <p className="text-sm text-gray-400">JANUARY 2023</p>
          <p className="mt-2">GPA: 3.67/4.00</p>
          <p className="mt-2 text-purple-400">Graduation Project: "Multi-Level Business Performance Monitoring Dashboard for Startups."</p>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;