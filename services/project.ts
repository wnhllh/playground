import { runApi } from "./request";

export default {
  create: (params: any) => runApi('https://api-dev.aictopusde.com/v1/users/projects/query', params, 'post'),
  list: (params: any) => runApi('https://api-dev.aictopusde.com/v1/users/projects/query', params, 'post')
}