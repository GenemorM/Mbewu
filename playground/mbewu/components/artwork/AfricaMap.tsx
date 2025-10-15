'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface AfricaMapProps {
  className?: string
  animate?: boolean
}

const countries = [
  { name: 'Nigeria', path: 'M180 220 L200 210 L220 220 L210 240 L190 235 Z', data: '2.3M youth employed' },
  { name: 'Kenya', path: 'M280 240 L300 235 L310 250 L295 260 L285 255 Z', data: '1.8M opportunities created' },
  { name: 'South Africa', path: 'M260 320 L280 315 L290 330 L275 340 L265 335 Z', data: '3.1M skills developed' },
  { name: 'Ghana', path: 'M160 240 L175 235 L180 250 L170 255 L165 250 Z', data: '950K dignified jobs' },
  { name: 'Ethiopia', path: 'M290 200 L310 195 L320 210 L305 220 L295 215 Z', data: '1.5M youth empowered' },
]

export default function AfricaMap({ className = '', animate = true }: AfricaMapProps) {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const continentVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.svg
      width="400"
      height="500"
      viewBox="0 0 400 500"
      className={`${className}`}
    >
      {/* Africa continent outline */}
      <motion.path
        d="M200 50 C220 60, 240 80, 250 100 C260 120, 270 140, 280 160 C290 180, 300 200, 310 220 C320 240, 325 260, 330 280 C335 300, 340 320, 335 340 C330 360, 320 380, 310 400 C300 420, 285 435, 270 445 C255 455, 240 460, 225 465 C210 470, 195 470, 180 465 C165 460, 150 450, 140 435 C130 420, 125 400, 120 380 C115 360, 110 340, 115 320 C120 300, 125 280, 130 260 C135 240, 140 220, 150 200 C160 180, 170 160, 175 140 C180 120, 185 100, 190 80 C195 60, 200 50, 200 50 Z"
        stroke="#B87333"
        strokeWidth="3"
        fill="rgba(45, 74, 34, 0.3)"
        variants={continentVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        style={{
          filter: 'drop-shadow(0 0 10px #2D4A22)'
        }}
      />

      {/* Country regions */}
      {countries.map((country, i) => (
        <g key={country.name}>
          <motion.path
            d={country.path}
            fill={hoveredCountry === country.name ? "#40E0D0" : "#B87333"}
            stroke="#FFD700"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0 }}
            animate={animate ? { 
              opacity: 1, 
              scale: 1,
              fill: hoveredCountry === country.name ? "#40E0D0" : "#B87333"
            } : { opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 2 + (i * 0.3),
              fill: { duration: 0.3 }
            }}
            onMouseEnter={() => setHoveredCountry(country.name)}
            onMouseLeave={() => setHoveredCountry(null)}
            style={{
              cursor: 'pointer',
              filter: hoveredCountry === country.name ? 'drop-shadow(0 0 15px #40E0D0)' : 'drop-shadow(0 0 5px #B87333)'
            }}
          />
          
          {/* Data tooltip */}
          {hoveredCountry === country.name && (
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <rect
                x="50"
                y="30"
                width="300"
                height="60"
                fill="rgba(26, 27, 58, 0.9)"
                stroke="#40E0D0"
                strokeWidth="2"
                rx="10"
              />
              <text
                x="200"
                y="50"
                textAnchor="middle"
                fill="#FFD700"
                fontSize="16"
                fontWeight="bold"
              >
                {country.name}
              </text>
              <text
                x="200"
                y="70"
                textAnchor="middle"
                fill="white"
                fontSize="14"
              >
                {country.data}
              </text>
            </motion.g>
          )}
        </g>
      ))}

      {/* Glowing connection lines between countries */}
      {animate && (
        <>
          <motion.path
            d="M195 227 Q240 200 295 247"
            stroke="#FF1493"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 4 }}
            style={{ filter: 'drop-shadow(0 0 5px #FF1493)' }}
          />
          <motion.path
            d="M285 247 Q275 280 275 327"
            stroke="#FF1493"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 4.5 }}
            style={{ filter: 'drop-shadow(0 0 5px #FF1493)' }}
          />
          <motion.path
            d="M172 247 Q215 280 265 327"
            stroke="#FF1493"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 5 }}
            style={{ filter: 'drop-shadow(0 0 5px #FF1493)' }}
          />
        </>
      )}

      {/* Floating data points */}
      {[...Array(12)].map((_, i) => (
        <motion.circle
          key={i}
          cx={150 + (i * 20)}
          cy={180 + Math.sin(i) * 30}
          r="2"
          fill="#40E0D0"
          initial={{ opacity: 0 }}
          animate={animate ? {
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
            y: [0, -10, 0]
          } : { opacity: 0 }}
          transition={{
            duration: 3,
            delay: 3 + (i * 0.2),
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
      ))}
    </motion.svg>
  )
}