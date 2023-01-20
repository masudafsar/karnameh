import Button from '@component/button';
import timesIcon from '@iconify/icons-uil/times';
import { Icon } from '@iconify/react';
import React, { PropsWithChildren } from 'react';

interface IProps {
  title?: string;
  open?: boolean;
  onDismiss?: () => void;
}

function Modal({ title, children, open, onDismiss }: PropsWithChildren<IProps>) {
  if (!open) return null;
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center backdrop-brightness-50">
      <div className="w-full max-w-[700px] bg-gray-lightest rounded overflow-hidden shadow">
        <div className="bg-white flex justify-between items-center py-3 px-6 shadow">
          <h2 className="text-h2 font-bold">{title}</h2>
          <Button
            variant="text"
            className="!text-black !p-2 !rounded-full"
            onClick={onDismiss}
            prefix={<Icon icon={timesIcon} />}
          />
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
