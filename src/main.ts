import { createApp } from 'vue'


import '@/style/reset.scss'

//  根组件
import App from '@/App.vue'

// 全局组件
import HospitalTop from '@/components/Hospital_top/index.vue'
import HospitalButtom from '@/components/hospital_buttom/index.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.component('HospitalTop', HospitalTop)
app.component('HospitalButtom', HospitalButtom)

app.use(router)
app.use(ElementPlus)

app.mount('#app')
