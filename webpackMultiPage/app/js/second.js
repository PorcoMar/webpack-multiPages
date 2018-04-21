console.log('second.js');
// import $ from 'jquery';
const utils = require('./common');

utils.requestData(utils.brandDetailHost(),'/h5_api/queryByStaffId',{id:utils.getQueryString('customerServiceId')},'post').then((res) => {
  console.log(res);
  if(res.code==='0'){
    $('body').html(JSON.stringify(res.result));
  }
});