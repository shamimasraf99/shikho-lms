import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search, FileJson } from 'lucide-react';

interface NavbarProps {
  onNavigateLogin: () => void;
  onNavigateHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateLogin, onNavigateHome }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadJSON = () => {
    const template = {
      version: "0.4",
      title: "Shikho Homepage Template",
      type: "page",
      content: [
        {
          id: "hero_section",
          elType: "section",
          settings: {
            background_background: "classic",
            background_color: "#eff6ff"
          },
          elements: [
            {
              id: "hero_column_wrapper",
              elType: "column",
              settings: {
                _column_size: 100
              },
              elements: [
                {
                  id: "hero_inner_section",
                  elType: "section",
                  isInner: true,
                  settings: {},
                  elements: [
                    {
                      id: "hero_left_col",
                      elType: "column",
                      settings: { _column_size: 50 },
                      elements: [
                        {
                          id: "hero_heading",
                          elType: "widget",
                          widgetType: "heading",
                          settings: {
                            title: "আপনার স্বপ্নের ক্যারিয়ার গড়ার সেরা ঠিকানা",
                            header_size: "h1"
                          }
                        },
                        {
                          id: "hero_text",
                          elType: "widget",
                          widgetType: "text-editor",
                          settings: {
                            editor: "<p>দক্ষ মেন্টরদের সাথে প্রোগ্রামিং, ডিজাইন, মার্কেটিং এবং আরও অনেক কিছু শিখুন। আজই শুরু করুন আপনার লার্নিং জার্নি।</p>"
                          }
                        },
                        {
                          id: "hero_button",
                          elType: "widget",
                          widgetType: "button",
                          settings: {
                            text: "কোর্স দেখুন",
                            link: { url: "#courses" },
                            button_type: "primary"
                          }
                        }
                      ]
                    },
                    {
                      id: "hero_right_col",
                      elType: "column",
                      settings: { _column_size: 50 },
                      elements: [
                        {
                          id: "hero_image",
                          elType: "widget",
                          widgetType: "image",
                          settings: {
                            image: { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
      ]
    };
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(template, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "shikho-elementor-template.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={onNavigateHome}>
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="bg-brand-600 text-white p-2 rounded-lg font-bold text-xl">শিখ</span>
              <span className="text-2xl font-bold text-gray-800">Shikho</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={onNavigateHome} className="text-gray-600 hover:text-brand-600 font-medium transition">হোম</button>
            <a href="#courses" className="text-gray-600 hover:text-brand-600 font-medium transition">কোর্সসমূহ</a>
            <a href="#features" className="text-gray-600 hover:text-brand-600 font-medium transition">আমাদের বৈশিষ্ট্য</a>
            <a href="#testimonials" className="text-gray-600 hover:text-brand-600 font-medium transition">মতামত</a>
          </div>

          {/* Icons & Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleDownloadJSON}
              className="flex items-center gap-1 text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-md hover:bg-brand-100 border border-brand-200 transition"
              title="Elementor JSON ডাউনলোড করুন"
            >
              <FileJson className="w-4 h-4" />
              <span className="hidden lg:inline">Elementor JSON</span>
            </button>

            <button className="text-gray-500 hover:text-brand-600">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-brand-600 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
            <button 
              onClick={onNavigateLogin}
              className="bg-brand-600 text-white px-5 py-2 rounded-full hover:bg-brand-700 transition font-medium"
            >
              লগ ইন
            </button>
          </div>

          {/* Mobile menu buttons */}
          <div className="md:hidden flex items-center gap-4">
            <button className="text-gray-600 hover:text-brand-600 relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-3.5 h-3.5 flex items-center justify-center">0</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-brand-600 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t absolute w-full left-0 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <button 
              onClick={handleDownloadJSON}
              className="flex w-full items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50"
            >
              <FileJson className="w-4 h-4" />
              Elementor JSON ডাউনলোড
            </button>
            <button onClick={() => { onNavigateHome(); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">হোম</button>
            <a href="#courses" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">কোর্সসমূহ</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50">আমাদের বৈশিষ্ট্য</a>
            <button onClick={() => { onNavigateLogin(); setIsOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-brand-600 bg-brand-50">লগ ইন</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;