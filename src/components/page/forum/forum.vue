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

  .footer{
    border-top: solid 1px #eee;
    height: 57px;
  }
 .mu-buttom-item{
   min-width: 30px;
 }
</style>
<template>
  <div class="main">
    <div class="header">
    <mu-appbar title="OA论坛" style="text-align: center">
      <mu-icon-button icon="navigate_before" slot="left" @click="back"/>
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="添加设备" />
        <mu-menu-item title="查询设备"/>
        <mu-menu-item title="扫一扫"/>
      </mu-icon-menu>
    </mu-appbar>
    </div>
    <div class="conter" id="scoll">
      <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
      <router-view></router-view>
    </div>

    <div class="footer">
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item value="forumcount" title="论坛" icon="perm_camera_mic"/>
          <mu-bottom-nav-item value="forumcard" title="帖子" icon="assignment"/>
          <div class="mu-buttom-item" style="display: flex; flex-direction: column;justify-content:center;align-items: center;">
          <mu-icon  value="add" style="padding-right: 8px;padding-left: 8px;padding-top: 3px;padding-bottom: 3px;background-color:#009688;border-radius: 5px;color: #fff"/>
          </div>
            <mu-bottom-nav-item value="forummessage" title="消息" icon="email"/>
          <mu-bottom-nav-item value="myforum" title="我的" icon="perm_identity"/>
        </mu-bottom-nav>

    </div>
  </div>
</template>
<script>
  import img1 from "@/assets/vido.jpg"
  import img2 from "@/assets/vido2.jpg"
  export default {
    data () {
      return {
        img1:img1,
        img2:img2,
        bottomNav: 'forumcount',
        refreshing:false,
        trigger: null,
      }
    },
    mounted:function () {
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
      handleChange (val) {
        this.bottomNav = val
        this.$router.replace({ path: val});
      }
    }
  }
</script>
