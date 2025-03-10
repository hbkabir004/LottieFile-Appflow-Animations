"use client";

import { motion } from "framer-motion";
import { Car, MapPin, Phone, Star, User } from "lucide-react";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    title: "User login",
    icon: <User className="w-6 h-6" />,
    position: "top",
    delay: 0,
  },
  {
    title: "Search Ride",
    icon: <MapPin className="w-6 h-6" />,
    position: "top",
    delay: 0.2,
  },
  {
    title: "Select Ride",
    icon: <Car className="w-6 h-6" />,
    position: "top",
    delay: 0.4,
  },
  {
    title: "Pay & Rate",
    icon: <Star className="w-6 h-6" />,
    position: "top",
    delay: 0.6,
  },
  {
    title: "Driver login",
    icon: <User className="w-6 h-6" />,
    position: "bottom",
    delay: 0.2,
  },
  {
    title: "Accept Requests",
    icon: <Phone className="w-6 h-6" />,
    position: "bottom",
    delay: 0.4,
  },
  {
    title: "Pickup Passengers",
    icon: <MapPin className="w-6 h-6" />,
    position: "bottom",
    delay: 0.6,
  },
  {
    title: "Drop Passengers",
    icon: <MapPin className="w-6 h-6" />,
    position: "bottom",
    delay: 0.8,
  },
];

const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-64 h-[500px] border-8 border-gray-800 rounded-[3rem] overflow-hidden bg-white">
    <div className="absolute top-0 w-full h-6 bg-gray-800">
      <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full" />
    </div>
    {children}
  </div>
);

export function PhoneFrameAppFlow() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            How Vroom Works?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Your ride-sharing journey made simple
          </motion.p>
        </div>

        <div ref={ref} className="relative">
          {/* Connection Lines */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M 200,100 L 400,100 L 600,100 L 800,100 M 200,400 L 400,400 L 600,400 L 800,400"
              stroke="#22c55e"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>

          <div className="grid grid-cols-4 gap-8">
            {steps.slice(0, 4).map((step, index) => (
              <motion.div
                key={`top-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: step.delay }}
                className="flex flex-col items-center"
              >
                <PhoneFrame>
                  <div className="flex items-center justify-center h-full bg-gray-50">
                    <div className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </PhoneFrame>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-8 mt-16">
            {steps.slice(4).map((step, index) => (
              <motion.div
                key={`bottom-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: step.delay }}
                className="flex flex-col items-center"
              >
                <PhoneFrame>
                  <div className="flex items-center justify-center h-full bg-gray-50">
                    <div className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </PhoneFrame>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}