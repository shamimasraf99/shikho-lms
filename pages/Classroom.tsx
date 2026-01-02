import React from 'react';
import { ArrowLeft, PlayCircle, Lock, CheckCircle, FileText } from 'lucide-react';
import { useCourses } from '../context/CourseContext';

interface ClassroomProps {
  courseId: number;
  onBack: () => void;
}

const Classroom: React.FC<ClassroomProps> = ({ courseId, onBack }) => {
  const { courses } = useCourses();
  const course = courses.find(c => c.id === courseId);

  if (!course) return <div>Course not found</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col-reverse md:flex-row">
      {/* Sidebar Curriculum */}
      <aside className="w-full md:w-80 bg-gray-800 border-r border-gray-700 flex-shrink-0 h-96 md:h-screen overflow-y-auto">
        <div className="p-4 border-b border-gray-700 flex items-center gap-3 sticky top-0 bg-gray-800 z-10">
          <button onClick={onBack} className="text-gray-400 hover:text-white transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="font-bold truncate">কোর্স কারিকুলাম</h2>
        </div>
        
        <div className="p-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">সেকশন ১: পরিচিতি</h3>
              <div className="space-y-1">
                <button className="w-full flex items-center gap-3 p-3 bg-brand-600 rounded-lg text-sm font-medium text-left">
                  <PlayCircle className="w-4 h-4 flex-shrink-0" />
                  <span>কোর্স পরিচিতি এবং গাইডলাইন</span>
                  <span className="ml-auto text-xs opacity-75">5:00</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg text-sm text-gray-300 text-left transition">
                   <PlayCircle className="w-4 h-4 flex-shrink-0" />
                   <span>কিভাবে সাপোর্ট পাবেন?</span>
                   <span className="ml-auto text-xs opacity-75">3:20</span>
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">সেকশন ২: মূল ক্লাস</h3>
              <div className="space-y-1">
                 <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg text-sm text-gray-300 text-left transition">
                   <Lock className="w-4 h-4 flex-shrink-0 text-gray-500" />
                   <span>প্রথম প্রজেক্ট সেটআপ</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg text-sm text-gray-300 text-left transition">
                   <Lock className="w-4 h-4 flex-shrink-0 text-gray-500" />
                   <span>বেসিক কনসেপ্ট আলোচনা</span>
                </button>
                 <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg text-sm text-gray-300 text-left transition">
                   <FileText className="w-4 h-4 flex-shrink-0 text-gray-500" />
                   <span>কুইজ ১: যাচাইকরণ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <div className="flex-1 p-4 md:p-10 flex flex-col items-center justify-center bg-gray-900">
          <div className="w-full max-w-4xl aspect-video bg-black rounded-xl shadow-2xl overflow-hidden relative group">
            {/* Dummy Video Player UI */}
            <div className="absolute inset-0 flex items-center justify-center">
               <button className="w-16 h-16 md:w-20 md:h-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition transform hover:scale-110">
                 <PlayCircle className="w-10 h-10 md:w-12 md:h-12 text-white fill-current" />
               </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
               <div className="h-full bg-brand-500 w-1/3 relative">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-500 rounded-full shadow"></div>
               </div>
            </div>
          </div>
          
          <div className="w-full max-w-4xl mt-6 md:mt-8">
            <h1 className="text-xl md:text-2xl font-bold mb-2">{course.title}</h1>
            <h2 className="text-lg md:text-xl text-gray-400 mb-6"> লেসন ১: কোর্স পরিচিতি এবং গাইডলাইন</h2>
            
            <div className="flex gap-4 border-b border-gray-700 pb-4 mb-6 overflow-x-auto">
              <button className="text-brand-400 font-medium border-b-2 border-brand-400 pb-4 -mb-4 whitespace-nowrap">ওভারভিউ</button>
              <button className="text-gray-400 font-medium pb-4 hover:text-white transition whitespace-nowrap">প্রশ্ন ও উত্তর</button>
              <button className="text-gray-400 font-medium pb-4 hover:text-white transition whitespace-nowrap">রিসোর্স</button>
            </div>

            <div className="prose prose-invert text-sm md:text-base">
              <p>এই লেসনে আমরা কোর্সের সম্পূর্ণ আউটলাইন নিয়ে আলোচনা করেছি। কিভাবে আপনি সর্বোচ্চ বেনিফিট পাবেন এবং সফল হবেন তার গাইডলাইন দেওয়া হয়েছে।</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Classroom;