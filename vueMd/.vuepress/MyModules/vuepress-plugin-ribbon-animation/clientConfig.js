import { defineClientConfig } from '@vuepress/client'
import { onMounted} from 'vue'
import './bin/ribbon';
export default defineClientConfig({
  enhance({ app, router, siteData }){
  },
  setup(){
    onMounted(() => {
      new Ribbons();
    })
  },
  layouts: {},
  rootComponents: [],
})



