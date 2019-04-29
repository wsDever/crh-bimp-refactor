import Auth from '../common/auth';
import { action, observable, runInAction } from 'mobx';
import { XHR } from '@lib/xhr';
import Config from '@config';
import Utils from "@lib/utils";

class AuthModel extends Auth {
  
  /**
   * 校验验证码
   * mobile_tel	String	手机号码
    sms_code	String	短信验证码
    bind_mac	String	MAC地址
    source_info 可选	String	来源 默认值: jjb
   */
  @action
  async checkVerifyCode(params) {
    await XHR.post('/snp/CRH-SNP2048', params);
  }

}

export default new AuthModel();