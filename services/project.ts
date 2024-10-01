import { runApi } from "./request";

export default {
  create: (params: any) => runApi('/v1/projects/new', params, 'post'),
  list: (params: any) => runApi('/v1/users/projects/query', params, 'post')
}