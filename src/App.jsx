import React, { useCallback, useRef, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedTrips from './components/FeaturedTrips';
import ReservationForm from './components/ReservationForm';

function App() {
  const tripsRef = useRef(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const scrollToTrips = useCallback(() => {
    const el = document.getElementById('trips');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const openBooking = useCallback((trip = null) => {
    setSelectedTrip(trip);
    setBookingOpen(true);
  }, []);

  const closeBooking = useCallback(() => setBookingOpen(false), []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero onExplore={scrollToTrips} onBook={() => openBooking()} />
      <About />
      <FeaturedTrips onBook={(trip) => openBooking(trip)} />

      {/* Contact & Footer combined simple block */}
      <section id="contact" className="relative w-full bg-black py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d0d0d] to-[#141414] p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-extrabold" style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}>
                  Get in Touch
                </h3>
                <p className="mt-2 text-white/70">Questions, private tours, or special requests? We’re here to help.</p>
                <div className="mt-4 text-white/70">
                  <p>WhatsApp: +212 6 00 00 00 00</p>
                  <p>Email: hello@almou.tours</p>
                  <p>Location: Morocco</p>
                </div>
              </div>
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you! We will reach out shortly.');
                  }}
                  className="grid grid-cols-1 gap-3"
                >
                  <input className="rounded-xl border border-white/10 bg-[#141414] px-4 py-2 text-sm placeholder:text-white/40 focus:border-[#3D6B5C] outline-none" placeholder="Your name" />
                  <input type="email" className="rounded-xl border border-white/10 bg-[#141414] px-4 py-2 text-sm placeholder:text-white/40 focus:border-[#3D6B5C] outline-none" placeholder="Email" />
                  <textarea rows={4} className="rounded-xl border border-white/10 bg-[#141414] px-4 py-2 text-sm placeholder:text-white/40 focus:border-[#3D6B5C] outline-none" placeholder="Message" />
                  <button className="mt-2 w-full rounded-full bg-[#3D6B5C] px-6 py-2 text-sm font-semibold shadow-lg shadow-[#3D6B5C]/30 transition hover:brightness-110">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-[#3D6B5C] via-transparent to-[#D47F3E]" />
            <div className="mt-6 flex flex-col items-center justify-between gap-3 text-sm text-white/60 sm:flex-row">
              <span>© {new Date().getFullYear()} Almou Tourism. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <a href="#trips" className="hover:text-white">Trips</a>
                <a href="#about" className="hover:text-white">About</a>
                <button onClick={() => openBooking()} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10">Book</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReservationForm isOpen={bookingOpen} onClose={closeBooking} selectedTrip={selectedTrip} />
    </div>
  );
}

export default App;
