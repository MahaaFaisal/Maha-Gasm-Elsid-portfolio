import React from 'react';
import { Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    "Completed Generative AI Bootcamp",
    "Participated in Women in Technology Program",
    "Successfully led and organized events as Deputy Secretary-General",
    "Contributed to the development of a 3D printer project",
    "Completed various online courses in programming and web development",
  ];

  return (
    <section id="achievements" className="py-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <Award className="mr-2" /> Achievements
      </h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <ul className="space-y-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <Award className="mr-2 mt-1 text-green-400" size={20} />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;