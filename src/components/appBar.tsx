import Button from '@component/button';
import plusIcon from '@iconify/icons-uil/plus';
import { Icon } from '@iconify/react';
import React from 'react';

interface IProps {}

function AppBar({}: IProps) {
  return (
    <header className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-h1 font-bolder">لیست سوالات</h1>
        </div>
        <div className="gap-1 flex">
          <Button onClick={() => {}} prefix={<Icon icon={plusIcon} />}>
            سوال جدید
          </Button>
        </div>
      </div>
    </header>
  );
}

export default AppBar;
