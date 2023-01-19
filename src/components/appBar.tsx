import React from 'react';

interface IProps {}

function AppBar({}: IProps) {
  return (
    <header className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-h1 font-bolder">لیست سوالات</h1>
        </div>
        <div>LEFT-SIDE</div>
      </div>
    </header>
  );
}

export default AppBar;
