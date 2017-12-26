<style scoped>
  .mu-item-right{
    width: auto;
  }

  .mu-list{
    padding-bottom: 0;
  }
</style>
<template>
  <div class="main">
    <mu-list>
      <mu-sub-header style="background-color: #eee">文化生活</mu-sub-header>
      <div v-for="i in 3">
        <mu-list-item title="文化生活" describeText="主题:1    |   回帖数:8">
          <mu-avatar icon="forum" slot="leftAvatar"/>
          <mu-badge content="今日:8" slot="right"/>
        </mu-list-item>
        <mu-divider/>
      </div>
    </mu-list>
    <mu-list>
      <mu-sub-header style="background-color: #eee">体系流程建设与优化</mu-sub-header>
      <div v-for="i in 3">
      <mu-list-item title="动力电池模块" describeText="主题:1    |   回帖数:8" >
        <mu-avatar icon="forum" slot="leftAvatar"/>
        <mu-badge content="今日:12" slot="right"/>
      </mu-list-item>
      <mu-divider/>
      </div>
    </mu-list>

  </div>
</template>
<script>
  import img1 from "@/assets/vido.jpg"
  import img2 from "@/assets/vido2.jpg"
  export default {
    data () {
      return {

      }
    },

    mounted:function () {

    },
    methods: {

    }
  }
</script>
