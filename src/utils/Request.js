import axios from 'axios'
import store from '../store'
import {getToken} from '../utils/TokenUtil'
import {errorMessage} from "./Message";

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 360000,
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  if (store.getters.token) {
    config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  let data = response.data;
  if (data.code === 0) return response.data;
  if (data.code !== 0) errorMessage(data.message);
}, function (error) {
  // 对响应错误做点什么
  if (error.message)
    errorMessage(error.message);
  return Promise.reject(error);
});

export default service
