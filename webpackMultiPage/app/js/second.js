console.log('second.js');
import '../css/second.scss'
const utils = require('./common');

$('#sec').animate({'left':'1000px','fontSize':'60px'},2000).animate({'left':'0px',"fontSize": "18px"},1000)
// utils.requestData(utils.brandDetailHost(),'/h5_api/queryByStaffId',{id:utils.getQueryString('customerServiceId')},'post').then((res) => {
//   console.log(res);
//   if(res.code==='0'){
//     $('body').html(JSON.stringify(res.result));
//   }
// });