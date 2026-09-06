import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ className, variant = 'primary', size = 'md', ...props }) => {
  return (
    <button
      className={cn(
        "rounded-lg font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed",
        size === 'sm' && "px-3 py-1.5 text-sm",
        size === 'md' && "px-4 py-2.5 text-sm",
        size === 'lg' && "px-6 py-3 text-base",
        variant === 'primary' && "bg-blue-600 text-white hover:bg-blue-700",
        variant === 'dark' && "bg-slate-900 text-white hover:bg-slate-800",
        variant === 'secondary' && "bg-slate-200 text-slate-900 hover:bg-slate-300",
        variant === 'outline' && "border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-sm",
        variant === 'danger' && "bg-red-500 text-white hover:bg-red-600",
        className
      )}
      {...props}
    />
  );
};
