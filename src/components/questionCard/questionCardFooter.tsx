import Button from '@component/button';
import React from 'react';
interface IProps {
  id: string;
}

function QuestionCardFooter({ id }: IProps) {
  return (
    <div className="m-4 flex justify-end">
      <Button variant="outlined" type="link" href={`/${id}`}>
        مشاهده جزییات
      </Button>
    </div>
  );
}
export default QuestionCardFooter;
