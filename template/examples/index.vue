<template>
  <div class="demo_wrap markdown-body">
    <h1>说明</h1>
    <p>demo文件内容存放于examples目录。<br>
    demo导航配置存放于examples/config.js</p>
    <h1>基本用法</h1>
    <pre>
<code>var dme = require('dme')
console.log(dme()) // {{ content }}
</code>
    </pre>
    <p>{{ content }}</p>
  </div>
</template>

<script>
  import dme from '../src'
  export default {
    data () {
      return {
        content: dme()
      }
    },
    methods: {
    }
  }
</script>

<style lang="less">
  .demo_wrap {
    pre {
      code {
        display: inline-block;
      }
    }
  }
  .code_container {
    width: 100%;
    padding: 10px;
    line-height: 1.6;
    overflow: hidden;
  }
</style>