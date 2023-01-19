import React from 'react';
import { useParams } from 'react-router-dom';

interface IProps {}

function QuestionSingle({}: IProps) {
  const { id } = useParams();

  return <>صفحه سوال: {id}</>;
}

export default QuestionSingle;
