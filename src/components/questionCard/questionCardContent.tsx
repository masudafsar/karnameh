import React from 'react';

interface IProps {
  body: string;
}

function QuestionCardContent({ body }: IProps) {
  return <>{body}</>;
}

export default QuestionCardContent;
