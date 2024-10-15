import { runApi } from "./request";

export default {
  create: (params: { workType: string }) => runApi('/v1/projects/new', params, 'post'),
  list: (params: { pageNum: number; pageSize: number; workType?: string }) => 
    runApi('/v1/users/projects/query', params, 'post'),
  getArtifacts: (params: { projectCode: string, artifactType?: string, meta?: string }) => {
    console.log('Calling getArtifacts with params:', params);
    return runApi('/v1/projects/artifacts/query', params, 'post')
      .then(response => {
        console.log('getArtifacts response:', response);
        return response;
      })
      .catch(error => {
        console.error('getArtifacts error:', error);
        throw error;
      });
  },
  queryChatHistory: (params: {
    cursor: number;
    pageSize: number;
    asc: boolean;
    projectCode: string;
  }) => {
    console.log('Calling queryChatHistory with params:', params);
    return runApi('/v1/projects/ai/chat-history/query', params, 'post')
      .then(response => {
        console.log('queryChatHistory response:', response);
        return response;
      })
      .catch(error => {
        console.error('queryChatHistory error:', error);
        throw error;
      });
  }
}
