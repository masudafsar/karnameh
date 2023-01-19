import { IAnswerType } from '@type/answer.type';
import { IUserType } from '@type/user.type';

export interface IQuestionType {
  id: string;
  title: string;
  body: string;
  createdAt: number;
  author: IUserType;
  answers: IAnswerType[];
}
