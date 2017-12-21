<style scoped>
  .main{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .header{
    height: 56px;
  }
  #scoll{
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
      <mu-appbar title="总裁致辞" style="text-align: center">
        <mu-icon-button icon="navigate_before" slot="left" @click="back"/>
        <mu-icon-menu icon="more_vert" slot="right">
          <mu-menu-item title="添加设备" />
          <mu-menu-item title="查询设备"/>
          <mu-menu-item title="扫一扫"/>
        </mu-icon-menu>
      </mu-appbar>
    </div>
    <div id="scoll">
      <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
      <mu-list>
        <mu-sub-header>对外演讲</mu-sub-header>
        <mu-list-item title="Mike Li">
          <mu-avatar :src="imgP" slot="leftAvatar"/>
          <mu-icon value="get_app" slot="right" @click="download('yuedu.ppt')"/>
        </mu-list-item>
        <mu-list-item title="Maco Mai">
          <mu-avatar :src="imgP" slot="leftAvatar"/>
          <mu-icon value="get_app" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Alex Qin">
          <mu-avatar :src="imgP" slot="leftAvatar"/>
          <mu-icon value="get_app" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Allen Qun">
          <mu-avatar :src="imgP" slot="leftAvatar"/>
          <mu-icon value="get_app" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Myron Liu">
          <mu-avatar :src="imgP" slot="leftAvatar"/>
          <mu-icon value="get_app" slot="right"/>
        </mu-list-item>
      </mu-list>
      <mu-divider/>
      <mu-list>
        <mu-sub-header>内部讲话</mu-sub-header>
        <mu-list-item title="Gaia Zhou">
          <mu-avatar :src="imgP" slot="leftAvatar"/>
          <mu-icon value="get_app" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Miller Wang">
          <mu-avatar :src="imgP" slot="leftAvatar"/>
          <mu-icon value="get_app" slot="right"/>
        </mu-list-item>
      </mu-list>
      <mu-divider/>
      <mu-list>
        <mu-sub-header>管理者思想汇集</mu-sub-header>
        <mu-list-item title="职员转正PPT模板">
          <mu-avatar :src="imgP" slot="leftAvatar"/>
          <mu-icon value="get_app" slot="right"/>
        </mu-list-item>
        <mu-list-item title="启明星转正PPT模板">
          <mu-avatar :src="imgP" slot="leftAvatar"/>
          <mu-icon value="get_app" slot="right"/>
        </mu-list-item>
        <mu-list-item title="职员晋升PPT模板">
          <mu-avatar :src="imgP" slot="leftAvatar"/>
          <mu-icon value="get_app" slot="right"/>
        </mu-list-item>

      </mu-list>
    </div>
  </div>
</template>
<script>
  import w from "@/assets/icon/w.jpg"
  export default {
    data () {
      return {
        imgP:w,
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
      download:function (a) {
        alert(a);
      }
    }
  }
</script>

