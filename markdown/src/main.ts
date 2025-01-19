// markdown
import {VMdPreviewHtml, VMdPreview} from './markdown.ts'

// custom
import App from './App.vue'
import {createApp} from "vue";
const app = createApp(App)

app.use(VMdPreviewHtml)
app.use(VMdPreview)

app.mount('#app')

