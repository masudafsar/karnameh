import BaseService from '@service/baseService';
import { IQuestionType } from '@type/question.type';

class QuestionService extends BaseService {
  constructor() {
    super();
  }

  async getAllQuestions() {
    return this.api.get<IQuestionType[]>('/questions');
  }

  async getQuestion(id: string) {
    return this.api.get<IQuestionType>(`/questions/${id}`);
  }
}

export default new QuestionService();
