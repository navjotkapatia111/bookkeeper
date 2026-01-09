import React from 'react'
const LoadingSpinner = ({ size = "md", color = "blue" }) => {
    const sizeClasses = {
      sm: "h-4 w-4 border-2",
      md: "h-8 w-8 border-4",
      lg: "h-12 w-12 border-4",
    };
  
    const colorClasses = {
      blue: "border-blue-500",
      white: "border-white",
      gray: "border-gray-500",
    };
  
    return (
      <div className="flex justify-center items-center min-w-screen  my-10">
        <div
          className={`
            animate-spin rounded-full
            border-t-transparent
            ${sizeClasses[size]}
            ${colorClasses[color]}
          `}
        />
      </div>
    );
  };
  
  export default LoadingSpinner;
  