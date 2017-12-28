<style scoped>
 .main{
   display: flex;
   flex-direction: column;
 }
  .header{
    height: 56px;
  }
  .conter{
    width: 100%;
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
    user-select: none;

  }
</style>
<template>
  <div class="main">
    <div class="header">

    <mu-appbar :title="title" style="text-align: center">
      <mu-icon-button icon="navigate_before" slot="left" @click="back"/>
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="全部" />
        <mu-menu-item title="精华" />
      </mu-icon-menu>
    </mu-appbar>
    </div>
    <div class="conter" id="scoll">
      <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
      <div class="forumItem">
          <div class="title"></div>
        <p><span style="color: rgb(52, 73, 94); font-family: &quot;Source Sans Pro&quot;,
&quot;
Helvetica Neue&quot;
, Arial, sans-serif; font-size: 15px;
 font-style: normal;
  font-variant-ligatures: normal; font-variant-caps: normal;
  font-weight: 400; letter-spacing: normal; orphans: 2;
  text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0.75px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);
   text-decoration-style: initial; text-decoration-color: initial; display: inline !important;
    float: none;">Vue (读音 /vju?/，类似于<span>&nbsp;</span></span>
          <strong style="font-weight: 600; color: rgb(44, 62, 80);
          font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial,
           sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal;
            font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start;
             text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
             word-spacing: 0.75px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);
              text-decoration-style: initial; text-decoration-color: initial;">view</strong>
          <span style="color: rgb(52, 73, 94); font-family: &quot;Source Sans Pro&quot;,
&quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 15px; font-style: normal;
 font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal;
 orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2;
  word-spacing: 0.75px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);
  text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">) 是一套用于构建用户界面的</span>
          <strong style="font-weight: 600; color: rgb(44, 62, 80); font-family: &quot;Source Sans Pro&quot;
          , &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal;
          font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none;
           white-space: normal; widows: 2; word-spacing: 0.75px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);
            text-decoration-style: initial; text-decoration-color: initial;">渐进式框架</strong><span style="color: rgb(52, 73, 94); font-family: &quot;
            Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 15px; font-style: normal;
            font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2;
            text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0.75px;
             -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial;
             text-decoration-color: initial; display: inline !important; float: none;">。
            与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与</span>
          <a href="https://cn.vuejs.org/v2/guide/single-file-components.html" style="text-decoration: none; color: rgb(66, 185, 131); font-weight: 600;
          font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 15px; font-style: normal;
          font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start;
           text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0.75px; -webkit-text-stroke-width: 0px;
            background-color: rgb(255, 255, 255);">现代化的工具链</a><span style="color: rgb(52, 73, 94); font-family:
              &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 15px; font-style: normal;
               font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2;
               text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0.75px; -webkit-text-stroke-width: 0px;
               background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">
                  以及各种</span><a href="https://github.com/vuejs/awesome-vue#libraries--plugins" rel="noopener"
                                        style="text-decoration: none; color: rgb(66, 185, 131); font-weight: 600; font-family: &quot;Source Sans Pro&quot;,
                                    &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal;
                                     letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0.75px;
                                      -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255);" target="_blank">支持类库</a><span style="color: rgb(52, 73, 94);
                                      font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 15px;
                                      font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2;
                                       text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0.75px; -webkit-text-stroke-width: 0px;
                                        background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">
                                                 结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</span>

          <img src="http://ekp.sunwoda.com/ekp/resource/fckeditor/editor/filemanager/download?fdId=16095864ead99bef3656a8648258a214&amp;picthumb=big" />
          <span style="color: rgb(52, 73, 94); font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif;
           font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal;
           orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0.75px;
            -webkit-text-stroke-width: 0px; background-color: rgb(248, 248, 248); text-decoration-style: initial;
            text-decoration-color: initial; display: inline !important; float: none;">
            官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意&mdash;&mdash;
            掌握好基础知识再来吧！之前有其它框架的使用经验会有帮助，但这不是必需的。</span></p>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data () {

      return {
        title:"文化活动",
        refreshing:false,
        trigger: null,
      }
    },
    mounted:function () {
      this.title = this.$route.query.title;
      this.trigger = document.getElementById("scoll");
      $(".conter p").removeAttr("style")
      $(".conter span").removeAttr("style")
      $(".conter img").attr("style","width:30vw;height:30vw;display:block;")
    },
    methods: {
      refresh:function () {
        console.log("bbb");
        this.refreshing=true
      },
      back:function () {
        this.$router.go(-1)
      },
    }
  }
</script>
