import Toast from '@/components/base/toast';

const codeMessage = {
  200: '成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '接口错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '接口超时。',
};

/**
 * 统一异常处理
 */
export const errorHandler = (error: Error) => {
  console.log('***', error)
  // 网络异常
  if (error.message === 'Failed to fetch') {
    Toast.notify({
      type: 'error',
      message: error.message || 'Network exception',
    });
    // 阻断执行，并将错误信息传递下去
    return Promise.reject(error);
  }

  // HTTP 错误
  if (error.name === 'HttpError') {
    Toast.notify({
      type: 'error',
      message: error.message || 'HttpError',
    });
    return Promise.reject(error);
  }

  // 系统错误
  if (error.name === 'SystemError') {
    Toast.notify({
      type: 'error',
      message: error.message || 'SystemError',
    });
    return Promise.reject(error);
  }

  // 前置错误
  if (error.name === 'PremiseError') {
    Toast.notify({
      type: 'error',
      message: error.message || 'PremiseError',
    });
    return Promise.reject(error);
  }

  Toast.notify({
    type: 'error',
    message: error.message || 'error',
  });
  return Promise.reject(error);
};
