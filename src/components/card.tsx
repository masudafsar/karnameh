import React from 'react';

interface IProps {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

function Card({ header, content, footer }: IProps) {
  return (
    <div className="bg-gray-lightest shadow rounded overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-white rounded shadow">
        {header}
      </div>
      <div className="m-4">{content}</div>
      <div className="m-4 flex justify-end gap-4">{footer}</div>
    </div>
  );
}

export default Card;
