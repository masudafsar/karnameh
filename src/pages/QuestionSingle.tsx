import AnswerCard from '@component/answerCard';
import Button from '@component/button';
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
      <form
        onSubmit={e => {
          e.preventDefault();
          alert('SUBMITTED');
        }}
      >
        <h3 className="text-h1 font-bolder mt-5 mb-4">پاسخ خود را ثبت کنید</h3>
        <div className="mb-8">
          <label className="flex flex-col">
            <span className="text-sm font-bold mb-2">پاسخ خود را بنویسید</span>
            <textarea
              rows={8}
              placeholder="متن پاسخ"
              className="py-3 px-4 mb-2 resize-y bg-white border border-gray-light rounded-sm"
            />
          </label>
          <p className="text-sm text-error">متن پاسخ الزامی می‌باشد</p>
        </div>
        <Button variant="contained" type="submit">
          ارسال پاسخ
        </Button>
      </form>
    </>
  );
}

export default QuestionSingle;
