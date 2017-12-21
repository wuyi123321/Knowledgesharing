import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/index'
import sunvideo from '@/components/page/SunVideo/sunvideo'
import templet from '@/components/page/Template/templet'
import gallery from '@/components/page/Gallery/gallery'
import companyprofile from '@/components/page/CompanyProfile/companyprofile'
import learnresource from '@/components/page/LearnResource/learnresource'
import presidentspeech from '@/components/page/presidentSpeech/presidentspeech'
import processmanagement from '@/components/page/ProcessManagement/processmanagement'
import pdfRead from '@/components/common/pdfRead'
import videoPlay from '@/components/common/videoPlay'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',

    },
    {path: '/index', component: index,},
    { path: '/CompanyProfile',component:companyprofile},
    { path: '/Templet',component:templet},
    { path: '/SunVideo',component: sunvideo},
    { path: '/Gallery', component: gallery},
    {path: '/LearnResource',component: learnresource},
    {path: '/PresidentSpeech',component: presidentspeech},
    {path: '/ProcessManagement',component: processmanagement},
    {path: '/videoPlay',component: videoPlay},
    {path: '/pdfRead',component: pdfRead}
  ]
})
