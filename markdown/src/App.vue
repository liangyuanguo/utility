<script setup lang="ts">
import {onMounted, ref} from 'vue'
import axios from 'axios'
const text = ref(`
# Hello World
sdfsdf
\`\`\`js
cosnt a = 8;
\`\`\`
# Hello World
sdfsdf
\`\`\`js
cosnt a = 8;
\`\`\`
# Hello World
sdfsdf
\`\`\`js
cosnt a = 8;
\`\`\`
# Hello World
sdfsdf
\`\`\`js
cosnt a = 8;
\`\`\`
# Hello World
sdfsdf
\`\`\`js
cosnt a = 8;
\`\`\`
# Hello World
sdfsdf
\`\`\`js
cosnt a = 8;
\`\`\`
# Hello World
sdfsdf
\`\`\`js
cosnt a = 8;
\`\`\`
# Hello World
sdfsdf
\`\`\`js
cosnt a = 8;
\`\`\`
# Hello World
sdfsdf
\`\`\`js
cosnt a = 8;
\`\`\`
`)


onMounted(()=>{
  const urlParam = new URLSearchParams(window.location.search).get('url');
  const title = new URLSearchParams(window.location.search).get('title');

  if (urlParam) {
    // 使用axios获取数据
    axios.get(urlParam)
        .then(response => {
          // 处理响应数据
          text.value = response.data
        })
        .catch(error => {
          // 处理错误情况
          console.error('There was an error!', error);
        });
  }

  if(title){
    document.title = title;
  }
})

</script>

<template>
  <v-md-preview :style="{width: '100%', height: '100%'}" :text="text" :source="text"></v-md-preview>
  <!--  works-->
  <!--  <v-md-preview-html :html="html" preview-class="vuepress-markdown-body"></v-md-preview-html>-->
</template>