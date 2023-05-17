<template>
  <div class="loginContainer">
    <!-- 标题 -->
    <div class="title">
      <span>比赛报名系统（用户端）</span>
    </div>
    <!-- 登录框 -->
    <div class="loginCard">
      <div style="font-size: 24px;line-height: 80px;left: 0;">登录</div>
      <el-form>
        <!-- 账号 -->
        <el-form-item>
          <span>账号</span>
          <el-input type="text" class="input"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <span>密码</span>
          <el-input type="password" class="input"></el-input>
        </el-form-item>
        <!-- 这里放formitem会多出一个格子有问题 -->
        <!-- 我英语不好，类名将就着看吧 -->
        <div class="remmberAndForget">
          <!-- 记住密码 -->
          <el-checkbox>记住密码</el-checkbox>
          <!-- 忘记密码 -->
          <div class="forget">忘记密码</div>
        </div>
        <el-form-item>
          <!-- 登录按钮 -->
          <el-button type="primary" style="width: 330px;">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.loginContainer {
  height: 100%;
  background-image: url("../assets/image/background.png");
  background-position: center center;
  background-repeat: no-repeat;
}

.title {
  text-align: center;
}
.loginCard{
  background-color: #ffffff;
  width: 433px;
  height: 424px;
  border-radius: 10px;
  border: 1px solid #ffffff;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
}
.forget{
  display: inline-block;
  color: #1E98D7;
  cursor:pointer
}
.forget:hover{
  color:rgba(30, 152, 215, 0.804)
}
.remmberAndForget{
  display: flex;
  justify-content: space-between;
}
.input{
  height: 30px;
  width: 100%;
}
/*
                    _ooOoo_
                   o8888888o
                   88" . "88
                   (| -_- |)
                   O\  =  /O
                ____/`---'\____
                 .' \\| |// `.
               / \\||| : |||// \
             / _||||| -:- |||||- \
               | | \\\ - /// | |
             | \_| ''\---/'' | |
              \ .-\__ `-` ___/-. /
           ___`. .' /--.--\ `. . __
          ."" '< `.___\_<|>_/___.' >'"".
         | | : `- \`.;`\ _ /`;./ -  | |
         \ \ `-. \_ __\ /__ _/ .-` / /
   ======`-.____`-.___\_____/___.-`____.-'======
            `=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
              佛祖保佑 永无BUG
              
*/
</style>
