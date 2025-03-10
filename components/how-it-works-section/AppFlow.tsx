"use client"

import { FlowItemProps } from "@/types/types"
import type React from "react"
import { useEffect, useState } from "react"
import { ConnectingLine } from "./ConnectingLine"
import { FlowItem } from "./FlowItem"

interface AppFlowProps {
  title: string
  subtitle: string
  userFlowItems: FlowItemProps[]
  driverFlowItems: FlowItemProps[]
}

export const AppFlow: React.FC<AppFlowProps> = ({ title, subtitle, userFlowItems, driverFlowItems }) => {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12 md:mb-16">
        <span className="block uppercase tracking-wide text-sm text-gray-500 mb-2">{subtitle}</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h1>
      </div>

      <div className="relative min-h-[700px] md:min-h-[800px]">
        {/* User flow items */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {userFlowItems.map((item, index) => (
            <FlowItem key={item.id} {...item} isAnimated={isAnimated} delay={index * 0.3} />
          ))}
        </div>

        {/* Driver flow items */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {driverFlowItems.map((item, index) => (
            <FlowItem key={item.id} {...item} isAnimated={isAnimated} delay={(index + 4) * 0.3} />
          ))}
        </div>

        {/* Connecting lines */}
        <ConnectingLine
          isAnimated={isAnimated}
          delay={0.2}
          className="hidden md:block top-[130px] left-[200px] w-[100px]"
        />
        <ConnectingLine
          isAnimated={isAnimated}
          delay={0.5}
          className="hidden md:block top-[130px] left-[450px] w-[100px]"
        />
        <ConnectingLine
          isAnimated={isAnimated}
          delay={0.8}
          className="hidden md:block top-[130px] left-[700px] w-[100px]"
        />
        <ConnectingLine
          isAnimated={isAnimated}
          delay={1.1}
          className="hidden md:block top-[200px] left-[600px] h-[180px]"
          vertical
        />
        <ConnectingLine
          isAnimated={isAnimated}
          delay={1.4}
          className="hidden md:block top-[480px] left-[200px] w-[100px]"
        />
        <ConnectingLine
          isAnimated={isAnimated}
          delay={1.7}
          className="hidden md:block top-[480px] left-[450px] w-[100px]"
        />
        <ConnectingLine
          isAnimated={isAnimated}
          delay={2.0}
          className="hidden md:block top-[480px] left-[700px] w-[100px]"
        />
        <ConnectingLine
          isAnimated={isAnimated}
          delay={2.3}
          className="hidden md:block top-[230px] left-[880px] w-[140px] rotate-45"
        />
      </div>
    </div>
  )
}

