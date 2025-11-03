import React from 'react';
import { motion } from 'framer-motion';

const tripsData = [
  {
    id: 'sahara-stars',
    name: 'Sahara Under the Stars',
    description: 'Camel trek, dunes at sunset, and a Berber campfire night.',
    duration: '3 days / 2 nights',
    price: 'from 800 MAD',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'nomad-camp',
    name: 'Nomad Camping',
    description: 'Remote bivouac, tea ceremony, and star-gazing in silence.',
    duration: '2 days / 1 night',
    price: 'from 520 MAD',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'cultural-trails',
    name: 'Cultural Trails',
    description: 'Kasbahs, souks, and the living heritage of southern Morocco.',
    duration: '1 day',
    price: 'from 250 MAD',
    image:
      'https://images.unsplash.com/photo-1580795479163-05b6b8fb1a7a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'atlas-nature',
    name: 'Atlas Nature Escape',
    description: 'Waterfalls, cedar forests, and panoramic mountain roads.',
    duration: '2 days / 1 night',
    price: 'from 600 MAD',
    image:
      'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1600&auto=format&fit=crop',
  },
];

const FeaturedTrips = ({ onBook }) => {
  return (
    <section id="trips" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2
              className="text-3xl md:text-4xl font-extrabold"
              style={{ fontFamily: 'Poppins, Inter, system-ui, sans-serif' }}
            >
              Featured Trips
            </h2>
            <p className="mt-2 text-white/70">Curated adventures blending nature and culture.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tripsData.map((trip, idx) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0d0d0d] to-[#121212] shadow-xl"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{trip.name}</h3>
                <p className="mt-1 text-sm text-white/70">{trip.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-white/80">{trip.duration}</span>
                  <span className="rounded-full bg-[#3D6B5C]/15 px-3 py-1 text-[#CBAA78]">{trip.price}</span>
                </div>
                <div className="mt-5 flex">
                  <button
                    onClick={() => onBook(trip)}
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#3D6B5C] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#3D6B5C]/30 transition hover:brightness-110"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrips;
