
import React, { useState, useEffect } from 'react';
import { Booking } from '../types';

const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: 'Signature Nail Art',
    date: ''
  });
  const [isReturning, setIsReturning] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Check for previous bookings to apply discount
  useEffect(() => {
    if (formData.phone.length >= 10) {
      const bookings: Booking[] = JSON.parse(localStorage.getItem('nailos_bookings') || '[]');
      const previous = bookings.filter(b => b.phone === formData.phone);
      setIsReturning(previous.length >= 1);
    } else {
      setIsReturning(false);
    }
  }, [formData.phone]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking: Booking = {
      id: Math.random().toString(36).substr(2, 9),
      ...formData,
      timestamp: Date.now(),
      discountApplied: isReturning
    };

    const existingBookings = JSON.parse(localStorage.getItem('nailos_bookings') || '[]');
    localStorage.setItem('nailos_bookings', JSON.stringify([...existingBookings, newBooking]));
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', address: '', service: 'Signature Nail Art', date: '' });
    }, 3000);
  };

  return (
    <section id="booking" className="py-20 bg-pink-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-pink-600 p-10 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 serif">Book Your Slot</h2>
            <p className="text-pink-100 mb-8">
              Experience the best nail art in town. Our slots fill up fast, so reserve yours today!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-500/50 flex items-center justify-center">🎁</div>
                <div>
                  <h4 className="font-bold">Returning Customer Reward</h4>
                  <p className="text-sm text-pink-200">Get a flat 15% discount on your 2nd booking and onwards!</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-500/50 flex items-center justify-center">✨</div>
                <div>
                  <h4 className="font-bold">Premium Materials</h4>
                  <p className="text-sm text-pink-200">We only use top-grade international brands.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl">✓</div>
                <h3 className="text-2xl font-bold text-gray-800">Booking Confirmed!</h3>
                <p className="text-gray-600">We'll reach out to you shortly to confirm the timing.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {isReturning && (
                  <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium animate-bounce">
                    <span>🎉</span> Welcome back! You qualify for a 15% VIP Discount.
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter number to check for discount"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your address"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  >
                    <option>Signature Nail Art</option>
                    <option>Gel Extensions</option>
                    <option>Bridal Package</option>
                    <option>Acrylic Overlays</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input
                    required
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-pink-700 transition-all shadow-lg mt-4 active:scale-95"
                >
                  Confirm Booking {isReturning && '(15% OFF Applied)'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
