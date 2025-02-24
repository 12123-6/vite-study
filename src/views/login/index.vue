<template>
  <div class="login_container">
    <el-row class="h-full flex items-center justify-center">
      <el-col
        :span="12"
        :xs="0"
        class="hidden md:block"
      ></el-col>
      <el-col
        :span="12"
        :xs="24"
        class="flex justify-center items-center px-4 md:px-0"
      >
        <el-form class="login_form w-[90%] max-w-[460px]">

          <div class="hello">账号密码登录</div>
          <el-form-item>
            <el-input
              v-model="loginForm.username"
              :prefix-icon="User"
              placeholder="学号/工号"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginForm.password"
              type="password"
              show-password
              placeholder="密码"
              :prefix-icon="Lock"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
import { User, Lock } from "@element-plus/icons-vue";
import { reactive } from "vue";

//收集账号与密码的数据
let loginForm = reactive({ username: "", password: "" });
//登录按钮回调
const login = () => {
  //点击登录按钮以后要干什么？
  //通知仓库发登录请求
  //请求成功-首页展示的地方
  //请求失败-弹出登陆失败信息
};
</script>

<style scoped>
@import "tailwindcss";
.login_container {
  width: 100%;
  height: 100vh;
  background-color: black;
  background-size: cover;
}
</style>

<style lang="scss">
.brand {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}
.login_form {
  background-color: #fff;
  background-size: cover;
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px auto;
  width: 100%;
  max-width: 460px;

  @media screen and (max-width: 768px) {
    padding: 16px;
    margin: 8px;
  }
}

.hello {
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  color: #83838b;
  margin-bottom: 24px;
}

.login_btn {
  width: 100%;
  height: 40px;
  font-size: 16px;
}

.el-input {
  --el-input-height: 40px;
}

.el-form-item {
  margin-bottom: 24px;
}
</style>
