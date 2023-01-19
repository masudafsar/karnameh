import QuestionCard from '@component/questionCard';
import db from 'db.json';
import React from 'react';

interface IProps {}

function QuestionList({}: IProps) {
  return (
    <div className="flex flex-col gap-5">
      {db.questions.map(question => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
}

export default QuestionList;
