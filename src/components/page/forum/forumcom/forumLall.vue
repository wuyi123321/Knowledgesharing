<style scoped>
  .forumItem{
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 10px;
    padding-bottom: 5px;
    font-size: 0.25rem;
  }

  .forumItem .title{
     height: 30px;
     display: flex;
     align-items: center;
   }
  .forumItem .content{
    padding-top: 5px;
    padding-bottom: 10px;
  }
   .forumItem .title span{
     padding-left: 15px;
   }
  .forumItem .bottom span{
    color: #888;
    padding-right: 10px;
  }
</style>
<template>
  <div class="main">
    <div @click="toforumItem('IATF 16949：2016标准培训课件')">
        <div class="forumItem">
           <div class="title">
             <mu-avatar slot="left" icon="assignment_ind" backgroundColor="#ddd" :size="30"/>
             <span>张珊珊</span>
             <span style="color: #888">2017-12-25 15:40</span>
           </div>
          <div class="content">
            <span class="artitle" style="color: #009688;padding-right: 10px">IATF 16949：2016标准培训课件</span>
            当春夏秋冬不再变换
            当花草树木全部凋残
            我还是不能和你分散
            不能和你分散
            你的笑容是我今生最大的眷恋
            让我们红尘作伴活得潇潇洒洒
            策马奔腾共享人世繁华
            对酒当歌唱出心中喜悦
            轰轰烈烈把握青春年华...<span style="color: #0000ff">详情>></span>
          </div>
          <div class="bottom">
            <span>阅读100</span><span>回复8</span><span>收藏50</span>
          </div>
        </div>
        <mu-divider/>
    </div>
    <div>
        <div class="forumItem">
          <div class="title">
            <mu-avatar slot="left" icon="assignment_ind" backgroundColor="#ddd" :size="30"/>
            <span>张珊珊</span>
            <span style="color: #888">2017-12-25 15:40</span>
          </div>
          <div class="content">
            <span class="artitle" style="color: #009688;padding-right: 10px">好歌推荐</span>
            徘徊过多少橱窗,住过多少旅馆
            才会觉得分离也并不冤枉
            感情是用来浏览还是用来珍藏
            好让日子天天都过的难忘…<span style="color: #0000ff">详情>></span>
          </div>
          <div class="bottom">
            <span>阅读100</span><span>回复8</span><span>收藏50</span>
          </div>
        </div>
        <mu-divider/>
    </div>
    <div>
      <div class="forumItem">
        <div class="title">
          <mu-avatar slot="left" icon="assignment_ind" backgroundColor="#ddd" :size="30"/>
          <span>张珊珊</span>
          <span style="color: #888">2017-12-25 15:40</span>
        </div>
        <div class="content">
          <span class="artitle" style="color: #009688;padding-right: 10px">IATF 16949：2016标准培训课件</span>
          当春夏秋冬不再变换
          当花草树木全部凋残
          我还是不能和你分散
          不能和你分散
          你的笑容是我今生最大的眷恋
          让我们红尘作伴活得潇潇洒洒
          策马奔腾共享人世繁华
          对酒当歌唱出心中喜悦
          轰轰烈烈把握青春年华...<span style="color: #0000ff">详情>></span>
        </div>
        <div class="bottom">
          <span>阅读100</span><span>回复8</span><span>收藏50</span>
        </div>
      </div>
      <mu-divider/>
    </div>
    <div>
      <div class="forumItem">
        <div class="title">
          <mu-avatar slot="left" icon="assignment_ind" backgroundColor="#ddd" :size="30"/>
          <span>张珊珊</span>
          <span style="color: #888">2017-12-25 15:40</span>
        </div>
        <div class="content">
          <span class="artitle" style="color: #009688;padding-right: 10px">好歌推荐</span>
          徘徊过多少橱窗,住过多少旅馆
          才会觉得分离也并不冤枉
          感情是用来浏览还是用来珍藏
          好让日子天天都过的难忘…<span style="color: #0000ff">详情>></span>
        </div>
        <div class="bottom">
          <span>阅读100</span><span>回复8</span><span>收藏50</span>
        </div>
      </div>
      <mu-divider/>
    </div>
    <div>
      <div class="forumItem">
        <div class="title">
          <mu-avatar slot="left" icon="assignment_ind" backgroundColor="#ddd" :size="30"/>
          <span>张珊珊</span>
          <span style="color: #888">2017-12-25 15:40</span>
        </div>
        <div class="content">
          <span class="artitle" style="color: #009688;padding-right: 10px">IATF 16949：2016标准培训课件</span>
          当春夏秋冬不再变换
          当花草树木全部凋残
          我还是不能和你分散
          不能和你分散
          你的笑容是我今生最大的眷恋
          让我们红尘作伴活得潇潇洒洒
          策马奔腾共享人世繁华
          对酒当歌唱出心中喜悦
          轰轰烈烈把握青春年华...<span style="color: #0000ff">详情>></span>
        </div>
        <div class="bottom">
          <span>阅读100</span><span>回复8</span><span>收藏50</span>
        </div>
      </div>
      <mu-divider/>
    </div>
    <div>
      <div class="forumItem">
        <div class="title">
          <mu-avatar slot="left" icon="assignment_ind" backgroundColor="#ddd" :size="30"/>
          <span>张珊珊</span>
          <span style="color: #888">2017-12-25 15:40</span>
        </div>
        <div class="content">
          <span class="artitle" style="color: #009688;padding-right: 10px">好歌推荐</span>
          徘徊过多少橱窗,住过多少旅馆
          才会觉得分离也并不冤枉
          感情是用来浏览还是用来珍藏
          好让日子天天都过的难忘…<span style="color: #0000ff">详情>></span>
        </div>
        <div class="bottom">
          <span>阅读100</span><span>回复8</span><span>收藏50</span>
        </div>
      </div>
      <mu-divider/>
    </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {

      }
    },
    mounted:function () {

    },
    methods: {
      toforumItem:function (title) {
        this.$router.push({ path: "forumItem",query: {title:title} });
      }
    }
  }
</script>
