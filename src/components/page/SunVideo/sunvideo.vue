<style scoped>

</style>
<template>
  <div>
    <mu-appbar title="欣旺达视频" style="text-align: center">
      <mu-icon-button icon="navigate_before" slot="left" @click="back"/>
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="添加设备" />
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
    methods: {
      back:function () {
        this.$router.go(-1)
      },
    }
  }
</script>
