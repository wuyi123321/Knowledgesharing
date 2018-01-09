<style scoped>
  #count .mu-item-right{
    width: auto;
  }

  .mu-list{
    padding-bottom: 0;
  }
</style>
<template>

  <div class="main" id="count" v-if="data.dataInfo.listData">
    <div v-for="m in data.dataInfo.listData">
      <mu-list>
      <mu-sub-header style="background-color: #eee">{{m.fdName}}</mu-sub-header>
      <div v-for="i in m.cList" @click="goforumItem(i.fdId,i.fdName)">
        <mu-list-item :title="i.fdName" :describeText="'主题:'+i.fdTopicCount+'   |   回帖数:'+i.fdPostCount">
          <mu-avatar icon="forum" slot="leftAvatar"/>
          <mu-badge :content="'今日:'+m.fdCountTopic" slot="right"/>
        </mu-list-item>
        <mu-divider/>
      </div>
    </mu-list>
    </div>

  </div>
</template>
<script>

  export default {
    props:{
      data:Object
    },
    data () {
      return {

      }
    },
    mounted:function () {
      console.log(this.data);
    },
    methods: {
      goforumItem:function (id,name) {
        this.$router.push({ path: "forumIist",query: {id:id,name:name} });
      }
    }
  }
</script>
