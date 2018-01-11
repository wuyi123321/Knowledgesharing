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
      <mu-appbar title="阅读" style="text-align: center">
        <mu-icon-button icon="navigate_before" slot="left" @click="back"/>
      </mu-appbar>
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" title="书单" style="color: #009688"/>
        <mu-tab value="tab2" title="书评" style="color: #009688"/>
      </mu-tabs>
      <mu-divider/>

    </header>
    <div id="ref">
      <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
      <div v-if="activeTab === 'tab1'">
        <div v-for="item in data">
          <mu-list-item  :title="item.fTitle" :describeText="item.fileName" v-if="item.type=='701'" @click="showPdf(item.fileType,item.fileUrl,item.fileName)">
            <mu-avatar :src="imgW" slot="leftAvatar" v-if="item.fileType == 'doc' || item.fileType == 'docx'"/>
            <mu-avatar :src="imgP" slot="leftAvatar" v-if="item.fileType == 'ppt' || item.fileType == 'pptx'"/>
            <mu-avatar :src="imgPdf" slot="leftAvatar" v-if="item.fileType == 'pdf'"/>
            <mu-icon value="get_app" slot="right" @click.stop="download(item.fileUrl+'.'+item.fileType,item.fileName)"/>
          </mu-list-item>
          <mu-divider/>
        </div>
      </div>
      <div v-if="activeTab === 'tab2'">
        <div v-for="item in data">
            <mu-list-item  :title="item.fTitle" :describeText="item.fileName" v-if="item.type=='702'" @click="showPdf(item.fileType,item.fileUrl,item.fileName)">
              <mu-avatar :src="imgW" slot="leftAvatar" v-if="item.fileType == 'doc' || item.fileType == 'docx'"/>
              <mu-avatar :src="imgP" slot="leftAvatar" v-if="item.fileType == 'ppt' || item.fileType == 'pptx'"/>
              <mu-avatar :src="imgPdf" slot="leftAvatar" v-if="item.fileType == 'pdf'"/>
              <mu-icon value="get_app" slot="right" @click.stop="download(item.fileUrl+'.'+item.fileType,item.fileName)"/>
            </mu-list-item>
            <mu-divider/>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import w from "@/assets/icon/w.jpg"
  import p from "@/assets/icon/p.jpg"
  import s from "@/assets/icon/s.jpg"
  import pdf from "@/assets/icon/pdf.png"
  export default {
    data () {
      return {
        imgP:p,
        imgW:w,
        imgS:s,
        imgPdf:pdf,
        refreshing:false,
        trigger: null,
        activeTab: 'tab1',
        data:[]
      }
    },
    mounted:function () {
     this.refreshing=true;
      this.getdata(7);
    },
    methods:{
      back:function () {
        this.$router.go(-1)
      },
      refresh:function () {
        console.log("bbb");
        this.refreshing=true;
        this.getdata(7);
      },
      getdata:function (type) {
        let self = this;
        var url =self.path+ "findKnowledge.json"+'?token='+self.token+"&fileLangType=1&type="+type;
        console.log(url);
        self.$http.get(url
        ).then((response) => {
          console.log(response);
          self.refreshing=false;
          self.trigger = document.getElementById("ref");
          if(response.data.dataInfo){
            self.data = response.data.dataInfo.listData;
          }
          if(response.data.statusCode !=0){
            alert("暂无数据");
            return 0
          }
        }, (response) => {
          console.log('error');
        });
      },
      handleTabChange (val) {
        this.activeTab = val
      },
      showPdf:function (type,path,title) {
        console.log(type);
        var url = 'https://video.sunwoda.com/'+path+'.'+type;
        if(type=='pdf'){
          this.$router.push({ path: "pdfRead",query: {url:url,title:title} });
        }else {
          this.dialog = true;
        }
      },
      download:function (url,name) {
        console.log(url);
        window.location.href = this.path+"downloadFile.json"+"?token="+this.token+"&fFileUrl=http://video.sunwoda.com/"+url+"&fileName="+name
      }

    }
  }
</script>
