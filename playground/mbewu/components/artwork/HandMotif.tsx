'use client'

import { motion } from 'framer-motion'

interface HandMotifProps {
  className?: string
  animate?: boolean
}

export default function HandMotif({ className = '', animate = true }: HandMotifProps) {
  const pathVariants = {
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

  const glowVariants = {
    initial: { filter: 'drop-shadow(0 0 5px #B87333)' },
    animate: { 
      filter: [
        'drop-shadow(0 0 5px #B87333)',
        'drop-shadow(0 0 15px #B87333)',
        'drop-shadow(0 0 25px #40E0D0)',
        'drop-shadow(0 0 15px #B87333)',
        'drop-shadow(0 0 5px #B87333)'
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.svg
      width="300"
      height="400"
      viewBox="0 0 300 400"
      className={`${className}`}
      initial="initial"
      animate={animate ? "animate" : "initial"}
      variants={glowVariants}
    >
      {/* Hand reaching upward */}
      <motion.path
        d="M150 350 C120 320, 100 280, 110 240 C115 220, 125 200, 140 185 C155 170, 175 160, 195 155 C215 150, 235 150, 250 160 C265 170, 275 185, 280 200 C285 220, 280 240, 270 255 C260 270, 245 280, 230 285 C215 290, 200 290, 185 285 C170 280, 155 270, 145 255 C135 240, 130 220, 135 200 C140 180, 150 165, 165 155 C180 145, 200 140, 220 145 C240 150, 255 165, 265 185 C275 205, 275 230, 265 250"
        stroke="#B87333"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
      />
      
      {/* Fingers */}
      <motion.path
        d="M220 145 L225 120 L230 100 L235 85 L240 75"
        stroke="#40E0D0"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        variants={pathVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        transition={{ delay: 0.5 }}
      />
      
      <motion.path
        d="M200 140 L205 115 L210 95 L215 80 L220 70"
        stroke="#40E0D0"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        variants={pathVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        transition={{ delay: 0.7 }}
      />
      
      <motion.path
        d="M180 145 L185 120 L190 100 L195 85 L200 75"
        stroke="#40E0D0"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        variants={pathVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        transition={{ delay: 0.9 }}
      />
      
      <motion.path
        d="M165 155 L170 135 L175 120 L180 110 L185 105"
        stroke="#40E0D0"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        variants={pathVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        transition={{ delay: 1.1 }}
      />

      {/* Seeds/particles floating upward */}
      {[...Array(8)].map((_, i) => (
        <motion.circle
          key={i}
          cx={180 + (i * 15)}
          cy={300 - (i * 25)}
          r="3"
          fill="#FFD700"
          initial={{ opacity: 0, y: 50 }}
          animate={animate ? {
            opacity: [0, 1, 0],
            y: [50, -100],
            x: [0, Math.sin(i) * 20]
          } : { opacity: 0 }}
          transition={{
            duration: 3,
            delay: 1.5 + (i * 0.2),
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
      ))}
    </motion.svg>
  )
}