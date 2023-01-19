import cn from 'classnames';
import React, { PropsWithChildren, ReactNode } from 'react';
import { Link, To } from 'react-router-dom';

interface IProps {
  className?: string;
  type?: 'link' | 'submit' | 'reset' | 'button' | undefined;
  variant?: 'outlined' | 'contained' | 'text';
  href?: To;
  onClick?: () => void;
  postfix?: ReactNode;
  prefix?: ReactNode;
}

function Button({
  children,
  className,
  type = 'button',
  variant = 'contained',
  href,
  onClick,
  postfix,
  prefix,
}: PropsWithChildren<IProps>) {
  const classes = React.useMemo(() => {
    const common = [
      'py-2',
      'px-5',
      'text-sm',
      'text-primary',
      'rounded-sm',
      'flex',
      'gap-2',
      'items-center',
    ];
    const outlined = [
      'outline',
      'outline-1',
      'outline-primary',
      'text-primary',
      'hover:bg-gray-light',
      'hover:text-primary-dark',
      'hover:outline-primary-dark',
    ];
    const contained = ['bg-primary', 'text-white', 'hover:bg-primary-dark'];
    const text = ['hover:bg-gray-light', 'hover:text-primary-dark'];

    if (variant === 'text') return cn(common, text, className);
    if (variant === 'contained') return cn(common, contained, className);
    if (variant === 'outlined') return cn(common, outlined, className);
  }, [variant, className]);

  function childrenWithAdditionalItems() {
    return (
      <>
        {prefix && <span className="text-[1rem]">{prefix}</span>}
        {children && <span>{children}</span>}
        {postfix && <span className="text-[1rem]">{postfix}</span>}
      </>
    );
  }

  if (type === 'link') {
    return (
      <Link className={classes} to={href || ''}>
        {childrenWithAdditionalItems()}
      </Link>
    );
  }
  return (
    <button className={classes} type={type} onClick={onClick}>
      {childrenWithAdditionalItems()}
    </button>
  );
}

export default Button;
