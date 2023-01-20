import Card from '@component/card';
import QuestionCardContent from '@component/questionCard/questionCardContent';
import QuestionCardFooter from '@component/questionCard/questionCardFooter';
import QuestionCardHeader from '@component/questionCard/questionCardHeader';
import { IQuestionType } from '@type/question.type';
import React from 'react';

interface IProps {
  question: IQuestionType;
  disableAction?: boolean;
}

function QuestionCard({ question, disableAction = false }: IProps) {
  return (
    <Card
      header={
        <QuestionCardHeader
          fullName={question.author.fullName}
          avatar={question.author.avatar}
          title={question.title}
          createdAt={question.createdAt}
          answersCount={question.answers.length}
        />
      }
      content={<QuestionCardContent body={question.body} />}
      footer={!disableAction && <QuestionCardFooter id={question.id} />}
    />
  );
}

export default QuestionCard;
