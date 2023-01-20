import cn from 'classnames';
import React from 'react';

interface IProps {
  className?: string;
}

function VerticalDivider({ className }: IProps) {
  return (
    <div
      className={cn(
        [
          'text-sm',
          'border-l',
          'border-secondary-light',
          'h-full',
          'w-0',
          'overflow-hidden',
        ],
        className,
      )}
    >
      &nbsp;
    </div>
  );
}

export default VerticalDivider;
