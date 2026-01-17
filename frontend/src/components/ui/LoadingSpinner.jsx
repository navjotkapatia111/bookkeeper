import React from 'react'
const LoadingSpinner = ({ size = "md", color = "blue", table = false }) => {
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
  
    const spinner = (
        <div
          className={`
            animate-spin rounded-full
            border-t-transparent
            ${sizeClasses[size]}
            ${colorClasses[color]}
          `}
        />
    )

    if (table) {
      return (
        <tr>
          <td colSpan={6} className="py-10">
            <div className="flex justify-center items-center">
              {spinner}
            </div>
          </td>
        </tr>
      );
    }
    return (
      <div className="flex justify-center items-center min-w-screen my-10">
        {spinner}
      </div>
    )
  }
  
  export default LoadingSpinner;
  