<template>
  <div class="login-page">
    <div class="login-panel">
      <div class="login-panel-logo">
        <img src="../../assets/logo.svg" />
      </div>
      <div class="login-panel-line"></div>
      <div class="login-panel-form">
        <div class="tabs">
          <div
            class="tab-item"
            v-for="(item, index) in tabList"
            :key="index"
            @click="currenTab = index"
            :class="{ selected: currenTab === index }"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="tabs-content">
          <component :is="tabList[currenTab].componentName"></component>
        </div>
      </div>
    </div>
    <div class="login-footer">版权所有：通用管理系统</div>
  </div>
</template>

<script setup lang="ts">
const bgColor = 'linear-gradient(0deg, #2196f3, #00bcd4,#00bcd4, #03a9f4)'
const loginPanelWidth = '800px'
const loginPanelHeight = '400px'
import PhoneCodeForm from './components/PhoneCodeForm.vue'
import QcodeForm from './components/QcodeForm.vue'
import AccountForm from './components/AccountForm.vue'
import { ref } from 'vue'
import type { ComponentMap } from './types/login-tabs'
const tabList = ref<ComponentMap[]>([
  { name: '免密登录', componentName: PhoneCodeForm },
  { name: '账号登录', componentName: AccountForm },
  { name: '扫码登录', componentName: QcodeForm }
])
const currenTab = ref(0)
</script>

<style lang="scss" scoped>
.login {
  &-page {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: v-bind(bgColor);
  }
  &-panel {
    display: flex;
    width: v-bind(loginPanelWidth);
    height: v-bind(loginPanelHeight);
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 20px 2px #0005;
    margin: calc((100vh - v-bind(loginPanelHeight)) / 2) auto 0;
    &-logo {
      width: 40%;
      text-align: center;
      img {
        width: 60%;
        margin-top: calc((v-bind(loginPanelHeight) - 166px) / 2);
      }
    }
    &-line {
      width: 1px;
      margin: 0 10px;
      height: v-bind(loginPanelHeight);
      background-color: #f8f8f8;
    }
    &-form {
      flex: 1;
      .tabs {
        height: 45px;
        line-height: 45px;
        text-align: center;
        display: flex;
        margin-top: 25px;
        .tab-item {
          flex: 1;
          cursor: pointer;
          &:hover,
          &.selected {
            color: red;
          }
        }
      }
    }
  }
  &-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
}
</style>
