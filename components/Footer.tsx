import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-brand-600 text-white p-2 rounded-lg font-bold text-xl">শিখ</span>
              <span className="text-2xl font-bold text-white">Shikho</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Shikho হলো দেশের অন্যতম সেরা অনলাইন লার্নিং প্ল্যাটফর্ম। আমরা বিশ্বাস করি দক্ষতাই শক্তি, তাই আমরা আপনাকে দিচ্ছি সেরা মানের শিক্ষা।
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-500 transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-500 transition"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-500 transition"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-brand-500 transition"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">কুইক লিংকস</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-500 transition">আমাদের সম্পর্কে</a></li>
              <li><a href="#" className="hover:text-brand-500 transition">সকল কোর্স</a></li>
              <li><a href="#" className="hover:text-brand-500 transition">ইনস্ট্রাক্টর হন</a></li>
              <li><a href="#" className="hover:text-brand-500 transition">ব্লগ</a></li>
              <li><a href="#" className="hover:text-brand-500 transition">যোগাযোগ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">সাপোর্ট</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-500 transition">সচরাচর জিজ্ঞাসা (FAQ)</a></li>
              <li><a href="#" className="hover:text-brand-500 transition">শর্তাবলী</a></li>
              <li><a href="#" className="hover:text-brand-500 transition">গোপনীয়তা নীতি</a></li>
              <li><a href="#" className="hover:text-brand-500 transition">রিফান্ড পলিসি</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">যোগাযোগ করুন</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 mt-1" />
                <span>লেভেল ৪, শেখ টাওয়ার, গুলশান-২, ঢাকা-১২১২</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-500" />
                <span>+৮৮০ ১৭০০-০০০০০০</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-500" />
                <span>support@shikho.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Shikho. সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;