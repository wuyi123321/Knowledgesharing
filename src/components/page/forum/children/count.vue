<style scoped>
  #count .mu-item-right{
    width: auto;
  }

  .mu-list{
    padding-bottom: 0;
  }
</style>
<template>
  <div class="main" id="count">
    <mu-list>
      <mu-sub-header style="background-color: #eee">文化生活</mu-sub-header>
      <div v-for="i in 3" @click="goforumItem('文化生活')">
        <mu-list-item title="文化生活" describeText="主题:1    |   回帖数:8">
          <mu-avatar icon="forum" slot="leftAvatar"/>
          <mu-badge content="今日:8" slot="right"/>
        </mu-list-item>
        <mu-divider/>
      </div>
    </mu-list>
    <mu-list>
      <mu-sub-header style="background-color: #eee">体系流程建设与优化</mu-sub-header>
      <div v-for="i in 3" @click="goforumItem('动力电池模块')">
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

  export default {
    data () {
      return {

      }
    },
    mounted:function () {

    },
    methods: {
      goforumItem:function (title) {
        this.$router.push({ path: "forumIist",query: {title:title} });
      }
    }
  }
</script>
