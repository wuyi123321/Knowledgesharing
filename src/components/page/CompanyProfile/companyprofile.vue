<style scoped>
  *{
    margin: 0;
    padding: 0;
  }

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

</style>
<template>
  <transition name="slide">
  <div class="main">
    <header>
        <mu-appbar title="公司简介" style="text-align: center">
          <mu-icon-button icon="navigate_before" slot="left" @click="back"/>
          <mu-icon-menu icon="more_vert" slot="right">
            <mu-menu-item title="添加设备" @click="toggle()"/>
            <mu-menu-item title="查询设备"/>
            <mu-menu-item title="扫一扫"/>
          </mu-icon-menu>
        </mu-appbar>
        <mu-drawer right :docked="background" width="85%" :open="open" @close="toggle()">
          <mu-appbar title="添加台账设备"/>
          <mu-list>
            <mu-list-item title="Menu Item 1"/>
            <mu-list-item title="Menu Item 2"/>
            <mu-list-item title="Menu Item 3"/>
            <mu-list-item @click.native="open = false" title="Close"/>
          </mu-list>
        </mu-drawer>
        <mu-flexbox class="">
          <mu-flexbox-item class="flex-demo">
            设备SN
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo">
            设备名称
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo">
            设备类型
          </mu-flexbox-item>

        </mu-flexbox>
        <mu-divider/>
    </header>
    <div id="ref">
      <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
        <mu-list>
          <template v-for="i in 20">
              <mu-list-item >
                <mu-flexbox class="" >
                  <mu-flexbox-item style="white-space:nowrap;overflow: hidden; text-overflow: ellipsis" >
                    DC119-FFWQ-58586655
                  </mu-flexbox-item>
                  <mu-flexbox-item  style="text-align: center">
                    系统服务器{{i}}
                  </mu-flexbox-item>
                  <mu-flexbox-item style="text-align: center" >
                    服务器
                  </mu-flexbox-item>
                </mu-flexbox>
              </mu-list-item>
              <mu-divider/>
          </template>
        </mu-list>
      <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
    </div>
  </div>
  </transition>
</template>
<script>
  export default {
    data () {
      return {
        background:false,
        open:false,
        refreshing:false,
        trigger: null,
        loading:false,
        scroller:null
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

      loadMore:function () {
        console.log("AAaa");
        this.loading=true
      },
      toggle:function () {
        this.open = !this.open
      }

    }
  }
</script>
