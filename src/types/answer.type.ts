import { IUserType } from '@type/user.type';

export interface IAnswerType {
  id: string;
  body: string;
  createdAt: number;
  author: IUserType;
  rates: {
    happyCount: number;
    sadCount: number;
  };
}
