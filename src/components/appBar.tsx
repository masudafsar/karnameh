import Button from '@component/button';
import UserMenu from '@component/userMenu';
import plusIcon from '@iconify/icons-uil/plus';
import { Icon } from '@iconify/react';
import React from 'react';

interface IProps {}

function AppBar({}: IProps) {
  return (
    <header className="bg-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-h1 font-bolder">لیست سوالات</h1>
        </div>
        <div className="gap-1 flex">
          <Button onClick={() => {}} prefix={<Icon icon={plusIcon} />}>
            سوال جدید
          </Button>
          <UserMenu
            user={{
              id: '5eee587a-f00c-4541-99bf-dbbeff63f276',
              fullName: 'مسعود افسر',
              avatar: '/avatars/5eee587a-f00c-4541-99bf-dbbeff63f276.png',
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default AppBar;
