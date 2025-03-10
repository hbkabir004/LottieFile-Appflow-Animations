"use client"

import { motion } from "framer-motion"
import type React from "react"

interface ConnectingLineProps {
  isAnimated: boolean
  delay: number
  className?: string
  vertical?: boolean
}

export const ConnectingLine: React.FC<ConnectingLineProps> = ({ isAnimated, delay, className, vertical = false }) => {
  return (
    <motion.div
      className={`absolute border-t-2 border-dashed border-gray-300 ${className} ${vertical ? "border-l-2 border-t-0" : ""}`}
      initial={{ opacity: 0, [vertical ? "height" : "width"]: 0 }}
      animate={isAnimated ? { opacity: 1, [vertical ? "height" : "width"]: "100%" } : {}}
      transition={{ duration: 0.8, delay }}
    />
  )
}

