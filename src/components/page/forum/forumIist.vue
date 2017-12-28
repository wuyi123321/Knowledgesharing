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
      <div class="forumList">
         <forumLall></forumLall>
      </div>
    </div>
  </div>
</template>
<script>
import forumLall from "@/components/page/forum/forumcom/forumLall"
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
    },
    methods: {
      refresh:function () {
        console.log("bbb");
        this.refreshing=true
      },
      back:function () {
        this.$router.go(-1)
      },
    },
    components: {
      forumLall
    }
  }
</script>
