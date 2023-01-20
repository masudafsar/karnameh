import Button from '@component/button';
import frownIcon from '@iconify/icons-uil/frown';
import smileIcon from '@iconify/icons-uil/smile';
import { Icon } from '@iconify/react';
import React from 'react';

interface IProps {
  id: string;
}

function AnswerCardFooter({ id }: IProps) {
  return (
    <>
      <Button
        variant="outlined"
        type="button"
        className="!border-gray-light text-success hover:!text-success"
        prefix={<Icon icon={smileIcon} />}
        onClick={() => {}}
      >
        پاسخ خوب بود
      </Button>
      <Button
        variant="outlined"
        type="button"
        className="!border-gray-light text-error hover:!text-error"
        prefix={<Icon icon={frownIcon} />}
        onClick={() => {}}
      >
        پاسخ خوب نبود
      </Button>
    </>
  );
}

export default AnswerCardFooter;
