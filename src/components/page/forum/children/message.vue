<style scoped>
  .main{
    /*height: 100%;*/
  }
  .mu-infinite-scroll{
    padding-bottom: 0;
  }
  #itemScoll{

    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
    user-select: none;
  }
</style>
<template>
  <div class="main" id="itemScoll">
    <div v-if="listForum.length == 0" style="height: 40px;border-bottom: solid 1px #eee;text-align: center;line-height: 40px">
      暂时无精华帖
    </div>
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>

    <forum-lall :listForum="listForum" >
    </forum-lall>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>
<script>
  import forumLall from "@/components/page/forum/forumcom/forumLall"
  export default {
    data () {
      return {
        listForum:[],
        loading: false,
        scroller: null,
        refreshing: false,
        trigger: null,
        totalPage:0,
        startPage:1,
      }
    },
    mounted:function () {
      this.startPage=1;
      this.refreshing = true;
      this.getdata(this.startPage);
    },
    methods: {
      refresh () {
        this.refreshing = true;
        this.listForum = [];
        this.startPage=1;
        this.getdata(1);
      },
      loadMore () {
        console.log("aaaa");
        this.loading = true;
        if(this.startPage<this.totalPage){
          this.startPage++;
          this.getdata(this.startPage)
        }else {
          this.loading = false;
        }
      },
      getdata:function(page){
        let self = this;
        var url =self.path+ 'findTopicList.json'+'?token='+self.token+"&pageSize=10&page="+page+"&fdPinked=1";
        console.log(url);
        self.$http.get(url
        ).then((response) => {
          console.log(response);
          self.loading = false;
          self.refreshing = false;
          if(response.data.statusCode !=0){
            alert("暂无数据");
            return 0
          }
          self.totalPage = response.data.dataInfo.pageInfo.totalPage;
          self.listForum =  self.listForum.concat(response.data.dataInfo.listData);
          self.scroller = document.getElementById("itemScoll");
          self.trigger = document.getElementById("itemScoll");
        }, (response) => {
          console.log('error');
        });

      }
    },
    components: {
      forumLall
    }
  }
</script>
