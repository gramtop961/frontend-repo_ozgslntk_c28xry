import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ReservationForm = ({ isOpen, onClose, selectedTrip }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    trip: '',
    date: '',
    people: 1,
    message: '',
  });

  const tripOptions = useMemo(
    () => [
      { id: 'sahara-stars', name: 'Sahara Under the Stars' },
      { id: 'nomad-camp', name: 'Nomad Camping' },
      { id: 'cultural-trails', name: 'Cultural Trails' },
      { id: 'atlas-nature', name: 'Atlas Nature Escape' },
    ],
    []
  );

  useEffect(() => {
    if (selectedTrip) {
      setForm((f) => ({ ...f, trip: selectedTrip.name }));
    }
  }, [selectedTrip]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show a confirmation. In a future step, this can POST to a backend.
    alert(`Reservation received!\n\nName: ${form.name}\nTrip: ${form.trip}\nDate: ${form.date}\nPeople: ${form.people}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 px-4 py-6"
          aria-modal
          role="dialog"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] text-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}>
                  Book Your Adventure
                </h3>
                <p className="text-sm text-white/60">We’ll confirm availability shortly after submission.</p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10"
                aria-label="Close"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 px-6 py-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/70">Full Name</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-[#3D6B5C]"
                  placeholder="Your full name"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-[#3D6B5C]"
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/70">Phone Number</label>
                <input
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-[#3D6B5C]"
                  placeholder="+212 ..."
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/70">Choose Trip</label>
                <select
                  name="trip"
                  required
                  value={form.trip}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-2 text-sm outline-none ring-0 focus:border-[#D47F3E]"
                >
                  <option value="" disabled>
                    Select a trip
                  </option>
                  {tripOptions.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/70">Select Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-2 text-sm outline-none ring-0 focus:border-[#D47F3E]"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm text-white/70">Number of People</label>
                <input
                  type="number"
                  name="people"
                  min={1}
                  required
                  value={form.people}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-2 text-sm outline-none ring-0 focus:border-[#3D6B5C]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm text-white/70">Message / Special Request</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-[#3D6B5C]"
                  placeholder="Tell us what would make this experience perfect for you"
                />
              </div>
              <div className="sm:col-span-2 mt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-[#D47F3E] px-6 py-2 text-sm font-semibold shadow-lg shadow-[#D47F3E]/30 transition hover:brightness-110"
                >
                  Submit Reservation
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReservationForm;
