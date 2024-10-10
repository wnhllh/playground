import { runApi } from './request';

export default {
  login: (params: any) => runApi(`/login?username=${params.username}&password=${params.password}`, params, 'post'),
  register: (params: any) => runApi('/v1/users/account/register', params, 'post'),
  query: (params: any) => runApi('/v1/users/projects/query', params, 'post')
}