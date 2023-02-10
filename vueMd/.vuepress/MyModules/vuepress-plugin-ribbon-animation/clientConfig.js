import Ribbon from "./bin/Ribbon.vue";
import { defineClientConfig } from '@vuepress/client'
import { h,render,onMounted} from 'vue'
export default defineClientConfig({
  enhance({ app, router, siteData }){
    app.component(Ribbon.name, Ribbon);
  },
  setup(){
    onMounted(() => {
        const app = document.querySelectorAll('#app')
        render(h(Ribbon),app[0])
      })
  },
  layouts: {},
  rootComponents: [],
})



