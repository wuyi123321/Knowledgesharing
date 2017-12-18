<style scoped>
  .demo-infinite-container{
    width: 100%;
    height: 300px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
  }
</style>
<template>

  <div>
    <mu-appbar title="学习资料" style="text-align: center">
      <mu-icon-button icon="navigate_before" slot="left" @click="back"/>
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="添加设备"/>
        <mu-menu-item title="查询设备"/>
        <mu-menu-item title="扫一扫"/>
      </mu-icon-menu>
    </mu-appbar>

  </div>
</template>
<script>
  export default {
    data () {

      return {

      }
    },
    mounted () {

    },
    methods: {
      back:function () {
        this.$router.go(-1)
      },

    }

  }
</script>
