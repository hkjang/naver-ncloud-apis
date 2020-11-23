const ncloud = require('../src/index');

module.exports = {
    getZoneList: () => {
        return ncloud({
            method: 'GET',
            action: 'getZoneList',
            basePath: '/server/v2/',
        }).then(response => response.data)
            .catch(error => error.response.data);
    },
    getServerInstanceList: () => {
        return ncloud({
            method: 'GET',
            action: 'getServerInstanceList',
            basePath: '/server/v2/',
            actionParams : {}
        }).then(response => response.data)
            .catch(error => error.response.data);
    }
};

this.getZoneList;
