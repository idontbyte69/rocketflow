'use client'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'md',
  ...props 
}) => {
  const baseClasses = "bg-white rounded-3xl border border-gray-100 transition-all duration-300";
  const hoverClasses = hover ? "hover:scale-105 hover:shadow-xl" : "";
  
  const paddingSizes = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };
  
  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${paddingSizes[padding]} shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;