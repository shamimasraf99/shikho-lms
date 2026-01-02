import React, { useState } from 'react';
import { X, CreditCard, CheckCircle } from 'lucide-react';

interface PaymentModalProps {
  courseTitle: string;
  price: string;
  onClose: () => void;
  onSuccess: () => void;
}

type PaymentMethod = 'bkash' | 'nagad' | 'rocket' | 'stripe' | 'paypal';

const PaymentModal: React.FC<PaymentModalProps> = ({ courseTitle, price, onClose, onSuccess }) => {
  const [method, setMethod] = useState<PaymentMethod>('bkash');
  const [processing, setProcessing] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 border-b bg-gray-50">
          <h3 className="text-xl font-bold text-gray-900">চেকআউট</h3>
          <p className="text-sm text-gray-500 mt-1">{courseTitle}</p>
          <p className="text-2xl font-bold text-brand-600 mt-2">৳ {price}</p>
        </div>

        <div className="p-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">পেমেন্ট মেথড সিলেক্ট করুন</h4>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <button 
              onClick={() => setMethod('bkash')}
              className={`p-2 border rounded-lg flex flex-col items-center justify-center gap-1 transition ${method === 'bkash' ? 'border-pink-500 bg-pink-50' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <span className="font-bold text-pink-600">bKash</span>
            </button>
            <button 
              onClick={() => setMethod('nagad')}
              className={`p-2 border rounded-lg flex flex-col items-center justify-center gap-1 transition ${method === 'nagad' ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <span className="font-bold text-orange-600">Nagad</span>
            </button>
            <button 
              onClick={() => setMethod('stripe')}
              className={`p-2 border rounded-lg flex flex-col items-center justify-center gap-1 transition ${method === 'stripe' ? 'border-brand-500 bg-brand-50' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <CreditCard className="w-5 h-5 text-gray-600" />
              <span className="text-xs font-medium">Card</span>
            </button>
          </div>

          <form onSubmit={handlePayment} className="space-y-4">
            {(method === 'bkash' || method === 'nagad' || method === 'rocket') && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">আপনার {method === 'bkash' ? 'বিকাশ' : method === 'nagad' ? 'নগদ' : 'রকেট'} নম্বর</label>
                <input type="tel" placeholder="017XXXXXXXX" required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-500 outline-none" />
              </div>
            )}

            {(method === 'stripe' || method === 'paypal') && (
              <>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                   <input type="text" placeholder="0000 0000 0000 0000" required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-500 outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                    <input type="text" placeholder="MM/YY" required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                    <input type="text" placeholder="123" required className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-500 outline-none" />
                  </div>
                </div>
              </>
            )}

            <button 
              type="submit" 
              disabled={processing}
              className="w-full bg-brand-600 text-white font-bold py-3.5 rounded-lg hover:bg-brand-700 transition flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {processing ? 'প্রসেসিং হচ্ছে...' : 'পেমেন্ট সম্পন্ন করুন'}
            </button>
          </form>
        </div>
        
        <div className="bg-gray-50 p-4 text-center border-t text-xs text-gray-500">
          <p>সুরক্ষিত পেমেন্ট গেটওয়ে দ্বারা প্রসেস করা হচ্ছে।</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;