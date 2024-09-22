import { runApi } from './request';

export default {
  login: (params: any) => runApi('/login', params, 'post'),
  register: (params: any) => runApi('/v1/users/account/register', params, 'post'),
  query: (params: any) => runApi('/v1/users/projects/query', params, 'post')
}