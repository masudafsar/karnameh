import QuestionCard from '@component/questionCard';
import QuestionService from '@service/questionService';
import { IQuestionType } from '@type/question.type';
import React from 'react';

interface IProps {}

function QuestionList({}: IProps) {
  const [questions, setQuestions] = React.useState<IQuestionType[]>([]);

  async function loadAllQuestions() {
    const questionsResp = await QuestionService.getAllQuestions();
    setQuestions(questionsResp.data);
  }

  React.useEffect(() => {
    loadAllQuestions();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {questions.map(question => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  );
}

export default QuestionList;
