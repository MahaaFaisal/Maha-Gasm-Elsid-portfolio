import React, { useEffect, useRef } from 'react';
import { User, MapPin, Phone, Mail } from 'lucide-react';

interface AboutMeProps {
  scrollY: number;
}

const AboutMe: React.FC<AboutMeProps> = ({ scrollY }) => {
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
    <section id="about" className="py-16 section-enter" ref={sectionRef}>
      <h2 className="text-4xl font-bold mb-8 flex items-center neon-text">
        <User className="mr-2" /> About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg neon-border">
          <img
            src="https://via.placeholder.com/300"
            alt="Maha Gasm Elsid"
            className="w-full h-auto rounded-lg mb-4"
          />
          <p className="mb-4">
            Dedicated Information Technology graduate with a proven track record in precision, problem-solving, and organization. Eager to build a link between theory and practice, especially in Software Development Life-Cycle (SDLC), and software development methodologies and tools.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg neon-border">
          <h3 className="text-2xl font-semibold mb-4 text-green-400">Contact Information</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <MapPin className="mr-2 text-green-400" />
              <span>Abu Dhabi, UAE</span>
            </li>
            <li className="flex items-center">
              <Phone className="mr-2 text-green-400" />
              <span>+971568775083</span>
            </li>
            <li className="flex items-center">
              <Mail className="mr-2 text-green-400" />
              <span>Mahafaisalmubarak@gmail.com</span>
            </li>
          </ul>
          <h3 className="text-2xl font-semibold mt-6 mb-4 text-green-400">Languages</h3>
          <ul className="space-y-2">
            <li>Arabic (Fluent)</li>
            <li>English (Fluent)</li>
            <li>German (Beginner)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;