import React from 'react';
import { MonitorPlay, Award, Clock, Users } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 1,
    title: "উন্নত মানের ভিডিও লেকচার",
    description: "HD কোয়ালিটির ভিডিও এবং প্র্যাকটিক্যাল প্রজেক্ট ভিত্তিক শিক্ষা।",
    icon: <MonitorPlay className="w-8 h-8 text-white" />,
  },
  {
    id: 2,
    title: "সার্টিফিকেট প্রদান",
    description: "কোর্স শেষে দক্ষ হওয়ার প্রমাণ হিসেবে প্রফেশনাল সার্টিফিকেট।",
    icon: <Award className="w-8 h-8 text-white" />,
  },
  {
    id: 3,
    title: "লাইফটাইম এক্সেস",
    description: "একবার এনরোল করে আজীবন কোর্স মেটেরিয়াল ব্যবহারের সুযোগ।",
    icon: <Clock className="w-8 h-8 text-white" />,
  },
  {
    id: 4,
    title: "এক্সপার্ট মেন্টর সাপোর্ট",
    description: "যেকোনো সমস্যায় মেন্টরদের কাছ থেকে সরাসরি সাহায্য পাওয়ার সুবিধা।",
    icon: <Users className="w-8 h-8 text-white" />,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">কেন আমাদের বেছে নেবেন?</h2>
          <p className="text-gray-600 text-lg">
            আমরা দিচ্ছি বাজারের সেরা কোর্স কারিকুলাম এবং লার্নিং অভিজ্ঞতা যা আপনাকে পৌঁছে দেবে সাফল্যের শীর্ষে।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center group">
              <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition duration-300 shadow-lg shadow-brand-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;