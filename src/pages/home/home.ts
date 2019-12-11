import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  params = {
    usertel: '',
    newPassword: '',
    verifyCode: '',
    surePassword: ''
  }
  codeParam = {
    fromflag: 2,
    usertel: ""
  }
  constructor(public navCtrl: NavController) {

  }
  // 验证码倒计时
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 60,
    disable: true
  }
  // 倒计时
  settime() {
    if (this.verifyCode.countdown == 1) {
      this.verifyCode.countdown = 60;
      this.verifyCode.verifyCodeTips = "获取验证码";
      this.verifyCode.disable = true;
      return;
    } else {
      this.verifyCode.countdown--;
    }

    this.verifyCode.verifyCodeTips = "重新获取(" + this.verifyCode.countdown + ")";
    setTimeout(() => {
      this.verifyCode.verifyCodeTips = "重新获取(" + this.verifyCode.countdown + ")";
      this.settime();
    }, 1000);
  }
  getCode() {
    if (this.codeParam.usertel == '') {
      alert("请填写手机号!");
      return;
    }

    //发送验证码成功后开始倒计时
    this.verifyCode.disable = false;
    this.settime();

  }
  doReset() {
    this.params.usertel = this.codeParam.usertel;
    if (this.params.usertel == "") {
      alert("请输入手机号");
      return;
    }
    if (this.params.verifyCode == "") {
      alert("请输入验证码");
      return;
    }
    if (this.params.newPassword == this.params.surePassword) {
      alert("重置成功");
    } else {
      alert("两次密码输入不一致");
    }
  }

}
