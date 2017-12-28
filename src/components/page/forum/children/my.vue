<style scoped>
 .header{
   height: 35vh;
   display: flex;
  flex-direction: column;
   justify-content: center;
   align-items: center;
   /*background-color: #fefeee;*/
 }
 .header_me{
   width: 100%;
   display: flex;
   padding-left: 5%;
   padding-right: 5%;
 }
 .header_me div{
   margin-top: 15px;
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 .header_me div span:first-child{
   color: #757575;
 }

 .header_me div span:last-child{

   color:#0066aa;
 }
</style>
<template>
  <div class="main">
    <div class="header">
        <div style="height: 30px;width: 100%"></div>
        <mu-avatar slot="left" icon="assignment_ind" backgroundColor="#ddd" :size="80" :iconSize="40"/>
      <div style="height: 30px;width: 100%;text-align: center;font-size: 0.3rem;line-height: 30px">李思思</div>
        <div class="header_me">
          <div><span>发帖数</span><span>5</span></div>
          <div><span>回帖数</span><span>5</span></div>
          <div><span>积分</span><span>5</span></div>
        </div>
    </div>
    <div>
      <mu-list>
        <mu-list-item title="我的发帖">
          <mu-icon value="star" slot="left" color="yellew"/>
          <mu-icon value="keyboard_arrow_right" slot="right"/>
        </mu-list-item>
        <mu-divider/>
        <mu-list-item title="我的评论">
          <mu-icon value="star" slot="left" color="yellew"/>
          <mu-icon value="keyboard_arrow_right" slot="right"/>
        </mu-list-item>
        <mu-divider/>
        <mu-list-item title="设置">
          <mu-icon value="star" slot="left" color="yellew"/>
          <mu-icon value="keyboard_arrow_right" slot="right"/>
        </mu-list-item>
        <mu-divider/>
      </mu-list>
    </div>
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
