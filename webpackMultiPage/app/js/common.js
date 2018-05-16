/*
* @Author: Porco_Mar
* @Date:   2018-01-15 10:36:56
 * @Last Modified by:   Porco_Mar
 * @Last Modified time: 2018-04-23 09:19:28
*/
const $ = require('jquery');
console.log('comon.js');
const brandDetailHost = () => {
  var hostUrl = window.location.host;
  if(hostUrl.includes('118.178.243.113') || hostUrl.includes('localhost') || hostUrl.includes('192.168')){
    return 'http://admin.api-test.yizhenjia.com';
    //return 'http://adminapi.yufa.yizhenjia.com/'
  }
  if(hostUrl.includes('yizhenjia.com')){
    return 'http://admin.api.yizhenjia.com';
    //return 'http://adminapi.yufa.yizhenjia.com/'
  }
};
/**
 * [description getQueryString]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
const getQueryString = (name) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'); 
  var r = window.location.search.substr(1).match(reg); 
  if (r != null) return decodeURI(r[2]); return null; 
};
/**
 * [请求数据]
 * @param  {[type]} host   [host]
 * @param  {[type]} path   [接口path]
 * @param  {[type]} parmas [参数]
 * @param  {[type]} type   [post]
 * @return {[type]}        [description]
 */
const requestData = (host,path,parmas,type) => {
  return new Promise ((resolve) => {
    $.ajax({
      type : type,
      url : host + path,
      data : parmas,
      dataType : 'json',
      success : (res) => {
        resolve(res);
      },
      fail : () => {
        resolve('请求失败，请稍后重试');
      },
    });
  });
};

const pictureDomain = (url) => {
  return 'http://appimg.yizhenjia.com/' + url;
};


const reverse =(str)=>{
  return str.split('').reverse().join('');
};
module.exports = {
  reverse:reverse,
  getQueryString:getQueryString,
  requestData:requestData,
  brandDetailHost:brandDetailHost,
  pictureDomain:pictureDomain,
};
