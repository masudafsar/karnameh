import QuestionCardContent from '@component/questionCard/questionCardContent';
import QuestionCardFooter from '@component/questionCard/questionCardFooter';
import QuestionCardHeader from '@component/questionCard/questionCardHeader';
import { IQuestionType } from '@type/question.type';
import React from 'react';

interface IProps {
  question: IQuestionType;
}

function QuestionCard({ question }: IProps) {
  return (
    <div className="bg-gray-lightest shadow rounded overflow-hidden">
      <QuestionCardHeader
        fullName={question.author.fullName}
        avatar={question.author.avatar}
        title={question.title}
        createdAt={question.createdAt}
        answersCount={question.answers.length}
      />
      <QuestionCardContent body={question.body} />
      <QuestionCardFooter id={question.id} />
    </div>
  );
}

export default QuestionCard;
