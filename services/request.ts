import { extend, RequestOptionsInit } from 'umi-request';

export const requestWithCookie = extend({
  // prefix: '/api',
  credentials: 'include',
  mode: 'no-cors'
});


export const runApi = async <ApiParams extends object | URLSearchParams | undefined>(
  api: string,
  params?: ApiParams,
  method = 'get'
) => {
  const options: Partial<RequestOptionsInit> = { method };
  const type = method.toUpperCase();

  if (type === 'GET')  {
    options.params = params;
  }else if (type === 'POST') {
    options.data = params;
  }

  return requestWithCookie(api, options);
};
