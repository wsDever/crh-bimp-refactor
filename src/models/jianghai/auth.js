import Auth from '../common/auth';
import { action, observable, runInAction } from 'mobx';
import { XHR } from '@lib/xhr';
import Config from '@config';
import Utils from '@lib/utils';

class AuthModel extends Auth {

  /**
   * 注册前 获取签约流程协议
   * agreement_no	String	协议编号
      agreement_version	String	协议版本号
   */
  async agreement() {
    const { agreement_no, agreement_version } = await Config.client();
    const { data } = await XHR.post('/snp/CRH-SNP3055', {
      agreement_no,
      agreement_version
    });
    return data.data;
  }

  /**
   * 签署签约流程
   * econtract_no	String[]	 电子合同编号
    econtract_name	String[]	 电子合同名称
    econtract_md5	String[]	 电子合同MD5值
    sign_value	String[]	 签名内容
    digest_info	String[]	 摘要信息
   */
  async signAgreement() {
    try {
      await XHR.post('/snp/CRH-SNP3056', {
        econtract_no: 1,
        econtract_name: '江海经济圈用户注册协议',
        econtract_md5: '199af248bf32473f92630bca7d937289',
        sign_value: 123,
        digest_info: 123
      });
      return true;
    }
    catch(e) {
      return false;
    }
  }

  
  /**
   * 准经纪人注册
   * share_code	String	邀请人邀请编号
     mac_address	String	mac地址
   */
  @action
  async brokerRegister(params) {
    if (params.share_code.length === 0) {
      Utils.nb.toast('请输入邀请码');
      return false;
    }
    try {
      const { data } = await XHR.post('/snp/CRH-SNP2053', params);
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * 校验验证码
   * mobile_tel	String	手机号码
    sms_code	String	短信验证码
    bind_mac	String	MAC地址
    source_info 可选	String	来源 默认值: jjb
   */
  @action
  async checkVerifyCode(params) {
    if (params.sms_code.length === 0) {
      Utils.nb.toast('请输入验证码');
      return false;
    }
    if (!(await this.validMobile(params.mobile_tel))) return false;
    try {
      const { data } = await XHR.post('/snp/CRH-SNP2048', params);
      // 获取到的token写入，得到设置密码的权限
      runInAction(() => {
        Object.keys(data).map(key => {
          if (!~['error_no', 'error_info'].indexOf(key)) {
            this.userLoginRes.set(key, data[key]);
          }
          // token 加入 session
          if (key === 'token') {
            sessionStorage.setItem(Config.tokenSessName, data.token);
          }
        });
      });
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default new AuthModel();
