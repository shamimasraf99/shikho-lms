import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CoursesSection from './components/CoursesSection';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Classroom from './pages/Classroom';
import PaymentModal from './components/PaymentModal';
import { CourseProvider } from './context/CourseContext';
import { UserProvider } from './context/UserContext';
import { Course, UserRole } from './types';
import { CheckCircle } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'login' | 'admin' | 'student' | 'classroom'>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [activeClassroomId, setActiveClassroomId] = useState<number | null>(null);

  const handleBuyCourse = (course: Course) => {
    setSelectedCourse(course);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
    // After payment, simulate redirecting to student dashboard
    setCurrentView('student');
  };

  const handleEnterClassroom = (courseId: number) => {
    setActiveClassroomId(courseId);
    setCurrentView('classroom');
  };

  const handleLoginSuccess = (role: UserRole) => {
    if (role === 'admin') {
      setCurrentView('admin');
    } else {
      setCurrentView('student');
    }
  };

  return (
    <UserProvider>
      <CourseProvider>
        <div className="min-h-screen bg-gray-50 font-sans relative">
          
          {/* Router Logic */}
          {currentView === 'home' && (
            <>
              <Navbar 
                onNavigateLogin={() => setCurrentView('login')} 
                onNavigateHome={() => setCurrentView('home')} 
              />
              <Hero />
              <Features />
              <CoursesSection onBuyCourse={handleBuyCourse} />
              
              {/* Testimonial Placeholder */}
              <section id="testimonials" className="py-20 bg-brand-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                   <h2 className="text-3xl font-bold text-gray-900 mb-12">শিক্ষার্থীরা যা বলছে</h2>
                   <div className="grid md:grid-cols-3 gap-8">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100">
                          <div className="flex text-yellow-400 mb-4 justify-center">
                            {'★★★★★'}
                          </div>
                          <p className="text-gray-600 italic mb-6">
                            "এই প্ল্যাটফর্ম থেকে ওয়েব ডেভেলপমেন্ট শিখে আমি আজ ফ্রিল্যান্সিং করছি। মেন্টররা খুবই হেল্পফুল এবং কন্টেন্ট অনেক মানসম্মত।"
                          </p>
                          <div className="flex items-center justify-center gap-4">
                             <div className="w-10 h-10 bg-gray-300 rounded-full bg-cover" style={{backgroundImage: `url(https://i.pravatar.cc/150?img=${i + 10})`}}></div>
                             <div className="text-left">
                                <p className="font-bold text-gray-900 text-sm">করিম হোসেন</p>
                                <p className="text-xs text-gray-500">ওয়েব ডেভেলপার</p>
                             </div>
                          </div>
                        </div>
                      ))}
                   </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="py-20 bg-brand-600">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">আজই আপনার যাত্রা শুরু করুন</h2>
                  <p className="text-brand-100 text-lg mb-8">
                    ১৫,০০০+ শিক্ষার্থীর সাথে যুক্ত হোন এবং নিজের স্কিল ডেভেলপ করে ক্যারিয়ারে এগিয়ে যান।
                  </p>
                  <button onClick={() => setCurrentView('login')} className="bg-white text-brand-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
                    ফ্রি রেজিস্ট্রেশন করুন
                  </button>
                </div>
              </section>

              <Footer />
            </>
          )}

          {currentView === 'login' && (
            <LoginPage 
              onLogin={handleLoginSuccess} 
              onBack={() => setCurrentView('home')} 
            />
          )}

          {currentView === 'admin' && (
            <AdminDashboard 
              onLogout={() => setCurrentView('home')} 
            />
          )}

          {currentView === 'student' && (
            <StudentDashboard 
              onLogout={() => setCurrentView('home')}
              onEnterClassroom={handleEnterClassroom}
            />
          )}

          {currentView === 'classroom' && activeClassroomId && (
            <Classroom 
              courseId={activeClassroomId} 
              onBack={() => setCurrentView('student')} 
            />
          )}

          {/* Payment Modal Overlay */}
          {showPaymentModal && selectedCourse && (
            <PaymentModal 
              courseTitle={selectedCourse.title} 
              price={selectedCourse.price} 
              onClose={() => setShowPaymentModal(false)}
              onSuccess={handlePaymentSuccess}
            />
          )}

          {/* Success Toast */}
          {showSuccessToast && (
             <div className="fixed bottom-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl flex items-center gap-3 animate-bounce-slow z-50">
               <CheckCircle className="w-6 h-6" />
               <div>
                 <p className="font-bold">অভিনন্দন!</p>
                 <p className="text-sm">কোর্স এনরোলমেন্ট সফল হয়েছে।</p>
               </div>
             </div>
          )}
          
        </div>
      </CourseProvider>
    </UserProvider>
  );
}

export default App;