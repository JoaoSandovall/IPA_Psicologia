import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  children: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionTitle({ 
  subtitle, 
  children, 
  align = 'left', 
  className = '' 
}: SectionTitleProps) {
  
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`${alignClasses} ${className}`}>
      <span 
        className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold text-[#4A7259] block mb-4"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        {subtitle}
      </span>
      <h2 
        className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#1A2118]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {children}
      </h2>
    </div>
  );
}