<style scoped>
  .main{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .main header{
    height: 104px;
  }
  .flex-demo{
    height: 48px;
    line-height: 48px;
    text-align: center;
    overflow: hidden;
  }
  #ref{
    width: 100%;
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
    user-select: none;
  }
  .mu-tabs{
    background-color: #fff;
  }
  .mu-tab-text{
    color: #009866;
  }

  #aa .mu-tab-link-highlight{
    background-color: #009866;
  }
  #aa .mu-tab-link-highlight{
    background-color: #009866;
  }
</style>
<template>

  <div class="main" id="aa">
    <header>
      <mu-appbar title="流程管理" style="text-align: center">
        <mu-icon-button icon="navigate_before" slot="left" @click="back"/>
        <mu-icon-menu icon="more_vert" slot="right">
          <mu-menu-item title="中文"/>
          <mu-menu-item title="英文"/>
        </mu-icon-menu>
      </mu-appbar>
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" title="新OA" style="color: #009688"/>
        <mu-tab value="tab2" title="旧OA" style="color: #009688"/>
      </mu-tabs>
      <mu-divider/>

    </header>
    <div id="ref">
      <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
      <div v-if="activeTab === 'tab1'">
        <mu-list>
          <mu-sub-header>权限设定</mu-sub-header>
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
          <mu-sub-header>客户受众</mu-sub-header>
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
      </div>
      <div v-if="activeTab === 'tab2'">
        <mu-list>
          <!--<mu-sub-header>政府受众</mu-sub-header>-->
          <mu-list-item title="电池事业一部简介">
            <mu-avatar :src="imgP" slot="leftAvatar"/>
            <mu-icon value="get_app" slot="right" @click="download('yuedu.ppt')"/>
          </mu-list-item>
          <mu-divider/>
          <mu-list-item title="信息中心简介">
            <mu-avatar :src="imgP" slot="leftAvatar"/>
            <mu-icon value="get_app" slot="right"/>
          </mu-list-item>
          <mu-divider/>
          <mu-list-item title="行政安全中心简介">
            <mu-avatar :src="imgP" slot="leftAvatar"/>
            <mu-icon value="get_app" slot="right"/>
          </mu-list-item>
          <mu-divider/>
          <mu-list-item title="东莞锂威简介">
            <mu-avatar :src="imgP" slot="leftAvatar"/>
            <mu-icon value="get_app" slot="right"/>
          </mu-list-item>
          <mu-divider/>
          <mu-list-item title="电池事业二部简介">
            <mu-avatar :src="imgP" slot="leftAvatar"/>
            <mu-icon value="get_app" slot="right"/>
          </mu-list-item>
        </mu-list>
        <mu-divider/>
      </div>
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
        activeTab: 'tab1'
      }
    },
    mounted:function () {
      this.trigger = document.getElementById("ref");
      this.scroller = document.getElementById("ref");
    },
    methods:{
      back:function () {
        this.$router.go(-1)
      },
      refresh:function () {
        console.log("bbb");
        this.refreshing=true
      },
      handleTabChange (val) {
        this.activeTab = val
      },
      download:function (url) {
        console.log(url)
      }

    }
  }
</script>
