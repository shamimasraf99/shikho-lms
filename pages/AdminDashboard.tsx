import React, { useState } from 'react';
import { useCourses } from '../context/CourseContext';
import { useUsers } from '../context/UserContext';
import { Plus, Trash2, LayoutDashboard, BookOpen, LogOut, Users, UserCheck, Shield, Menu, X } from 'lucide-react';
import { Course, UserRole } from '../types';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const { courses, addCourse, deleteCourse } = useCourses();
  const { users, deleteUser, updateUserRole } = useUsers();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'courses' | 'users'>('dashboard');
  const [showAddModal, setShowAddModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // New Course State
  const [newCourse, setNewCourse] = useState<Partial<Course>>({
    title: '',
    instructor: '',
    price: '',
    originalPrice: '',
    category: '',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    rating: 5.0,
    students: 0
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCourse.title && newCourse.price) {
      // Assigning a temporary ID (0) which will be overwritten by the context logic
      const courseToAdd = { ...newCourse, id: 0 } as Course;
      addCourse(courseToAdd);
      
      setShowAddModal(false);
      setNewCourse({
        title: '',
        instructor: '',
        price: '',
        originalPrice: '',
        category: '',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        rating: 5.0,
        students: 0
      });
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch(role) {
      case 'admin': return 'bg-purple-100 text-purple-800';
      case 'instructor': return 'bg-blue-100 text-blue-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 flex font-sans relative">
      
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden" 
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 flex flex-col`}>
        <div className="p-6 flex items-center justify-between border-b border-gray-800">
           <div className="flex items-center gap-2">
             <span className="bg-brand-600 text-white p-1.5 rounded-lg font-bold text-lg">শিখ</span>
             <span className="text-xl font-bold">অ্যাডমিন</span>
           </div>
           <button onClick={closeMobileMenu} className="md:hidden text-gray-400 hover:text-white">
             <X className="w-6 h-6" />
           </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button 
            onClick={() => { setActiveTab('dashboard'); closeMobileMenu(); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'dashboard' ? 'bg-brand-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <LayoutDashboard className="w-5 h-5" />
            ড্যাশবোর্ড
          </button>
          <button 
            onClick={() => { setActiveTab('users'); closeMobileMenu(); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'users' ? 'bg-brand-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <Users className="w-5 h-5" />
            ইউজার ম্যানেজমেন্ট
          </button>
          <button 
            onClick={() => { setActiveTab('courses'); closeMobileMenu(); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'courses' ? 'bg-brand-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <BookOpen className="w-5 h-5" />
            কোর্স ম্যানেজমেন্ট
          </button>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-gray-800 rounded-lg transition">
            <LogOut className="w-5 h-5" />
            লগ আউট
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen">
        {/* Mobile Header */}
        <div className="md:hidden bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
           <div className="flex items-center gap-3">
             <button onClick={() => setIsMobileMenuOpen(true)} className="text-gray-600 focus:outline-none">
               <Menu className="w-6 h-6" />
             </button>
             <span className="font-bold text-gray-900">Shikho Admin</span>
           </div>
           <button onClick={onLogout} className="text-red-600"><LogOut className="w-5 h-5" /></button>
        </div>

        <div className="p-4 md:p-8">
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ওভারভিউ</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg"><BookOpen className="w-6 h-6 text-blue-600" /></div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">মোট কোর্স</p>
                      <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                   <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg"><Users className="w-6 h-6 text-green-600" /></div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">শিক্ষার্থী</p>
                      <p className="text-2xl font-bold text-gray-900">{users.filter(u => u.role === 'student').length}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                   <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg"><UserCheck className="w-6 h-6 text-purple-600" /></div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">ইন্সট্রাক্টর</p>
                      <p className="text-2xl font-bold text-gray-900">{users.filter(u => u.role === 'instructor').length}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg"><Shield className="w-6 h-6 text-orange-600" /></div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">মোট আয়</p>
                      <p className="text-2xl font-bold text-gray-900">৳ ২৫.৫ লক্ষ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ইউজার ম্যানেজমেন্ট ({users.length})</h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">নাম</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ইমেইল</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">রোল</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">স্ট্যাটাস</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">যোগদানের তারিখ</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">অ্যাকশন</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleBadgeColor(user.role)}`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                             <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.joinedDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-end gap-2">
                            <select 
                              className="text-xs border rounded p-1"
                              value={user.role}
                              onChange={(e) => updateUserRole(user.id, e.target.value as UserRole)}
                            >
                              <option value="student">Student</option>
                              <option value="instructor">Instructor</option>
                              <option value="admin">Admin</option>
                            </select>
                            <button 
                              onClick={() => deleteUser(user.id)}
                              className="text-red-600 hover:text-red-900 bg-red-50 p-1.5 rounded hover:bg-red-100 transition"
                              title="Delete User"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div>
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h2 className="text-2xl font-bold text-gray-800">সকল কোর্স ({courses.length})</h2>
                <div className="flex gap-4 w-full md:w-auto">
                    <button 
                      onClick={() => setShowAddModal(true)}
                      className="bg-brand-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-brand-700 transition shadow-lg w-full md:w-auto justify-center"
                    >
                      <Plus className="w-5 h-5" />
                      নতুন কোর্স যোগ করুন
                    </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">কোর্সের নাম</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ইন্সট্রাক্টর</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">মূল্য</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ক্যাটাগরি</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">অ্যাকশন</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {courses.map((course) => (
                        <tr key={course.id} className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img className="h-10 w-10 rounded object-cover" src={course.image} alt="" />
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{course.title}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {course.instructor}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-brand-600">
                            ৳{course.price}
                          </td>
                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                              {course.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button 
                              onClick={() => deleteCourse(course.id)}
                              className="text-red-600 hover:text-red-900 bg-red-50 p-2 rounded hover:bg-red-100 transition"
                              title="Delete Course"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Add Course Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="px-6 py-4 border-b bg-gray-50 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900">নতুন কোর্স যোগ করুন</h3>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            
            <form onSubmit={handleAddSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">কোর্সের শিরোনাম</label>
                <input 
                  type="text" 
                  required
                  className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
                  value={newCourse.title}
                  onChange={e => setNewCourse({...newCourse, title: e.target.value})}
                  placeholder="যেমন: অ্যাডভান্সড জাভাস্ক্রিপ্ট"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ইন্সট্রাক্টর</label>
                  <input 
                    type="text" 
                    required
                    className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
                    value={newCourse.instructor}
                    onChange={e => setNewCourse({...newCourse, instructor: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ক্যাটাগরি</label>
                  <input 
                    type="text" 
                    required
                    className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
                    value={newCourse.category}
                    onChange={e => setNewCourse({...newCourse, category: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">বর্তমান মূল্য (৳)</label>
                  <input 
                    type="number" 
                    required
                    className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
                    value={newCourse.price}
                    onChange={e => setNewCourse({...newCourse, price: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">আসল মূল্য (৳)</label>
                  <input 
                    type="number" 
                    className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
                    value={newCourse.originalPrice}
                    onChange={e => setNewCourse({...newCourse, originalPrice: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ছবির URL</label>
                <input 
                  type="text" 
                  className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-brand-500 outline-none"
                  value={newCourse.image}
                  onChange={e => setNewCourse({...newCourse, image: e.target.value})}
                  placeholder="https://..."
                />
              </div>

              <div className="pt-4 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition"
                >
                  বাতিল করুন
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-brand-600 text-white py-2.5 rounded-lg font-medium hover:bg-brand-700 transition"
                >
                  সেভ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;