import { extend, RequestOptionsInit } from 'umi-request';
import { HttpError, SystemError, PremiseError } from './error-type';
import { errorHandler } from './error-handler';

export const requestWithCookie = extend({
  prefix: '/api',
  credentials: 'include',
  errorHandler,
  // mode: 'no-cors',
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded',
  // },
});


/**
 * 请求拦截
 */
// blueRequest.interceptors.request.use(
//   (url, options) => {
//     checkUmiDefine();

//     let userInfo;
//     let token;
//     if (process.env.NODE_ENV === 'development') {
//       url = BLUE_REQUEST.mock ? `${url}` : `${BLUE_REQUEST.baseUrl}`;
//       try {
//         userInfo = JSON.parse(<string>localStorage.getItem('userInfo'));
//         token = localStorage.getItem('token');
//         if (!token) throw Error;
//       } catch (e) {
//         message.warn('登录过期或未登录，将为你提供一份临时 token 与 userInfo');
//         userInfo = {
//           userNo: 'userNo',
//           userName: 'userName',
//           roleNo: 'roleNo',
//           roleName: 'roleName',
//         };
//         token = 'token';
//       }
//     }
//     if (process.env.NODE_ENV === 'production') {
//       url = `${BLUE_REQUEST.baseUrl}`;
//       try {
//         userInfo = JSON.parse(<string>localStorage.getItem('userInfo'));
//         const token = localStorage.getItem('token');
//         if (!token) throw Error;
//       } catch (e) {
//         throw new PremiseError('登录过期或未登录');
//       }
//     }

//     // 请求方法统一为 POST
//     options.method = 'POST';

//     const httpBody: IHttpBody = {
//       sysHead: {
//         system: options?.data?.sysHead?.system || '',
//         service: options?.data?.sysHead?.service || '',
//         interface: options?.data?.sysHead?.interface || '',
//         interfaceVersion: options?.data?.sysHead?.interfaceVersion || '',
//       },
//       localHead: {
//         pageInfo: {
//           current: options?.data?.localHead?.pageInfo?.current || 1,
//           pageSize: options?.data?.localHead?.pageInfo?.pageSize || 10,
//         },
//         userInfo: {
//           userNo: userInfo?.userNo || '',
//           userName: userInfo?.userName || '',
//           roleNo: userInfo?.roleNo || '',
//           roleName: userInfo?.roleName || '',
//         },
//         deviceInfo: generateDeviceInfo(),
//       },
//       body: {
//         ...options?.data?.body,
//       },
//     };
//     return {
//       url,
//       options: {
//         ...options,
//         data: httpBody,
//       },
//     };
//   },
//   {
//     global: false,
//   },
// );


/**
 * 响应拦截
 */
requestWithCookie.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response
        .clone()
        .json()
        .then(responseJson => {
            if (responseJson.suc) {
              return responseJson;
            } else {
              throw new SystemError(responseJson.msg, responseJson.code, responseJson);
            }
        });
    } else {
      throw new HttpError('', response.status);
    }
  },
  {
    global: false,
  },
);


export const runApi = async <ApiParams extends object | URLSearchParams | undefined>(
  api: string,
  params?: ApiParams,
  method = 'get'
) => {
  const options: Partial<RequestOptionsInit> = { method };
  const type = method.toUpperCase();

  if (type === 'GET')  {
    options.params = params;
  } else if (type === 'POST') {
    options.data = params;
  }

  return requestWithCookie(api, options);
};
