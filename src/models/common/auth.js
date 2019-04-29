/**
 * 通用：登录身份认证相关（token模式）
 */

import { action, observable, runInAction } from 'mobx';
import { XHR } from '@lib/xhr';
import Config from '@config';

/**
 * 身份相关
 */

class AuthModel {
  /**
   * 保存登录后用户的一些必要的信息全局可用
   */
  userLoginRes = observable.map({});

  /**
   * 用户登录
   * account_content	String	
      登录账号
      password	String	
      密码
      encode_type	String	
      加密方式 0表示明文 1表示密文
      image_code_type	String	
      是否需要图片验证码 0表示不需要 1表示需要
      image_code	String	
      图形验证码
   */
  @action
  async login(params) {
    const { data } = await XHR.post('http://jhbackendtest.xpe.com:12271/snp/CRH-SNP2001', {
      // 默认不用验证码
      image_code_type: 0,
      ...params
    });   
    runInAction(() => {
      // 存入登录成功后的用户信息
      Object.keys(data).map(key => {
        if (!~['error_no', 'error_info'].indexOf(key)) {
          this.userLoginRes.set(key, data[key]);
        }
        // token 加入 session
        if (key === 'token') {
          sessionStorage.setItem(Config.tokenSessName, data.token);
        }
      });

      console.log('用户登录成功, 存入数据:', this.userLoginRes.toJSON());
    });
  }
}

export default AuthModel;
