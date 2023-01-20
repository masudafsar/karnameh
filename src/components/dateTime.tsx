import VerticalDivider from '@component/verticalDivider';
import { convertDigitsToPersian } from '@helper/stringUtils';
import { format } from 'date-fns-jalali';
import React from 'react';

interface IProps {
  timestamp: number;
}

function DateTime({ timestamp }: IProps) {
  return (
    <div className="flex items-center gap-2">
      <DateTimeItem
        label="ساعت : "
        value={convertDigitsToPersian(format(new Date(timestamp), 'H:m'))}
      />
      <VerticalDivider />
      <DateTimeItem
        label="تاریخ : "
        value={convertDigitsToPersian(format(new Date(timestamp), 'yyyy/M/d'))}
      />
    </div>
  );
}

interface IDateTimeItemProps {
  label: string;
  value: string;
}

function DateTimeItem({ label, value }: IDateTimeItemProps) {
  return (
    <div className="text-sm">
      <span className="text-gray-dark">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}

export default DateTime;
