import AnswerCardContent from '@component/answerCard/answerCardContent';
import AnswerCardFooter from '@component/answerCard/answerCardFooter';
import AnswerCardHeader from '@component/answerCard/answerCardHeader';
import Card from '@component/card';
import { IAnswerType } from '@type/answer.type';
import React from 'react';

interface IProps {
  answer: IAnswerType;
}

function QuestionCard({ answer }: IProps) {
  return (
    <Card
      header={
        <AnswerCardHeader
          fullName={answer.author.fullName}
          avatar={answer.author.avatar}
          title={answer.author.fullName}
          createdAt={answer.createdAt}
          happyRateCount={answer.rates.happyCount}
          sadRateCount={answer.rates.sadCount}
        />
      }
      content={<AnswerCardContent body={answer.body} />}
      footer={<AnswerCardFooter id={answer.id} />}
    />
  );
}

export default QuestionCard;
