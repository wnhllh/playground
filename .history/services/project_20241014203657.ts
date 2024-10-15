import { runApi } from "./request";

export default {
  create: (params: { workType: string }) => runApi('/v1/projects/new', params, 'post'),
  list: (params: { pageNum: number; pageSize: number; workType?: string }) => 
    runApi('/v1/users/projects/query', params, 'post')
}
