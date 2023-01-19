import Avatar from '@component/avatar';
import commentLines from '@iconify/icons-uil/comment-lines';
import { Icon } from '@iconify/react';
import { format } from 'date-fns-jalali';
import React from 'react';

interface IProps {
  title: string;
  createdAt: number;
  avatar: string;
  fullName: string;
  answersCount: number;
}

function QuestionCardHeader({
  title,
  createdAt,
  avatar,
  fullName,
  answersCount,
}: IProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white rounded shadow">
      <div className="flex items-center gap-4">
        <Avatar src={avatar} alt={fullName} variant="rounded" />
        <h2 className="text-h2 font-bold">{title}</h2>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <div className="text-sm">
            <span className="text-gray-dark">ساعت : </span>
            <span className="font-bold">{format(new Date(createdAt), 'H:m')}</span>
          </div>
          <div className="text-sm border-l border-secondary-light h-full w-0 overflow-hidden">
            &nbsp;
          </div>
          <div className="text-sm">
            <span className="text-gray-dark">تاریخ : </span>
            <span className="font-bold">{format(new Date(createdAt), 'yyyy/M/d')}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Icon className="text-secondary-light" icon={commentLines} />
          <span className="text-sm text-gray-dark font-bold">{answersCount}</span>
        </div>
      </div>
    </div>
  );
}

export default QuestionCardHeader;
