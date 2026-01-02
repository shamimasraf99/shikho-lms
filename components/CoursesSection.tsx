import React from 'react';
import CourseCard from './CourseCard';
import { useCourses } from '../context/CourseContext';
import { Course } from '../types';

interface CoursesSectionProps {
  onBuyCourse: (course: Course) => void;
}

const CoursesSection: React.FC<CoursesSectionProps> = ({ onBuyCourse }) => {
  const { courses } = useCourses();

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="text-brand-600 font-bold uppercase tracking-wide text-sm">জনপ্রিয় কোর্সসমূহ</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">আমাদের টপ-রেটেড কোর্সসমূহ এক্সপ্লোর করুন</h2>
          </div>
          <button className="text-brand-600 font-semibold hover:text-brand-800 flex items-center gap-1 transition">
            সব কোর্স দেখুন <span className="text-xl">→</span>
          </button>
        </div>

        {courses.length === 0 ? (
          <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <p className="text-gray-500">বর্তমানে কোনো কোর্স চালু নেই।</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} onBuy={onBuyCourse} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;