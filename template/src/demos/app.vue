<template>
	<div class="dme">
    <aside class="aside">
      <h1>DME</h1>
      <p class="aside-version">Version: {{ count }}</p>
      <ul class="aside-nav">
        <li><a v-link="{ path: '/' }">DOC</a></li>
        <li><a v-link="{ path: '/demo' }">DEMO</a></li>
        <li><a v-link="{ path: '/history' }">HISTORY</a></li>
        <li><a>TEST</a></li>
      </ul>
      <p>Path: ({{ path }})</p>
      <ul v-if="path.substr(0, 5) === '/demo'">
        <li v-for="item of demos" >
          <a v-link="{ path: item.path }">{{ item.name }}</a>
        </li>
      </ul>
    </aside>
    <section class="section">
      <router-view></router-view>
    </section>
	</div>
</template>

<script>
  import store from '../vuex/store'
  export default {
    store,
    vuex: {
      getters: {
        path: state => state.path,
        demos: state => state.demos
      }
    }
  }
</script>

<style lang="less">
  @import './styles/reset.less';
  .dme {
    position: relative;
    width: 100%;
    height: 100%;
    .aside {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      padding: 40px 3% 20px;
      width: 20%;
      color: #46535d;
      background-color: #fafafa;
      border-right: 1px solid rgba(0,0,0,.07);
      z-index: 1;
    }

    .section {
      position: absolute;
      top: 0;
      left: 20%;
      bottom: 0;
      padding: 4%;
      width: 80%;
      z-index: 1;
    }
  }
  .doc_container {
    width: 100%;
    min-height: 500px;
    padding: 2%;
    margin: 0;
  }
  @media (max-width: 980px) {
    .dme {
      .aside,
      .section {
        float: none;
        position: static;
        width: auto;
      }
    }
  }
</style>