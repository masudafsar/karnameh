import AnswerCard from '@component/answerCard';
import QuestionCard from '@component/questionCard';
import db from 'db.json';
import React from 'react';
import { useParams } from 'react-router-dom';

interface IProps {}

function QuestionSingle({}: IProps) {
  const { id } = useParams();
  const question = db.questions.find(item => item.id === id);

  return (
    <>
      {question && <QuestionCard question={question} disableAction />}
      {question && question.answers && (
        <>
          <h3 className="text-h1 font-bolder mt-5 mb-4">پاسخ‌ها</h3>
          <div className="flex flex-col gap-5">
            {question.answers.map(answer => (
              <AnswerCard key={answer.id} answer={answer} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default QuestionSingle;
