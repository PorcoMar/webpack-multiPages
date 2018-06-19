const $ = require('jquery'); //不用声明也可以，但在lint检查下不声明就会报错
console.log('second.js');
import '../css/second.scss';
$('#sec').animate({'left':'1000px','fontSize':'60px'},2000).animate({'left':'0px','fontSize': '18px'},1000);
// const utils = require('./common'); //这种声明了不使用也会报错
// utils.requestData(utils.brandDetailHost(),'/h5_api/queryByStaffId',{id:utils.getQueryString('customerServiceId')},'post').then((res) => {
//   console.log(res);
//   if(res.code==='0'){
//     $('body').html(JSON.stringify(res.result));
//   }
// });

