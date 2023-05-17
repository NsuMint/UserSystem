<template>
  <div class="loginContainer">
    <!-- 标题 -->
    <div class="title">
      <span>比赛报名系统（用户端）</span>
    </div>
    <!-- 登录框 -->
    <div class="loginCard">
      <span>登录</span>
      <el-form>
        <!-- 账号 -->
        <el-form-item>
          <input type="text">
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <input type="password">
        </el-form-item>
        <el-form-item>
          <!-- 记住密码 -->
          <!-- 忘记密码 -->
        </el-form-item>
        <el-form-item>
          <!-- 登录按钮 -->
          <el-button></el-button>
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
  width: 652px;
  height: 99px;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  font-family: "Arial Bold", "Arial Normal", "Arial", sans-serif;
  font-weight: 700;
  color: #333333;
  text-align: center;
  line-height: normal;
}
.loginCard{
  background-color: #ffffff;
  width: 433px;
  height: 424px;
  border-radius: 10px;
  border: 1px solid #ffffff;
}
</style>