import Avatar from '@component/avatar';
import DateTime from '@component/dateTime';
import Status from '@component/status';
import frownIcon from '@iconify/icons-uil/frown';
import smileIcon from '@iconify/icons-uil/smile';
import React from 'react';

interface IProps {
  title: string;
  createdAt: number;
  avatar: string;
  fullName: string;
  happyRateCount: number;
  sadRateCount: number;
}

function AnswerCardHeader({
  title,
  createdAt,
  avatar,
  fullName,
  happyRateCount,
  sadRateCount,
}: IProps) {
  return (
    <>
      <div className="flex items-center gap-4">
        <Avatar src={avatar} alt={fullName} variant="rounded" />
        <h2 className="text-h2 font-bold">{title}</h2>
      </div>
      <div className="flex items-center gap-5">
        <DateTime timestamp={createdAt} />
        <Status
          icon={smileIcon}
          iconColorClass="text-success"
          labelColorClass="text-gray-dark"
          label={happyRateCount}
        />
        <Status
          icon={frownIcon}
          iconColorClass="text-secondary-light"
          labelColorClass="text-gray-dark"
          label={sadRateCount}
        />
      </div>
    </>
  );
}

export default AnswerCardHeader;
