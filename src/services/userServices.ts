import BaseService from '@service/baseService';
import { IUserType } from '@type/user.type';

class UserServices extends BaseService {
  constructor() {
    super();
  }
  async getCurrentUser() {
    return this.api.get<IUserType>('/me');
  }
}

export default new UserServices();
