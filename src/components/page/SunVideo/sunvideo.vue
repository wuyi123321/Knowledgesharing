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
    height: 56px;
  }
 .vidoItem{
   margin-bottom: 10px;
   width: 100%;
   height: 200px;
   position: relative;
 }
 .vidoItem:last-child{
   margin-bottom: 0;
 }
  .vidoTitle{
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 100%;
    background-color: rgba(0,0,0,0.3);
    color: #ffff;
    line-height: 40px;
    font-size: 0.3rem;


    /*border-top: solid 1px #fff;*/
    border-bottom: solid 1px #888;
    padding-left: 10px;

  }
  .vidoPlay{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    line-height: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
 .vidoTime{
   position: absolute;
   right: 5px;
   bottom: 5px;
   background-color: rgba(0,0,0,0.3);
   color: #fff;
   padding: 3px;
   border-radius: 8px;
 }
</style>
<template>
  <div class="main">
    <div class="header">


    <mu-appbar title="欣旺达视频" style="text-align: center">
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
          <div class="vidoItem"  @click="toPlay">
            <div class="vidoTitle">梅里最后10秒绝杀对手</div>
            <img :src="img1" width="100%" height="100%">
            <div class="vidoPlay">
              <mu-icon value="arrow_right" :size="48"/>
            </div>
            <div class="vidoTime">
              14:20
            </div>
          </div>
          <div class="vidoItem" >
            <div class="vidoTitle">lalalalalalalal</div>
            <img :src="img2" width="100%" height="100%">
            <div class="vidoPlay">
              <mu-icon value="arrow_right" :size="48"/>
            </div>
            <div class="vidoTime">
               14:20
            </div>
          </div>
          <div class="vidoItem" >
            <div class="vidoTitle">梅里最后10秒绝杀对手</div>
            <img :src="img1" width="100%" height="100%">
            <div class="vidoPlay">
              <mu-icon value="arrow_right" :size="48"/>
            </div>
            <div class="vidoTime">
              14:20
            </div>
          </div>
          <div class="vidoItem" >
            <div class="vidoTitle">lalalalalalalal</div>
            <img :src="img2" width="100%" height="100%">
            <div class="vidoPlay">
              <mu-icon value="arrow_right" :size="48"/>
            </div>
            <div class="vidoTime">
              14:20
            </div>
          </div>
    </div>

    <div class="footer">

        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item value="recents" title="宣传类" icon="settings_voice"/>
          <mu-bottom-nav-item value="favorites" title="记录类" icon="theaters"/>
          <mu-bottom-nav-item value="nearby" title="校招类" icon="school"/>
          <mu-bottom-nav-item value="nex" title="团队纪念" icon="group"/>
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
        bottomNav: 'recents',
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

      toPlay:function () {
        this.$router.push({ path: "videoPlay" });
      },
      handleChange (val) {
        this.bottomNav = val
      }
    }
  }
</script>
