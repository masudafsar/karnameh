import { Icon, IconifyIcon } from '@iconify/react';
import cn from 'classnames';
import React, { PropsWithChildren } from 'react';

interface IProps {
  label?: string | number;
  labelColorClass?: string;
  icon?: IconifyIcon | string;
  iconColorClass?: string;
  className?: string;
}

function Status({ className, label, labelColorClass, icon, iconColorClass }: IProps) {
  return (
    <div className={cn(['flex', 'items-center', 'gap-1'], className)}>
      {icon && <Icon className={iconColorClass} icon={icon} />}
      {label !== undefined && (
        <span className={cn(['text-sm', 'font-bold'], labelColorClass)}>{label}</span>
      )}
    </div>
  );
}

export default Status;
