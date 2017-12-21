<style scoped>
  .main{
    display: flex;
    flex-direction: column;
  }
  .header{
    height: 56px;
  }
  .conter{
    width: 100%;
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
    user-select: none;
  }
  .gridlist-demo-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .gridlist-demo{
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
</style>

<template>
  <div class="main">
    <div class="header">
    <mu-appbar title="图片展示" style="text-align: center">
      <mu-icon-button icon="navigate_before" slot="left" @click="back"/>
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="添加设备"/>
        <mu-menu-item title="查询设备"/>
        <mu-menu-item title="扫一扫"/>
      </mu-icon-menu>
    </mu-appbar>
    </div>

    <div class="conter" id="scoll">
      <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <div class="gridlist-demo-container">
      <mu-grid-list class="gridlist-demo">
        <mu-sub-header>电池图片</mu-sub-header>

        <mu-grid-tile v-for="tile, index in list" :key="index"  >
          <img :src="tile.image" @click="showBig(tile.image)"/>
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
      </mu-grid-list>
      <mu-grid-list class="gridlist-demo">
        <mu-sub-header>汽车</mu-sub-header>
        <mu-grid-tile v-for="tile, index in list" :key="index" >
          <img :src="tile.image"/>
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
      </mu-grid-list>
    </div>
  </div>

    <bigImg v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></bigImg>
  </div>
</template>
<script>
  import img1 from "@/assets/gallery/1.jpg"
  import img2 from "@/assets/gallery/2.jpg"
  import img4 from "@/assets/gallery/4.jpg"
  import img5 from "@/assets/gallery/5.jpg"
  import img6 from "@/assets/gallery/6.jpg"
  import img7 from "@/assets/gallery/7.jpg"
  import img8 from "@/assets/gallery/8.jpg"
  import bigImg from '@/components/common/bigImg.vue';
  export default {
    data () {
      return {
        list: [
          {
          image: img1,
          title: 'Breakfast',
          author: 'Myron'
        }, {
          image: img2,
          title: 'Burger',
          author: 'Linyu'
        }, {
          image: img4,
          title: 'Hats',
          author: 'kakali'
        },
          {
            image: img5,
            title: 'Breakfast',
            author: 'Myron'
          }, {
            image: img6,
            title: 'Burger',
            author: 'Linyu'
          }, {
            image: img7,
            title: 'Camera',
            author: 'ruolin'
          }, {
            image: img8,
            title: 'Hats',
            author: 'kakali'
          }
          ],
        refreshing:false,
        trigger:null,
        imgSrc:"",
        showImg:false
      }
    },
    mounted:function () {
      this.trigger = document.getElementById("scoll");
    },
    methods: {
      refresh:function () {

        this.refreshing=true
      },
      showBig:function (imgSrc) {
        console.log("aaa");
        this.imgSrc = imgSrc;
        this.showImg = true;
      },
      back:function () {
        this.$router.go(-1)
      },
      viewImg:function () {
        this.showImg = false;
      },
      download:function (a) {
        this.imgSrc = a;
        alert(a);
      }
    },

    components: {
      bigImg
    }
  }
</script>


