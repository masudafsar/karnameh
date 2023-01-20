import Avatar from '@component/avatar';
import DateTime from '@component/dateTime';
import Status from '@component/status';
import commentLines from '@iconify/icons-uil/comment-lines';
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
    <div className="flex items-center justify-between px-4 py-3 bg-white rounded shadow">
      <div className="flex items-center gap-4">
        <Avatar src={avatar} alt={fullName} variant="rounded" />
        <h2 className="text-h2 font-bold">{title}</h2>
      </div>
      <div className="flex items-center gap-5">
        <DateTime timestamp={createdAt} />
        <Status
          icon={commentLines}
          iconColorClass="text-secondary-light"
          labelColorClass="text-gray-dark"
          label={answersCount}
        />
      </div>
    </div>
  );
}

export default QuestionCardHeader;
