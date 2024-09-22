import { runApi } from "./request";

export default {
  query: (params: any) => runApi('/v1/users/projects/query', params, 'post'),
  list: (params: any) => runApi('/v1/users/projects/query', params, 'post')
}