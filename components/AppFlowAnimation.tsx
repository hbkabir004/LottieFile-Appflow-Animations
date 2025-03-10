"use client"

import React, { useEffect, useState } from 'react';

const AppFlowAnimation: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">      
      <div className="relative h-[700px]">
        {/* User flow items */}
        <div 
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '30px', left: '50px', transitionDelay: '0ms' }}
        >
          <img src="/api/placeholder/200/300" alt="User login" className="max-w-full h-auto" />
          <div className="absolute left-[-20px] top-[120px]">
            <div className="mb-2">User login</div>
            <div className="bg-gray-800 text-white py-1 px-4 rounded-full text-sm whitespace-nowrap">User</div>
          </div>
        </div>
        
        <div 
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '0', left: '300px', transitionDelay: '300ms' }}
        >
          <img src="/api/placeholder/150/300" alt="Search Ride" className="max-w-full h-auto" />
          <div className="text-center font-medium mt-3">Search Ride</div>
        </div>
        
        <div 
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '0', left: '550px', transitionDelay: '600ms' }}
        >
          <img src="/api/placeholder/150/300" alt="Select Ride" className="max-w-full h-auto" />
          <div className="text-center font-medium mt-3">Select Ride</div>
        </div>
        
        <div 
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '0', left: '800px', transitionDelay: '900ms' }}
        >
          <img src="/api/placeholder/200/300" alt="Pay & Rate" className="max-w-full h-auto" />
          <div className="text-center font-medium mt-3">Pay & Rate Each other</div>
        </div>
        
        {/* Driver flow items */}
        <div 
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '380px', left: '50px', transitionDelay: '1200ms' }}
        >
          <img src="/api/placeholder/200/180" alt="Driver login" className="max-w-full h-auto" />
          <div className="absolute left-[-20px] top-[80px]">
            <div className="mb-2">Driver login</div>
            <div className="bg-gray-800 text-white py-1 px-4 rounded-full text-sm whitespace-nowrap">Driver</div>
          </div>
        </div>
        
        <div 
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '380px', left: '300px', transitionDelay: '1500ms' }}
        >
          <img src="/api/placeholder/150/300" alt="Create a Ride" className="max-w-full h-auto" />
          <div className="text-center font-medium mt-3">Create a Ride</div>
        </div>
        
        <div 
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '380px', left: '550px', transitionDelay: '1800ms' }}
        >
          <img src="/api/placeholder/150/300" alt="Accept Requests" className="max-w-full h-auto" />
          <div className="text-center font-medium mt-3">Accept Requests</div>
        </div>
        
        <div 
          className={`absolute opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : ''}`}
          style={{ top: '380px', left: '800px', transitionDelay: '2100ms' }}
        >
          <img src="/api/placeholder/200/180" alt="Pickup & Drop" className="max-w-full h-auto" />
          <div className="text-center font-medium mt-3">Pickup Passengers</div>
          <div className="absolute right-[-20px] top-[40px] text-right">
            Drop Passengers
          </div>
        </div>
        
        {/* Connecting lines */}
        <div 
          className={`absolute border-t-2 border-dashed border-gray-300 opacity-0 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : ''}`}
          style={{ 
            top: '130px', 
            left: '200px', 
            width: isAnimated ? '100px' : '0',
            height: '2px',
            transitionDelay: '200ms',
            transition: 'width 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>
        
        <div 
          className={`absolute border-t-2 border-dashed border-gray-300 opacity-0 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : ''}`}
          style={{ 
            top: '130px', 
            left: '450px', 
            width: isAnimated ? '100px' : '0',
            height: '2px',
            transitionDelay: '500ms',
            transition: 'width 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>
        
        <div 
          className={`absolute border-t-2 border-dashed border-gray-300 opacity-0 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : ''}`}
          style={{ 
            top: '130px', 
            left: '700px', 
            width: isAnimated ? '100px' : '0',
            height: '2px',
            transitionDelay: '800ms',
            transition: 'width 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>
        
        <div 
          className={`absolute border-l-2 border-dashed border-gray-300 opacity-0 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : ''}`}
          style={{ 
            top: '200px', 
            left: '600px',
            width: '2px',
            height: isAnimated ? '180px' : '0',
            transitionDelay: '1100ms',
            transition: 'height 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>
        
        <div 
          className={`absolute border-t-2 border-dashed border-gray-300 opacity-0 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : ''}`}
          style={{ 
            top: '480px', 
            left: '200px', 
            width: isAnimated ? '100px' : '0',
            height: '2px',
            transitionDelay: '1400ms',
            transition: 'width 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>
        
        <div 
          className={`absolute border-t-2 border-dashed border-gray-300 opacity-0 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : ''}`}
          style={{ 
            top: '480px', 
            left: '450px', 
            width: isAnimated ? '100px' : '0',
            height: '2px',
            transitionDelay: '1700ms',
            transition: 'width 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>
        
        <div 
          className={`absolute border-t-2 border-dashed border-gray-300 opacity-0 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : ''}`}
          style={{ 
            top: '480px', 
            left: '700px', 
            width: isAnimated ? '100px' : '0',
            height: '2px',
            transitionDelay: '2000ms',
            transition: 'width 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>
        
        <div 
          className={`absolute border-t-2 border-dashed border-gray-300 opacity-0 transform origin-left-center ${isAnimated ? 'opacity-100' : ''}`}
          style={{ 
            top: '230px', 
            left: '880px', 
            width: isAnimated ? '140px' : '0',
            height: '2px',
            transform: 'rotate(45deg)',
            transitionDelay: '2300ms',
            transition: 'width 0.8s ease-out, opacity 0.3s ease-out'
          }}
        ></div>
      </div>
    </div>
  );
};

export default AppFlowAnimation;