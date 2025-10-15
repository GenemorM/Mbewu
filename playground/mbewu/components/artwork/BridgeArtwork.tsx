'use client'

import { motion } from 'framer-motion'

interface BridgeArtworkProps {
  className?: string
  animate?: boolean
}

export default function BridgeArtwork({ className = '', animate = true }: BridgeArtworkProps) {
  const bridgeVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.svg
      width="600"
      height="300"
      viewBox="0 0 600 300"
      className={`${className}`}
    >
      {/* Left landmass */}
      <motion.path
        d="M0 200 C50 180, 100 190, 150 200 C180 210, 200 220, 220 240 L220 300 L0 300 Z"
        fill="#2D4A22"
        stroke="#B87333"
        strokeWidth="2"
        initial={{ opacity: 0, x: -50 }}
        animate={animate ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      />

      {/* Right landmass */}
      <motion.path
        d="M380 240 C400 220, 420 210, 450 200 C500 190, 550 180, 600 200 L600 300 L380 300 Z"
        fill="#2D4A22"
        stroke="#B87333"
        strokeWidth="2"
        initial={{ opacity: 0, x: 50 }}
        animate={animate ? { opacity: 1, x: 0 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      {/* Bridge structure */}
      <motion.path
        d="M220 240 Q300 180 380 240"
        stroke="#B87333"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        variants={bridgeVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        style={{
          filter: 'drop-shadow(0 0 10px #B87333)'
        }}
      />

      {/* Bridge supports */}
      {[260, 300, 340].map((x, i) => (
        <motion.line
          key={i}
          x1={x}
          y1={240 - (Math.abs(300 - x) * 0.3)}
          x2={x}
          y2={240 - (Math.abs(300 - x) * 0.3) + 30}
          stroke="#40E0D0"
          strokeWidth="3"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={animate ? { opacity: 1, scaleY: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 2 + (i * 0.2) }}
        />
      ))}

      {/* Glowing particles traveling across bridge */}
      {[...Array(6)].map((_, i) => (
        <motion.circle
          key={i}
          r="4"
          fill="#40E0D0"
          initial={{ opacity: 0 }}
          animate={animate ? {
            opacity: [0, 1, 1, 0],
            offsetDistance: ['0%', '100%']
          } : { opacity: 0 }}
          transition={{
            duration: 4,
            delay: 3 + (i * 0.5),
            repeat: Infinity,
            repeatDelay: 3
          }}
          style={{
            offsetPath: 'path("M220 240 Q300 180 380 240")',
            filter: 'drop-shadow(0 0 8px #40E0D0)'
          }}
        />
      ))}

      {/* Connection lines emanating from bridge */}
      {[...Array(5)].map((_, i) => (
        <motion.path
          key={i}
          d={`M${300 + (i - 2) * 20} ${200 - (Math.abs(i - 2) * 10)} L${300 + (i - 2) * 40} ${150 - (Math.abs(i - 2) * 20)}`}
          stroke="#FF1493"
          strokeWidth="2"
          opacity="0.6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { 
            pathLength: 1, 
            opacity: [0, 0.6, 0],
          } : { pathLength: 0, opacity: 0 }}
          transition={{
            duration: 2,
            delay: 4 + (i * 0.3),
            repeat: Infinity,
            repeatDelay: 4
          }}
        />
      ))}
    </motion.svg>
  )
}