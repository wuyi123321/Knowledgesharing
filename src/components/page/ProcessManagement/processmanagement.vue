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
       <div style="height: 40px;border-bottom: solid 1px #eee;line-height: 40px;text-align: center">暂无数据</div>
      </div>
      <div v-if="activeTab === 'tab2'">
        <div style="height: 40px;line-height: 40px;text-align: center">暂无数据</div>
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
