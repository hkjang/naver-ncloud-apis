const CryptoJS = require("crypto-js");
const Base64 = require('crypto-js/enc-base64');
const axios = require('axios');
const ncloud = require('./ncloud');

const accessKey = ncloud.prototype.readConfigureFile().ncloud_access_key_id;
const secretKey = ncloud.prototype.readConfigureFile().ncloud_secret_access_key;

let baseURL = 'https://ncloud.apigw.ntruss.com/';
const space = " ";
const newLine = "\n";

// const basePath = '/server/v2/';
// const action = 'getZoneList';
// const basePath = '/sms/v2/services/{serviceId}/';
// const action = 'messages';

module.exports = ({ apigw, method, basePath, action, actionParams={} }) => {
  if(apigw){
    baseURL = 'https://' + apigw + '.apigw.ntruss.com/';
  }else{
    baseURL = 'https://ncloud.apigw.ntruss.com/';
  }
  const timestamp = Date.now();
  const message = [];
  let params = [];

  actionParams = {...actionParams, responseFormatType: 'json'};

  for( let key in actionParams ) {
    params.push(`${key}=${actionParams[key]}`);
  } // end for loop

  const paramsString = params.join('&');
  const url = basePath + action + '?' + paramsString;

  message.push(method);
  message.push(space);
  message.push(url);
  message.push(newLine);
  message.push(timestamp);
  message.push(newLine);
  // message.push(apiKey);
  // message.push(newLine);
  message.push(accessKey);

  const authSignature = Base64.stringify(CryptoJS.HmacSHA256(message.join(''), secretKey));

  return axios.request({
    url,
    baseURL,
    method,
    headers: {
      "Content-Type" : 'application/json; charset=utf-8',
      "x-ncp-apigw-timestamp" : timestamp,
      "x-ncp-iam-access-key" : accessKey,
      "x-ncp-apigw-signature-v2" : authSignature,
    }
  });
};
