
import Utils from '@lib/utils';
import Axios from 'axios';
import Ebus from '@lib/ebus';
import Config from '@config';

/**
 * 创建API相关的观察者
 */
const APIObserver = new Ebus();

// API请求配置
const XHR = Axios.create({
  withCredentials: false
});

// 全局请求信息配置
XHR.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = Utils.url.serialize(config.data);
    }
    console.log(config);
    config.headers = {
      token: sessionStorage.getItem(Config.tokenSessName) || '',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      // 'Content-Type': 'application/json; charset=UTF-8'
    };
    return config;
  },
  error => {
    APIObserver.emit('request.error', error);
    throw new Error(error);
  }
);

// 全局返回信息配置
XHR.interceptors.response.use(
  response => {

    const data = response.data;

    // 异常处理
    if (data.error_no != 0) {
      APIObserver.emit('response.error', {
        code: data.error_no,
        msg: data.error_info
      });
      throw new Error(data.error_info);
    }
    return response;
  },
  error => {
    throw new Error(error);
  }
);

export { APIObserver, XHR };

