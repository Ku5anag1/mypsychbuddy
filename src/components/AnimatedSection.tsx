
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
  threshold?: number;
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  const getDirectionClass = () => {
    if (!isVisible) return 'opacity-0';
    return 'opacity-100';
  };

  const getTransformClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translate-y-10';
        case 'down':
          return '-translate-y-10';
        case 'left':
          return 'translate-x-10';
        case 'right':
          return '-translate-x-10';
        default:
          return '';
      }
    }
    return 'translate-y-0 translate-x-0';
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-in-out',
        getDirectionClass(),
        getTransformClass(),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
