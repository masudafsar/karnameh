import Button from '@component/button';
import UserMenu from '@component/userMenu';
import plusIcon from '@iconify/icons-uil/plus';
import { Icon } from '@iconify/react';
import { IUserType } from '@type/user.type';
import db from 'db.json';
import React from 'react';

interface IProps {}

function AppBar({}: IProps) {
  return (
    <header className="bg-white px-4 py-3 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-h1 font-bolder">لیست سوالات</h1>
        </div>
        <div className="gap-1 flex">
          <Button onClick={() => {}} prefix={<Icon icon={plusIcon} />}>
            سوال جدید
          </Button>
          <UserMenu user={db.me} />
        </div>
      </div>
    </header>
  );
}

export default AppBar;
