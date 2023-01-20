import React from 'react';

interface IProps {
  body: string;
}

function AnswerCardContent({ body }: IProps) {
  return <>{body}</>;
}

export default AnswerCardContent;
