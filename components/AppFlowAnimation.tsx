"use client"

import React, { useEffect, useState } from 'react';

interface AppFlowAnimationProps {
  animationData: any;
  className?: string;
}

const AppFlowAnimation: React.FC<AppFlowAnimationProps> = ({ animationData, className }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Desktop layout - only visible on medium and larger screens */}
      <div className="relative hidden md:block h-[500px] lg:h-[700px]">
        {/* User flow items */}
        <div
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '30px', left: '5%', transitionDelay: '0ms' }}
        >
          <div className="relative">
            <img src="/api/placeholder/200/300" alt="User login" className="max-w-full h-auto w-32 lg:w-auto" />
            <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 font-medium text-xs sm:text-sm">
              200x300
            </div>
          </div>
          <div className="absolute left-[-20px] top-[120px]">
            {/* <div className="mb-2 text-sm lg:text-base">User login</div> */}
            <div className="bg-gray-800 text-white py-1 px-3 lg:px-4 rounded-full text-xs lg:text-sm whitespace-nowrap">User</div>
          </div>
        </div>

        <div
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '0', left: '25%', transitionDelay: '300ms' }}
        >
          <div className="relative">
            <img src="/api/placeholder/150/300" alt="Search Ride" className="max-w-full h-auto w-24 lg:w-auto" />
            <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 font-medium text-xs sm:text-sm">
              150x300
            </div>
          </div>
          {/* <div className="text-center font-medium mt-3 text-sm lg:text-base">Search Ride</div> */}
        </div>

        <div
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '0', left: '50%', transitionDelay: '600ms' }}
        >
          <div className="relative">
            <img src="/api/placeholder/150/300" alt="Select Ride" className="max-w-full h-auto w-24 lg:w-auto" />
            <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 font-medium text-xs sm:text-sm">
              150x300
            </div>
          </div>
          {/* <div className="text-center font-medium mt-3 text-sm lg:text-base">Select Ride</div> */}
        </div>

        <div
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '0', left: '75%', transitionDelay: '900ms' }}
        >
          <div className="relative">
            <img src="/api/placeholder/200/300" alt="Pay & Rate" className="max-w-full h-auto w-32 lg:w-auto" />
            <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 font-medium text-xs sm:text-sm">
              200x300
            </div>
          </div>
          {/* <div className="text-center font-medium mt-3 text-sm lg:text-base">Pay & Rate Each other</div> */}
        </div>

        {/* Driver flow items */}
        <div
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '60%', left: '5%', transitionDelay: '1200ms' }}
        >
          <div className="relative">
            <img src="/api/placeholder/200/180" alt="Driver login" className="max-w-full h-auto w-32 lg:w-auto pb-10" />
            <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 font-medium text-xs sm:text-sm">
              200x180
            </div>
          </div>
          <div className="absolute left-[-20px] top-[50%]">
            {/* <div className="mb-2 text-sm lg:text-base">Driver login</div> */}
            <div className="bg-gray-800 text-white py-1 px-3 lg:px-4 rounded-full text-xs lg:text-sm whitespace-nowrap">Driver</div>
          </div>
        </div>

        <div
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '60%', left: '25%', transitionDelay: '1500ms' }}
        >
          <div className="relative">
            <img src="/api/placeholder/150/300" alt="Create a Ride" className="max-w-full h-auto w-24 lg:w-auto" />
            <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 font-medium text-xs sm:text-sm">
              150x300
            </div>
          </div>
          {/* <div className="text-center font-medium mt-3 text-sm lg:text-base">Create a Ride</div> */}
        </div>

        <div
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '60%', left: '50%', transitionDelay: '1800ms' }}
        >
          <div className="relative">
            <img src="/api/placeholder/150/300" alt="Accept Requests" className="max-w-full h-auto w-24 lg:w-auto" />
            <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 font-medium text-xs sm:text-sm">
              150x300
            </div>
          </div>
          {/* <div className="text-center font-medium mt-3 text-sm lg:text-base">Accept Requests</div> */}
        </div>

        <div
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '60%', left: '75%', transitionDelay: '2100ms' }}
        >
          <div className="relative">
            <img src="/api/placeholder/200/180" alt="Pickup & Drop" className="max-w-full h-auto w-32 lg:w-auto" />
            <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 font-medium text-xs sm:text-sm">
              200x180
            </div>
          </div>
          {/* <div className="text-center font-medium mt-3 text-sm lg:text-base">Pickup Passengers</div> */}
          {/* <div className="absolute right-[-20px] top-[30%] text-right text-sm lg:text-base">
            Drop Passengers
          </div> */}
        </div>

        {/* Connecting lines - using percentages for responsive layout */}
        <div
          className={`absolute border-t-2 border-dashed border-gray-300 opacity-0 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : ''}`}
          style={{
            top: '20%',
            left: '15%',
            width: isAnimated ? '10%' : '0',
            height: '2px',
            transitionDelay: '200ms',
            transition: 'width 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>

        <div
          className={`absolute border-t-2 border-dashed border-gray-300 opacity-0 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : ''}`}
          style={{
            top: '20%',
            left: '35%',
            width: isAnimated ? '15%' : '0',
            height: '2px',
            transitionDelay: '500ms',
            transition: 'width 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>

        <div
          className={`absolute border-t-2 border-dashed border-gray-300 opacity-0 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : ''}`}
          style={{
            top: '20%',
            left: '60%',
            width: isAnimated ? '15%' : '0',
            height: '2px',
            transitionDelay: '800ms',
            transition: 'width 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>

        <div
          className={`absolute border-l-2 border-dashed border-gray-300 opacity-0 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : ''}`}
          style={{
            top: '25%',
            left: '50%',
            width: '2px',
            height: isAnimated ? '35%' : '0',
            transitionDelay: '1100ms',
            transition: 'height 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>

        <div
          className={`absolute border-t-2 border-dashed border-gray-300 opacity-0 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : ''}`}
          style={{
            top: '70%',
            left: '15%',
            width: isAnimated ? '10%' : '0',
            height: '2px',
            transitionDelay: '1400ms',
            transition: 'width 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>

        <div
          className={`absolute border-t-2 border-dashed border-gray-300 opacity-0 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : ''}`}
          style={{
            top: '70%',
            left: '35%',
            width: isAnimated ? '15%' : '0',
            height: '2px',
            transitionDelay: '1700ms',
            transition: 'width 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>

        <div
          className={`absolute border-t-2 border-dashed border-gray-300 opacity-0 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : ''}`}
          style={{
            top: '70%',
            left: '60%',
            width: isAnimated ? '15%' : '0',
            height: '2px',
            transitionDelay: '2000ms',
            transition: 'width 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>

        <div
          className={`absolute border-t-2 border-dashed border-gray-300 opacity-0 transform origin-left-center ${isAnimated ? 'opacity-100' : ''}`}
          style={{
            top: '40%',
            left: '80%',
            width: isAnimated ? '12%' : '0',
            height: '2px',
            transform: 'rotate(45deg)',
            transitionDelay: '2300ms',
            transition: 'width 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>
      </div>

      {/* Mobile layout - sequence of cards instead of positional layout */}
      <div className="md:hidden">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">User Flow</h2>
        <div className="space-y-6">
          {/* User flow cards */}
          <div className={`rounded-lg bg-white shadow-md p-4 transform transition-all duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: '0ms' }}>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 relative">
                <img src="/api/placeholder/200/300" alt="User login" className="w-16 h-auto rounded" />
                <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 text-xs">
                  200x300
                </div>
              </div>
              <div>
                {/* <div className="font-medium">User login</div> */}
                <div className="mt-1 inline-block bg-gray-800 text-white py-1 px-3 rounded-full text-xs">User</div>
              </div>
            </div>
          </div>

          <div className={`rounded-lg bg-white shadow-md p-4 transform transition-all duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 relative">
                <img src="/api/placeholder/150/300" alt="Search Ride" className="w-16 h-auto rounded" />
                <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 text-xs">
                  150x300
                </div>
              </div>
              <div>
                {/* <div className="font-medium">Search Ride</div> */}
              </div>
            </div>
          </div>

          <div className={`rounded-lg bg-white shadow-md p-4 transform transition-all duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: '400ms' }}>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 relative">
                <img src="/api/placeholder/150/300" alt="Select Ride" className="w-16 h-auto rounded" />
                <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 text-xs">
                  150x300
                </div>
              </div>
              <div>
                {/* <div className="font-medium">Select Ride</div> */}
              </div>
            </div>
          </div>

          <div className={`rounded-lg bg-white shadow-md p-4 transform transition-all duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: '600ms' }}>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 relative">
                <img src="/api/placeholder/200/300" alt="Pay & Rate" className="w-16 h-auto rounded" />
                <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 text-xs">
                  200x300
                </div>
              </div>
              <div>
                {/* <div className="font-medium">Pay & Rate Each other</div> */}
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-700">Driver Flow</h2>
        <div className="space-y-6">
          {/* Driver flow cards */}
          <div className={`rounded-lg bg-white shadow-md p-4 transform transition-all duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: '800ms' }}>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 relative">
                <img src="/api/placeholder/200/180" alt="Driver login" className="w-16 h-auto rounded" />
                <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 text-xs">
                  200x180
                </div>
              </div>
              <div>
                {/* <div className="font-medium">Driver login</div> */}
                <div className="mt-1 inline-block bg-gray-800 text-white py-1 px-3 rounded-full text-xs">Driver</div>
              </div>
            </div>
          </div>

          <div className={`rounded-lg bg-white shadow-md p-4 transform transition-all duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: '1000ms' }}>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 relative">
                <img src="/api/placeholder/150/300" alt="Create a Ride" className="w-16 h-auto rounded" />
                <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 text-xs">
                  150x300
                </div>
              </div>
              <div>
                {/* <div className="font-medium">Create a Ride</div> */}
              </div>
            </div>
          </div>

          <div className={`rounded-lg bg-white shadow-md p-4 transform transition-all duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: '1200ms' }}>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 relative">
                <img src="/api/placeholder/150/300" alt="Accept Requests" className="w-16 h-auto rounded" />
                <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 text-xs">
                  150x300
                </div>
              </div>
              <div>
                {/* <div className="font-medium">Accept Requests</div> */}
              </div>
            </div>
          </div>

          <div className={`rounded-lg bg-white shadow-md p-4 transform transition-all duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: '1400ms' }}>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 relative">
                <img src="/api/placeholder/200/180" alt="Pickup & Drop" className="w-16 h-auto rounded" />
                <div className="mt-20 absolute inset-0 flex items-center justify-center text-gray-700 text-xs">
                  200x180
                </div>
              </div>
              <div>
                {/* <div className="font-medium">Pickup & Drop Passengers</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFlowAnimation;