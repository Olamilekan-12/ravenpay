import React from 'react';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  // Base classes
  let buttonClasses = 'rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variant classes
  switch (variant) {
    case 'primary':
      buttonClasses += ' bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
      break;
    case 'secondary':
      buttonClasses += ' bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500';
      break;
    case 'outline':
      buttonClasses += ' bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500';
      break;
    case 'danger':
      buttonClasses += ' bg-red-600 text-white hover:bg-red-700 focus:ring-red-500';
      break;
    default:
      buttonClasses += ' bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
  }
  
  // Size classes
  switch (size) {
    case 'small':
      buttonClasses += ' py-1 px-3 text-sm';
      break;
    case 'medium':
      buttonClasses += ' py-2 px-4 text-base';
      break;
    case 'large':
      buttonClasses += ' py-3 px-6 text-lg';
      break;
    default:
      buttonClasses += ' py-2 px-4 text-base';
  }
  
  // Width classes
  if (fullWidth) {
    buttonClasses += ' w-full';
  }
  
  // Add custom classes
  buttonClasses += ` ${className}`;
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
