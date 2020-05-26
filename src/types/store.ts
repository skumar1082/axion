import { ILogin } from './login';
import { IDashboard } from './dashboard';

export interface IStore {
  user: ILogin;
  dashboard: IDashboard;
}
