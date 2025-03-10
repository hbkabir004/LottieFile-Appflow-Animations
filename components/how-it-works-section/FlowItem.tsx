"use client"

import { FlowItemProps } from "@/types/types"
import { motion } from "framer-motion"
import type React from "react"

export const FlowItem: React.FC<FlowItemProps> = ({ id, title, image, badge, isAnimated, delay }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={isAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <img src={image || "/placeholder.svg"} alt={title} className="w-full h-auto rounded-lg shadow-md" />
      <div className="mt-3 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {badge && (
          <span className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm mt-2">{badge}</span>
        )}
      </div>
    </motion.div>
  )
}

