import React from 'react';
import { PlayCircle, Clock, Award, BookOpen, LogOut } from 'lucide-react';
import { useCourses } from '../context/CourseContext';

interface StudentDashboardProps {
  onLogout: () => void;
  onEnterClassroom: (courseId: number) => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ onLogout, onEnterClassroom }) => {
  const { courses } = useCourses();
  // Simulating enrolled courses (taking the first 2 from the list)
  const myCourses = courses.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2">
               <span className="bg-brand-600 text-white p-2 rounded-lg font-bold text-lg">শিখ</span>
               <span className="font-bold text-xl text-gray-800">Student Portal</span>
            </div>
            <div className="flex items-center">
              <button onClick={onLogout} className="text-gray-600 hover:text-red-600 flex items-center gap-2 font-medium">
                <LogOut className="w-5 h-5" /> লগ আউট
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">স্বাগতম, শিক্ষার্থী! 👋</h1>
          <p className="text-gray-600 mt-2">আপনার লার্নিং ড্যাশবোর্ডে আপনাকে স্বাগতম। আপনার পড়াশোনা চালিয়ে যান।</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full"><BookOpen className="w-6 h-6 text-blue-600" /></div>
              <div>
                <p className="text-gray-500 text-sm">এনরোল করা কোর্স</p>
                <p className="text-2xl font-bold">০৪</p>
              </div>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full"><Award className="w-6 h-6 text-green-600" /></div>
              <div>
                <p className="text-gray-500 text-sm">সার্টিফিকেট অর্জন</p>
                <p className="text-2xl font-bold">০১</p>
              </div>
           </div>
           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-full"><Clock className="w-6 h-6 text-purple-600" /></div>
              <div>
                <p className="text-gray-500 text-sm">শিক্ষার সময়</p>
                <p className="text-2xl font-bold">১২.৫ ঘণ্টা</p>
              </div>
           </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">আপনার কোর্সসমূহ</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-5">
                <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-1 rounded">{course.category}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 line-clamp-1">{course.title}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div className="bg-brand-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>৪৫% সম্পন্ন</span>
                  <span>১২/৩০ লেসন</span>
                </div>
                <button 
                  onClick={() => onEnterClassroom(course.id)}
                  className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2"
                >
                  <PlayCircle className="w-4 h-4" /> ক্লাস শুরু করুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;