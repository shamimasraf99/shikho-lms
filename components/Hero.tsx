import React, { useState } from 'react';
import { Sparkles, ArrowRight, Bot, Loader2 } from 'lucide-react';
import { getCourseAdvice } from '../services/geminiService';

const Hero: React.FC = () => {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setAdvice(null);
    try {
      const result = await getCourseAdvice(query);
      setAdvice(result);
    } catch (error) {
      setAdvice("দুঃখিত, একটি সমস্যা হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-brand-50 to-white overflow-hidden py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>নতুন স্কিল শিখুন, নিজেকে গড়ুন</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              আপনার স্বপ্নের ক্যারিয়ার গড়ার <span className="text-brand-600">সেরা ঠিকানা</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              দক্ষ মেন্টরদের সাথে প্রোগ্রামিং, ডিজাইন, মার্কেটিং এবং আরও অনেক কিছু শিখুন। আজই শুরু করুন আপনার লার্নিং জার্নি।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#courses" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 md:text-lg transition shadow-lg hover:shadow-xl">
                কোর্স দেখুন
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 md:text-lg transition">
                কিভাবে কাজ করে?
              </a>
            </div>

            {/* AI Advisor Box */}
            <div className="mt-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-accent-500 p-1.5 rounded-lg">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-800">AI কোর্স অ্যাডভাইজার</h3>
              </div>
              
              {!advice ? (
                <form onSubmit={handleAskAI} className="relative">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="আমি ওয়েব ডিজাইন শিখতে চাই..."
                    className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm transition"
                  />
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="absolute right-2 top-2 bg-brand-600 text-white p-1.5 rounded-lg hover:bg-brand-700 disabled:opacity-50 transition"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              ) : (
                <div className="bg-brand-50 p-4 rounded-xl border border-brand-100">
                  <p className="text-gray-800 text-sm leading-relaxed">{advice}</p>
                  <button 
                    onClick={() => setAdvice(null)}
                    className="mt-2 text-xs text-brand-600 font-semibold hover:underline"
                  >
                    অন্য প্রশ্ন জিজ্ঞাসা করুন
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-8 left-20 w-80 h-80 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="Students learning" 
              className="relative rounded-3xl shadow-2xl border-4 border-white transform hover:scale-[1.02] transition duration-500"
            />
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 animate-bounce-slow">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase">শিক্ষার্থী</p>
                <p className="text-xl font-bold text-gray-900">১৫,০০০+</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;