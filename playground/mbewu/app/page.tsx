'use client'

import LenisWrapper from '../components/LenisWrapper'
import HandMotif from '../components/artwork/HandMotif'
import BridgeArtwork from '../components/artwork/BridgeArtwork'
import AfricaMap from '../components/artwork/AfricaMap'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <LenisWrapper>
      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-deep to-deep-brown">
          <div className="text-center">
            <motion.h1 
              className="text-6xl font-bold text-copper mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Mbewu: Seeds of Dignified Work
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Stories of African youth, purpose, and creativity
            </motion.p>
            <div className="mt-12">
              <HandMotif />
            </div>
          </div>
        </section>

        {/* Section 1: The Seed */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-deep-brown to-earth-brown px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold text-copper mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              The Seed
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              In the heart of Africa, where ancient wisdom meets modern dreams, young minds carry seeds of possibility. 
              Each story begins with a question: What does it mean to work with dignity? What does it mean to create 
              with purpose? These are the seeds that grow into movements, innovations, and transformations.
            </motion.p>
            <div className="flex justify-center">
              <BridgeArtwork />
            </div>
          </div>
        </section>

        {/* Section 2: The Soil */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-earth-brown to-warm-brown px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold text-copper mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              The Soil
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Rich with tradition, nourished by community, the soil of African culture provides the foundation for growth. 
              Here, entrepreneurship is not just about profit—it's about lifting communities, preserving heritage, 
              and creating pathways for future generations. The soil remembers every footstep, every dream planted.
            </motion.p>
            <div className="flex justify-center">
              <AfricaMap />
            </div>
          </div>
        </section>

        {/* Section 3: The Growth */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-warm-brown to-golden-brown px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold text-copper mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              The Growth
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              From small beginnings come great achievements. Young African entrepreneurs are redefining what success looks like—
              building businesses that honor their roots while reaching for global impact. Each venture is a testament to 
              resilience, creativity, and the power of dignified work.
            </motion.p>
          </div>
        </section>

        {/* Section 4: The Harvest */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-golden-brown to-copper px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold text-deep-brown mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              The Harvest
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-800 leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              The fruits of dignified work extend far beyond individual success. They nourish communities, inspire others, 
              and create ripple effects of positive change. This is the harvest—not just of crops or profits, 
              but of hope, opportunity, and sustainable futures.
            </motion.p>
          </div>
        </section>

        {/* Section 5: The Sharing */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-copper to-warm-copper px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold text-deep-brown mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              The Sharing
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-800 leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              True wealth is shared wealth. African entrepreneurs understand that success is measured not just by what you achieve, 
              but by how many others you lift along the way. Knowledge is passed down, opportunities are created, 
              and the cycle of dignified work continues.
            </motion.p>
          </div>
        </section>

        {/* Section 6: The Future */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-warm-copper to-indigo-deep px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold text-copper mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              The Future
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              The seeds planted today will grow into the forests of tomorrow. Young African entrepreneurs are not just 
              building businesses—they're building the future. A future where work has meaning, where creativity flourishes, 
              and where every person has the opportunity to plant their own seeds of dignified work.
            </motion.p>
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl font-semibold text-copper">
                Mbewu: Where every seed becomes a story.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </LenisWrapper>
  )
}