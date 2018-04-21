const common = require('./common.js');
import '../css/common.css';
import '../css/index/index.scss';
// const $ = require('jquery');
import '../lib/swiper.min.css';
import Swiper from '../lib/swiper-4.2.2.min.js';
// import Swiper from  'swiper' //是可以用 但是打包的时候会报错 原因是webpack.config.base.js里exclude: /node_modules/,改为exclude:/^node_modules*swiper&/意为：不处理除了swiper以外的所有文件
console.log('this is index.js');
console.log(common.reverse('abcdefghijklmnopqrstuvwxyz'));
let i=0;
let timer = setInterval(()=>{
  console.log(i);
  if(i==5){
    clearInterval(timer);
  }else{
    let a = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let c = Math.floor(Math.random()*255);
    $('.pp1').css({color:'rgb('+a+','+b+','+c+')'});
    i++;
  }
},1000);

$(document).ready(function(){
  let mySwiper = new Swiper ('.swiper-container', {
    initialSlide :2,
    effect:'cube',
    loop: true,
    autoplay : 2000,
    pagination: '.swiper-pagination',
    paginationType : 'progress',
    autoplayDisableOnInteraction : false, //手动滑动后继续自动播放
    paginationClickable: true,//点击导航切换 
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
  });	
});
