const ncloud = require('../src/index');
const config = require('../src/ncloud');

const accessKey = config.prototype.readConfigureFile().ncloud_access_key_id;
const secretKey = config.prototype.readConfigureFile().ncloud_secret_access_key;

console.log(accessKey);
console.log(secretKey);

module.exports = {
    getZoneList: () => {
        return ncloud({
            apigw: 'ncloud',
            method: 'GET',
            action: 'getZoneList',
            basePath: '/server/v2/',
        }).then(response => response.data)
            .catch(error => error.response.data);
    },
    getServerInstanceList: () => {
        return ncloud({
            apigw: 'ncloud',
            method: 'GET',
            action: 'getServerInstanceList',
            basePath: '/server/v2/',
            actionParams : {}
        }).then(response => response.data)
            .catch(error => error.response.data);
    }
};

this.getZoneList;
