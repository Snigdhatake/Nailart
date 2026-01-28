
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import BookingSection from './components/BookingSection';
import { COURSES, GALLERY_ITEMS, SOCIAL_LINKS } from './constants';
import { getNailTip } from './services/geminiService';

const App: React.FC = () => {
  const [dailyTip, setDailyTip] = useState<string>('');
  const [loadingTip, setLoadingTip] = useState(true);

  useEffect(() => {
    const fetchTip = async () => {
      const tip = await getNailTip();
      setDailyTip(tip);
      setLoadingTip(false);
    };
    fetchTip();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/nails_hero/1920/1080" 
            alt="Hero background" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 serif tracking-tight">
            Art on Your <span className="text-pink-400">Fingertips</span>
          </h1>
          <p className="text-xl md:text-2xl text-pink-100 mb-10 font-light max-w-2xl mx-auto">
            Experience the exquisite craftsmanship of Bhargavi. From bridal elegance to contemporary trends.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-pink-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-pink-700 transition-all shadow-xl hover:scale-105"
            >
              Book Your Appointment
            </button>
            <button 
              onClick={() => document.getElementById('courses')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all"
            >
              Explore Courses
            </button>
          </div>
        </div>
        
        {/* Gemini Tip Bar */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center px-4">
          <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-pink-100 flex items-center gap-3 animate-bounce max-w-lg">
            <span className="text-2xl">💡</span>
            <p className="text-sm font-medium text-pink-800">
              <span className="font-bold">Bhargavi's Pro Tip:</span> {loadingTip ? 'Fetching inspiration...' : dailyTip}
            </p>
          </div>
        </div>
      </header>

      {/* About Us / Journey Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/nailjourney1/600/800" className="rounded-2xl shadow-lg mt-8" alt="Nail Art Journey" />
              <img src="https://picsum.photos/seed/nailjourney2/600/800" className="rounded-2xl shadow-lg" alt="Bhargavi at work" />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 serif leading-tight">
              Bhargavi's Nail Art <br/><span className="text-pink-600 italic">Journey</span>
            </h2>
            <div className="h-1 w-20 bg-pink-500"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              What started as a childhood fascination with colors blossomed into a lifelong passion. Bhargavi has spent over a decade perfecting the delicate balance between health and aesthetics in nail care.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At <span className="font-bold text-pink-700">Nailos Bhargavi</span>, we don't just paint nails; we create miniature masterpieces that reflect your personality. Our commitment to using high-quality materials and innovative techniques makes us the premier choice for nail enthusiasts.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="text-3xl font-bold text-gray-900">500+</h4>
                <p className="text-gray-500 font-medium">Happy Clients</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="text-3xl font-bold text-gray-900">100%</h4>
                <p className="text-gray-500 font-medium">Safe Products</p>
              </div>
            </div>
            <a 
              href={SOCIAL_LINKS.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pink-600 font-bold hover:gap-4 transition-all"
            >
              Follow My Story on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 serif">Why Choose Nailos Bhargavi?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Exquisite Precision', desc: 'Every stroke is calculated for perfection.', icon: '✨' },
              { title: 'Healthy Focus', desc: 'No-toxin products that protect your natural nails.', icon: '🌿' },
              { title: 'Trend Setter', desc: 'Access to the latest international nail trends.', icon: '🎨' }
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-pink-50">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 serif">{benefit.title}</h3>
                <p className="text-gray-500">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold serif mb-2">Portfolio Gallery</h2>
              <p className="text-gray-500">A glimpse into our recent creations and masterclasses.</p>
            </div>
            <div className="flex gap-4">
               <a href={SOCIAL_LINKS.youtube} target="_blank" className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all font-medium">
                YouTube
               </a>
               <a href={SOCIAL_LINKS.instagram} target="_blank" className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-all font-medium">
                Instagram
               </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <div key={item.id} className="group relative rounded-2xl overflow-hidden shadow-md">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-pink-300 text-sm">View Design</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mock Video Section */}
          <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl relative aspect-video bg-gray-900 flex items-center justify-center">
             <img src="https://picsum.photos/seed/videobg/1200/600" className="absolute inset-0 w-full h-full object-cover opacity-50" />
             <div className="relative z-10 text-center">
                <button className="w-20 h-20 bg-pink-600 text-white rounded-full flex items-center justify-center text-3xl hover:scale-110 transition-all shadow-xl mb-4">▶</button>
                <p className="text-white font-bold text-xl">Watch Mastering Ombre Art</p>
                <p className="text-gray-300">Exclusive Masterclass Preview</p>
             </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold serif mb-4">Professional Academy</h2>
            <p className="text-pink-200 max-w-2xl mx-auto text-lg">
              Start your career as a certified nail technician. Our curriculum is designed to take you from a curious beginner to a seasoned professional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <div key={course.id} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 flex flex-col hover:bg-white/20 transition-all">
                <div className="mb-6">
                  <span className="px-4 py-1 rounded-full bg-pink-500 text-xs font-bold uppercase tracking-widest">{course.level}</span>
                  <h3 className="text-2xl font-bold mt-4 mb-2 serif">{course.title}</h3>
                  <div className="flex items-center gap-4 text-pink-300 text-sm mb-4">
                    <span>⏱ {course.duration}</span>
                    <span>📜 Certification Included</span>
                  </div>
                </div>
                <div className="flex-grow">
                   <p className="text-pink-100 mb-6">{course.description}</p>
                   <ul className="space-y-3 mb-8">
                     {course.features.map((f, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm">
                         <span className="text-pink-500">✔</span> {f}
                       </li>
                     ))}
                   </ul>
                </div>
                <div className="mt-auto border-t border-white/10 pt-6 flex justify-between items-center">
                  <div>
                    <span className="text-gray-400 text-xs uppercase block">Starting from</span>
                    <span className="text-3xl font-bold">₹{course.price.toLocaleString()}</span>
                  </div>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="bg-white text-pink-900 px-6 py-2 rounded-xl font-bold hover:bg-pink-100 transition-colors">Enquire Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
             <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold serif mb-6">Let's Connect</h2>
                  <p className="text-gray-500 text-lg">Have questions about our services or courses? We're here to help you shine.</p>
                </div>
                
                <div className="space-y-6">
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">📍</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Our Studio</h4>
                        <p className="text-gray-500">123 Glamour Lane, Beauty District, Mumbai - 400001</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">📞</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Call Us</h4>
                        <p className="text-gray-500">+91 98765 43210</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">✉</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Email Us</h4>
                        <p className="text-gray-500">hello@nailosbhargavi.com</p>
                      </div>
                   </div>
                </div>

                <div className="p-6 bg-pink-50 rounded-3xl">
                   <h4 className="font-bold mb-4">Follow Our Art</h4>
                   <div className="flex gap-4">
                      <a href={SOCIAL_LINKS.instagram} target="_blank" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all">IG</a>
                      <a href={SOCIAL_LINKS.youtube} target="_blank" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all">YT</a>
                   </div>
                </div>
             </div>

             <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                <form className="space-y-6">
                   <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border-transparent bg-white shadow-sm focus:ring-2 focus:ring-pink-500 outline-none" placeholder="Your Name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone</label>
                        <input type="tel" className="w-full px-4 py-3 rounded-xl border-transparent bg-white shadow-sm focus:ring-2 focus:ring-pink-500 outline-none" placeholder="Your Number" />
                      </div>
                   </div>
                   <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <textarea rows={4} className="w-full px-4 py-3 rounded-xl border-transparent bg-white shadow-sm focus:ring-2 focus:ring-pink-500 outline-none" placeholder="Tell us what's on your mind..."></textarea>
                   </div>
                   <button type="submit" className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-xl">Send Message</button>
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-50 py-12 border-t border-pink-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">NB</div>
              <span className="text-xl font-bold text-pink-700 serif tracking-tight">Nailos Bhargavi</span>
           </div>
           <p className="text-gray-400 text-sm">© 2024 Nailos Bhargavi Studio & Academy. All Rights Reserved.</p>
           <div className="flex justify-center gap-6 mt-6">
             <button className="text-gray-400 hover:text-pink-600 text-xs">Privacy Policy</button>
             <button className="text-gray-400 hover:text-pink-600 text-xs">Terms of Service</button>
             <button className="text-gray-400 hover:text-pink-600 text-xs">Refund Policy</button>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
