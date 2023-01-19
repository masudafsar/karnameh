import Avatar from '@component/avatar';
import angleDown from '@iconify/icons-uil/angle-down';
import { Icon } from '@iconify/react';
import { IUserType } from '@type/user.type';
import React from 'react';

interface IProps {
  user: IUserType;
}

function UserMenu({ user }: IProps) {
  return (
    <div className="flex items-center gap-3 mr-10">
      <Avatar
        variant="circle"
        src={user.avatar}
        alt={user.fullName}
        className="w-11 h-11 border border-gray-light"
      />
      <span>{user.fullName}</span>
      <Icon icon={angleDown} />
    </div>
  );
}

export default UserMenu;
