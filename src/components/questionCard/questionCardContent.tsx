import React from 'react';
interface IProps {
  body: string;
}

function QuestionCardContent({ body }: IProps) {
  return <div className="m-4">{body}</div>;
}
export default QuestionCardContent;
