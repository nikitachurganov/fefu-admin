import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import './style.css'
import './icons'
import { Icon } from './icons'
import App from './App.vue'

const app = createApp(App)
app.use(Antd)
app.component('Icon', Icon)
app.mount('#app')
