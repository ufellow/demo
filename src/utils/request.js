// /**
//  * request 网络请求工具
//  * 更详细的api文档: https://bigfish.alipay.com/doc/api#request
//  */
// import { extend } from 'umi-request';
// import { notification, Modal, message } from 'antd';
// import router from 'umi/router';
// import { getToken, removeToken } from '@/utils/cookies';
// import cloneDeep from 'lodash/cloneDeep';
// import sysConfig from '@/sysConfig';

// const codeMessage = {
//     200: '服务器成功返回请求的数据。',
//     201: '新建或修改数据成功。',
//     202: '一个请求已经进入后台排队（异步任务）。',
//     204: '删除数据成功。',
//     400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//     401: '用户没有权限（令牌、用户名、密码错误）。',
//     403: '用户得到授权，但是访问是被禁止的。',
//     404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//     406: '请求的格式不可得。',
//     410: '请求的资源被永久删除，且不会再得到的。',
//     422: '当创建一个对象时，发生一个验证错误。',
//     500: '服务器发生错误，请检查服务器。',
//     502: '网关错误。',
//     503: '服务不可用，服务器暂时过载或维护。',
//     504: '网关超时。',
// };

// /**
//  * 异常处理程序
//  */
// const errorHandler = error => {
//     console.log(error);
//     const { response = {} } = error;
//     const errortext = codeMessage[response.status] || response.statusText;
//     const { status, url } = response;
//     if (status === 401) {
//         // @HACK
//         /* eslint-disable no-underscore-dangle */
//         window.g_app._store.dispatch({
//             type: 'login/logout',
//         });
//         return;
//     }
//     notification.error({
//         message: `请求错误 ${status}: ${url}`,
//         description: errortext,
//     });
//     if (error) {
//         // removeToken();
//     }
//     // environment should not be used
//     if (status === 403) {
//         router.push('/403');
//         return;
//     }
//     if (status <= 504 && status >= 500) {
//         router.push('/500');
//         return;
//     }
//     if (status >= 404 && status < 422) {
//         router.push('/404');
//     }
// };

// /**
//  * 配置request请求时的默认参数
//  */
// const request = extend({
//     errorHandler, // 默认错误处理
//     timeout: 10000,
//     credentials: 'include', // 默认请求是否带上cookie,
// });

// //请求拦截
// request.interceptors.request.use(async (url, options) => {
//     console.log(options, "options")
//     console.log(url, "url")
//     const token = getToken();
//     const option = cloneDeep(options);
//     const headers = {
//         'Content-Type': 'application/json;charset=utf-8',
//     };


//     const baseurl = sysConfig[process.env.NODE_ENV].baseUrl + url;
//     if (String(token) !== "undefined") {
//         option.headers.Authorization = token;
//         return (
//             {
//                 url: baseurl,
//                 options: option,
//                 headers: { ...headers }
//             }
//         );
//     }
//     delete option.headers.Authorization
//     return (
//         {
//             url: baseurl,
//             options: option,
//             headers: { ...headers }
//         }
//     );

// })

// //返回拦截
// request.interceptors.response.use(async (response, options) => {
//     if (response.url.indexOf('personnel/exportById') !== -1) {
//         const res = await response.clone().text();
//         // const blob = new Blob([res],{type: 'application/arrayBuffer'});
//         console.log(res);
//     } else {

//         const res = await response.clone().json();
//         // console.log(res);
//         const { code, path, msg, status } = res;
//         // const errortext = codeMessage[code || status ] || message;
//         if (code === 401) {

//             Modal.confirm({
//                 title: '系统提示',
//                 content: '登录状态已过期，您可以继续留在该页面，或者重新登录',
//                 okText: '重新登录',
//                 cancelText: '取消',
//                 onOk: () => {
//                     window.g_app._store.dispatch({
//                         type: 'login/logout',
//                     }).then(() => { window.location.reload() })
//                 }
//             })
//         } else if (code !== 200) {
//             // 待开放
//             // notification.error({
//             //   message: `请求错误 ${code || status }: ${path}`,
//             //   description: errortext,
//             // });
//             // return Promise.reject('error');
//         }
//     }
//     return response;
// });

// export default request;
import { extend } from 'umi-request';
import { notification } from 'antd';

const codeMessage = {
    200: '服务器成功返回请求的数据。',
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
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

/** 异常处理程序 */
const errorHandler = (error) => {
    const { response } = error;
    if (response && response.status) {
        const errorText = codeMessage[response.status] || response.statusText;
        const { status, url } = response;

        notification.error({
            message: `请求错误 ${status}: ${url}`,
            description: errorText,
        });
    } else if (!response) {
        notification.error({
            description: '您的网络发生异常，无法连接服务器',
            message: '网络异常',
        });
    }
    return response;
};

/** 配置request请求时的默认参数 */
const request = extend({
    errorHandler, // 默认错误处理
    credentials: 'include', // 默认请求是否带上cookie
});
// request请求拦截器, 改变url 或 options
request.interceptors.request.use((url, options) => {
    return {
        url: `${url}`,
        options: { ...options },
    };
});
// request响应拦截器, 统一处理错误信息
request.interceptors.response.use(async (response, options) => {
    const data = await response.clone().json();
    if (data.code !== 200) {
        // 界面报错处理
    }

    return response;
});
export default request;