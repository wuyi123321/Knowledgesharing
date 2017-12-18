<template>
  <div>
    <mu-appbar title="总裁致辞" style="text-align: center">
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
<style scoped>
  .layout{
    background-color: rgb(236, 236, 236);
  }

  .header{
    background-color: #7e57c2;
  }

  .logo{
    font-size: 24px;
    color: white;
    display: inline-block;
    padding: 10px 20px;
  }

  .nav{
    display: inline-block;
    width: calc(100% - 150px);
    margin: 0 auto;
  }

  .tab{
    margin: 0 auto;
    width: 400px;
    background-color: rgba(0, 0, 0, 0);
  }

  .content{
    width: 90%;
    margin: 0 auto;
  }

  .breadcrumb{
    margin: 10px 0;
  }

  .body{
    background-color: white;
    border-radius: 5px;
    min-height: 500px;
  }

  .footer{
    padding: 20px 0;
    text-align: center;
  }
</style>
