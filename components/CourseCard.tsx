import React from 'react';
import { Star, Users, BookOpen } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onBuy?: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onBuy }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 group flex flex-col h-full">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
        />
        {course.bestseller && (
          <span className="absolute top-3 left-3 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            বেস্টসেলার
          </span>
        )}
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2 text-xs text-gray-500 font-medium">
          <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded">{course.category}</span>
          <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {course.students}</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[56px]">
          {course.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 flex items-center gap-1">
           <BookOpen className="w-4 h-4 text-gray-400" /> {course.instructor}
        </p>
        
        <div className="flex items-center justify-between mt-auto mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="font-bold text-gray-900">{course.rating}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-sm text-gray-400 line-through">৳{course.originalPrice}</span>
            <span className="text-xl font-bold text-brand-600">৳{course.price}</span>
          </div>
        </div>

        <button 
          onClick={() => onBuy && onBuy(course)}
          className="w-full bg-gray-50 text-gray-900 font-medium py-2.5 rounded-lg border border-gray-200 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition"
        >
          কোর্সটি কিনুন
        </button>
      </div>
    </div>
  );
};

export default CourseCard;