import Button from '@component/button';
import React from 'react';
interface IProps {
  id: string;
}

function QuestionCardFooter({ id }: IProps) {
  return (
    <>
      <Button variant="outlined" type="link" href={`/${id}`}>
        مشاهده جزییات
      </Button>
    </>
  );
}
export default QuestionCardFooter;
