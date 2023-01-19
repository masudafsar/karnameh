import cn from 'classnames';
import React from 'react';

interface IProps {
  src?: string;
  alt?: string;
  className?: string;
  variant?: 'circle' | 'rounded' | 'rectangle';
}

function Avatar({ src, alt, className, variant = 'circle' }: IProps) {
  const classes = React.useMemo(() => {
    const common = ['w-8', 'h-8', 'overflow-hidden'];
    const circle = ['rounded-full'];
    const rounded = ['rounded'];
    const rectangle = [''];

    if (variant === 'rectangle') return cn(common, rectangle, className);
    if (variant === 'rounded') return cn(common, rounded, className);
    if (variant === 'circle') return cn(common, circle, className);
  }, [variant, className]);

  return (
    <div className={classes}>
      <img className="w-full h-full object-cover" src={src} alt={alt} />
    </div>
  );
}

export default Avatar;
